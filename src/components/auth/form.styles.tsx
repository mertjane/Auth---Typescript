import { createStyles } from "@mantine/core";

export const useFormStyles = createStyles((theme) => ({
  registerGroup: {
    height: "100%",
    width: "460px",
    margin: "0 auto",
    borderRadius: "3px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "40px",
    border: "1px solid #dddd",
    backgroundColor: "#ffff",
    "@media only screen and (max-width: 1600px)": {
      width: "460px",
      height: "100%",
      position: "relative",
      padding: "20px 40px",
    },
    "@media only screen and (max-width: 768px)": {
      width: "100%",
      height: "100%",
      borderRadius: 0,
    },
    "@media only screen and (max-height: 900px)": {
      padding: "20px 40px",
      height: "100vh",
    },
  },
  loginGroup: {
    height: "auto",
    width: "460px",
    padding: "40px",
    margin: "0 auto",
    borderRadius: "3px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    border: "1px solid #dddd",
    backgroundColor: "#ffff",
    "@media only screen and (max-width: 1600px)": {
      width: "460px",
      height: "550px",
      borderRadius: "3px",
      position: "relative",
      padding: "20px 40px",
    },
    "@media only screen and (max-width: 768px)": {
      width: "100%",
      height: "100%",
      borderRadius: 0,
    },
    "@media only screen and (max-height: 900px)": {
      padding: "20px 40px",
      height: "100%",
    },
  },
  title: {
    objectFit: "contain",
  },
  input: {
    width: "100%",
    borderRadius: "3px",
    input: {
      fontSize: "14px",
      "::placeholder": {
        fontWeight: 400,
      },
    },
  },
  passwordInput: {
    width: "100%",
    borderRadius: "3px",
    input: {
      fontSize: "14px",
      "::placeholder": {
        fontWeight: 400,
      },
    },
  },
  showBtn: {
    opacity: 0.5,
    cursor: "pointer",
    borderRadius: "3px",
    ":hover": {
      opacity: 0.8,
    },
  },
  submitBtn: {
    width: "100%",
    marginTop: "10px",
    color: "#ffff",
    fontSize: "16px",
    fontWeight: 500,
  },
  styledDivider: {
    fontWeight: 600,
    color: "#212121a4",
    width: "100%",
  },
  styledGoogleBtn: {
    borderRadius: "50%",
    border: "1px solid #dddd",
    color: "#21212194",
    padding: "6px",
    cursor: "pointer",
  },
  styledGitBtn: {
    borderRadius: "50%",
    color: "#333",
    cursor: "pointer",
    ":hover": {
      color: "#333333f4",
    },
  },
  styledAppeBtn: {
    borderRadius: "50%",
    backgroundColor: "rgb(36,36,38)",
    padding: "10px",
    color: "rgb(242,242,247)",
    cursor: "pointer",
    ":hover": {},
  },
  buttonText: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingRight: "30px",
    fontSize: "16px",
    fontWeight: 500,
  },
  flexBox: {
    width: "100%",
    padding: "12px",
    margin: 0,
    borderTop: "1px solid #dddd",
    position: "absolute",
    bottom: 0,
    display: "flex",
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
    marginTop: "-8px",
    fontWeight: 400,
    fontSize: "13px",
    cursor: "pointer",
    opacity: 0.8,
    ":hover": {
      opacity: 1,
    },
  },
  styledText: {
    fontWeight: 600,
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
