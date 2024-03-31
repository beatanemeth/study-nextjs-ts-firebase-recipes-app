import { vars } from "@/styles/colors.css";
import { style } from "@vanilla-extract/css";

export const createFormContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  gap: "2rem",
  width: "75vw",
  margin: "1rem auto",
  padding: "3rem",
  boxShadow: `5px 5px 15px ${vars.color.strongOrange}`,
  borderRadius: "1rem",
});

export const createFormWrapper = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "stretch",
  gap: "2rem",
});

export const editFormContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  gap: "1rem",
});

export const editFormWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  gap: "2rem",
});

export const createFormNarrowContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  gap: "2rem",
  width: "40%",
  padding: "1rem",
  borderRight: `.3rem solid ${vars.color.strongOrange}`,
});

export const createFormWideContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  gap: "2rem",
  width: "60%",
  padding: "1rem",
});

export const createFormInputFieldWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignSelf: "stretch",
  gap: ".5rem",
  width: "100%",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: vars.color.strongOrange,
});

export const createFormInputField = style({
  padding: ".5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "1rem",
  border: `.15rem solid ${vars.color.strongOrange}`,
  width: "100%",
});

export const addIngredientFormWrapper = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1rem",
});

export const ingredientFormInputField = style({
  padding: ".5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "1rem",
  border: `.15rem solid ${vars.color.strongOrange}`,
  width: "65%",
});

export const imageFieldsWrapper = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "5rem",
  width: "100%",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: vars.color.strongOrange,
});
