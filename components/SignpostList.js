import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import SignpostDetails from "./SignpostDetails";
import SignpostData from "../data/signpost_data.json";

const SignpostList = () => {
  //const [isLoading, setLoading] = useState(false);
  //const [signposts, setSignposts] = useState([]);
  //
  //getSignposts = () => {
  //  fetch("../data/signpost_data.json")
  //    .then((response) => response.json())
  //    .then((json) => setSignposts(json))
  //    .catch((error) => console.error(error))
  //    .finally(() => setLoading(false));
  //};
  //
  //useEffect(() => {
  //  setLoading(true);
  //  getSignposts();
  //}, []);

  return (
    <View>
      <FlatList
        data={SignpostData}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <Text>{item.title} </Text>}
      />
    </View>
  );
};

export default SignpostList;
