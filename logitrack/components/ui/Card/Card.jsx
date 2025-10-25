"use client";
import React from "react";
import {
  StyledCard,
  StyledCardContent,
  CardTitle,
  CardDescription,
} from "./styled";

/**
 * Logitrack Card Component
 * @param {string} title - Kart başlığı
 * @param {string} description - Açıklama metni
 * @param {ReactNode} children - Ek içerik (opsiyonel)
 */
const LogiCard = ({ title, description, children, ...props }) => {
  return (
    <StyledCard {...props}>
      <StyledCardContent>
        {title && <CardTitle variant="h6">{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
        {children && <div style={{ marginTop: 12 }}>{children}</div>}
      </StyledCardContent>
    </StyledCard>
  );
};

export default LogiCard;
