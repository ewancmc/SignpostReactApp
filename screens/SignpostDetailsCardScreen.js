import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { imageSelect } from "../images/imageSelect";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignpostDetailsCardScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [favouriteIcon, setFavouriteIcon] = React.useState(false);

  // initialise favourite state
  checkFavourite = async (key) => {
    try {
      const status = await AsyncStorage.getItem(key);
      if (status == null) {
        setFavouriteIcon(false);
      } else {
        setFavouriteIcon(true);
      }
    } catch (e) {
      // read error
    }
  };
  checkFavourite(item.id)

  toggleFavourite = async (key, value) => {
    if (favouriteIcon) {
      try {
        await AsyncStorage.removeItem(key);
      } catch (e) {
        // remove error
      }
    } else {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
      } catch (e) {
        // save error
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={imageSelect(item.id)}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>Signpost {item.id}</Text>
        <Text style={styles.subtitleStyle}>{item.title}</Text>
      </View>
      <View style={styles.rect}>
        <View style={styles.iconRow}>
          <Ionicons name="arrow-back" style={styles.icon} />
          <Text style={styles.goBack}>Go Back</Text>
          <Ionicons name="ellipsis-vertical" style={styles.icon2} />
        </View>
      </View>

      <Pressable
        onPress={() => {
          toggleFavourite(item.id, item);
          setFavouriteIcon(!favouriteIcon);
        }}
      >
        <Ionicons
          name={favouriteIcon ? "heart" : "heart-outline"}
          style={styles.icon3}
        />
      </Pressable>
    </View>
  );

  function navigateFullDetails() {
    navigation.navigate("SignpostDetailsFull", {
      item: item,
    });
  }

  function navigateGoBack() {
    navigation.goBack();
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
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    width: "100%",
    height: undefined,
    aspectRatio: 1,
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
  rect: {
    top: -1,
    left: 0,
    width: 357,
    height: 36,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.53)",
    flexDirection: "row",
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 23,
    width: 20,
  },
  goBack: {
    color: "rgba(255,255,255,1)",
    marginLeft: 4,
    marginTop: 1.2,
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 23,
    width: 20,
    marginLeft: 249,
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    height: 50,
  },
  iconRow: {
    height: 23,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    marginLeft: 7,
    marginTop: 7,
  },
});

export default SignpostDetailsCardScreen;
