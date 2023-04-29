import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  registerGroup: {
    height: "100%",
    width: "504px",
    backgroundColor: "#ffff",
    position: "fixed",
    right: 0,
    top: 0,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    borderRadius: "10px 0 0 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "80px 40px",
    "@media only screen and (max-width: 1600px)": {
      width: "550px",
      height: "100%",
      //minHeight: "750px",
      borderRadius: "10px",
      position: "relative",
      padding: "20px 40px",
    },
    "@media only screen and (max-width: 768px)": {
      width: "100%",
      height: "100%",
      borderRadius: 0,
    },
    "@media only screen and (max-height: 900px)": {
      padding: "0 40px",
      height: "100vh",
    },
  },
  loginGroup: {
    height: "100%",
    width: "504px",
    backgroundColor: "#ffff",
    position: "fixed",
    right: 0,
    top: 0,
    padding: "80px 40px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    borderRadius: "10px 0 0 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    "@media only screen and (max-width: 1600px)": {
      width: "550px",
      height: "675px",
      //minHeight: "750px",
      borderRadius: "10px",
      position: "relative",
      padding: "20px 40px",
    },
    "@media only screen and (max-width: 768px)": {
      width: "100%",
      height: "100%",
      borderRadius: 0,
    },
    "@media only screen and (max-height: 900px)": {
      padding: "0 40px",
      height: "100vh",
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
  showBtn: {
    opacity: 0.5,
    cursor: "pointer",
    ":hover": {
      opacity: 0.8,
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
    "@media only screen and (max-width: 1600px)": {
      height: "55px",
    },
    "@media only screen and (max-width: 768px)": {
      height: "60px",
    },
  },
  forgetPwdText: {
    alignSelf: "start",
    color: "#298bd1",
    fontWeight: 400,
    fontSize: "14px",
    cursor: "pointer",
    opacity: 0.8,
    ":hover": {
      opacity: 1,
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
