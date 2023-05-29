import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import { CustomFonts } from "./styles/CustomFonts";
import Auth from "./pages/Auth";
import {
  ArticleContainer,
  MainContainer,
  providerStyle,
} from "./global.styles";
import AuthHeader from "./components/header/Header";
import AuthFooter from "./components/footer/Footer";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Popup from "./components/cookies/Popup";
import Cookies from "./pages/Cookies";
import ConfirmEmail from "./pages/VerifyEmail";
import Verified from "./pages/Verified";

export default function App() {
  const { auth } = useSelector((state: any) => state);

  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const ProtectedRoute = ({ children }: any) => {
    if (auth.id && !auth.isEmailConfirmed) {
      return <ConfirmEmail />;
    } else if (!auth.id && !auth.isEmailConfirmed) {
      return <Navigate to="/auth" />;
    } else if (auth.isEmailConfirmed) {
      return <Verified />;
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
                      <Auth />
                    </ArticleContainer>
                    <Popup />
                  </>
                }
              />
            </Route>
            <Route path="/verified" element={<Verified />} />
            <Route path="/terms-of-service" element={<Terms />} />
            <Route path="/cookie-policy" element={<Cookies />} />
          </Routes>
          <AuthFooter />
        </MainContainer>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
