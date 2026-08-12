// IconButton.tsx
import { MIN_TARGET, sharedStyles } from "@/constants/share";
import React, { useState } from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
} from "react-native";

type IconButtonProps = {
  accessibilityLabel: string;
  icon: React.ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
};

export default function IconButton({
  accessibilityLabel,
  icon,
  onPress,
  disabled,
  loading,
}: IconButtonProps) {
  const isInactive = disabled || loading;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Pressable
      onPress={isInactive ? undefined : onPress}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      disabled={isInactive}
      hitSlop={8}
      style={({ pressed }) => [
        styles.base,
        pressed && !isInactive && styles.pressed,
        isFocused && sharedStyles.focusRing,
        disabled && sharedStyles.disabled,
      ]}
      accessibilityRole="button"
      accessibilityState={{ disabled: isInactive, busy: loading }}
      accessibilityLabel={accessibilityLabel}>
      {loading ? <ActivityIndicator size="small" /> : icon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minWidth: MIN_TARGET,
    minHeight: MIN_TARGET,
    borderRadius: MIN_TARGET / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    backgroundColor: "#f3f4f6",
  },
});
