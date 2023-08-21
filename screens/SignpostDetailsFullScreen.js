import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useSwipe } from "../hooks/useSwipe";
import SignpostDetailsCard from "../components/SignpostDetailsCard";
import { ScrollView } from "react-native-gesture-handler";

const SignpostDetailsFullScreen = ({ route, navigation }) => {
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);
  const insets = useSafeAreaInsets();
  const { item } = route.params;

  function onSwipeLeft() {
    navigateFullDetails();
  }

  function onSwipeRight() {
    navigateGoBack();
  }
  function navigateFullDetails() {
    navigation.navigate("SignpostDetailsFull", {
      item: item,
    });
  }

  function navigateGoBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaProvider onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <View
        style={{ paddingTop: insets.top, paddingLeft: 10, paddingRight: 10 }}
      >
        <SignpostDetailsCard signpost={item} />
      </View>
    </SafeAreaProvider>
  );
};

export default SignpostDetailsFullScreen;
