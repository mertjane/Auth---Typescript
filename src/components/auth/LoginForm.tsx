import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
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
import { LoginUser } from "../../types/types";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../../redux/auth/auth.service";
import { useSelector } from "react-redux";

interface FormProps {
  loginPage: boolean;
  setLoginPage: (value: boolean) => void;
  handlePageSwitch: () => void;
}

export default function LoginForm({ loginPage, handlePageSwitch }: FormProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const { auth } = useSelector((state: any) => state);
  const { loginError } = useSelector((state: any) => state.auth);
  const [user, setUser] = useState<LoginUser>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (auth.id) {
      navigate("/");
    }
  }, [auth.id, navigate]);

  const handleSubmit = async () => {
    setIsLoading(true);

    if (user.email === "" || user.password === "") {
      return setIsLoading(false);
    }
    dispatch(loggedInUser({ user }) as any);
    setTimeout(() => {
      setUser({ email: "", password: "" });
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };

  return (
    <>
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
        placeholder="Email or username"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        error={loginError.message}
      />
      <PasswordInput
        className={classes.passwordInput}
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        // error={passwordError}
        size="md"
      />
      <Text className={classes.forgetPwdText}>Forgot password?</Text>
      <Button
        onClick={handleSubmit}
        loading={isLoading}
        size="lg"
        className={classes.submitBtn}
      >
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
            : "Don't have an account?"}
          <span onClick={handlePageSwitch} className={classes.switchBtn}>
            {loginPage === false ? " Login" : " Signup"}
          </span>
        </Text>
      </Flex>
    </>
  );
}
