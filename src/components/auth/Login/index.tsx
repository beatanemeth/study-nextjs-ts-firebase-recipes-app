"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import Button from "@/components/shared/Button";
import {
  authFormWrapper,
  resetFormContainer,
  resetFormContent,
  authFormFooter,
  loginFormContainer,
} from "../Auth.css";
import authFirebaseService from "@/services/authFirebaseService";
import { useRouter } from "next/navigation";
import GoogleAuthButton from "../GoogleAuthButton";
import AuthForm from "../AuthForm";
import { toast } from "react-toastify";
import AuthInputField from "../AuthForm/AuthInputField";

type LoginFormProps = {
  onToggleLoginRegister: () => void;
};

export default function LoginForm({ onToggleLoginRegister }: LoginFormProps) {
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLoginWithEmailAndPasswordSubmit(
    e: FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();

    try {
      await authFirebaseService.loginUserWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      router.push("/create");
    } catch (error: any) {
      toast.error("Login failed. Try again.");
    }
  }

  function handleToggleResetPassword() {
    setIsResetPassword(!isResetPassword);
  }

  async function handleResetPasswordSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await authFirebaseService.resetPassword(email);
      setEmail("");
      toast.info("Check your inbox! A password reset email was sent");
    } catch (error: any) {
      toast.error("Password reset failed. Try again.");
    }
  }

  return (
    <div className={loginFormContainer}>
      <Image
        src="https://cdn.pixabay.com/photo/2020/12/13/13/30/cinnamon-sticks-5828241_1280.jpg"
        alt="Picture of the author"
        width={400}
        height={606}
        style={{ borderRadius: "1rem 0 0 1rem" }}
      />

      <div className={authFormWrapper}>
        {!isResetPassword ? (
          <>
            <AuthForm
              onAuthFormSubmit={handleLoginWithEmailAndPasswordSubmit}
              emailFieldValue={email}
              onEmailFieldChange={(e) => setEmail(e.target.value)}
              passwordFieldValue={password}
              onPasswordFieldChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="button"
              onClick={handleToggleResetPassword}
              variant="plainBtn"
              style={{
                textAlign: "right",
              }}
            >
              Forgot password?
            </Button>
          </>
        ) : (
          <div className={resetFormContainer}>
            <Button
              type="button"
              onClick={handleToggleResetPassword}
              variant="plainBtn"
              style={{
                textAlign: "right",
              }}
            >
              x
            </Button>
            <h2>Reset your password</h2>
            <form
              className={resetFormContent}
              onSubmit={handleResetPasswordSubmit}
            >
              <AuthInputField
                type="email"
                name="email"
                placeholder="johndoe@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" variant="resetPasswordBtn">
                Request reset link
              </Button>
            </form>
          </div>
        )}

        <p style={{ textAlign: "center" }}>
          Or sign in with an existing account:
        </p>

        <GoogleAuthButton />

        <div className={authFormFooter}>
          <p>Have no account yet.</p>
          <Button
            type="button"
            onClick={onToggleLoginRegister}
            variant="plainBtn"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
