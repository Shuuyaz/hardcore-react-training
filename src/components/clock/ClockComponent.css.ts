import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const clock = style({
  border: "10px rgb(0 0 0) solid",
  padding: theme.spacing.s,
  marginBlock: theme.spacing.s,
  borderRadius: "10px"
});

export const nightTime = style({
  background: theme.color.black,
  color: theme.color.white
});
