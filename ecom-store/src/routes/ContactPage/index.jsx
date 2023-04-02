import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { StyledButton } from "../../styles/StyledComponents/styledButton";
import {
  StyledForm,
  StyledInput,
  StyledParagraph,
  StyledTextArea,
} from "../../styles/StyledComponents/styledForm";
import { Card } from "react-bootstrap";

const schema = yup
  .object()
  .shape({
    fullName: yup.string().min(3, "Minimum 3 characters").required(),
    subject: yup.string().min(3, "Minimum 3 characters").required(),
    email: yup
      .string()
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email"
      )
      .required(),
    body: yup.string().min(3, "Minimum 3 characters").required(),
  })
  .required();

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div xs={1} md={3} className="mt-4 pt-5 d-flex justify-content-center">
      <Card className="px-5 py-3">
        <div>
          <h1 align="center" className="mt-4">
            Contact Us
          </h1>
        </div>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            {errors.fullName && <StyledParagraph>{errors.fullName.message}</StyledParagraph>}
            <StyledInput type="text" placeholder="Full Name" {...register("fullName")} />
          </div>
          <div>
            {errors.email && <StyledParagraph>{errors.email.message}</StyledParagraph>}
            <StyledInput type="text" placeholder="Email" {...register("email")} />
          </div>
          <div>
            {errors.subject && <StyledParagraph>{errors.subject.message}</StyledParagraph>}
            <StyledInput type="text" placeholder="Subject" {...register("subject")} />
          </div>
          <div>
            {errors.body && <StyledParagraph>{errors.body.message}</StyledParagraph>}
            <StyledTextArea as="textarea" rows={5} placeholder="Message" {...register("body")} />
          </div>
          <StyledButton type="submit" className="mt-2">
            Submit
          </StyledButton>
        </StyledForm>
      </Card>
    </div>
  );
}

export default ContactPage;
