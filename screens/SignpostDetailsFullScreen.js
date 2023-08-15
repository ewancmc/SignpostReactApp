import React from "react";
import { Text, View } from "react-native";
import SignpostCard from "../components/SignpostCard";
import { FlatList } from "react-native-gesture-handler";

const SignpostDetailsFullScreen = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View>
      <SignpostCard signpost={item} />
    </View>
  );
};

export default SignpostDetailsFullScreen;
