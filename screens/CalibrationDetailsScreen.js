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

const CalibrationDetailsScreen = () => {
  const insets = useSafeAreaInsets();
  const [calibrationTotal, setCalibrationTotal] = React.useState(0);
  const [calibration1Total, setCalibration1Total] = React.useState(0);
  const [calibration2Total, setCalibration2Total] = React.useState(0);
  const [calibration3Total, setCalibration3Total] = React.useState(0);
  const [calibration4Total, setCalibration4Total] = React.useState(0);

  //init calibration state
  getCalibration = async () => {
    try {
      response = await AsyncStorage.getItem("calibration");
      if (response !== null) {
        const parsed = JSON.parse(response);
        setCalibrationTotal(parsed.length);

        // set individual calibration totals
        setCalibration1Total(parsed.filter(function (i) {
          return i.calibration === "1";
        }).length)
        setCalibration2Total(parsed.filter(function (i) {
          return i.calibration === "2";
        }).length)
        setCalibration3Total(parsed.filter(function (i) {
          return i.calibration === "3";
        }).length)
        setCalibration4Total(parsed.filter(function (i) {
          return i.calibration === "4";
        }).length)
      }
    } catch (e) {}
  };
  getCalibration();
  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: insets.top,
        }}
      >
        <Text style={{ fontSize: 26, fontFamily: "AvenirBold" }}>
          Calibrated signposts: {calibrationTotal}
        </Text>
        <Text style={{ fontSize: 18, fontFamily: "AvenirBold" }}>
          GO THERE: {calibration1Total}
        </Text>
        <Text style={{ fontSize: 18, fontFamily: "AvenirBold" }}>
          HEAD THAT WAY, BUT NOT THERE: {calibration2Total}
        </Text>
        <Text style={{ fontSize: 18, fontFamily: "AvenirBold" }}>
          IGNORE IT: {calibration3Total}
        </Text>
        <Text style={{ fontSize: 18, fontFamily: "AvenirBold" }}>
          GO IN THE OPPOSITE DIRECTION: {calibration4Total}
        </Text>
      </View>
    </SafeAreaProvider>
  );
};

export default CalibrationDetailsScreen;
