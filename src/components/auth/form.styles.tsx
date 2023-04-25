import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  styledGroup: {
    width: "27%",
    height: "100%",
    zIndex: 99,
    backgroundColor: "#ffff",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    borderRadius: "10px 0 0 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    "@media only screen and (max-width: 1600px)": {
      width: "550px",
      height: "670px",
      borderRadius: "10px",
    },
    "@media only screen and (max-width: 768px)": {
      width: "100%",
      height: "100vh",
      borderRadius: 0,
    },
  },
  wrapper: {
    padding: "0 40px 26px 40px",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "140px",
    gap: 10,
    marginBottom: "80px",
    "@media only screen and (max-width: 1600px)": {
      paddingTop: "40px",
    },
    "@media only screen and (max-width: 768px)": {
      padding: "140px 20px 26px 20px",
    },
  },
  title: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "50px",
    fontSize: "44px",
    fontWeight: 900,
    letterSpacing: -3,
    cursor: "default",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : "#212121cf",
  },
  input: {
    width: "100%",
    input: {
      fontSize: "16px",
      "::placeholder": {
        fontWeight: 500,
      },
    },
  },
  passwordInput: {
    width: "100%",
    input: {
      fontSize: "16px",
      "::placeholder": {
        fontWeight: 500,
      },
    },
  },
  submitBtn: {
    width: "100%",
    marginTop: "10px",
    fontSize: "18px",
    fontWeight: 600,
  },
  styledDivider: {
    fontWeight: 600,
    color: "#212121a4",
    width: "100%",
  },
  styledFacebookBtn: {
    width: "100%",
    display: "flex",
    backgroundColor: "#4267B2",
    ":hover": {
      backgroundColor: "#4d71b9",
    },
  },
  styledGoogleBtn: {
    width: "100%",
    marginTop: "4px",
    border: "1px solid #dddd",
    color: "#21212194",
    display: "flex",
  },
  buttonText: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingRight: "30px",
    fontSize: "16.5px",
    fontWeight: 500,
  },
  flexBox: {
    width: "100%",
    padding: "17px",
    margin: 0,
    borderTop: "1px solid #dddd",
    display: "flex",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    "@media only screen and (max-width: 768px)": {
      height: "60px",
    },
  },
  styledText: {
    fontWeight: 700,
    opacity: 0.7,
    cursor: "default",
  },
  switchBtn: {
    color: "#1885d3",
    cursor: "pointer",
    opacity: 1,
    ":hover": {
      color: "#298bd1",
      textDecoration: "underline",
    },
  },
}));
