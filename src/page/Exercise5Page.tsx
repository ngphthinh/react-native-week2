import AnnouncementList, {
  Announcement,
} from "@/components/exercise/AnnouncementList";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const announcements: Announcement[] = [
  {
    id: "1",
    title: "Thông báo 1",
    summary: "Đây là nội dung thông báo 1",
    category: "Cập nhật",
  },
  {
    id: "2",
    title: "Lịch nghỉ lễ Quốc khánh 02/09",
    summary:
      "Toàn thể sinh viên và giảng viên được nghỉ từ ngày 01/09 đến hết ngày 04/09.",
    category: "Thông báo chung",
  },
  {
    id: "3",
    title: "Mở đăng ký học phần HK1 (2026 - 2027)",
    summary:
      "Hệ thống sẽ mở cổng đăng ký tín chỉ từ 08:00 ngày 20/08 cho sinh viên khóa cũ.",
    category: "Đào tạo",
  },
  {
    id: "4",
    title: "Nhắc nhở hoàn tất đóng học phí HK1",
    summary:
      "Hạn chót đóng học phí là ngày 15/09. Sau thời hạn trên hệ thống sẽ tự động hủy học phần.",
    category: "Tài chính",
  },
  {
    id: "5",
    title: "Lịch thi kết thúc học phần đợt 2",
    summary:
      "Sinh viên tra cứu lịch thi chi tiết và phòng thi chính thức trên cổng thông tin cá nhân.",
    category: "Khảo thí",
  },
  {
    id: "6",
    title: "Ngày hội Việc làm & Tuyển dụng 2026",
    summary:
      "Tham gia giao lưu với hơn 50 doanh nghiệp công nghệ tại Sảnh A vào ngày 25/08.",
    category: "Sự kiện",
  },
  {
    id: "7",
    title: "Lịch bảo trì cổng thông tin sinh viên",
    summary:
      "Hệ thống sẽ tạm ngừng hoạt động từ 23:00 đến 04:00 sáng mai để nâng cấp server.",
    category: "Hệ thống",
  },
  {
    id: "8",
    title: "Xét duyệt học bổng Khuyến khích học tập",
    summary:
      "Danh sách sinh viên đạt học bổng HK2 đã được công bố, vui lòng kiểm tra tài khoản ngân hàng.",
    category: "Học bổng",
  },
  {
    id: "9",
    title: "Đăng ký tham gia Chiến dịch Mùa hè xanh",
    summary:
      "Đoàn thanh niên phát động đăng ký các đội hình tình nguyện đến hết ngày 30/08.",
    category: "Hoạt động",
  },
  {
    id: "10",
    title: "Thông báo về việc nộp Đồ án tốt nghiệp",
    summary:
      "Sinh viên năm cuối nộp bản mềm báo cáo và đĩa CD về văn phòng khoa trước 17:00.",
    category: "Đào tạo",
  },
  {
    id: "11",
    title: "Khám sức khỏe định kỳ cho tân sinh viên",
    summary:
      "Lịch khám chi tiết theo từng lớp được cập nhật tại Trạm Y tế trường.",
    category: "Y tế",
  },
];

const Exercise5Page = () => {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <AnnouncementList announcements={announcements} />
      </SafeAreaView>
    </View>
  );
};
export default Exercise5Page;

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, gap: 20 },
});
