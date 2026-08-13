// ValidationFormPage.tsx

import {
  validateEmail,
  validateName,
  validateStudentId,
  validateSummary,
} from "@/constants/validation";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function ValidationFormPage() {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    studentId?: string;
    email?: string;
    summary?: string;
  }>({});

  const runValidation = () => {
    const nameResult = validateName(name);
    const idResult = validateStudentId(studentId);
    const emailResult = validateEmail(email);
    const summaryResult = validateSummary(summary);

    setErrors({
      name: nameResult.valid ? undefined : nameResult.message,
      studentId: idResult.valid ? undefined : idResult.message,
      email: emailResult.valid ? undefined : emailResult.message,
      summary: summaryResult.valid ? undefined : summaryResult.message,
    });
  };

  const fillCase = (
    caseName:
      | "spacesOnlyName"
      | "malformedId"
      | "badEmail"
      | "wrongDomain"
      | "overlongSummary",
  ) => {
    switch (caseName) {
      case "spacesOnlyName":
        setName("     ");
        break;
      case "malformedId":
        setStudentId("AB12");
        break;
      case "badEmail":
        setEmail("abc.gmail.com");
        break;
      case "wrongDomain":
        setEmail("abc@gmail.com");
        break;
      case "overlongSummary":
        setSummary("x".repeat(350));
        break;
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <Text style={styles.pageTitle}>Test validation copy</Text>

      <Field label="Họ tên">
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        {errors.name && <Text style={styles.error}>{errors.name}</Text>}
      </Field>

      <Field label="Mã sinh viên">
        <TextInput
          style={styles.input}
          value={studentId}
          onChangeText={setStudentId}
          keyboardType="number-pad"
        />
        {errors.studentId && (
          <Text style={styles.error}>{errors.studentId}</Text>
        )}
      </Field>

      <Field label="Email">
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}
      </Field>

      <Field label={`Ghi chú (${summary.length}/200 ký tự)`}>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={summary}
          onChangeText={setSummary}
          multiline
        />
        {errors.summary && <Text style={styles.error}>{errors.summary}</Text>}
      </Field>

      <Pressable style={styles.submitButton} onPress={runValidation}>
        <Text style={styles.submitText}>Kiểm tra</Text>
      </Pressable>
    </ScrollView>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 16 },
  pageTitle: { fontSize: 20, fontWeight: "700" },
  field: { gap: 4 },
  label: { fontSize: 13, fontWeight: "600", color: "#374151" },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
  },
  error: { fontSize: 12, color: "#dc2626" },
  submitButton: {
    marginTop: 8,
    minHeight: 44,
    borderRadius: 10,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
