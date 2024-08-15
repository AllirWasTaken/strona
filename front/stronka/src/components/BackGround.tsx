import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface BackGroundProps {
  children?: React.ReactNode;
  color: string;
  opacity: number;
  className?: string;
}

const BackGround: React.FC<BackGroundProps> = ({
  children,
  color,
  opacity,
  className,
}) => {
  const BackGroundStyle = {
    backgroundColor: color,
    opacity: opacity,
    width: "100%",
    height: "100%",
    padding: "1rem",
    borderRadius: "0.25rem",
  };

  return (
    <div className={`BackGround ${className}`} style={BackGroundStyle}>
      {children}
    </div>
  );
};

export default BackGround;
