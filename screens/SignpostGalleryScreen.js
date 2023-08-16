import { View, FlatList, TouchableOpacity } from "react-native";
import SignpostGalleryCard from "../components/SignpostGalleryCard";
import SignpostData from "../data/signpost_data";

const SignpostGalleryScreen = ({ navigation, props }) => {
  return (
    <View>
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
  );
};

export default SignpostGalleryScreen;
