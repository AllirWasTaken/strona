import BackGround from "./BackGround";

interface PageContentProp {
  children?: React.ReactNode;
}

const PageContent: React.FC<PageContentProp> = ({ children }) => {
  const backgroundColor = "#333333";
  return (
    <div
      style={{
        marginLeft: "2vw",
        marginRight: "2vw",
      }}
    >
      <BackGround color={backgroundColor} opacity={0.9}>
        {children}
      </BackGround>
    </div>
  );
};

export default PageContent;
