import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 7px;
  height: 40px;
  outline: none;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.secondaryDark};
  margin-bottom: 1.4rem;
`;

const StyledParagraph = styled.p`
  color: ${(props) => props.theme.color.dangerDark};
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;

const StyledTextArea = styled.textarea`
  padding: 7px;
  height: 100px;
  outline: none;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.secondaryDark};
  margin-bottom: 0.3rem;
`;

export { StyledForm, StyledInput, StyledParagraph, StyledTextArea };
