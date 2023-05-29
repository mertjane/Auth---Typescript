import { HeaderContainer } from "../../global.styles";
// import { useStyles } from "./header.styles";
import { Group, Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth.reducer";

export default function Header() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: any) => state);
  return (
    <HeaderContainer>
      <Group>
        <img src="https://i.ibb.co/Bs767YX/logo.png" alt="_logo" />
      </Group>
      {auth.registerStatus !== "succeeded" &&
      !auth.isEmailConfirmed &&
      auth.id ? (
        <Group>
          <Button
            onClick={() => dispatch(logout())}
            variant="filled"
            color="green"
          >
            Logout
          </Button>
        </Group>
      ) : (
        <></>
      )}
    </HeaderContainer>
  );
}
