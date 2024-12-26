// PhotoGrid.tsx
import React from "react";
import styled from "styled-components";

// Define the type for media items
export type MediaType = "photo" | "video";

export interface MediaItem {
  id: number;
  type: MediaType;
  url: string;
  description: string;
}

interface PhotoGridProps {
  media: MediaItem[];
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23vw, 1fr));
  gap: 16px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background-color: #f0f0f0; /* Placeholder background */
  border-radius: 8px;
  overflow: hidden;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
`;

// Helper component to embed YouTube videos
const YouTubeEmbed: React.FC<{ url: string }> = ({ url }) => {
  // Extract the video ID from the URL
  const getYouTubeID = (url: string) => {
    const regExp =
      /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : null;
  };

  const videoId = getYouTubeID(url);

  if (!videoId) {
    return <p>Invalid YouTube URL</p>;
  }

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    ></iframe>
  );
};

const PhotoGrid: React.FC<PhotoGridProps> = ({ media }) => {
  return (
    <Grid>
      {media.map((item) => (
        <GridItem key={item.id}>
          <MediaContainer>
            {item.type === "photo" ? (
              <StyledImage src={item.url} alt={`Media ${item.id}`} />
            ) : (
              <YouTubeEmbed url={item.url} />
            )}
          </MediaContainer>
          <Description>{item.description}</Description>
        </GridItem>
      ))}
    </Grid>
  );
};

export default PhotoGrid;
