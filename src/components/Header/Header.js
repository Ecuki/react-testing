import React from "react";
import { StyledHeader, StyledLogo } from "./styled";

export default function Header() {
  return (
    <StyledHeader data-test="headerComponent">
      <StyledLogo data-test="logo" />
    </StyledHeader>
  );
}
