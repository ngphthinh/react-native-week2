import AnnouncementSections, {
  Announcement,
} from "@/components/exercise/AnnouncementSections";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const announcements: Announcement[] = [
  {
    id: "1",
    title: "Thông báo 1",
    createdAt: new Date().toISOString(),
  },  {
    id: "66",
    title: "Thông báo 34",
    createdAt: new Date().toISOString(),
  },  {
    id: "64",
    title: "Thông báo 423",
    createdAt: new Date().toISOString(),
  },  {
    id: "65",
    title: "Thông báo 432",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Thông báo 2",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 ngày trước
  },
  {
    id: "3",
    title: "Lịch nghỉ lễ Quốc khánh 02/09",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 ngày trước
  },
  {
    id: "4",
    title: "Mở cổng đăng ký học phần HK1",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 ngày trước
  },
  {
    id: "5",
    title: "Nhắc nhở hoàn tất đóng học phí HK1",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 ngày trước
  },
  {
    id: "6",
    title: "Lịch thi kết thúc học phần đợt 2",
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 ngày trước
  },
  {
    id: "7",
    title: "Ngày hội Việc làm & Tuyển dụng Công nghệ",
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 ngày trước
  },
  {
    id: "8",
    title: "Lịch bảo trì hệ thống cổng thông tin sinh viên",
    createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(), // 12 ngày trước
  },
  {
    id: "9",
    title: "Danh sách xét học bổng Khuyến khích học tập",
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 ngày trước
  },
  {
    id: "10",
    title: "Đăng ký tham gia Chiến dịch Mùa hè xanh",
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(), // 20 ngày trước
  },
  {
    id: "11",
    title: "Thông báo về việc nộp Đồ án tốt nghiệp",
    createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(), // 25 ngày trước
  },
  {
    id: "12",
    title: "Lịch khám sức khỏe định kỳ cho sinh viên",
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 ngày trước
  },
];

export default function Exercise6Page() {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <AnnouncementSections announcements={announcements} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
