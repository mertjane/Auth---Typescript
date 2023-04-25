import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  styledLogo: {
    color: "#ffff",
    "@media only screen and (max-width: 768px)": {
      color: "#008ef4",
    },
  },
  styledBrand: {
    color: "#ffff",
    cursor: "default",
    fontWeight: 900,
    "@media only screen and (max-width: 768px)": {
      color: "#008ef4",
    },
  },
}));
