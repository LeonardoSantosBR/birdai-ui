import { colors } from "@/themes";
import { StyleSheet } from "react-native";

const RED    = colors.mainPalette.red;
const TEXT   = '#1A1208';
const TEXT2  = '#6B5E52';
const TEXT3  = '#A89A8E';
const WARM   = '#F5EFE8';
const BORDER = '#E8DDD4';


export const plumaStylesheets = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FDF8F3' },
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 140, gap: 16 },
  title: {fontFamily: "monospace"  , fontWeight: "bold", paddingLeft: 10},
  uploadZone: {
    backgroundColor: WARM, borderRadius: 20, borderWidth: 2,
    borderColor: BORDER, borderStyle: 'dashed',
    padding: 36, alignItems: 'center', gap: 8, marginTop: 12,
  },
  uploadEmoji: { fontSize: 60, marginBottom: 8 },
  uploadTitle: { fontSize: 16, fontWeight: '600', color: TEXT },
  uploadSub: { fontSize: 12, color: TEXT3, textAlign: 'center', marginBottom: 8 },
  btnOutline: {
    borderWidth: 1.5, borderColor: RED, borderRadius: 12,
    paddingHorizontal: 20, paddingVertical: 12, marginTop: 8,
  },
  btnOutlineText: { color: RED, fontSize: 14, fontWeight: '500' },

  previewWrap: { borderRadius: 20, overflow: 'hidden' },
  previewImage: { width: '100%', height: 220 },
  changeBtn: {
    position: 'absolute', bottom: 12, right: 12,
    backgroundColor: 'rgba(0,0,0,0.55)',
    paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20,
  },
  changeBtnText: { color: '#fff', fontSize: 12 },

  btnAnalyze: {
    backgroundColor: RED, borderRadius: 12, padding: 16, alignItems: 'center',
  },
  btnDisabled: { backgroundColor: BORDER },
  btnAnalyzeText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  loadingHint: { textAlign: 'center', fontSize: 13, color: TEXT3 },

  errorCard: {
    backgroundColor: '#FFF5F4', borderWidth: 1,
    borderColor: '#FFCFCC', borderRadius: 12, padding: 14,
  },
  errorText: { color: '#B5201A', fontSize: 13 },

  resultCard: {
    backgroundColor: '#fff', borderRadius: 20,
    borderWidth: 1, borderColor: BORDER, overflow: 'hidden',
  },
  resultImage: { width: '100%', height: 200 },
  confidenceBadge: {
    position: 'absolute', top: 12, right: 12,
    backgroundColor: 'rgba(0,0,0,0.55)',
    paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20,
  },
  confidenceText: { color: '#fff', fontSize: 11, fontWeight: '500' },
  resultBody: { padding: 20, gap: 8 },
  resultName: { fontSize: 22, fontWeight: '700', color: TEXT },
  resultSci: { fontSize: 13, color: TEXT3, fontStyle: 'italic', marginBottom: 4 },
  sectionLabel: {
    fontSize: 10, fontWeight: '600', letterSpacing: 1,
    textTransform: 'uppercase', color: TEXT3, marginTop: 4,
  },
  resultDesc: { fontSize: 13, color: TEXT2, lineHeight: 20 },
  divider: { height: 1, backgroundColor: BORDER, marginVertical: 4 },

  chipsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  chip: {
    paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20,
    backgroundColor: WARM, borderWidth: 1, borderColor: BORDER,
  },
  chipActive: { backgroundColor: RED, borderColor: RED },
  chipText: { fontSize: 11, fontWeight: '500', color: TEXT2 },
  chipTextActive: { color: '#fff' },

  btnAdd: {
    borderWidth: 1.5, borderColor: RED, borderRadius: 12,
    padding: 13, alignItems: 'center', marginTop: 8,
  },
  btnAddText: { color: RED, fontSize: 14, fontWeight: '600' },
  btnRetry: { alignItems: 'center', padding: 8 },
  btnRetryText: { color: TEXT3, fontSize: 13, textDecorationLine: 'underline' },
});