import clsx from "clsx";
import {
  btnContentWrapper,
  googleBtn,
  logoutBtn,
  plainBtn,
  primaryBtn,
  resetPasswordBtn,
  secondaryBtn,
  tertiaryBtn,
} from "./Button.css";
import { MouseEvent } from "react";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant?:
    | "primaryBtn"
    | "secondaryBtn"
    | "tertiaryBtn"
    | "googleBtn"
    | "resetPasswordBtn"
    | "logoutBtn"
    | "plainBtn";
  style?: React.CSSProperties;
};

const variantClassNames: Record<string, string> = {
  primaryBtn: primaryBtn,
  secondaryBtn: secondaryBtn,
  tertiaryBtn: tertiaryBtn,
  googleBtn: googleBtn,
  resetPasswordBtn: resetPasswordBtn,
  logoutBtn: logoutBtn,
  plainBtn: plainBtn,
};

export default function Button({
  type,
  children,
  onClick,
  className,
  variant,
  style,
}: ButtonProps) {
  const variantClassName = variant ? variantClassNames[variant] : undefined;

  return (
    <button
      type={type}
      className={clsx(className, variantClassName)}
      onClick={onClick}
      style={style}
    >
      {variant && variant === "plainBtn" ? (
        <>{children}</>
      ) : (
        <div className={btnContentWrapper}>{children}</div>
      )}
    </button>
  );
}
