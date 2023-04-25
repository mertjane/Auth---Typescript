import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { CustomFonts } from "./styles/CustomFonts";
import Auth from "./pages/Auth";
import { BodyContainer, Container, providerStyle } from "./global.styles";
import AuthHeader from "./components/header/Header";
import AuthFooter from "./components/footer/Footer";
import Articles from "./components/articles/Articles";

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={providerStyle} withGlobalStyles withNormalizeCSS>
        <CustomFonts />
        <Container>
          <AuthHeader />
          <BodyContainer>
            <Articles />
            <Auth />
          </BodyContainer>
          <AuthFooter />
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
