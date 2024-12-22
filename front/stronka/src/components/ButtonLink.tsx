import React, { useState } from "react";

interface ButtonLinkProps {
  /** The text shown on the button */
  text: string;
  /** The URL the button opens (in a new tab) */
  link: string;
  /** The default (non-hover) background color */
  backgroundColor: string;
  /** The background color when hovering over the button */
  hoverColor: string;
  /** (Optional) Font size for the text (e.g. "16px" or "1rem") */
  fontSize?: string;
  /** (Optional) Font family (e.g., "Arial", "Roboto") */
  fontFamily?: string;
  /** (Optional) Text color */
  textColor?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  text,
  link,
  backgroundColor,
  hoverColor,
  fontSize,
  fontFamily,
  textColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Default text color (used if textColor not provided)
  const DEFAULT_TEXT_COLOR = "#ffffff";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          border: "none",
          // Switch background color based on hover
          backgroundColor: isHovered ? hoverColor : backgroundColor,
          // Use provided textColor or the default
          color: textColor ?? DEFAULT_TEXT_COLOR,
          // Text properties
          fontSize,
          fontFamily,
          fontWeight: "bold",
          borderRadius: "16px",
        }}
      >
        {text}
      </button>
    </a>
  );
};

export default ButtonLink;
