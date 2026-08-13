// AnnouncementSections.tsx
import { useMemo } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export interface Announcement {
  id: string;
  title: string;
  createdAt: string; // ISO date
}

function groupByRecency(items: Announcement[]) {
  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeek = 7 * oneDay;

  const today: Announcement[] = [];
  const thisWeek: Announcement[] = [];
  const earlier: Announcement[] = [];

  items.forEach((item) => {
    const diff = now - new Date(item.createdAt).getTime();
    if (diff < oneDay) today.push(item);
    else if (diff < oneWeek) thisWeek.push(item);
    else earlier.push(item);
  });

  return [
    { title: "Hôm nay", data: today },
    { title: "Tuần này", data: thisWeek },
    { title: "Trước đó", data: earlier },
  ].filter((section) => section.data.length > 0);
}

export default function AnnouncementSections({
  announcements,
}: {
  announcements: Announcement[];
}) {
  const sections = useMemo(
    () => groupByRecency(announcements),
    [announcements],
  );

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.id}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({ section }) => (
        <View style={styles.sectionHeader} accessibilityRole="header">
          <Text style={styles.sectionHeaderText}>{section.title}</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: "#f9fafb",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6b7280",
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemText: {
    fontSize: 16,
  },
});
