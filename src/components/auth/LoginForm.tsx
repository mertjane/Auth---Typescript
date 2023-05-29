import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  TextInput,
  PasswordInput,
  Text,
  Button,
  Flex,
  Divider,
} from "@mantine/core";
import { useFormStyles } from "./form.styles";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { SiApple } from "react-icons/si";
import { FormProps, LoginUser } from "../../types/types";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../../redux/auth/auth.service";
import { useSelector } from "react-redux";
import Forgot from "../forgot/Forgot";
import login from "../../assets/_LOGIN.svg";

export default function LoginForm({ loginPage, handlePageSwitch }: FormProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { classes } = useFormStyles();
  const { auth } = useSelector((state: any) => state);
  const { loginError } = useSelector((state: any) => state.auth);
  const [forgetPage, setForgetPage] = useState<boolean>(false);
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
      if (!loginError) {
        navigate("/");
      }
    }, 2000);
  };

  return (
    <>
      {forgetPage ? (
        <Forgot />
      ) : (
        <>
          <img className={classes.title} src={login} alt="_svg" />
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
          <Text
            onClick={() => setForgetPage(true)}
            className={classes.forgetPwdText}
          >
            Forgot password?
          </Text>
          <Button
            onClick={handleSubmit}
            loading={isLoading}
            color="green"
            size="lg"
            className={classes.submitBtn}
          >
            Sign in
          </Button>
          <Text className={classes.styledText} size="xs">
            {loginPage === false
              ? "Already have an account?"
              : "Don't have an account?"}
            <span onClick={handlePageSwitch} className={classes.switchBtn}>
              {" "}
              {loginPage === false ? "Login" : "Signup"}
            </span>
          </Text>
          <Divider
            className={classes.styledDivider}
            variant="solid"
            my="xs"
            label="Continue with"
            labelPosition="center"
          />
          <Flex justify="center" align="center" direction="row" gap="md">
            <FcGoogle size="3rem" className={classes.styledGoogleBtn} />
            <FaGithub size="3rem" className={classes.styledGitBtn} />
            <SiApple size="3rem" className={classes.styledAppeBtn} />
          </Flex>
        </>
      )}
    </>
  );
}
