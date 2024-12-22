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
  const backgroundImageStyle: React.CSSProperties = {
    position: "absolute",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "relative",
    backgroundAttachment: "fixed" /* This is the key property */,
    zIndex: -1, // Ensures the background image stays behind the content
  };

  return <div style={backgroundImageStyle}>{children}</div>;
};

export default BackgroundImage;
