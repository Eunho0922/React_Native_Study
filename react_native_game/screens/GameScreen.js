import { React, useState, useEffect } from "react";

import { View, Text, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Title from "../components/Title"
import Card from "../components/Card";
import InstructionText from "../components/Instruction";
import PrimaryButton from "../components/PrimaryButton";
import { Ionicons } from "@expo/vector-icons"

let minBoundary = 1;
let maxBoundary = 100;

function generateRandomBetween(min, max, exclude) {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNum
    }
}

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(op) {
        if (
            (op === "+" && currentGuess > userNumber) || 
            (op === "-" && currentGuess < userNumber)
        ) {
            Alert.alert("Don't lie!", "You konw that this is wrong...", [
                { text: "Sorry!", style: "cancel" }
            ])
            return;
        }

        if (op === "+") {
            minBoundary = currentGuess + 1
        } else if (op === "-") {
            maxBoundary = currentGuess;
        }
        const nextGuess = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        )
        setCurrentGuess(nextGuess);
        setGuessRounds((prevGuessRounds) => [nextGuess, ...prevGuessRounds]);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Card>
                <InstructionText>Higher or lower?</InstructionText>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "+")}>
                    <Ionicons name="add" size={24} color={"white"}/>
                    </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "-")}>
                    <Ionicons name="remove" size={24} color={"white"}/>
                    </PrimaryButton>
                </Card>
            </View>
            <View>
                { guessRounds.map((guessRound) => {
                    <Text key={guessRound}>{guessRound}</Text>
                })}
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    }
})