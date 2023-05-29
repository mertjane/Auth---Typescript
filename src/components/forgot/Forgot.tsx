import { useState } from "react";
import { useForgotStyles } from "./forget.styles";
import { Button, Text, TextInput } from "@mantine/core";
import ForgotConfirm from "./ForgotConfirm";

export default function Forgot() {
  const { classes } = useForgotStyles();
  const [isEmail, setIsEmail] = useState<string>("");
  const [nextStep, setNextStep] = useState<boolean>(false);

  const handleNextPage = () => {
    if (isEmail) {
      setNextStep(true);
    }
  };
  return (
    <>
      <h1 className={classes.title}>
        {nextStep ? "New Password" : "Forgot Password"}
      </h1>
      {nextStep ? (
        <ForgotConfirm />
      ) : (
        <>
          <Text mt={-40}>Enter your email address</Text>
          <TextInput
            className={classes.forgotInput}
            type="text"
            placeholder="Enter email address"
            size="lg"
            value={isEmail}
            onChange={(e) => setIsEmail(e.target.value)}
          />
          <Button onClick={handleNextPage} mt={8} fullWidth size="lg">
            Continue
          </Button>
        </>
      )}
    </>
  );
}
