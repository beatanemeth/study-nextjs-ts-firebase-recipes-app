import { vars } from "@/styles/colors.css";
import { style } from "@vanilla-extract/css";

export const navigationWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  marginLeft: "auto",
  color: vars.color.veryPaleOrange,
});

export const helloUser = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  fontSize: "1rem",
});

export const helloImg = style({
  borderRadius: "50%",
});
