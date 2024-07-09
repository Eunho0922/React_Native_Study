import React from "react";
import { SectionList, Text, View } from 'react-native';  

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto']
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps']
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps']
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps']
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps']
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps']
  },
];

export default function App() {
  return (
    <SectionList 
      style={{ marginTop: 10 }}
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Text style={{padding: 20}}>{item}</Text>}
      renderSectionHeader={({ section: { title } }) => (
        <View style={{ backgroundColor: "#f0f0f0", padding: 10 }}>
          <Text style={{ fontWeigh: 'bold', fontSize: 18 }}>{title}</Text>
        </View>
      )}
    />
  );
}