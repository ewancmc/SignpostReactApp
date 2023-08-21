import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";

function SignpostCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.subtitleStyle}>{props.signpost.title}</Text>
        </View>
      </View>
      <View style={styles.rectStack}>
        <View style={styles.rect}></View>
        <Text style={styles.loremIpsum}>{props.signpost.id}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    left: 99,
    width: 259,
    top: 0,
    height: 99
  },
  bodyContent: {
    padding: 5,
    paddingRight:10,
    flex: 1,
    justifyContent: 'center'
  },
  subtitleStyle: {
    fontSize: 17,
    fontFamily: 'Avenir',
    color: "#000",
    lineHeight: 18,
  },
  rect: {
    left: 1,
    width: 80,
    height: 80,
    position: "absolute",
    backgroundColor: "#000",
    top: 0
  },
  loremIpsum: {
    top: 15,
    left: 1,
    position: "absolute",
    color: "#fff",
    height: 77,
    width: 80,
    fontSize: 40,
    fontFamily: 'Avenir',
    textAlign: "center",
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  rectStack: {
    top: 9,
    left: 12,
    width: 81,
    height: 80,
    position: "absolute"
  }
});

export default memo(SignpostCard);
