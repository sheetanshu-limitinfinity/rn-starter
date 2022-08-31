import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { v4 as uuidv4 } from "uuid";

const ListScreen = () => {
  const friends = [
    { name: "John", age: 30 },
    { name: "Joffrey", age: 16 },
    { name: "Tyrion", age: 44 },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={() => uuidv4()}
      data={friends}
      renderItem={({ item }) => {
        const { name, age } = item;
        return (
          <View style={genericStyles}>
            <Text style={textStyle}>
              {name} - Age {age.toString()}
            </Text>
          </View>
        );
      }}
    />
  );
};

const { create } = StyleSheet;

const styles = create({
  genericStyles: {
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "2%",
  },
  textStyle: {
    fontSize: 20,
    color: "red",
    padding: "2%",
  },
});

const { textStyle, genericStyles } = styles;

export default ListScreen;
