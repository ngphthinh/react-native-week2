import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export type CourseCardProps = {
  title: string;
  imageUrl?: string; // remote
  localImage?: number; 
  imageRole?: "informative" | "decorative"; // mặc định informative
};

export default function CourseCard({
  title,
  imageUrl,
  localImage,
  imageRole = "informative",
}: CourseCardProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">(
    imageUrl ? "loading" : "loaded",
  );

  //cách switch giữa "ảnh cần đọc" và "ảnh cần im lặng" cho screen reader
  const a11yImageProps =
    imageRole === "decorative"
      ? {
          accessibilityElementsHidden: true,
          importantForAccessibility: "no" as const,
        }
      : { accessible: true, accessibilityLabel: `Ảnh khóa học ${title}` };

  const renderThumbnail = () => {
    // 1. Local image — luôn sẵn có, không cần loading/failed
    if (localImage) {
      return (
        <Image source={localImage} style={styles.image} {...a11yImageProps} />
      );
    }

    // 2 & 3 & 4. Remote — loading / loaded / failed
    if (imageUrl) {
      if (status === "failed") {
        return (
          <View style={styles.placeholder}>
            <Text>Không tải được ảnh</Text>
          </View>
        );
      }
      return (
        <View style={styles.image}>
          {status === "loading" && (
            <ActivityIndicator style={StyleSheet.absoluteFill} size="small" />
          )}
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            onLoadStart={() => setStatus("loading")}
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("failed")}
            {...a11yImageProps}
          />
        </View>
      );
    }

    // 5. Không có ảnh nào
    return (
      <View style={styles.placeholder}>
        <Text>Không có hình ảnh</Text>
      </View>
    );
  };

  return (
    <Pressable style={styles.card}>
      {renderThumbnail()}
      {/* Task completion không phụ thuộc vào Image */}
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, borderWidth: 1, borderColor: "#ddd", borderRadius: 12 },
  image: {
    width: "100%",
    height: 80,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  placeholder: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  title: { marginTop: 12, fontSize: 15, fontWeight: "500" },
});
