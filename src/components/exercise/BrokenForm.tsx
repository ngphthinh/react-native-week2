import { StyleSheet, Text, TextInput, View } from "react-native";

export default function BrokenForm() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise 8</Text>
      <Text>Họ tên</Text>
      <TextInput style={styles.input} />
      <Text>Email</Text>
      <TextInput style={styles.input} />
      <Text>Mã sinh viên</Text>
      <TextInput style={styles.input} />
      <Text>Ghi chú</Text>
      <TextInput style={[styles.input, { height: 100 }]} multiline />
      {/* Không có ScrollView, không có KeyboardAvoidingView
          → trên màn hình nhỏ, khi focus "Ghi chú", bàn phím che mất
          field này hoàn toàn */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    margin: 30,
    textAlign: "center",
  },
});
