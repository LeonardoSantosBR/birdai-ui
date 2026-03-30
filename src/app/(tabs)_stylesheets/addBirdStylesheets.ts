import { colors } from "@/themes";
import { StyleSheet } from "react-native";

export const addBirdStylesheets = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: colors.addBird.background,
    padding: 15,
  },
  image: {
    width: "45%",
    height: "45%",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 10,
    paddingBottom: 140,
    gap: 20,
  },
  imageContainer: {
    alignItems: "center",
    gap: 10,
    marginHorizontal: -15,
  },
  textArea: {
    height: 96,
    paddingTop: 10,
  },
  birdImage: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    backgroundColor: colors.addBird.imageBackground,
  },
  imagePlaceholder: {
    backgroundColor: colors.addBird.imagePlaceholderBackground,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#E8DDD4",
    borderStyle: "dashed",
  },
  changeImageButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colors.addBird.border,
  },
  cameraIcon: {
    fontSize: 16,
  },
  changeImageText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.addBird.primary,
  },
  fields: {
    gap: 16,
  },
  field: {
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.addBird.textPrimary,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.addBird.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: colors.addBird.textPrimary,
    backgroundColor: colors.addBird.surface,
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colors.addBird.border,
    backgroundColor: colors.addBird.chipDefault,
  },
  chipText: {
    fontSize: 13,
    color: colors.addBird.chipDefaultText,
    fontWeight: "500",
  },
  chipTextSelected: {
    color: colors.addBird.chipSelectedText,
    fontWeight: "700",
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.addBird.cancelBorder,
    alignItems: "center",
    backgroundColor: colors.addBird.cancel,
  },
  cancelText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.addBird.cancelText,
  },
  saveButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: colors.addBird.primary,
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  saveText: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.addBird.saveTextColor,
  },
});
