import { useState } from "react";
import { Group, Transition } from "@mantine/core";
import { useFormStyles } from "../components/auth/form.styles";
import RegisterForm from "../components/auth/RegisterForm";
import LoginForm from "../components/auth/LoginForm";

export default function Auth() {
  const { classes } = useFormStyles();
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
      {(styles) =>
        loginPage === true ? (
          <Group className={classes.loginGroup} style={styles}>
            <LoginForm
              handlePageSwitch={handlePageSwitch}
              loginPage={loginPage}
              setLoginPage={setLoginPage}
            />
          </Group>
        ) : (
          <Group className={classes.registerGroup} style={styles}>
            <RegisterForm
              handlePageSwitch={handlePageSwitch}
              loginPage={loginPage}
              setLoginPage={setLoginPage}
            />
          </Group>
        )
      }
    </Transition>
  );
}
