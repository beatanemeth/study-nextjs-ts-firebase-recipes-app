import Button from "@/components/shared/Button";
import { authFormContent } from "../Auth.css";
import { ChangeEvent, FormEvent } from "react";
import AuthInputField from "./AuthInputField";

type AuthFormProps = {
  isSignUp?: boolean;
  onAuthFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  emailFieldValue: string;
  onEmailFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordFieldValue: string;
  onPasswordFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function AuthForm({
  isSignUp,
  onAuthFormSubmit,
  emailFieldValue,
  onEmailFieldChange,
  passwordFieldValue,
  onPasswordFieldChange,
}: AuthFormProps) {
  const text = isSignUp ? "Register" : "Login";

  return (
    <>
      <h1>{text}</h1>
      <form className={authFormContent} onSubmit={onAuthFormSubmit}>
        <AuthInputField
          type="email"
          name="email"
          placeholder="johndoe@mail.com"
          value={emailFieldValue}
          onChange={onEmailFieldChange}
          isRequired
        />

        <AuthInputField
          type="password"
          name="password"
          placeholder="************"
          value={passwordFieldValue}
          onChange={onPasswordFieldChange}
          isRequired
        />

        <Button type="submit" variant="primaryBtn">
          {text}
        </Button>
      </form>
    </>
  );
}
