import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={text}>Home</Text>
      <TouchableOpacity
        style={button}
        onPress={() => navigation.navigate("Components")}
      >
        <Text style={buttonText}>Go to Component Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={button}
        onPress={() => navigation.navigate("List")}
      >
        <Text style={buttonText}>Go to List Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={button}
        onPress={() => navigation.navigate("Image")}
      >
        <Text style={buttonText}>Go to Image Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const { create } = StyleSheet;

const styles = create({
  text: {
    fontSize: 30,
    marginHorizontal: 5,
  },
  button: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 18,
    color: "white",
    marginVertical: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
  },
});

const { text, button, buttonText } = styles;

export default HomeScreen;
