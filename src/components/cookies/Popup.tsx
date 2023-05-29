import { useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Modal, Text, Title } from "@mantine/core";
import { useCookieStyles } from "./cookie.styles";
import { useNavigate } from "react-router";

export default function Popup() {
  const navigate = useNavigate();
  const { classes } = useCookieStyles();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    setTimeout(() => {
      open();
    }, 4000);
  }, [open]);
  return (
    <Modal
      padding="14px 14px 0 20px"
      size={560}
      opened={opened}
      onClose={close}
    >
      <Title mb={8} order={3}>
        We value your privacy
      </Title>
      <Text>
        We use cookies to enhance your browsing experience, serve personalized
        ads or content, and analyze our traffic, By clicking, "Accept All", you
        consent to our use cookies.{" "}
        <span
          onClick={() => navigate("/cookie-policy")}
          className={classes.styledSpan}
        >
          Cookie Policy.
        </span>
      </Text>
      <Group p="24px 0">
        <Button
          className={classes.styledBtn}
          size="lg"
          variant="outline"
          radius={0}
        >
          Customize
        </Button>
        <Button
          onClick={close}
          className={classes.styledBtn}
          size="lg"
          variant="outline"
          radius={0}
        >
          Reject All
        </Button>
        <Button
          onClick={close}
          className={classes.styledBtn}
          size="lg"
          variant="filled"
          radius={0}
        >
          Accept All
        </Button>
      </Group>
    </Modal>
  );
}
