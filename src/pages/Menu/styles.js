import { StyleSheet } from "react-native";

const menuStyles = StyleSheet.create({
    card: {
        alignItems: "center",
        justifyContent: "center",
        width: 180,
        height: 90,
        elevation: 5
    },
    view: {
        alignItems: "center",
        justifyContent: "space-around",
        width: '100%',
        padding: 5,
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column'
    },
    wrap: {
        flexWrap: 'wrap'
    }
});

export default menuStyles;