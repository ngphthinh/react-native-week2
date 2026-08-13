// PrimaryButton.tsx
import { MIN_TARGET, sharedStyles } from "@/constants/share";
import { useState } from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

type PrimaryButtonProps = {
  label: string;
  onPress?: (e: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
};

export default function PrimaryButton({
  label,
  onPress,
  disabled,
  loading,
}: PrimaryButtonProps) {
  const isInactive = disabled || loading;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Pressable
      onPress={isInactive ? undefined : onPress}
      disabled={isInactive}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={({ pressed }) => [
        styles.base,
        pressed && !isInactive && styles.pressed,
        isFocused && sharedStyles.focusRing,
        disabled && sharedStyles.disabled,
      ]}
      accessibilityRole="button"
      accessibilityState={{ disabled: isInactive, busy: loading }}
      accessibilityLabel={loading ? `${label}, đang xử lý` : label}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{label}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: MIN_TARGET,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    backgroundColor: "#1d4ed8",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
