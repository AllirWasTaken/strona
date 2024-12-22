import React from "react";
import MainBlock from "./components/MainBlock";

const About: React.FC = () => {
  return (
    <MainBlock>
      <div
        style={{
          marginRight: "2vw",
          marginLeft: "2vw",
          marginTop: "5vh",
          width: "96vw",
        }}
      >
        <img src={"rat.jpg"} alt="Logo" />
      </div>
    </MainBlock>
  );
};

export default About;
