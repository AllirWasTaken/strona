import React from "react";
import MainBlock from "./components/MainBlock";
import ButtonLink from "./components/ButtonLink";
import ClickableIcon from "./components/ClickableIcon";

const Home: React.FC = () => {
  return (
    <MainBlock>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <img
          src="MADlogo.jpg"
          alt="Logo"
          style={{
            width: "10vw",
            height: "10vw",
            marginLeft: "1.5vw",
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />

        <p
          style={{
            marginRight: "2vw",
            fontSize: "24px",
            color: "#ffffff",
            marginLeft: "2vw",
          }}
        >
          Tutaj sirnick zamieści TLDR naszego klanu; of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>

      <div
        style={{
          marginTop: "10vw",
          textAlign: "center",
        }}
      >
        <ButtonLink
          text="DOŁĄCZ TERAZ!"
          link="https://discord.com"
          backgroundColor="#222222"
          hoverColor="#333333"
          fontSize="64px"
          fontFamily="Arial, sans-serif"
          textColor="#f4f4f4"
        />
        <div
          style={{
            textAlign: "center",
            padding: "1rem 0",
            marginTop: "5vw",

            // You can add a background color or other styles if you like
          }}
        >
          <ClickableIcon
            link="https://discord.gg/YOUR_INVITE_HERE"
            iconSrc="discordLogo.jpg"
            alt="Discord Icon"
            width="64px"
            height="64px"
          />
        </div>
      </div>
    </MainBlock>
  );
};

export default Home;
