import * as React from 'react';
import { View, Text } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => alert("This is the about screen.")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        About Screen
      </Text>
    </View>
  );
}
