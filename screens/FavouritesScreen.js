import * as React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import SignpostCard from "../components/SignpostCard";
import SignpostData from "../data/signpost_data";
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
    try {
      let itemsList = [];
      if ((await AsyncStorage.getItem("favouriteID")) === null) {
      } else {
        const items = await AsyncStorage.getItem("favouriteID");
        itemsParsed = JSON.parse(items);
        filterBy = {id: itemsParsed}
        itemsList = SignpostData.filter(function (o) {
          return Object.keys(filterBy).every(function (k) {
            return filterBy[k].some(function (f) {
              return o[k] === f;
            });
          });
        });
        setFavouritesIDList(itemsList);
      }
    } catch (error) {
      console.log(error, "problemo");
    }
  };
  getFavourites();

  if (isFocussed) {
    if (favouritesIDList.length > 0) {
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
    } else {
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
            <Text style={{ fontSize: 26, fontFamily: "AvenirBold" }}>
              Add a favourite
            </Text>
          </View>
        </SafeAreaProvider>
      );
    }
  } else {
    return null;
  }
};

export default FavouritesScreen;
