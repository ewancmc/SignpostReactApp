import React, { memo } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

function SignpostDetailsCard(props) {
  const bodyText = props.signpost.body_text;
  return (
      <View style={[styles.container]}>
        <View style={styles.bodyContent}>
          <View style={styles.titleRow}>
            <Text style={styles.loremIpsum}>{props.signpost.id}</Text>
            <Text style={styles.subtitleStyle}>{props.signpost.title}</Text>
          </View>
        </View>
        <View style={styles.cardBody2}>
          <View style={styles.bodyContent2}>
            <Text style={styles.subtitleStyle2}>
              Key Chapters: {props.signpost.key_chapters}
            </Text>
          </View>
        </View>

        <FlatList
          data={bodyText}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cardBody2}>
              <View style={styles.bodyContent2}>
                <Text style={{ fontFamily: "Avenir" }}>
                  <Text style={{ fontFamily: "AvenirBold" }}>
                    {props.signpost.id - 0}.{item.id + " "}
                  </Text>
                  {item.text}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "nowrap",
    backgroundColor: "#000",
    elevation: 3,
    overflow: "hidden",
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    left: 80,
    width: 259,
    top: 0,
  },
  cardBody2: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bodyContent: {
    padding: 20,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingBottom: 5,
    width:280,
  },
  bodyContent2: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    justifyContent: "center",
    borderBottomWidth: 2,
  },
  subtitleStyle: {
    padding: 5,
    paddingRight: 20,
    fontSize: 16,
    fontFamily: "AvenirBold",
    color: "#fff",
    lineHeight: 16,
  },
  subtitleStyle2: {
    fontSize: 16,
    fontFamily: "AvenirBold",
    color: "#000",
    lineHeight: 16,
  },
  loremIpsum: {
    color: "#fff",
    fontSize: 40,
    paddingRight:10,
    fontFamily: "AvenirBold",
    textAlign: "center",
    justifyContent: "center",
  },
  rectStack: {
    left: 5,
    width: 81,
    height: 80,
    position: "absolute",
  },
});

export default memo(SignpostDetailsCard);
