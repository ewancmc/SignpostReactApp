import { View, FlatList, TouchableOpacity } from "react-native";
import SignpostGalleryCard from "../components/SignpostGalleryCard";
import SignpostData from "../data/signpost_data";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const SignpostGalleryScreen = ({ navigation, props }) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, paddingTop: insets.top }}>
        <FlatList
          data={SignpostData}
          numColumns={2}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("SignpostDetails", {
                  item: item,
                })
              }
            >
              <View>
                <SignpostGalleryCard signpost={item} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default SignpostGalleryScreen;
