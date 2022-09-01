import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ImageDetail = ({ name, image }) => {
  console.log(image);
  return (
    <View>
      <Image style={imageDiv} source={image} />
      <Text>Hello {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewDiv: {
    flex: 1,
    flexDirection: "row",
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageDiv: {
    width: "100%",
  },
});

const { imageDiv } = styles;

export default ImageDetail;
