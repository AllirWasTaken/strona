// Operations.tsx
import React from "react";
import MainBlock from "./components/MainBlock";
import PhotoGrid from "./components/PhotoGrid";
import PageContent from "./components/PageContent";

// Define the MediaItem interface
interface MediaItem {
  id: number;
  type: "photo" | "video";
  url: string;
  description: string;
}

const Operations: React.FC = () => {
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: "photo",
      url: "uga.jpg", // Ensure this path is correct
      description: "Miesce godowe trucków",
    },
    {
      id: 2,
      type: "video",
      url: "https://www.youtube.com/watch?v=PEab_7CaTEk", // Ensure this path is correct
      description: "Noszenie BT na głowie",
    },
    {
      id: 3,
      type: "photo",
      url: "dog.jpg", // Ensure this path is correct
      description: "Dzieło sztuki",
    },
    {
      id: 4,
      type: "video",
      url: "https://youtu.be/ovbZx94l6vc", // Ensure this path is correct
      description: "No co? Przeżył",
    },
    {
      id: 5,
      type: "photo",
      url: "levitating.jpg", // Ensure this path is correct
      description: "Przyczepiony na taśme i dobrą wole",
    },
    {
      id: 6,
      type: "photo",
      url: "alot.jpg", // Ensure this path is correct
      description: "Zapasy gotowe",
    },
  ];

  return (
    <MainBlock>
      <PageContent>
        <PhotoGrid media={mediaItems} />
      </PageContent>
    </MainBlock>
  );
};

export default Operations;
