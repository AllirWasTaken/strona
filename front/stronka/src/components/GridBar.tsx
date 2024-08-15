import React, { useState, CSSProperties } from "react";

interface Panel {
  name: string;
  path: string;
  color: string;
  hoverColor: string;
}

interface TextFormatting {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  textAlign?: "left" | "center" | "right";
}

interface GridBarProps {
  panels: Panel[];
  onPanelClick: (panelName: string) => void;
  textFormatting?: TextFormatting;
}

const GridBar: React.FC<GridBarProps> = ({
  panels,
  onPanelClick,
  textFormatting,
}) => {
  const [hoveredPanelIndex, setHoveredPanelIndex] = useState<number | null>(
    null
  );

  return (
    <div className="d-flex">
      {panels.map((panel, index) => (
        <div
          key={index}
          className="flex-fill p-3"
          style={{
            backgroundColor:
              hoveredPanelIndex === index ? panel.hoverColor : panel.color,
            cursor: "pointer",
            borderRight: index < panels.length - 1 ? "2px solid #ccc" : "none",
            ...textFormatting, // Apply text formatting styles
          }}
          onClick={() => onPanelClick(panel.path)}
          onMouseEnter={() => setHoveredPanelIndex(index)}
          onMouseLeave={() => setHoveredPanelIndex(null)}
        >
          <span style={{ ...textFormatting }}>{panel.name}</span>
        </div>
      ))}
    </div>
  );
};

export default GridBar;
