import React, { useState } from "react";
import { TextInput, View, Text } from 'react-native';  

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={{ marginTop: 50, padding: 10 }}>
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      placeholder="Type here"
      onChangeText={text => setText(text)}
      value={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text}
      </Text>
    </View>
  )
}