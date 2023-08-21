import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function AboutScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: insets.top,
        }}
      >
        <Text style={styles.textItem}>
          This app is based on the book The Pilgrim’s Guide to the Workplace by
          Dr. Agustin Chevez.
        </Text>
        <Text style={styles.textItem}>
          It’s not necessary to read the book to use this app, but you will get
          much more out of the Signposts, and understand the illustrations
          better, if you do so.
        </Text>
        <Text style={styles.textItem}>
          This book is Open Access and can be downloaded for free. Reading not
          your thing? There is also an audiobook version.
        </Text>
        <Text style={{ padding: 5 }}>More about the book here:</Text>
        <Image
          style={styles.image}
          source={require("../assets/book_cover.png")}
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
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  textItem: {
    width: 350,
    padding: 10,
    textAlign: "auto",
  },
  image: {
    aspectRatio: 0.608,
    height: 200,
  },
  footerContainer: {
    padding:30,
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
