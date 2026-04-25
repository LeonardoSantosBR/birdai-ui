import { colors } from "@/themes";
import { StyleSheet } from "react-native";

const { pluma } = colors.screens;
const RED = colors.palette.red600;

export const plumaStylesheets = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: pluma.background,
  },
  container: { flex: 1 },
  content: {
    padding: 20,
    paddingBottom: 140,
    gap: 16,
  },
  image: {
    width: "45%",
    height: "45%",
  },
  title: {
    fontSize: 20,
    fontFamily: "monospace",
    fontWeight: "bold",
    paddingLeft: 10,
  },
  uploadZone: {
    backgroundColor: pluma.warm,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: pluma.border,
    borderStyle: "dashed",
    padding: 36,
    alignItems: "center",
    gap: 8,
    marginTop: 12,
  },
  uploadTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: pluma.text,
  },
  uploadSub: {
    fontSize: 12,
    color: pluma.textMuted,
    textAlign: "center",
    marginBottom: 8,
  },
  btnOutline: {
    borderWidth: 1.5,
    borderColor: RED,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 8,
  },
  btnOutlineText: {
    color: RED,
    fontSize: 14,
    fontWeight: "500",
  },
  previewWrap: {
    borderRadius: 20,
    overflow: "hidden",
  },
  previewImage: {
    width: "100%",
    height: 220,
  },
  changeBtn: {
    position: "absolute",
    bottom: 12,
    right: 12,
    backgroundColor: colors.palette.overlayDark,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  changeBtnText: {
    color: colors.palette.white,
    fontSize: 12,
  },
  btnAnalyze: {
    backgroundColor: RED,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  btnDisabled: { backgroundColor: pluma.border },
  btnAnalyzeText: {
    color: colors.palette.white,
    fontSize: 15,
    fontWeight: "600",
  },
  loadingHint: {
    textAlign: "center",
    fontSize: 13,
    color: pluma.textMuted,
  },
  errorCard: {
    backgroundColor: pluma.errorBackground,
    borderWidth: 1,
    borderColor: pluma.errorBorder,
    borderRadius: 12,
    padding: 14,
  },
  errorText: {
    color: pluma.errorText,
    fontSize: 13,
  },
  resultCard: {
    backgroundColor: colors.palette.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: pluma.border,
    overflow: "hidden",
  },
  resultImage: {
    width: "100%",
    height: 200,
  },
  confidenceBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  confidenceText: {
    color: colors.palette.white,
    fontSize: 11,
    fontWeight: "500",
  },
  resultBody: {
    padding: 20,
    gap: 8,
  },
  resultName: {
    fontSize: 22,
    fontWeight: "700",
    color: pluma.text,
  },
  resultSci: {
    fontSize: 13,
    color: pluma.textMuted,
    fontStyle: "italic",
    marginBottom: 4,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: pluma.textMuted,
    marginTop: 4,
  },
  resultDesc: {
    fontSize: 13,
    color: pluma.textSecondary,
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: pluma.border,
    marginVertical: 4,
  },
  chipsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: pluma.warm,
    borderWidth: 1,
    borderColor: pluma.border,
  },
  chipActive: {
    backgroundColor: RED,
    borderColor: RED,
  },
  chipText: {
    fontSize: 11,
    fontWeight: "500",
    color: pluma.textSecondary,
  },
  chipTextActive: { color: colors.palette.white },
  btnAdd: {
    borderWidth: 1.5,
    borderColor: RED,
    borderRadius: 12,
    padding: 13,
    alignItems: "center",
    marginTop: 8,
  },
  btnAddText: {
    color: RED,
    fontSize: 14,
    fontWeight: "600",
  },
  btnRetry: {
    alignItems: "center",
    padding: 8,
  },
  btnRetryText: {
    color: pluma.textMuted,
    fontSize: 13,
    textDecorationLine: "underline",
  },
});
