import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { RadioButton } from "react-native-paper";
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
  const [value, setValue] = React.useState();
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

  //init radio button state
  getCalibration = async (key) => {
    try {
      response = await AsyncStorage.getItem("calibration");
      if (response !== null) {
        const parsed = JSON.parse(response)
        if (response.includes(key)){
          for (var i = 0; i < parsed.length; ++i) {
            if (parsed[i]["id"] === key) {
              setValue(parsed[i]["calibration"]);
            }
          }
        }
      }
    } catch (e) {}
  };
  getCalibration(item.id);

  //updates calibration values in async data
  asyncSet = async (calibrationValue) => {
    setValue(calibrationValue);
    try {
      response = await AsyncStorage.getItem("calibration");
      if (response == null) {
        const value = { id: item.id, calibration: calibrationValue };
        const valueList = [];
        valueList.push(value);
        console.log(valueList);
        await AsyncStorage.setItem("calibration", JSON.stringify(valueList));
      } else {
        parsed = JSON.parse(response);
        if (response.includes(item.id)) {
          for (var i = 0; i < parsed.length; ++i) {
            if (parsed[i]["id"] === item.id) {
              parsed[i]["calibration"] = calibrationValue;
              console.log(parsed);
            }
          }
          await AsyncStorage.setItem("calibration", JSON.stringify(parsed));
        } else {
          const value = { id: item.id, calibration: calibrationValue };
          parsed.push(value);
          console.log(parsed);
          await AsyncStorage.setItem("calibration", JSON.stringify(parsed));
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaProvider onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.bodyContent}>
          <View style={styles.titleRow}>
            <Text style={styles.loremIpsum}>{item.id}</Text>
            <Text style={styles.subtitleStyle}>{item.title}</Text>
          </View>
        </View>
      </View>
      <RadioButton.Group
        onValueChange={(newValue) => asyncSet(newValue)}
        value={value}
      >
        <View style={styles.titleRow}>
          <Text>GO THERE</Text>
          <RadioButton value="1" />
        </View>
        <View style={styles.titleRow}>
          <Text>HEAD THAT WAY, BUT NOT THERE</Text>
          <RadioButton value="2" />
        </View>
        <View style={styles.titleRow}>
          <Text>IGNORE IT</Text>
          <RadioButton value="3" />
        </View>
        <View style={styles.titleRow}>
          <Text>GO IN THE OPPOSITE DIRECTION</Text>
          <RadioButton value="4" />
        </View>
      </RadioButton.Group>
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
