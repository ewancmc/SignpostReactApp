import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function SignpostDetailsCardScreen({route, navigation}) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>Signpost {item.id}</Text>
        <Text style={styles.subtitleStyle}>{item.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12,
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5,
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    minHeight: 210,
  },
});

export default SignpostDetailsCardScreen;
