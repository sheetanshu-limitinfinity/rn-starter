import React from "react";
import { View, Text, StyleSheet } from "react-native";
import "react-native-get-random-values";

const ComponentScreen = () => {
  const name = "John Snow";
  return (
    <View style={genericStyles}>
      <Text style={headerStyle}>Getting started with React Native!</Text>
      <Text style={textStyle}>My name is {name}</Text>
    </View>
  );
};

const { create } = StyleSheet;

const styles = create({
  genericStyles: {
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "2%",
  },
  headerStyle: {
    fontSize: 45,
  },
  textStyle: {
    fontSize: 20,
  },
});

const { headerStyle, textStyle, genericStyles } = styles;

export default ComponentScreen;
