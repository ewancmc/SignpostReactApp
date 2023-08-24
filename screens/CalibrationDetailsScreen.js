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
            <Text style={{ fontSize: 26, fontFamily:'AvenirBold' }}>
              Calibration Details
            </Text>
          </View>
        </SafeAreaProvider>
      );
};

export default CalibrationDetailsScreen;
