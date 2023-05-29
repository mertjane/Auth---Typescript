import { useEffect, useState } from "react";
import {
  TextInput,
  Text,
  Button,
  Divider,
  Flex,
  Checkbox,
} from "@mantine/core";
import signup from "../../assets/_SIGNUP.svg";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useFormStyles } from "./form.styles";
import { REGEX, checkUsernameTaken, getValidationError } from "./auth.utils";
import { FormProps, IsTouched, User } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/auth/auth.service";
import { Loader } from "@mantine/core";
import CheckMark from "../../styles/CheckMark";

export default function RegisterForm({
  loginPage,
  handlePageSwitch,
}: FormProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { classes } = useFormStyles();
  const { auth } = useSelector((state: any) => state);
  const { registerError } = useSelector((state: any) => state.auth);
  const [usernameExist, setUsernameExist] = useState(false);
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [isTouched, setIsTouched] = useState<IsTouched>({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  useEffect(() => {
    if (auth.id) {
      navigate("/");
    }
  }, [auth.id, navigate]);

  const checkUsernameExist = async (username: string) => {
    const exist = await checkUsernameTaken(username);
    setUsernameExist(exist);
  };

  const usernameError = isTouched.username
    ? usernameExist
      ? REGEX.USERNAME_VALIDATION_MESSAGE.EXIST
      : getValidationError("username", user.username, "", false)
    : "";

  const emailError = isTouched.email
    ? getValidationError("email", user.email, "", false)
    : "";
  const passwordError = isTouched.password
    ? getValidationError("password", user.password, user.confirm, false)
    : "";
  const confirmPasswordError = isTouched.confirmPassword
    ? getValidationError("confirmPassword", user.confirm, user.password, false)
    : "";

  const handleSubmit = async () => {
    setIsLoading(true);
    if (
      user.username === "" ||
      user.email === "" ||
      user.password === "" ||
      user.confirm === ""
    ) {
      return setIsLoading(false);
    }
    dispatch(createUser({ user }) as any);
    setIsTouched({
      username: false,
      email: false,
      password: false,
      confirmPassword: false,
    });
    setTimeout(() => {
      setUser({ username: "", email: "", password: "", confirm: "" });
      setIsLoading(false);
      // navigate("/");
    }, 2000);
  };

  return (
    <>
      <img className={classes.title} src={signup} alt="_svg" />
      <TextInput
        type="text"
        className={classes.input}
        size="md"
        placeholder="Username"
        value={user.username}
        disabled={isLoading}
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
          setIsTouched({ ...isTouched, username: true });
          if (e.target.value.length >= 4) {
            checkUsernameExist(e.target.value);
          } else {
            setUsernameExist(false);
          }
        }}
        error={usernameError}
        rightSection={
          isTouched.username === true && user.username !== "" ? (
            usernameError ? (
              <Loader size="xs" />
            ) : (
              <CheckMark />
            )
          ) : null
        }
      />
      <TextInput
        type="email"
        className={classes.input}
        size="md"
        placeholder="Email"
        value={user.email}
        disabled={isLoading}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
          setIsTouched({ ...isTouched, email: true });
        }}
        error={emailError || registerError.message}
        rightSection={
          isTouched.email === true && user.email !== "" ? (
            !emailError ? (
              <CheckMark />
            ) : null
          ) : null
        }
      />
      <TextInput
        type={showPassword === true ? "text" : "password"}
        className={classes.passwordInput}
        placeholder="Create password"
        error={passwordError}
        size="md"
        value={user.password}
        disabled={isLoading}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
          setIsTouched({ ...isTouched, password: true });
        }}
        rightSection={
          isTouched.password === true && !passwordError ? (
            <CheckMark />
          ) : showPassword ? (
            <FiEyeOff
              onClick={() => setShowPassword(false)}
              size={14}
              className={classes.showBtn}
            />
          ) : (
            <FiEye
              onClick={() => setShowPassword(true)}
              size={14}
              className={classes.showBtn}
            />
          )
        }
      />
      <TextInput
        type={showConfirm === true ? "text" : "password"}
        className={classes.passwordInput}
        placeholder="Confirm password"
        error={confirmPasswordError}
        size="md"
        value={user.confirm}
        disabled={isLoading}
        onChange={(e) => {
          setUser({ ...user, confirm: e.target.value });
          setIsTouched({ ...isTouched, confirmPassword: true });
        }}
        rightSection={
          user.confirm !== "" && !confirmPasswordError ? (
            <CheckMark />
          ) : showConfirm ? (
            <FiEyeOff
              onClick={() => setShowConfirm(false)}
              size={14}
              className={classes.showBtn}
            />
          ) : (
            <FiEye
              onClick={() => setShowConfirm(true)}
              size={14}
              className={classes.showBtn}
            />
          )
        }
      />
      <Checkbox
        size="xs"
        style={{
          alignSelf: "flex-start",
          cursor: "pointer",
        }}
        label={
          <div>
            I have read and agree{" "}
            <span
              onClick={() => navigate("/terms-of-service")}
              style={{ color: "#228be6", cursor: "pointer" }}
            >
              Terms & Conditions
            </span>
          </div>
        }
      />
      <Button
        onClick={handleSubmit}
        size="lg"
        color="green"
        className={classes.submitBtn}
        loading={isLoading}
      >
        Create an account
      </Button>
      <Text className={classes.styledText} size="xs">
        {loginPage === false
          ? "Already have an account?"
          : "Don't you have an account?"}
        <span onClick={handlePageSwitch} className={classes.switchBtn}>
          {loginPage === false ? " Login" : " Signup"}
        </span>
      </Text>
      <Divider
        className={classes.styledDivider}
        variant="solid"
        my="xs"
        label="Signup with"
        labelPosition="center"
      />
      <Flex justify="center" align="center" direction="row" gap="md">
        <FcGoogle size="3rem" className={classes.styledGoogleBtn} />
        <FaGithub size="3rem" className={classes.styledGitBtn} />
        <SiApple size="3rem" className={classes.styledAppeBtn} />
      </Flex>
    </>
  );
}
