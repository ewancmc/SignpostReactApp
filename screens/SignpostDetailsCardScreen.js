import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import Images from '../images';

function imageSelect(id) {
  const imageArray = {
    '01' : Images.Signpost01,
    '02' : Images.Signpost02,
    '03' : Images.Signpost03,
    '04' : Images.Signpost04,
    '05' : Images.Signpost05,
  } 
  return imageArray[id]
};

const SignpostDetailsCardScreen = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>Signpost {item.id}</Text>
        <Text style={styles.subtitleStyle}>{item.title}</Text>
      </View>
      <Pressable onPress={navigateFullDetails}>
        <Image
          source = {imageSelect(item.id)}
          style={styles.cardItemImagePlace}
        ></Image>
      </Pressable>
    </View>
  );
  function navigateFullDetails() {
    navigation.navigate("SignpostDetailsFull", {
      item: item,
    });
  }
};

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
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
});

export default SignpostDetailsCardScreen;
