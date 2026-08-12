import CourseCard, { CourseCardProps } from "@/components/exercise/CourseCard";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const sampleCourses: CourseCardProps[] = [
  {
    title: "Lập trình Web cơ bản",
    localImage: require("@/assets/images/tutorial-web.png"),
    imageRole: "informative",
  },
  {
    title: "React Native nâng cao",
    imageUrl: "https://picsum.photos/id/1015/400/300",
    imageRole: "informative",
  },
  {
    title: "Thiết kế UI/UX",
    imageUrl: "https://this-domain-does-not-exist-12345.abc/broken.jpg",
    imageRole: "informative", // sẽ rơi vào case failed
  },
  {
    title: "Cơ sở dữ liệu",
    imageUrl: "https://picsum.photos/id/1025/400/300",
    imageRole: "decorative", // ảnh chỉ trang trí, screen reader bỏ qua
  },
  {
    title: "Nhập môn AI",
    // không có localImage lẫn imageUrl → case "Không có hình ảnh"
    imageRole: "informative",
  },
];

const Excercise3Page = () => {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <FlatList
          keyExtractor={(item) => item.title}
          data={sampleCourses}
          renderItem={({ item }) => <CourseCard {...item} />}
        />
      </SafeAreaView>
    </View>
  );
};

export default Excercise3Page;

const styles = {
  root: {
    flex: 1,
  },
};
