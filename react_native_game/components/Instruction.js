import React from "react"

import {  Text, StyleSheet } from "react-native";

import Colors from "./colors";

function InstructionText({ children, style }) {
    return <Text style={[styels.instructionText, style]}>{children}</Text>
}

export default InstructionText

const styels = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
});