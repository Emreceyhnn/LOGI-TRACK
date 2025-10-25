import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: "10px",
  textTransform: "none",
  fontWeight: 600,
  padding: "10px 20px",
  boxShadow: "none",
  transition: "all 0.25s ease-in-out",
  ...(variant === "contained" && {
    backgroundColor: "#2E7D32",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#256628",
    },
  }),
  ...(variant === "outlined" && {
    borderColor: "#2E7D32",
    color: "#2E7D32",
    "&:hover": {
      borderColor: "#256628",
      backgroundColor: "rgba(46, 125, 50, 0.08)",
    },
  }),
  ...(variant === "text" && {
    color: "#2E7D32",
    "&:hover": {
      backgroundColor: "rgba(46, 125, 50, 0.1)",
    },
  }),
}));
