import ValidationFormPage from "@/components/exercise/ValidationFormPage";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Excercise9Page = () => {
  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeArea}>
        <ValidationFormPage />
      </SafeAreaView>
    </View>
  );
};

export default Excercise9Page;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  safeArea: {
    flex: 1,
  },
});
