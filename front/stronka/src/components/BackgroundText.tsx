import React, { CSSProperties, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

interface BackgroundTextProps {
  backgroundColor?: string;
  backgroundImage?: string;
  markdown?: string;
  children?: ReactNode; // Optional if you want to support both
  textColor?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  padding?: string | number;
  borderRadius?: string | number;
  style?: CSSProperties;
  className?: string;
}

const BackgroundText: React.FC<BackgroundTextProps> = ({
  backgroundColor = "#ffffff",
  backgroundImage = "",
  markdown = "",
  children,
  textColor = "#000000",
  fontSize = "16px",
  fontWeight = "normal",
  padding = "20px",
  borderRadius = "0px",
  style = {},
  className = "",
}) => {
  // Define container styles with type assertions where necessary
  const containerStyle: CSSProperties = {
    position: "relative",
    backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding,
    borderRadius,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    ...style,
    minHeight: "420px", // Adjust as needed
  };

  // Define text styles with type assertions where necessary
  const textStyle: CSSProperties = {
    position: "absolute" as React.CSSProperties["position"],
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: textColor,
    fontSize,
    fontWeight,
    textAlign: "left",
    wordWrap: "break-word",
    width: "98%",
    overflowY: "auto" as React.CSSProperties["overflowY"],
    maxHeight: "90%",
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={textStyle}>
        {markdown ? (
          <ReactMarkdown
            children={markdown}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSanitize]}
            className="background-text-content"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default BackgroundText;
