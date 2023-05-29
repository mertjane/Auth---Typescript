import { VerifyContainer } from "../global.styles";
import { Button, Flex, Group, Image, Text, Title } from "@mantine/core";
import IconsMail from "../assets/_mail.png";

const VerifyEmail = () => {
  return (
    <VerifyContainer>
      <Flex
        bg="#ffff"
        p="60px 80px"
        gap={8}
        direction="column"
        align="center"
        justify="flex-start"
        style={{
          borderRadius: "3px",
          border: "1px solid #dddd",
        }}
      >
        <Title order={1} fz={48} weight={200} color="#3e424bb9">
          Verify Your Email
        </Title>
        <Text fz={22} weight={500} color="#3e424ba2">
          Check you email & click the link to activate your account.
        </Text>
        <Image src={IconsMail} width={250} height={250} mt={40} fit="contain" />
        <Group p="lg">
          <Button color="green">Resend Email</Button>
          <Button color="green" variant="outline">
            Enter New Email
          </Button>
          <Button color="green" variant="outline">
            Contact Support
          </Button>
        </Group>
      </Flex>
    </VerifyContainer>
  );
};

export default VerifyEmail;
