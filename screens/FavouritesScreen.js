import * as React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import SignpostCard from "../components/SignpostCard";
import SignpostData from "../data/signpost_data";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavouritesScreen = ({ navigation }) => {
  //initialises favouriteID state
  const [favouritesIDList, setFavouritesIDList] = React.useState([]);

  //gets favourite list
  const getFavourites = async () => {
    //gets all keys in async storage
    try {
      const keys = await AsyncStorage.getAllKeys()
      const items = await AsyncStorage.multiGet(keys)
      setFavouritesIDList(items)
      return items
  } catch (error) {
      console.log(error, "problemo")
  }
  };
  getFavourites()

  return (
    <View>
      <FlatList
        data={favouritesIDList}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Text style={{ padding: 20 }}>{item}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default FavouritesScreen;
