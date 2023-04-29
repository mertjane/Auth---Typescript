import { GiGorilla } from "react-icons/gi";
import { HeaderContainer } from "../../global.styles";
import { useStyles } from "./header.styles";
import { Group, Title, useMantineTheme, Button } from "@mantine/core";
import { useSelector } from "react-redux";

export default function Header() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { auth } = useSelector((state: any) => state);
  return (
    <HeaderContainer>
      <Group>
        <GiGorilla size={45} className={classes.styledLogo} />
        <Title className={classes.styledBrand} order={1}>
          SmartApe
        </Title>
      </Group>
      {auth.id ? (
        <Group>
          <Button variant="filled" color={theme.primaryColor}>
            Logout
          </Button>
          ;
        </Group>
      ) : (
        <></>
      )}
    </HeaderContainer>
  );
}
