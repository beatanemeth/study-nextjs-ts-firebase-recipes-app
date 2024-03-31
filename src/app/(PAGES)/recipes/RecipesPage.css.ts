import { vars } from "@/styles/colors.css";
import { style } from "@vanilla-extract/css";

export const gridContainer = style({
  display: "grid",
  gridTemplateColumns: "4fr 4fr 4fr",
  backgroundColor: vars.color.veryPaleOrange,
  padding: "2rem",
  margin: "1rem 0",
  gap: "2rem",
});

export const gridItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  flex: "0 0 auto",
  boxShadow: `3px 5px 15px ${vars.color.vividOrangeLight}`,
  padding: "1rem",
  textAlign: "center",
  minWidth: "200px",
  overflow: "hidden",
  wordWrap: "break-word", // Break long words
});
