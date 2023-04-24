import { useState } from "react";
import { Group, Transition } from "@mantine/core";
import { useStyles } from "../components/auth/form.styles";
import RegisterForm from "../components/auth/RegisterForm";
import LoginForm from "../components/auth/LoginForm";

export default function Auth() {
  const { classes } = useStyles();
  const [showForm, setShowForm] = useState<boolean>(true);
  const [loginPage, setLoginPage] = useState<boolean>(false);

  const handlePageSwitch = () => {
    setShowForm(false);
    setTimeout(() => {
      setLoginPage((prev) => !prev);
      setShowForm(true);
    }, 300);
  };

  return (
    <Transition
      mounted={showForm}
      transition="slide-right"
      duration={300}
      timingFunction="ease"
    >
      {(styles) => (
        <Group className={classes.styledGroup} style={styles}>
          {loginPage === true ? (
            <LoginForm
              handlePageSwitch={handlePageSwitch}
              loginPage={loginPage}
              setLoginPage={setLoginPage}
            />
          ) : (
            <RegisterForm
              handlePageSwitch={handlePageSwitch}
              loginPage={loginPage}
              setLoginPage={setLoginPage}
            />
          )}
        </Group>
      )}
    </Transition>
  );
}
