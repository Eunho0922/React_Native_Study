import { React, useState } from "react";

import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../components/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/Instruction";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState("");

    function resetInputHandler() {
        setEnteredNumber("")
    }

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }    

    function confirmInputHandler() {
        const choosenNumber = parseInt(enteredNumber);

        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert (
                "Invalud number!",
                "InputNumber has to be a number between 1 and 99",
                [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
            );
            return;
        }
        onPickNumber(choosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput 
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
            />
            <View style={styles.bottonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center"
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    bottonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
})