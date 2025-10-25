"use client";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SettingsIcon from "@mui/icons-material/Settings";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleIcon from "@mui/icons-material/People";
import { StyledDrawer, LogoText } from "./layouts";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Araçlar", icon: <DirectionsCarIcon /> },
  { text: "Seferler", icon: <LocalShippingIcon /> },
  { text: "Sürücüler", icon: <PeopleIcon /> },
  { text: "Ayarlar", icon: <SettingsIcon /> },
];

const Sidebar = () => {
  return (
    <StyledDrawer variant="permanent" anchor="left">
      <div>
        <Toolbar>
          <LogoText>Logitrack</LogoText>
        </Toolbar>
        <List>
          {menuItems.map(({ text, icon }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <div
        style={{
          padding: "16px",
          textAlign: "center",
          fontSize: "0.8rem",
          color: "#999",
        }}
      >
        v1.0.0
      </div>
    </StyledDrawer>
  );
};

export default Sidebar;
