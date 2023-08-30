import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useSwipe } from "../hooks/useSwipe";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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
        const parsed = JSON.parse(response);
        if (response.includes(key)) {
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
    try {
      response = await AsyncStorage.getItem("calibration");
      if (response == null) {
        const value = { id: item.id, calibration: calibrationValue };
        const valueList = [];
        valueList.push(value);
        console.log(valueList);
        await AsyncStorage.setItem("calibration", JSON.stringify(valueList));
        getCalibration(item.id);
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
          getCalibration(item.id);
        } else {
          const value = { id: item.id, calibration: calibrationValue };
          parsed.push(value);
          console.log(parsed);
          await AsyncStorage.setItem("calibration", JSON.stringify(parsed));
          getCalibration(item.id);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaProvider onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <View
        style={[
          styles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        <View style={styles.titleRow}>
          <Text style={styles.loremIpsum}>{item.id}</Text>
          <Text style={styles.subtitleStyle}>{item.title}</Text>
        </View>
        <View style={styles.radioButtonContainer}>
          <View style={styles.radioButton}>
            <View style={styles.calibrationTextContainer}>
              <Text style={styles.calibrationTitle}>GO THERE</Text>
              <Text style={styles.calibrationBody}>
                Agree with the premise of the signpost and feel it's worthwhile
                to continue exploring in that direction.
              </Text>
            </View>
            <Pressable onPress={() => asyncSet("1")}>
              <Ionicons
                style={styles.radioButtonIcon}
                name={value === "1" ? "radio-button-on" : "radio-button-off"}
              />
            </Pressable>
          </View>
          <View style={styles.radioButton}>
            <View style={styles.calibrationTextContainer}>
              <Text style={styles.calibrationTitle}>
                HEAD THAT WAY, BUT NOT THERE
              </Text>
              <Text style={styles.calibrationBody}>
                Something along the lines of “yes, but…”, an agreement with an
                objection that results in a different destination.
              </Text>
            </View>
            <Pressable onPress={() => asyncSet("2")}>
              <Ionicons
                style={styles.radioButtonIcon}
                name={value === "2" ? "radio-button-on" : "radio-button-off"}
              />
            </Pressable>
          </View>
          <View style={styles.radioButton}>
            <View style={styles.calibrationTextContainer}>
              <Text style={styles.calibrationTitle}>IGNORE IT</Text>
              <Text style={styles.calibrationBody}>
                The premise is irrelevant or should not be thought about in that
                way.
              </Text>
            </View>
            <Pressable onPress={() => asyncSet("3")}>
              <Ionicons
                style={styles.radioButtonIcon}
                name={value === "3" ? "radio-button-on" : "radio-button-off"}
              />
            </Pressable>
          </View>
          <View style={styles.radioButton}>
            <View style={styles.calibrationTextContainer}>
              <Text style={styles.calibrationTitle}>
                GO IN THE OPPOSITE DIRECTION
              </Text>
              <Text style={styles.calibrationBody}>
                Disagree with the premise and a suggestion to go the opposite
                way.
              </Text>
            </View>
            <Pressable onPress={() => asyncSet("4")}>
              <Ionicons
                style={styles.radioButtonIcon}
                name={value === "4" ? "radio-button-on" : "radio-button-off"}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "nowrap",
    elevation: 3,
    overflow: "hidden",
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#000",
    alignItems: "center",
    padding: 15,
  },
  subtitleStyle: {
    flex: 4 / 5,
    padding: 5,
    fontSize: 16,
    fontFamily: "AvenirBold",
    color: "#fff",
    lineHeight: 18,
  },
  loremIpsum: {
    flex: 1 / 5,
    color: "#fff",
    fontSize: 40,
    paddingRight: 5,
    fontFamily: "AvenirBold",
    textAlign: "center",
    justifyContent: "center",
  },
  radioButtonContainer: {
    flexGrow: 1,
    paddingTop: 5,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  radioButton: {
    backgroundColor: "#BFBFBF",
    flexGrow: 1 / 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    margin: 3,
  },
  radioButtonIcon: {
    alignItems: "center",
    fontSize: 50,
    paddingRight: 5
  },
  calibrationTextContainer: {
    flex: 5 / 6,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 5,
  },
  calibrationTitle: {
    fontFamily: "AvenirBold",
    fontSize: RFValue(18),
    paddingBottom: 2
  },
  calibrationBody: {
    fontFamily: "Avenir",
    fontSize: RFValue(14),
  },
});

export default CalibrationSignpostScreen;
