import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { imageSelect } from "../images/imageSelect";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useSwipe } from "../hooks/useSwipe";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const CalibrationSignpostScreen = ({ route, navigation }) => {
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);
  const insets = useSafeAreaInsets();
  const { item } = route.params;

  function onSwipeLeft() {
    navigateCalibration();
  }

  function onSwipeRight() {
    navigateGoBack();
  }
  function navigateCalibration() {
    navigation.navigate("CalibrationSignpost", {
      item: item,
    });
  }

  function navigateGoBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaProvider onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.bodyContent}>
          <View style={styles.titleRow}>
            <Text style={styles.loremIpsum}>{item.id}</Text>
            <Text style={styles.subtitleStyle}>{item.title}</Text>
          </View>
        </View>
        <View></View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "nowrap",
    elevation: 3,
    overflow: "hidden",
    paddingLeft: 10,
    paddingRight: 10,
  },
  bodyContent: {
    padding: 20,
    backgroundColor: "#000",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
    width: 280,
  },
  subtitleStyle: {
    padding: 5,
    paddingRight: 20,
    fontSize: 16,
    fontFamily: "AvenirBold",
    color: "#fff",
    lineHeight: 16,
  },
  loremIpsum: {
    color: "#fff",
    fontSize: 40,
    paddingRight: 10,
    fontFamily: "AvenirBold",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default CalibrationSignpostScreen;
