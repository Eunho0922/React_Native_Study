import React from "react";
import { StyleSheet, View, Text } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Box with margin</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.textWithPadding}>Box with padding</Text>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  box: {
    width: 200,
    height: 100,
    backgroundColor: '#4CAF50',
    margin: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 100,
  },
  textWithPadding: {
    color: 'white',
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#red',
  }
})