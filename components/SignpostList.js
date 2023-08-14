import { View, FlatList, TouchableOpacity } from "react-native";
import SignpostCard from "./SignpostCard";
import SignpostData from "../data/signpost_data.json";

const SignpostList = ({ navigation }) => {
  console.log(Object(SignpostData[0]['body_text']))
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
