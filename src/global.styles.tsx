import styled from "@emotion/styled";

export const MainContainer = styled.main`
  display: grid;
  cursor: default;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
  grid-template-rows: 80px 1fr 90px;
  height: 100vh;
  @media only screen and (max-width: 1600px) {
    grid-template-rows: 120px 1fr;
  }
  @media only screen and (max-width: 768px) {
    grid-template-rows: 120px 1fr;
  }
  @media only screen and (max-height: 900px) {
    grid-template-rows: 1fr;
  }
`;

export const HeaderContainer = styled.header`
  grid-area: header;
  background-color: #fdfdfd;
  // border-bottom: 1px solid #dddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 120px;
  @media only screen and (max-height: 900px) {
    display: none;
  }
`;
export const ArticleContainer = styled.article`
  grid-area: content;
  width: 100%;
  display: flex;
  background-color: #fdfdfd;
  align-items: flex-start;
  position: relative;
  padding: 40px 0;
  @media only screen and (max-width: 1600px) {
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
  }
  @media only screen and (max-height: 900px) {
    height: 100vh;
    padding: 30px 0;
  }
  @media only screen and (max-width: 768px) {
    height: calc(100%-120px);
    padding: 0;
  }
`;

export const HomeContainer = styled.div`
  color: white;
  width: 100vw;
  background-color: #fdfdfd;
  display: flex;
  align-items: flex-start;
  padding-top: 8rem;
  text-align: center;
`;

export const VerifyContainer = styled.div`
  width: 100vw;
  background-color: #fdfdfd;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem 0;
`;

export const FooterContainer = styled.footer`
  grid-area: footer;
  background-color: #fdfdfd;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1600px) {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const providerStyle = {
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
  fontFamily: "Inter, sans-serif",
  headings: { fontFamily: "Inter, sans-serif" },
};
