import React, { useState } from "react";
import { FlatList, Button } from "react-native";
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
  const [counter, setCounter] = useState(1);

  return (
    <Button
      title="increase"
      onPress={() => {
        console.log(setCounter(counter + 1));
        console.log(counter);
        return setCounter(counter + 1);
      }}
    />
  );
};

export default ImageScreen;
