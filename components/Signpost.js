import React from "react";
import { Text, ScrollView } from "react-native";

const Signpost = (props) => {
  return (
    <ScrollView>
        <Text  style={{padding: 10 }}>{props.signpost.title}</Text>
    </ScrollView>
);
};
export default Signpost;
