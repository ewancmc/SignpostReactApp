import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { imageSelect } from "../images/imageSelect";

function SignpostGalleryCard(props) {
    return (
    <View style={styles.container}>
      <Image
        source={imageSelect(props.signpost.id)}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>{props.signpost.id}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width / 2 - 20,
    margin: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
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
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  rect: {
    top: 0,
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.53)",
    left: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loremIpsum: {
    color: "rgba(255,255,255,1)",
    fontFamily: 'AvenirBold',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default SignpostGalleryCard;
