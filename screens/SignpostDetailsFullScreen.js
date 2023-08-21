import React from "react";
import { View, Dimensions, SafeAreaView } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useSwipe } from "../hooks/useSwipe";
import SignpostDetailsCard from "../components/SignpostDetailsCard";


const SignpostDetailsFullScreen = ({ route, navigation }) => {
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);
  const insets = useSafeAreaInsets();
  const windowheight = Dimensions.get("window").height - insets.bottom - insets.top - tabBarHeight;
  const tabBarHeight = useBottomTabBarHeight();
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
      height: windowheight,
    });
  }

  function navigateGoBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaProvider onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom + tabBarHeight +230,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <SignpostDetailsCard signpost={item} />
      </View>
    </SafeAreaProvider>
  );
};

export default SignpostDetailsFullScreen;
