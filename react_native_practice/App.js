import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const FlexboxExamples = () => {
  return (
    <ScrollView style={styles.container}>
      {/* flexDirection 예제 */ }
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>flexDirection</Text>
        <View style={[styles.boxContainer, { flexDirection: 'row' }]}>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
        </View>
      </View>

      {/* justifyContent 예제 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>justifyContent</Text>
        <View style={[styles.boxContainer, { justifyContent: 'space-between' }]}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>


      {/* alignItems 예제 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>alignItems</Text>
        <View style={[styles.boxContainer, { alignItems: 'center' }]}>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 16,
    backgroundColor: '#f0f0f0'
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  boxContainer: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'skyblue',
    margin: 4,
  },
});

export default FlexboxExamples;
