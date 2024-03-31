import { vars } from "@/styles/colors.css";
import { style } from "@vanilla-extract/css";

export const authFormInputField = style({
  padding: ".5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "1rem",
  border: `.15rem solid ${vars.color.strongOrange}`,
  width: "100%",
});
