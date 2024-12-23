import React from "react";
import MainBlock from "./components/MainBlock";
import ButtonLink from "./components/ButtonLink";
import ClickableIcon from "./components/ClickableIcon";
import BackgroundText from "./components/BackgroundText";

const markdownContent = `
## MAD - Mechanized Armoured Division
**Najstarszy polski klan w Foxhole, który wciąż żyje.**

#### Co oferujemy w Foxhole?
Jesteśmy grupą specjalistów w zgranych akcjach pancernych, dzięki którym nasz klan zbudował legendę już w najwcześniejszych wojnach. Słynni jesteśmy z pomysłowości podczas operacji, koncentrując się na walkach pancernych, działaniach piechoty i logistyce, a także ciesząc się artylerią i partyzantką.

W naszych szeregach znajdują się gracze, którzy są z Foxhole od wczesnych etapów gry, sięgających 2017 roku, i którzy praktycznie budowali polską społeczność.

#### O nas
Jesteśmy grupą przyjaciół, którzy grają w różne gry, ale nasza aktywność skupia się wokół Foxhole. Gramy dla relaksu, jednak kiedy sytuacja tego wymaga, potrafimy się skupić. Nie korzystamy z ręczników, by wycierać pot – nasze podejście do gry jest pełne humoru. Lubimy podbijać zabawę i czerpać radość ze wspólnej gry.
`;

const Home: React.FC = () => {
  return (
    <MainBlock>
      <div
        style={{
          padding: "2vw",
          textAlign: "center",
          opacity: "80%",
        }}
      >
        <BackgroundText
          backgroundColor="#111111"
          markdown={markdownContent}
          textColor="#ffffff"
          fontSize="20px"
          fontWeight="normal"
          padding="40px"
          borderRadius="8px"
        />
      </div>

      <div
        style={{
          marginTop: "2vw",
          textAlign: "center",
        }}
      >
        <ButtonLink
          text="DOŁĄCZ TERAZ!"
          link="https://discord.gg/qfpTVX4hrq"
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
            marginTop: "4vw",
          }}
        >
          <ClickableIcon
            link="https://discord.gg/qfpTVX4hrq"
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
