// Exercise4Page.tsx
import IconButton from "@/components/exercise/IconButton";
import PrimaryButton from "@/components/exercise/PrimaryButton";
import SecondaryButton from "@/components/exercise/SecondaryButton";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Exercise4Page() {
  const [loading, setLoading] = useState(false);

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Section title="Default (nhấn giữ để xem pressed state)">
          <PrimaryButton label="Xác nhận" onPress={() => {}} />
          <SecondaryButton label="Hủy" onPress={() => {}} />
          <IconButton
            accessibilityLabel="Thêm mới"
            icon={<Text style={styles.iconText}>+</Text>}
            onPress={() => {}}
          />
        </Section>
        <Section title="Disabled">
          <PrimaryButton label="Xác nhận" disabled />
          <SecondaryButton label="Hủy" disabled />
          <IconButton
            accessibilityLabel="Thêm mới"
            icon={<Text style={styles.iconText}>+</Text>}
            disabled
          />
        </Section>
        <Section title="Loading (bấm để kích hoạt 2s)">
          <PrimaryButton
            label="Xác nhận"
            loading={loading}
            onPress={simulateLoading}
          />
          <SecondaryButton
            label="Hủy"
            loading={loading}
            onPress={simulateLoading}
          />
          <IconButton
            accessibilityLabel="Thêm mới"
            icon={<Text style={styles.iconText}>+</Text>}
            loading={loading}
            onPress={simulateLoading}
          />
        </Section>
        <Section title="Focused (dùng bàn phím ngoài/Tab để focus)">
          <PrimaryButton label="Xác nhận" onPress={() => {}} />
        </Section>
      </SafeAreaView>
    </View>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.row}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 20 },
  section: { gap: 8 },
  sectionTitle: { fontSize: 13, fontWeight: "600", color: "#6b7280" },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "center",
  },
  iconText: { fontSize: 20, lineHeight: 20, fontWeight: "600" },
});
