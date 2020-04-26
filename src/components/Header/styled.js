import styled from "styled-components";
import logo from "../../assets/logo.png";

export const StyledHeader = styled.header`
  padding: 8px 16px;
  box-shadow: 0 0 5px #fff;
  background-color: white;
`;
export const StyledLogo = styled.div`
  background-image: url(${logo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 50px;
`;
