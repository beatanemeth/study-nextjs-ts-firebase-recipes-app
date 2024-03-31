import { vars } from "@/styles/colors.css";
import { style } from "@vanilla-extract/css";

export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: "30",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, .6)",
});

export const modalContent = style({
  maxWidth: "95rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "2rem 3rem",
  borderRadius: ".8rem",
  background: vars.color.veryPaleOrange,
  boxShadow:
    "0px 4px 6px 0px rgba(22,17,41,0.07) , 0px 6px 20px -2px rgba(37,31,66,0.15)",
});

export const modalHeader = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "auto",
});

export const iconClose = style({
  ":hover": {
    border: `.2rem solid ${vars.color.strongOrange}`,
    borderRadius: ".5rem",
  },
});

export const modalBodyWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "0 1rem",
});

export const modalFormWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const modalInputFieldWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  alignSelf: "stretch",
  gap: ".5rem",
});

export const modalInputField = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "stretch",
  borderRadius: "2rem",
  border: "none",
  padding: ".8rem 1rem",
});
