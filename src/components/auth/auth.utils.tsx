import axios from "axios";

const USERNAME_VALIDATION_MESSAGE = {
  EXIST: "Sorry, that username is already taken",
  SHORT: "Username is too short, minimum length is 4 character",
  LONG: "Username is too long, maximum length is 24 character",
  EMPTY: "Username cannot be empty field",
  INVALID: "Please enter a valid username",
};

const LOGIN_VALIDATION_MESSAGE = {
  WRONG: "Wrong username or password",
};

const EMAIL_VALIDATION_MESSAGE = {
  EXIST: "Email already registered",
  INVALID: "Please enter a valid email address",
  EMPTY: "Email cannot be empty field",
};

const PASSWORD_VALIDATION_MESSAGE = {
  INCORRECT:
    "Your password should contain at least 1 uppercase letter, 1 lowercase letter, and 1 special character",
  NOT_MATCH: "The passwords you entered do not match",
  EMPTY: "Password cannot be empty field",
  SHORT: "Password is too short, minimum length is 8 character",
  LONG: "Password is too long, maximum length is 24 character",
};

const PASSWORD_VALIDATION =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const EMAIL_VALIDATION = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{3,}$/;

const USERNAME_VALIDATION =
  /^(?=.{4,24}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

export interface IsTouched {
  username: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
  setIsTouched: () => void;
}

export const getValidationError = (
  fieldName: string,
  fieldValue: string,
  confirmPassword: string,
  usernameExist?: boolean
): string => {
  if (fieldName === "username") {
    if (fieldValue === "") {
      return REGEX.USERNAME_VALIDATION_MESSAGE.EMPTY;
    }
    if (fieldValue.length < 4) {
      return REGEX.USERNAME_VALIDATION_MESSAGE.SHORT;
    }
    if (fieldValue.length > 24) {
      return REGEX.USERNAME_VALIDATION_MESSAGE.LONG;
    }
    if (usernameExist) {
      return REGEX.USERNAME_VALIDATION_MESSAGE.EXIST;
    }
    if (!REGEX.USERNAME_VALIDATION.test(fieldValue)) {
      return REGEX.USERNAME_VALIDATION_MESSAGE.INVALID;
    }
    return "";
  }

  if (fieldName === "email") {
    if (fieldValue === "") {
      return REGEX.EMAIL_VALIDATION_MESSAGE.EMPTY;
    }
    if (!REGEX.EMAIL_VALIDATION.test(fieldValue)) {
      return REGEX.EMAIL_VALIDATION_MESSAGE.INVALID;
    }
    return "";
  }

  if (fieldName === "password") {
    if (fieldValue === "") {
      return REGEX.PASSWORD_VALIDATION_MESSAGE.EMPTY;
    }
    if (fieldValue.length < 8) {
      return REGEX.PASSWORD_VALIDATION_MESSAGE.SHORT;
    }
    if (fieldValue.length > 24) {
      return REGEX.PASSWORD_VALIDATION_MESSAGE.LONG;
    }
    if (!REGEX.PASSWORD_VALIDATION.test(fieldValue)) {
      return REGEX.PASSWORD_VALIDATION_MESSAGE.INCORRECT;
    }
    return "";
  }

  if (fieldName === "confirmPassword") {
    if (confirmPassword !== fieldValue) {
      return REGEX.PASSWORD_VALIDATION_MESSAGE.NOT_MATCH;
    }
    return "";
  }

  return "";
};

// api call for username field
export const checkUsernameTaken = async (username: string) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/check-username?username=${username}`
    );
    return response.data.usernameTaken;
  } catch (error) {
    console.error(error);
  }
};

export const REGEX = {
  USERNAME_VALIDATION,
  EMAIL_VALIDATION,
  PASSWORD_VALIDATION,
  USERNAME_VALIDATION_MESSAGE,
  PASSWORD_VALIDATION_MESSAGE,
  EMAIL_VALIDATION_MESSAGE,
  LOGIN_VALIDATION_MESSAGE,
};
