import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 8px 16px;
  margin: 10px 0;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #ddd;
  transition: all 0.2s ease;

  :hover {
    background-color: red;
  }
`;
