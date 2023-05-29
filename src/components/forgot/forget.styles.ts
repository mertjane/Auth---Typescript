import { createStyles } from "@mantine/core";

export const useForgotStyles = createStyles((theme) => ({
  title: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "50px",
    fontSize: "44px",
    fontWeight: 900,
    letterSpacing: -2,
    cursor: "default",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : "#212121cf",
  },
  forgotInput: {
    width: "100%",
    marginTop: "20px",
    "::placeholder": {
      fontWeight: 500,
    },
    input: {
      fontSize: "16px",
    },
  },
  styledGroup: {
    width: "100%",
    background: "#d4edda",
    color: "#548473",
    textAlign: "center",
    padding: "24px 56px",
    marginTop: "-32px",
    borderRadius: "6px",
  },
  styledText: {
    display: "flex",
  },
  styledIcon: {
    marginTop: "-2px",
  },
  passwordInput: {
    width: "100%",
    "::placeholder": {
      fontWeight: 500,
    },
    input: {
      fontSize: "16px",
    },
  },
}));
