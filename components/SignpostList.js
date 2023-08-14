import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Signpost from "./Signpost";
import SignpostData from "../data/signpost_data.json";

const SignpostList = (props) => {
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
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("SignpostDetails", {
                id: item.id,
              })
            }
          >
            <View>
              <Signpost signpost={item} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SignpostList;
