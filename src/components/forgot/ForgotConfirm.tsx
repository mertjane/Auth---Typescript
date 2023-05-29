import { Button, Group, Text, TextInput } from "@mantine/core";
import { useForgotStyles } from "./forget.styles";
import { BiErrorCircle } from "react-icons/bi";

export default function ForgotConfirm() {
  const { classes } = useForgotStyles();
  return (
    <>
      <Group className={classes.styledGroup}>
        <Text className={classes.styledText}>
          <BiErrorCircle size={30} className={classes.styledIcon} />
          Please create a new password that you don't use an any other site.
        </Text>
      </Group>
      <TextInput
        className={classes.passwordInput}
        size="md"
        type="password"
        placeholder="Create new password"
      />
      <TextInput
        className={classes.passwordInput}
        size="md"
        type="password"
        placeholder="Confirm your password"
      />
      <Button mt={10} fullWidth size="lg">
        Confirm
      </Button>
    </>
  );
}
