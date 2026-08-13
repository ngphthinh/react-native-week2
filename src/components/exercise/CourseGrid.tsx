// CourseGrid.tsx
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

export interface Course {
  id: string;
  title: string;
}

// ---------- Cách 1: flexBasis / minWidth / maxWidth / flexGrow / wrap ----------
export function CourseGridFlexBasis({ courses }: { courses: Course[] }) {
  return (
    <View style={styles.gridFlex}>
      {courses.map((c) => (
        <View key={c.id} style={styles.cardFlex}>
          <Text style={styles.cardTitle}>{c.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  gridFlex: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    padding: 12,
  },
  cardFlex: {
    flexGrow: 1, // lấp đầy khoảng trống còn lại trên hàng
    flexBasis: 140, // kích thước "muốn có" trước khi grow/shrink
    minWidth: 120, // không bao giờ nhỏ hơn mức đọc được
    maxWidth: 220, // không phình to quá mức trên tablet/màn rộng
    height: 90,
    borderRadius: 12,
    backgroundColor: "#eef2ff",
    padding: 12,
    justifyContent: "flex-end",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
});

// ---------- Cách 2: tính width thủ công theo useWindowDimensions ----------
export function CourseGridManualWidth({ courses }: { courses: Course[] }) {
  const { width } = useWindowDimensions();
  const columns = width < 400 ? 2 : width < 700 ? 3 : 4;
  const gap = 12;
  const cardWidth = (width - gap * (columns + 1)) / columns;

  return (
    <View style={[stylesManual.grid, { gap }]}>
      {courses.map((c) => (
        <View key={c.id} style={[stylesManual.card, { width: cardWidth }]}>
          <Text style={styles.cardTitle}>{c.title}</Text>
        </View>
      ))}
    </View>
  );
}

const stylesManual = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 12,
  },
  card: {
    height: 90,
    borderRadius: 12,
    backgroundColor: "#eef2ff",
    padding: 12,
    justifyContent: "flex-end",
  },
});
