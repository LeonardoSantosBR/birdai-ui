import { colors } from "@/themes";
import { StyleSheet } from "react-native";

export const updateBirdStylesheets = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.mainPalette.white,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 300,
    backgroundColor: colors.updateBird.imageBackground,
  },
  birdImage: {
    width: "100%",
    height: "100%",
  },
  imagePlaceholder: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.updateBird.imagePlaceholderBackground,
  },
  imagePlaceholderIcon: {
    fontSize: 48,
  },
  changeImageButton: {
    position: "absolute",
    bottom: 12,
    left: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.updateBird.changeImageButtonBackground,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 6,
  },
  cameraIcon: {
    fontSize: 14,
  },
  changeImageText: {
    color: colors.updateBird.changeImageTextColor,
    fontSize: 13,
    fontWeight: "500",
  },
  fields: {
    backgroundColor: colors.updateBird.surface,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    gap: 16,
  },
  field: {
    gap: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: "900",
    color: colors.updateBird.textSecondary,
    letterSpacing: 0.1,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.updateBird.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: colors.updateBird.textPrimary,
    backgroundColor: colors.updateBird.surface,
  },
  textArea: {
    height: 96,
    paddingTop: 10,
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
    backgroundColor: colors.updateBird.chipDefault,
  },
  chipText: {
    fontSize: 13,
    color: colors.updateBird.chipDefaultText,
    fontWeight: "500",
  },
  chipTextSelected: {
    color: colors.updateBird.chipSelectedText,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.updateBird.cancelBorder,
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: "center",
    backgroundColor: colors.updateBird.cancel,
  },
  cancelText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.updateBird.cancelText,
  },
  saveButton: {
    flex: 1,
    backgroundColor: colors.mainPalette.red,
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonDisabled: {
    backgroundColor: colors.updateBird.primaryDark,
    opacity: 0.7,
  },
  saveText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.updateBird.saveTextColor,
  },
});
