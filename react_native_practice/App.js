import React from "react";
import { Image, View } from 'react-native';  

export default function App() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Image 
      source={require('./assets/favicon.png')}
      style={{ width: 200, height: 200 }}
      resizeMode="contain" />
    </View>
  )
}