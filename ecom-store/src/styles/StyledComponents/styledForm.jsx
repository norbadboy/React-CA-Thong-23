import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const StyledInput = styled.input`
  padding: 15px;
  height: 45px;
  outline: none;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.secondaryDark};
  margin-bottom: 1rem;
`;

const StyledParagraph = styled.p`
  color: ${(props) => props.theme.color.dangerDark};
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
  margin-top: 0;
`;

const StyledTextArea = styled.textarea`
  padding-left: 15px;
  padding-top: 10px;
  height: 140px;
  outline: none;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.secondaryDark};
  margin-bottom: 0.3rem;
`;

export { StyledForm, StyledInput, StyledParagraph, StyledTextArea };
