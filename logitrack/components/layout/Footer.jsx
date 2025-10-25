"use client";
import React from "react";
import { FooterBox } from "./layouts";

const Footer = () => {
  return (
    <FooterBox>
      © {new Date().getFullYear()} Logitrack — All rights reserved.
    </FooterBox>
  );
};

export default Footer;
