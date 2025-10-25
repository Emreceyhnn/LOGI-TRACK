import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

export const drawerWidth = 260;

// Üst bar
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: drawerWidth,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  borderBottom: "1px solid rgba(0,0,0,0.08)",
  zIndex: theme.zIndex.drawer + 1,
  transition: "all 0.25s ease-in-out",
}));

// Sidebar
export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: theme.palette.background.default,
    borderRight: "1px solid rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

// Ana içerik
export const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  minHeight: "100vh",
  padding: theme.spacing(4),
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

// Logo
export const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.2rem",
  color: theme.palette.primary.main,
  letterSpacing: 0.5,
}));

// Footer
export const FooterBox = styled(Box)(({ theme }) => ({
  borderTop: "1px solid rgba(0,0,0,0.08)",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  fontSize: "0.85rem",
}));
