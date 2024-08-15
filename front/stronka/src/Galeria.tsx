import React from "react";
import MainBlock from "./components/MainBlock";
import PhotoGrid from "./components/PhotoGrid";
import PageContent from "./components/PageContent";
const Galeria: React.FC = () => {
  const photos = [
    { id: 1, url: "kot.jpg" },
    { id: 2, url: "kot.jpg" },
    { id: 3, url: "kot.jpg" },
    { id: 4, url: "kot.jpg" },
    { id: 5, url: "kot.jpg" },
    { id: 6, url: "kot.jpg" },
    { id: 7, url: "kot.jpg" },
    { id: 8, url: "kot.jpg" },
    { id: 9, url: "kot.jpg" },
    { id: 10, url: "kot.jpg" },
    { id: 11, url: "kot.jpg" },
    { id: 12, url: "kot.jpg" },
    { id: 13, url: "kot.jpg" },
    { id: 14, url: "kot.jpg" },
    { id: 15, url: "kot.jpg" },
    { id: 16, url: "kot.jpg" },
  ];
  return (
    <MainBlock>
      <PageContent>
        <PhotoGrid photos={photos}></PhotoGrid>
      </PageContent>
    </MainBlock>
  );
};

export default Galeria;
