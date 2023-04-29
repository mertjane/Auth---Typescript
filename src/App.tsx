import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { Routes, Route, Navigate } from "react-router";
import { CustomFonts } from "./styles/CustomFonts";
import Auth from "./pages/Auth";
import {
  ArticleContainer,
  MainContainer,
  providerStyle,
} from "./global.styles";
import AuthHeader from "./components/header/Header";
import AuthFooter from "./components/footer/Footer";
import Articles from "./components/articles/Articles";
import Home from "./pages/Home";
import { useSelector } from "react-redux";

export default function App() {
  const { auth } = useSelector((state: any) => state);

  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const ProtectedRoute = ({ children }: any) => {
    if (!auth.id) {
      return <Navigate to="/auth" />;
    }
    return children;
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={providerStyle} withGlobalStyles withNormalizeCSS>
        <CustomFonts />
        <MainContainer>
          <AuthHeader />
          <Routes>
            <Route>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/auth"
                element={
                  <>
                    <ArticleContainer>
                      <Articles />
                      <Auth />
                    </ArticleContainer>
                  </>
                }
              />
            </Route>
          </Routes>
          <AuthFooter />
        </MainContainer>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
