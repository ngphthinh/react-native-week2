// SecondaryButton.tsx
import { MIN_TARGET, sharedStyles } from "@/constants/share";
import { useState } from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

type SecondaryButtonProps = {
  label: string;
  onPress?: (e: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
};

export default function SecondaryButton({
  label,
  onPress,
  disabled,
  loading,
}: SecondaryButtonProps) {
  const [isFocused, setIsFocused] = useState(false);

  const isInactive = disabled || loading;

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
      accessibilityLabel={label}>
      {loading ? (
        <ActivityIndicator color="#111827" />
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
    borderWidth: 1,
    borderColor: "#d1d5db",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  pressed: {
    backgroundColor: "#f3f4f6",
  },
  text: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "600",
  },
});
