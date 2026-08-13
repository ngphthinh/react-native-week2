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
  TextInputProps,
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

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <Text style={styles.pageTitle}>Test validation copy</Text>

      <Field label="Họ tên" error={errors.name}>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </Field>

      <Field label="Mã sinh viên" error={errors.studentId}>
        <TextInput
          style={styles.input}
          value={studentId}
          onChangeText={setStudentId}
          keyboardType="number-pad"
        />
      </Field>

      <Field label="Email" error={errors.email}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </Field>

      <Field
        label={`Ghi chú (${summary.length}/200 ký tự)`}
        error={errors.summary}>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={summary}
          onChangeText={setSummary}
          multiline
        />
      </Field>

      <Pressable style={styles.submitButton} onPress={runValidation}>
        <Text style={styles.submitText}>Kiểm tra</Text>
      </Pressable>
    </ScrollView>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactElement<TextInputProps>;
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      {React.cloneElement(children, {
        accessibilityLabel: label,
        accessibilityHint: error,
      })}
      {error && (
        <Text style={styles.error} accessibilityLiveRegion="polite">
          {error}
        </Text>
      )}
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
