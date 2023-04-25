import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 80px;
  border-radius: 0;
  background-color: #008ef4;
`;

export const HeaderContainer = styled.header`
  height: 96px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 110px;
  position: absolute;
  top: 0;
  @media only screen and (max-width: 1600px) {
    padding: 0 40px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 0 120px;
    position: fixed;
    z-index: 999;
  }
`;

export const FooterContainer = styled.footer`
  height: 66px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media only screen and (max-width: 1600px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ArticleContainer = styled.div`
  width: 73%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: start;
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
