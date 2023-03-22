import styled from "styled-components";
import Theme from "../theme";

const BaseButton = styled.button`
  padding: 8px 17px;
  border-radius: 7px;
  border: none;
  font-size: 1rem;
  letter-spacing: 0.08rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const StyledButton = styled(BaseButton)`
  background-color: ${Theme.colors.primary};
  color: ${Theme.colors.white};

  :hover {
    background-color: ${Theme.colors.primaryDark};
  }
`;
