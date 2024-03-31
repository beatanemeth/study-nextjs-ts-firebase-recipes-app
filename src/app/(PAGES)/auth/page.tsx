"use client";
import LoginForm from "@/components/auth/Login";
import RegisterForm from "@/components/auth/Register";
import { useState } from "react";

export default function AuthPage() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  function handleToggleLoginRegister() {
    setIsLoginMode(!isLoginMode);
  }

  return (
    <>
      {isLoginMode ? (
        <LoginForm onToggleLoginRegister={handleToggleLoginRegister} />
      ) : (
        <RegisterForm onToggleLoginRegister={handleToggleLoginRegister} />
      )}
    </>
  );
}
