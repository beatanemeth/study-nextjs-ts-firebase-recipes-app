import Button from "@/components/shared/Button";
import { GoogleIcon } from "@/reactIcons";
import authFirebaseService from "@/services/authFirebaseService";
import React from "react";
import { useRouter } from "next/navigation";

type GoogleAuthButtonProps = {
  isSignUp?: boolean;
};

export default function GoogleAuthButton({ isSignUp }: GoogleAuthButtonProps) {
  const router = useRouter();

  const buttonText = isSignUp ? "Sign up with Google" : "Sign in with Google";

  async function handleLoginWithGoogle() {
    try {
      await authFirebaseService.loginUserWithGoogle();
      router.push("/create");
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <Button type="button" variant="googleBtn" onClick={handleLoginWithGoogle}>
      {GoogleIcon()}
      <p style={{ fontSize: "1.2rem" }}>{buttonText}</p>
    </Button>
  );
}
