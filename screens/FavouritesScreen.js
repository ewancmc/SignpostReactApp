import * as React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import SignpostCard from "../components/SignpostCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavouritesScreen = ({ navigation }) => {
  //initialises favouriteID state
  const [favouritesIDList, setFavouritesIDList] = React.useState([]);

  //gets favourite list
  const getFavourites = async () => {
    //gets all keys in async storage
    try {
      const itemsList = [];
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
      for (i in items) {
        itemsList.push(JSON.parse(items[i][1]));
      }
      setFavouritesIDList(itemsList);
      return items;
    } catch (error) {
      console.log(error, "problemo");
    }
  };
  getFavourites();

  if (favouritesIDList.length == 0) {
    return (<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text
      style={{ fontSize: 26, fontWeight: "bold" }}
    >
      Add a favourite
    </Text>
  </View>)
  } else {
  return (
     <View>
      <FlatList
        data={favouritesIDList}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("SignpostDetails", {
                  item: item,
                })
              }
            >
              <View>
                <SignpostCard signpost={item} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  )}
};

export default FavouritesScreen;
