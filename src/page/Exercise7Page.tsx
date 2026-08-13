import {
  Course,
  CourseGridFlexBasis,
  CourseGridManualWidth,
} from "@/components/exercise/CourseGrid";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const courses: Course[] = [
  {
    id: "1",
    title: "React Native",
  },
  { id: "2", title: "React" },
  { id: "3", title: "JavaScript" },
  { id: "4", title: "TypeScript" },
  { id: "5", title: "NodeJS" },
  { id: "6", title: "ExpressJS" },
  { id: "7", title: "MongoDB" },
];

const Excercise7Page = () => {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <Text style={styles.text}>Dùng flex basis</Text>
        <CourseGridFlexBasis courses={courses} />
        <Text style={styles.text}>Dùng manual width</Text>
        <CourseGridManualWidth courses={courses} />
      </SafeAreaView>
    </View>
  );
};

export default Excercise7Page;

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
