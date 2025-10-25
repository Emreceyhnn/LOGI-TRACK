import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Ana kart
export const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  border: "1px solid rgba(0,0,0,0.08)",
  backgroundColor: theme.palette.background.paper,
  transition: "all 0.25s ease-in-out",
  "&:hover": {
    boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
    transform: "translateY(-2px)",
  },
}));

// İçerik kısmı
export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: "20px 24px",
}));

// Başlık
export const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.1rem",
  marginBottom: "8px",
  color: theme.palette.text.primary,
}));

// Açıklama
export const CardDescription = styled(Typography)(({ theme }) => ({
  fontSize: "0.95rem",
  color: theme.palette.text.secondary,
}));
