import React from "react";

import { View, Image, Text, StyleSheet } from "react-native";

import Title from "../components/Title";
import Colors from "../components/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({ roundNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styels.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styels.imageContainer}>
                <Image 
                    style={styels.image}
                    source={require("../assets/success.png")}
                />
            </View>
            <Text style={styels.summaryText}>
                Your phone needed <Text style={styels.highlight}>{roundNumber}</Text>{" "} 
                rounds to guess the number{" "} 
                <Text style={styels.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styels = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36
    },
    image: {
        width: "100%",
        height: "100%",
    },
    summaryText: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24
    },
    highlight: {
        color: Colors.primary500
    }
})