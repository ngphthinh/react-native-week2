import BrokenForm from "@/components/exercise/BrokenForm";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Excercise8Page = () => {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <BrokenForm />
      </SafeAreaView>
    </View>
  );
};

export default Excercise8Page;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
});
