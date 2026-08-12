import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Exercise2Page() {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Exercise 2:
          - Thay label ngắn bằng text dài.
          - Tăng fontSize để kiểm tra text wrapping.
          - Không dùng height cố định cho Text/container chứa text.
      */}

          <View style={styles.header}>
            <Text style={styles.title}>
              Bảng điều khiển thông tin và các khóa học dành cho sinh viên
            </Text>

            <Text style={styles.subtitle}>
              Xem thông tin học tập, thông báo mới nhất và các khóa học đang
              được cung cấp tại trường đại học
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Khóa học lập trình ứng dụng di động nâng cao
            </Text>

            <Text style={styles.description}>
              Khóa học cung cấp kiến thức về phát triển ứng dụng di động với
              React Native, quản lý trạng thái, navigation, accessibility và
              responsive layout.
            </Text>

            <View style={styles.metadata}>
              <Text style={styles.metadataText}>
                Thời gian học: Thứ hai và thứ tư hàng tuần
              </Text>

              <Text style={styles.metadataText}>
                Giảng viên: Nguyễn Văn Nguyễn
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Những thông báo quan trọng dành cho sinh viên
            </Text>

            <Text style={styles.announcement}>
              Thông báo về thời gian đăng ký học phần và thời hạn hoàn thành học
              phí cho học kỳ tiếp theo
            </Text>

            <Text style={styles.announcement}>
              Thông báo thay đổi lịch học và phòng học đối với một số lớp học
              trong tuần này
            </Text>

            <Text style={styles.announcement}>
              Thông báo về việc cập nhật thông tin cá nhân và kiểm tra lại thông
              tin tài khoản sinh viên
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    padding: 20,
    gap: 20,
  },

  header: {
    gap: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 36,
  },

  subtitle: {
    fontSize: 20,
    lineHeight: 30,
  },

  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    gap: 12,

    // Không đặt height cố định.
    // Card sẽ tự tăng chiều cao khi text xuống nhiều dòng.
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 32,
  },

  description: {
    fontSize: 20,
    lineHeight: 30,

    // Text được phép tự wrap khi không đủ chiều rộng.
    flexShrink: 1,
  },

  metadata: {
    gap: 6,
  },

  metadataText: {
    fontSize: 18,
    lineHeight: 26,

    // Không đặt width/height cố định để tránh clipping.
    flexShrink: 1,
  },

  section: {
    gap: 14,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 32,
  },

  announcement: {
    fontSize: 20,
    lineHeight: 30,
    padding: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,

    // Cho phép nội dung dài mở rộng theo chiều dọc.
    flexShrink: 1,
  },
});
