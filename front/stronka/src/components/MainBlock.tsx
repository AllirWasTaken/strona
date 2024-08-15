import React from "react";
import GridBar from "./GridBar";
import BackgroundImage from "./BackgroundImage";
import useGoTo from "./UseGoTo";

interface MainProps {
  children?: React.ReactNode;
}

const MainBlock: React.FC<MainProps> = ({ children }) => {
  const banerColor = "#800080";
  const hoverColor = "#e84393";

  const panels = [
    { name: "Home", path: "/", color: banerColor, hoverColor: hoverColor },
    {
      name: "Galeria",
      path: "/galeria",
      color: banerColor,
      hoverColor: hoverColor,
    },
    {
      name: "Cennik",
      path: "/cennik",
      color: banerColor,
      hoverColor: hoverColor,
    },
    {
      name: "Terminarz",
      path: "/terminarz",
      color: banerColor,
      hoverColor: hoverColor,
    },
  ];
  const textFormatting = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center" as "center",
  };

  const goTo = useGoTo();

  const handlePanelClick = (panelName: string) => {
    goTo(panelName);
  };

  return (
    <BackgroundImage imageUrl="kot.jpg">
      <div
        style={{
          marginRight: "2vw",
          marginLeft: "2vw",
          marginTop: "5vh",
          height: "20vh",
          width: "96vw",
        }}
      >
        <GridBar
          panels={panels}
          onPanelClick={handlePanelClick}
          textFormatting={textFormatting}
        ></GridBar>
        {children}
      </div>
    </BackgroundImage>
  );
};

export default MainBlock;
