import React from "react";
import { FooterContainer } from "../../global.styles";
import { Text } from "@mantine/core";

export default function Footer() {
  const getYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <Text style={{ fontSize: "12px", color: "#6464647f", cursor: "default" }}>
        All rights reserved. © {getYear} Diplo Software and Consulting Ltd.
      </Text>
    </FooterContainer>
  );
}
