import { vars } from "@/styles/colors.css";
import { style } from "@vanilla-extract/css";

export const authFormContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "stretch",
  width: "45vw",
  margin: "0 auto",
  boxShadow: `5px 5px 15px ${vars.color.strongOrange}`,
  borderRadius: "1rem",
});

export const loginFormContainer = style([
  authFormContainer,
  { boxShadow: `5px 5px 15px ${vars.color.strongOrange}` },
]);

export const registerFormContainer = style([
  authFormContainer,
  { boxShadow: `-5px 5px 15px ${vars.color.strongOrange}` },
]);

export const authFormWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "stretch",
  gap: "2rem",
  margin: "0 auto",
  width: "18rem",
});

export const authFormContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: "1.2rem",
});

export const authFormInputFieldWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignSelf: "stretch",
  gap: ".5rem",
});

export const resetFormContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  background: vars.color.veryLightGray,
  borderRadius: ".5rem",
  padding: ".5rem 1rem 1rem 1rem",
});

export const resetFormContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: ".3rem",
});

export const authFormFooter = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: ".2rem",
});
