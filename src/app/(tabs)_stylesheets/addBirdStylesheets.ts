import { colors } from "@/themes";
import { StyleSheet } from "react-native";

export const addBirdStylesheets = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: colors.screens.birdForm.background,
    padding: 15,
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
    height: 300,
    borderRadius: 12,
    backgroundColor: colors.screens.birdForm.imageBackground,
  },
  imagePlaceholder: {
    backgroundColor: colors.screens.birdForm.imagePlaceholderBackground,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePlaceholderIcon: {
    fontSize: 52,
  },
  changeImageButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colors.screens.birdForm.border,
  },
  cameraIcon: {
    fontSize: 16,
  },
  changeImageText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.screens.birdForm.primary,
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
    color: colors.screens.birdForm.textPrimary,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.screens.birdForm.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: colors.screens.birdForm.textPrimary,
    backgroundColor: colors.screens.birdForm.surface,
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
    borderColor: colors.screens.birdForm.border,
    backgroundColor: colors.screens.birdForm.chipDefault,
  },
  chipText: {
    fontSize: 13,
    color: colors.screens.birdForm.chipDefaultText,
    fontWeight: "500",
  },
  chipTextSelected: {
    color: colors.screens.birdForm.chipSelectedText,
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
    borderColor: colors.screens.birdForm.cancelBorder,
    alignItems: "center",
    backgroundColor: colors.screens.birdForm.cancel,
  },
  cancelText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.screens.birdForm.cancelText,
  },
  saveButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: colors.screens.birdForm.primary,
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  saveText: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.screens.birdForm.saveTextColor,
  },
});