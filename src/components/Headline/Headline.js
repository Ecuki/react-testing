import React, { Component } from "react";
import { StyledHeadline } from "./styled";

class Headline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { header, desc } = this.props;
    if (!header) return null;

    return (
      <StyledHeadline data-test="HeadlineComponent">
        <h1 data-test="header">{header}</h1>
        <p data-test="desc">{desc}</p>
      </StyledHeadline>
    );
  }
}
export default Headline;
