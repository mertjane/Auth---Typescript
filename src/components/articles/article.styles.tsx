import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  styledGroup: {
    width: "100%",
    display: "flex",
    padding: "20px 140px",
    cursor: "default",
  },
  title: {
    color: "#212121",
    fontSize: "160px",
    lineHeight: "200px",
    fontWeight: 900,
    letterSpacing: "-3px",
  },
}));
