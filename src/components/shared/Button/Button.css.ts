import { vars } from "@/styles/colors.css";
import { style } from "@vanilla-extract/css";

export const primaryBtn = style({
  background: vars.color.strongPink,
  color: vars.color.veryPaleOrange,
  borderRadius: "3rem",
  boxShadow: ".8rem .8rem 1rem rgba(0, 0, 0, .5)",
  padding: ".5rem 3rem",
  ":hover": {
    transform: "scale(1.1)",
    background: vars.color.vividOrangeDark,
  },
});

export const secondaryBtn = style({
  background: vars.color.strongBlue,
  color: vars.color.veryPaleOrange,
  borderRadius: "3rem",
  boxShadow: ".8rem .8rem 1rem rgba(0, 0, 0, .5)",
  padding: ".5rem 3rem",
  ":hover": {
    transform: "scale(1.1)",
  },
});

export const tertiaryBtn = style({
  background: vars.color.strongBlue,
  color: vars.color.veryPaleOrange,
  fontSize: "1rem",
  borderRadius: "3rem",
  boxShadow: ".8rem .8rem 1rem rgba(0, 0, 0, .5)",
  padding: ".5rem 3rem",
  ":hover": {
    transform: "scale(1.1)",
  },
});

export const googleBtn = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  background: vars.color.lightGrayishBlue,
  borderRadius: "5rem",
  boxShadow: ".8rem .8rem 1rem rgba(0, 0, 0, .5)",
  padding: ".2rem",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.1)",
  },
});

export const resetPasswordBtn = style({
  background: vars.color.strongBlue,
  color: vars.color.veryPaleOrange,
  fontSize: "1.2rem",
  borderRadius: "3rem",
  padding: ".5rem 1.2rem",
  ":hover": {
    transform: "scale(1.1)",
  },
});

export const logoutBtn = style({
  background: vars.color.veryPaleOrange,
  color: vars.color.strongOrange,
  fontSize: "1rem",
  borderRadius: "3rem",
  padding: ".5rem 1rem",
  ":hover": {
    transform: "scale(1.1)",
  },
});

export const plainBtn = style({
  fontSize: "1rem",
  color: vars.color.strongBlue,
});

export const btnContentWrapper = style({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
});

export const unstyledBtn = style({
  appearance: "none",
  background: "none",
  border: 0,
});

export const recipeFormBtn = style({
  background: vars.color.lightGrayishBlue,
  fontSize: "1rem",
  borderRadius: "3rem",
  padding: ".5rem 1rem",
  ":hover": {
    transform: "scale(1.1)",
  },
});
