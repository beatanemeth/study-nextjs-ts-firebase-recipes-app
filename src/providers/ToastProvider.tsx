"use client";
import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastProviderProps = { children: ReactNode };

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      <ToastContainer autoClose={6000} theme="colored" />
      {children}
    </>
  );
}
