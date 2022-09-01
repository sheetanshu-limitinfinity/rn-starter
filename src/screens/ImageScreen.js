import React from "react";
import { FlatList } from "react-native";
import { v4 as uuidv4 } from "uuid";
import ImageDetail from "../components/ImageDetail";

const images = [
  {
    name: "Rand One",
    image: require("../../assets/396c0fe77fc94c3f0199ec8243421662.jpeg"),
  },
  {
    name: "Rand Two",
    image: require("../../assets/Saiee-Manjrekar-Youngest-Bollywood-Actresses.jpeg"),
  },
  {
    name: "Rand Three",
    image: require("../../assets/bollywood-actresses-in-saree.jpeg"),
  },
  {
    name: "Rand Four",
    image: require("../../assets/B-Town-Actress-Janhvi-Kapoor.jpg.jpeg"),
  },
];

const ImageScreen = () => {
  return (
    <FlatList
      keyExtractor={() => uuidv4()}
      data={images}
      renderItem={({ item }) => {
        return <ImageDetail name={item.name} image={item.image} />;
      }}
    />
  );
};

export default ImageScreen;
