import React from "react";
import styled from "styled-components";

interface Photo {
  id: number;
  url: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40vw, 1fr));
  gap: 16px;
`;

const GridItem = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <Grid>
      {photos.map((photo) => (
        <GridItem key={photo.id}>
          <Image src={photo.url} alt={`Photo ${photo.id}`} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default PhotoGrid;
