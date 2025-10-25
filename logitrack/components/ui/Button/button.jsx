"use client";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { StyledButton } from "./styled";

/**
 * Logitrack için özel MUI butonu
 * @param {string} variant - "contained" | "outlined" | "text"
 * @param {boolean} loading - true olduğunda spinner gösterir
 * @param {ReactNode} children - buton içeriği
 * @param {Function} onClick - tıklama fonksiyonu
 */
const LogiButton = ({
  variant = "contained",
  loading = false,
  children,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      disabled={loading}
      onClick={onClick}
      {...props}
    >
      {loading ? <CircularProgress size={22} color="inherit" /> : children}
    </StyledButton>
  );
};

export default LogiButton;
