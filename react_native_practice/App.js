import React from "react";
import { FlatList, Text, View } from 'react-native';  

const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

const Item = ({ title }) => (
  <View style={{ padding: 20 }}>
    <Text style={{ fontSize: 24 }}>{title}</Text>
  </View>
);

export default function App() {
  return (
    <FlatList
    data={DATA}
    renderItem={({item}) => <Item title={item.title} />}
    keyExtractor={item => item.id}
    />
  );
}