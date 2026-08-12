// shared.ts
import { StyleSheet } from "react-native";

export const MIN_TARGET = 44; // WCAG 2.5.5 / HIG minimum touch target

export const sharedStyles = StyleSheet.create({
  focusRing: {
    outlineWidth: 2, // RN 0.74+; nếu RN cũ hơn, thay bằng borderWidth: 2, borderColor: '#2563eb'
    outlineColor: "#2563eb",
    outlineOffset: 2,
  },
  disabled: {
    opacity: 0.4, // chỉ đổi opacity, không đổi padding/kích thước
  },
});
