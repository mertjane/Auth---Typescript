import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  styledGroup: {
    display: "flex",
    justifyContent: "center",
    padding: "60px 80px 60px 120px",
    width: "65%",
    cursor: "default",
    "@media only screen and (max-width: 1600px)": {
      display: "none",
    },
  },
  title: {
    width: "80%",
    color: "#fffbfc",
    fontSize: "140px",
    lineHeight: "180px",
    fontWeight: 900,
    textAlign: "center",
    letterSpacing: "-3px",
    "@media only screen and (max-width: 1600px)": {
      display: "none",
    },
  },
}));
