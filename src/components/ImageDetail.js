import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ImageDetail = ({ name, image }) => {
  return (
    <View style="cardDiv">
      <Image style={imageDiv} source={image} />
      <Text>Hello {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardDiv: {
    flex: 1,
    flexDirection: "column-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100%",
  },
  imageDiv: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

const { imageDiv, cardDiv } = styles;

export default ImageDetail;
