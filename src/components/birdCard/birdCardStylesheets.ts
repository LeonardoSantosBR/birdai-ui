import { StyleSheet } from "react-native";

export const birdCardStylesheets = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 12,
        alignItems: "center",
        marginBottom: 12,
        elevation: 2
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 12,
        marginRight: 12,
    }
});