import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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
        setCalibration1Total(
          parsed.filter(function (i) {
            return i.calibration === "1";
          }).length
        );
        setCalibration2Total(
          parsed.filter(function (i) {
            return i.calibration === "2";
          }).length
        );
        setCalibration3Total(
          parsed.filter(function (i) {
            return i.calibration === "3";
          }).length
        );
        setCalibration4Total(
          parsed.filter(function (i) {
            return i.calibration === "4";
          }).length
        );
      }
    } catch (e) {}
  };
  getCalibration();

  function toPercentage(number, divisor) {
    if (number === 0) {
      return "0%";
    } else {
      return new Intl.NumberFormat("default", {
        style: "percent",
        maximumFractionDigits: 0,
      }).format(number / divisor);
    }
  }

  return (
    <SafeAreaProvider>
      <View
        style={[
          styles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        <View style={styles.titleRow}>
          <Text style={styles.loremIpsum}>Signposts Calibrated</Text>
          <Text style={styles.subtitleStyle}>
            {toPercentage(calibrationTotal, 34)}
          </Text>
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
            <View style={styles.radioButtonIcon}>
              <Text style={styles.calibrationPercent}>
                {toPercentage(calibration1Total, calibrationTotal)}
              </Text>
            </View>
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
            <View style={styles.radioButtonIcon}>
              <Text style={styles.calibrationPercent}>
                {toPercentage(calibration2Total, calibrationTotal)}
              </Text>
            </View>
          </View>
          <View style={styles.radioButton}>
            <View style={styles.calibrationTextContainer}>
              <Text style={styles.calibrationTitle}>IGNORE IT</Text>
              <Text style={styles.calibrationBody}>
                The premise is irrelevant or should not be thought about in that
                way.
              </Text>
            </View>
            <View style={styles.radioButtonIcon}>
              <Text style={styles.calibrationPercent}>
                {toPercentage(calibration3Total, calibrationTotal)}
              </Text>
            </View>
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
            <View style={styles.radioButtonIcon}>
              <Text style={styles.calibrationPercent}>
                {toPercentage(calibration4Total, calibrationTotal)}
              </Text>
            </View>
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
    flex: 2 / 5,
    padding: 5,
    fontSize: 50,
    textAlign: "right",
    fontFamily: "AvenirBold",
    color: "#fff",
  },
  loremIpsum: {
    flex: 3 / 5,
    color: "#fff",
    fontSize: 30,
    lineHeight: 35,
    paddingRight: 5,
    fontFamily: "AvenirBold",
    justifyContent: "center",
  },
  radioButtonContainer: {
    flexGrow: 1,
    paddingTop: 5,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  radioButton: {
    backgroundColor: "#dbdbdb",
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
    paddingRight: 5,
  },
  calibrationPercent: {
    padding: 5,
    fontSize: 40,
    textAlign: "center",
    fontFamily: "AvenirBold",
    color: "#000",
  },
  calibrationTextContainer: {
    flex: 5 / 6,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 5,
  },
  calibrationTitle: {
    fontFamily: "AvenirBold",
    fontSize: RFValue(17),
    paddingBottom: 2,
  },
  calibrationBody: {
    fontFamily: "Avenir",
    fontSize: RFValue(15),
  },
});

export default CalibrationDetailsScreen;
