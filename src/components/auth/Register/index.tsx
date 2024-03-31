import Image from "next/image";
import Button from "@/components/shared/Button";
import {
  authFormFooter,
  authFormWrapper,
  registerFormContainer,
} from "../Auth.css";
import { FormEvent, useState } from "react";
import authFirebaseService from "@/services/authFirebaseService";
import { useRouter } from "next/navigation";
import GoogleAuthButton from "../GoogleAuthButton";
import AuthForm from "../AuthForm";
import { toast } from "react-toastify";

type RegisterFormProps = {
  onToggleLoginRegister: () => void;
};

export default function RegisterForm({
  onToggleLoginRegister,
}: RegisterFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleRegisterWithEmailAndPasswordSubmit(
    e: FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();

    try {
      await authFirebaseService.registerUserWithEmailAndPassword(
        email,
        password,
      );
      setEmail("");
      setPassword("");
      router.push("/create");
    } catch (error: any) {
      toast.error("Register failed. Try again.");
    }
  }

  return (
    <div className={registerFormContainer}>
      <div className={authFormWrapper}>
        <AuthForm
          isSignUp
          onAuthFormSubmit={handleRegisterWithEmailAndPasswordSubmit}
          emailFieldValue={email}
          onEmailFieldChange={(e) => setEmail(e.target.value)}
          passwordFieldValue={password}
          onPasswordFieldChange={(e) => setPassword(e.target.value)}
        />

        <p style={{ textAlign: "center" }}>
          Or sign up with an existing account:
        </p>

        <GoogleAuthButton isSignUp />

        <div className={authFormFooter}>
          <p>Already have an account.</p>
          <Button
            type="button"
            onClick={onToggleLoginRegister}
            variant="plainBtn"
          >
            Login
          </Button>
        </div>
      </div>

      <Image
        src="https://cdn.pixabay.com/photo/2020/12/13/13/29/hot-chocolate-5828239_1280.jpg"
        alt="Picture of the author"
        width={400}
        height={606}
        style={{ borderRadius: "0 1rem 1rem 0" }}
      />
    </div>
  );
}
