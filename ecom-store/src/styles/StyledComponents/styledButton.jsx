import styled from "styled-components";

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
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.neutral0};

  &:hover {
    background-color: ${(props) => props.theme.color.primaryDark};
  }
`;

export const StyledButtonSecondary = styled(BaseButton)`
  background-color: ${(props) => props.theme.color.secondaryDark};
  color: ${(props) => props.theme.color.neutral0};
`;
