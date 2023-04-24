import React from "react";
import { GiGorilla } from "react-icons/gi";
import { HeaderContainer, useStyles } from "../../global.styles";
import { Title } from "@mantine/core";

export default function Header() {
  const { classes } = useStyles();
  return (
    <HeaderContainer>
      <GiGorilla size={45} className={classes.styledLogo} />
      <Title className={classes.styledBrand} order={1}>
        SmartApe
      </Title>
    </HeaderContainer>
  );
}
