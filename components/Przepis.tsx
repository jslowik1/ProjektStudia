import { Image, Text, View } from "react-native";
import { przepisy } from "../styles/przepisy";
import { Component, ReactElement } from "react";

const Przepis = (props: { title: string; image: string }): ReactElement => {
  return (
    <View style={przepisy.przepis}>
      <Image
        style={{ width: "100%", height: 200 }}
        source={{ uri: props.image }}
      />
      <View
        style={{
          padding: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 32 }}>{props.title}</Text>
        <Text>K: 0 W: 0 B: 0 T: 0</Text>
      </View>
    </View>
  );
};

export default Przepis;
