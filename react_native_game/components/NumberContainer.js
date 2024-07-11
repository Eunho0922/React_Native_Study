import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Colors from "./colors"

function NumberContainer({ children }) {
    return (
        <View style={styels.container}>
            <Text style={styels.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styels = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: "bold"
    }
})