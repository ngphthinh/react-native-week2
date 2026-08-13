import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function FixedForm() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
      <ScrollView
        style={{ flex: 1 }} // ← thêm dòng này
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Exercise 8</Text>
        <Text>Họ tên</Text>
        <TextInput style={styles.input} accessibilityLabel="Họ tên" />
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          accessibilityLabel="Email"
        />
        <Text>Mã sinh viên</Text>
        <TextInput style={styles.input} accessibilityLabel="Mã sinh viên" />
        <Text>Ghi chú</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          multiline
          accessibilityLabel="Ghi chú"
        />
        <View style={{ height: 24 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    margin: 40,
    textAlign: "center"
  },
});
