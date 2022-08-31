import React from "react";
import { FlatList } from "react-native";
import { v4 as uuidv4 } from "uuid";
import ImageDetail from "../components/ImageDetail";

const images = [
  {
    name: "Rand One",
    image:
      "https://i.pinimg.com/736x/39/6c/0f/396c0fe77fc94c3f0199ec8243421662.jpg",
  },
  {
    name: "Rand Two",
    image:
      "https://www.scrolldroll.com/wp-content/uploads/2022/05/Saiee-Manjrekar-Youngest-Bollywood-Actresses.jpeg",
  },
  {
    name: "Rand Three",
    image:
      "https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/bollywood-actresses-in-saree.jpg",
  },
  {
    name: "Rand Four",
    image:
      "https://stylesatlife.com/wp-content/uploads/2022/02/B-Town-Actress-Janhvi-Kapoor.jpg.webp",
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
