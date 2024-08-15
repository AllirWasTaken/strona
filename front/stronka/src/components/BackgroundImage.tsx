// src/components/BackgroundImage.tsx
import React from "react";

interface BackgroundImageProps {
  imageUrl: string;
  height?: string;
  children?: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  height = "100vh",
  children,
}) => {
  const containerStyle = {
    position: "relative" as const,
    height: height,
    width: "100%",
    overflow: "hidden",
  };

  const backgroundImageStyle = {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1, // Ensures the background image stays behind the content
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundImageStyle} />
      {children}
    </div>
  );
};

export default BackgroundImage;
