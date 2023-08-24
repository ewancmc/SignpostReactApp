import { View, FlatList, TouchableOpacity } from "react-native";
import SignpostCard from "../components/SignpostCard";
import SignpostData from "../data/signpost_data";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const SignpostListScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <View style={{ paddingTop: insets.top }}>
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
    </SafeAreaProvider>
  );
};

export default SignpostListScreen;
