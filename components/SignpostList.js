import { View, FlatList, TouchableOpacity } from "react-native";
import SignpostCard from "./SignpostCard";
import SignpostData from "../data/signpost_data";

const SignpostList = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={SignpostData}
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
              <SignpostCard signpost={item} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SignpostList;
