import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Linking,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { Link } from "@react-navigation/native";

export default function AboutScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  // clears async storage and resets user data on app 
  clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log("Done.");
  };

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <ScrollView>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingTop: insets.top,
            }}
          >
            <View style={styles.topContainer}>
              <Text style={styles.textItem}>
                This app is based on the book The Pilgrim’s Guide to the
                Workplace by Dr. Agustin Chevez.
              </Text>
              <Text style={styles.textItem}>
                It’s not necessary to read the book to use this app, but you
                will get much more out of the Signposts, and understand the
                illustrations better, if you do so.
              </Text>
              <Text style={styles.textItem}>
                This book is Open Access and can be downloaded for free. Reading
                not your thing? There is also an audiobook version.
              </Text>
            </View>
            <View style={styles.bookContainer}>
              <Text style={styles.bookText}>More about the book here:</Text>
              <Pressable
                onPress={() => {
                  Linking.openURL(
                    "https://www.achevez.com/the-pilgrim-s-guide-to-the-workplace"
                  );
                }}
              >
                <Image
                  style={styles.image}
                  source={require("../assets/book_cover.png")}
                />
              </Pressable>
            </View>
            <Button
              title="Clear async storage"
              onPress={() => clearAll()}
              style={{ fontSize: 26, fontWeight: "bold" }}
            />
            <View style={styles.footerContainer}>
              <Text style={styles.textFooter}>
                Images created by Midjourney from prompts by the author.
              </Text>
              <Text style={styles.textFooter}>
                This app has been developed by Ewan Clarke-McIntyre.
              </Text>
              <Text style={styles.textFooter}>All rights reserved 2023 ©</Text>
            </View>
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  bookContainer: { alignItems: "center" },
  textItem: {
    width: 350,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    fontFamily: "Avenir",
  },
  bookText: {
    fontFamily: "Avenir",
    fontSize: 15,
    padding: 5,
    opacity: 0.6,
  },
  image: {
    aspectRatio: 0.608,
    height: 200,
  },
  footerContainer: {
    padding: 30,
    justifyContent: "flex-end",
  },
  textFooter: {
    width: 350,
    fontSize: 10,
    padding: 2,
    opacity: 0.5,
    textAlign: "center",
  },
});
