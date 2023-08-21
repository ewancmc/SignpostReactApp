import * as React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import SignpostCard from "../components/SignpostCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const FavouritesScreen = ({ navigation }) => {
  //initialises hook so screen can be unmounted when unfocussed
  const isFocussed = useIsFocused();

  //initialises safe area insets
  const insets = useSafeAreaInsets();

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

  if (isFocussed) {
    if (favouritesIDList.length == 0) {
      return (
        <SafeAreaProvider>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingTop: insets.top,
            }}
          >
            <Text style={{ fontSize: 26, fontWeight: "bold" }}>
              Add a favourite
            </Text>
          </View>
        </SafeAreaProvider>
      );
    } else {
      return (
        <SafeAreaProvider>
          <View style={{ paddingTop: insets.top }}>
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
        </SafeAreaProvider>
      );
    }
  } else {
    return (null)
  }
};

export default FavouritesScreen;
