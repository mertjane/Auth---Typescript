import { Global } from "@mantine/core";
import _LIGHT from "./fonts/Inter-LightBETA.woff2";
import _REGULAR from "./fonts/Inter-Regular.woff2";
import _MEDIUM from "./fonts/Inter-Medium.woff2";
import _SEMI_BOLD from "./fonts/Inter-SemiBold.woff2";
import _BOLD from "./fonts/Inter-Bold.woff2";
import _DARK from "./fonts/Inter-Black.woff2";

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Inter",
            src: `url('${_LIGHT}') format("woff2")`,
            fontWeight: 300,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Inter",
            src: `url('${_REGULAR}') format("woff2")`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Inter",
            src: `url('${_MEDIUM}') format("woff2")`,
            fontWeight: 500,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Inter",
            src: `url('${_SEMI_BOLD}') format("woff2")`,
            fontWeight: 600,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Inter",
            src: `url('${_BOLD}') format("woff2")`,
            fontWeight: 700,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Inter",
            src: `url('${_DARK}') format("woff2")`,
            fontWeight: 900,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
}
