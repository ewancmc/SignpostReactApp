import * as React from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AboutScreen({ navigation }) {
  //Initialise state for  favourites list
  const [favouritesIDList, setFavouritesIDList] = React.useState([]);
  const [favouritesList, setFavouritesList] = React.useState([]);

  clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log("Done.");
  };

  //  //gets favourite list
  //  getFavourite = async () => {
  //    //gets all keys in async storage
  //    let keys = [];
  //    try {
  //      keys = await AsyncStorage.getAllKeys();
  //      setFavouritesIDList(keys);
  //
  //    } catch (e) {
  //      // read key error
  //    }
  //
  //    //returns values for keys
  //  };
  //gets favourite list
  getFavouriteID = async () => {
    //gets all keys in async storage
    let keys = [];
    keys = await AsyncStorage.getAllKeys();
    setFavouritesIDList(keys);
  };
  getFavouriteID();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Clear async storage"
        onPress={() => clearAll()}
        style={{ fontSize: 26, fontWeight: "bold" }}
      />
      <Button
        title="Print favourites ID list"
        onPress={() => console.log(favouritesIDList)}
        style={{ fontSize: 26, fontWeight: "bold" }}
      />
      <Button
        title="Print favourites list"
        onPress={() => console.log(favouritesList)}
        style={{ fontSize: 26, fontWeight: "bold" }}
      />
    </View>
  );
}
