import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  styledGroup: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    cursor: "default",
  },
  title: {
    color: "#212121",
    fontSize: "66px",
    fontWeight: 900,
    letterSpacing: "-3px",
  },
  text: {
    color: "#ffff",
    fontSize: "26px",
    fontWeight: 500,
  },
}));
