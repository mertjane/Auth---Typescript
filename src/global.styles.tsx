import { createStyles } from "@mantine/core";
import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 0 240px;
  position: absolute;
  top: 0;
  @media only screen and (max-width: 1024px) {
    padding: 0 20px;
    position: fixed;
    z-index: 999;
  }
`;

export const useStyles = createStyles((theme) => ({
  styledLogo: {
    color: "#ffff",
    "@media only screen and (max-width: 768px)": {
      color: "#008ef4",
    },
  },
  styledBrand: {
    color: "#ffff",
    cursor: "default",
    fontWeight: 900,
    "@media only screen and (max-width: 768px)": {
      color: "#008ef4",
    },
  },
}));

export const FooterContainer = styled.footer`
  height: 66px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

export const ArticleContainer = styled.div`
  height: auto;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  padding: 20px;
  right: 80px;
  top: 180px;
  @media only screen and (max-width: 1800px) {
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
