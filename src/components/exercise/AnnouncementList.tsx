// AnnouncementList.tsx
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";

export interface Announcement {
  id: string;
  title: string;
  summary: string;
  category: string;
}

const renderItem: ListRenderItem<Announcement> = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.summary}>{item.summary}</Text>
    <Text style={styles.category}>{item.category}</Text>
  </View>
);

export default function AnnouncementList({
  announcements,
}: {
  announcements: Announcement[];
}) {
  return (
    <FlatList
      data={announcements}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={<Text style={styles.header}>Thông báo</Text>}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={
        <Text style={styles.footer}>— Đã hiển thị toàn bộ thông báo —</Text>
      }
      ListEmptyComponent={
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>Chưa có thông báo nào.</Text>
        </View>
      }
      contentContainerStyle={
        announcements.length === 0 ? styles.emptyContainer : undefined
      }
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  footer: {
    textAlign: "center",
    color: "#6b7280",
    paddingVertical: 16,
  },
  card: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  summary: {
    fontSize: 14,
    color: "#4b5563",
    marginTop: 4,
  },
  category: {
    fontSize: 12,
    color: "#2563eb",
    marginTop: 4,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#e5e7eb",
    marginHorizontal: 16,
  },
  emptyBox: {
    padding: 32,
    alignItems: "center",
  },
  emptyText: {
    color: "#6b7280",
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
});
