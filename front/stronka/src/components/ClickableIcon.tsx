import React from "react";

type IconProps = {
  /** URL that the icon will link to (e.g., Discord invite link) */
  link: string;
  /** Path or URL to the icon image (e.g., "discord.png" or "/icons/discord.svg") */
  iconSrc: string;
  /** Alternate text for the image (defaults to "Discord Icon") */
  alt?: string;
  /** Width of the icon (e.g., "40px", "3rem"), optional */
  width?: string;
  /** Height of the icon, optional */
  height?: string;
};

const ClickableIcon: React.FC<IconProps> = ({
  link,
  iconSrc,
  alt = "Discord Icon",
  width = "64px",
  height = "64px",
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "inline-block" }}
    >
      <img
        src={iconSrc}
        alt={alt}
        style={{
          borderRadius: "16px",
          width,
          height,
          cursor: "pointer", // indicates it's clickable
        }}
      />
    </a>
  );
};

export default ClickableIcon;
