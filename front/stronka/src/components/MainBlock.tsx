import React from "react";
import GridBar from "./GridBar";
import BackgroundImage from "./BackgroundImage";
import useGoTo from "./UseGoTo";

interface MainProps {
  children?: React.ReactNode;
}

const MainBlock: React.FC<MainProps> = ({ children }) => {
  const banerColor = "#222222";
  const hoverColor = "#333333";

  const panels = [
    {
      name: "MAD",
      path: "/",
      color: banerColor,
      hoverColor: hoverColor,
    },
    {
      name: "Operacje",
      path: "/operations",
      color: banerColor,
      hoverColor: hoverColor,
    },
    {
      name: "O nas",
      path: "/about",
      color: banerColor,
      hoverColor: hoverColor,
    },
  ];
  const textFormatting = {
    fontFamily: "Arial, sans-serif",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center" as "center",
  };

  const goTo = useGoTo();

  const handlePanelClick = (panelName: string) => {
    goTo(panelName);
  };

  return (
    <BackgroundImage imageUrl="background.jpg">
      <div
        style={{
          marginRight: "2vw",
          marginLeft: "2vw",
          marginTop: "1vh",
          width: "96vw",
        }}
      >
        <GridBar
          panels={panels}
          onPanelClick={handlePanelClick}
          textFormatting={textFormatting}
        ></GridBar>
      </div>
      {children}
    </BackgroundImage>
  );
};

export default MainBlock;
