import React, { Component } from "react";
import { StyledButton } from "./styled";
import PropTypes from "prop-types";

const Button = ({ buttonText, emitEvent }) => {
  function submitEvent() {
    if (emitEvent) {
      emitEvent();
    }
  }

  return (
    <StyledButton data-test="buttonComponent" onClick={() => submitEvent()}>
      {buttonText}
    </StyledButton>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};

export default Button;
