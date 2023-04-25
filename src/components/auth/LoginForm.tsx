import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Text,
  Button,
  Divider,
  Flex,
} from "@mantine/core";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useStyles } from "./form.styles";
import { ERROR_MESSAGES } from "./auth.utils";

interface FormProps {
  loginPage: boolean;
  setLoginPage: (value: boolean) => void;
  handlePageSwitch: () => void;
}

export default function LoginForm({
  loginPage,
  setLoginPage,
  handlePageSwitch,
}: FormProps) {
  const [value, setValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const { classes } = useStyles();

  const handleInput = (e: any) => {
    setValue(e.target.value);
  };

  const showError = value.length > 0 && value.length < 5;

  const handlePasswordChange = (e: any) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(getPasswordError(value));
  };

  const getPasswordError = (password: string) => {
    if (password === "") {
      return ERROR_MESSAGES.EMPTY;
    }
    if (password.length < 8) {
      return ERROR_MESSAGES.SHORT;
    }
    if (password.length > 24) {
      return ERROR_MESSAGES.LONG;
    }
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,24}$/;
    if (!regex.test(password)) {
      return ERROR_MESSAGES.NOT_MATCH;
    }
    return "";
  };

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>
        Login
        <span
          style={{
            marginLeft: "3px",
            border: "3px solid #008ef4",
            width: "23%",
          }}
        />
      </h1>
      <TextInput
        type="email"
        className={classes.input}
        size="md"
        placeholder="Email"
        value={value}
        onChange={handleInput}
        error={showError ? "john@example.com" : ""}
      />
      <PasswordInput
        className={classes.passwordInput}
        placeholder="Password"
        error={passwordError}
        size="md"
        onChange={handlePasswordChange}
        value={password}
      />
      <Text
        style={{
          alignSelf: "start",
          color: "#298bd1",
          fontWeight: 400,
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        Forgot password?
      </Text>
      <Button size="lg" className={classes.submitBtn}>
        Login
      </Button>
      <Divider
        className={classes.styledDivider}
        variant="solid"
        my="xs"
        label="Or"
        labelPosition="center"
      />
      <Button
        size="lg"
        className={classes.styledFacebookBtn}
        leftIcon={
          <>
            <FaFacebook size="1.7rem" />
            <span className={classes.buttonText}>Login with Facebook</span>
          </>
        }
      />
      <Button
        variant="outline"
        className={classes.styledGoogleBtn}
        size="lg"
        leftIcon={
          <>
            <FcGoogle size="1.7rem" />
            <span className={classes.buttonText}>Login with Google</span>
          </>
        }
      />
      <Flex className={classes.flexBox}>
        <Text className={classes.styledText} size="sm">
          {loginPage === false
            ? "Already have an account?"
            : "Don't you have an account?"}
          <span onClick={handlePageSwitch} className={classes.switchBtn}>
            {loginPage === false ? " Login" : " Signup"}
          </span>
        </Text>
      </Flex>
    </div>
  );
}
