export interface Auth {
  access_token: string;
  id?: string;
  username: string;
  email: string;
  isEmailConfirmed: boolean;
  isCookiesConfirmed: boolean;
  registerStatus: string;
  registerError: object;
  loginStatus: string;
  loginError: object;
  userLoaded: boolean;
}

export interface User {
  access_token?: string;
  id?: number;
  username: string;
  email: string;
  password: string;
  confirm: string;
}

export interface LoginUser {
  access_token?: string;
  id?: number;
  email: string;
  password: string;
}

export interface FormProps {
  loginPage: boolean;
  setLoginPage: (value: boolean) => void;
  handlePageSwitch: () => void;
}

export interface IsTouched {
  username: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}
