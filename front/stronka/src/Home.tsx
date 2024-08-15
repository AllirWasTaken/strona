import React from "react";
import MainBlock from "./components/MainBlock";
import BackGround from "./components/BackGround";

const Home: React.FC = () => {
  return (
    <MainBlock>
      <div
        style={{
          marginLeft: "2vw",
          marginRight: "2vw",
        }}
      >
        <BackGround color="#ffffff" opacity={0.8}></BackGround>
      </div>
    </MainBlock>
  );
};

export default Home;
