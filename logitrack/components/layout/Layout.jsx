"use client";
import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { MainContent } from "./layouts";

const Layout = ({ title, children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Header title={title} />
      <MainContent component="main">
        <Toolbar />
        {children}
        <Footer />
      </MainContent>
    </Box>
  );
};

export default Layout;
