"use client";

import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
} from "@mui/material";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1586511925558-a4b69ed23dfb?auto=format&fit=crop&w=1400&q=80";

export default function SignupPage() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    password: "",
  });

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: replace with real signup flow once API is ready
    console.log("Sign up submitted", form);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 2, md: 4 },
        background: (theme) =>
          `radial-gradient(circle at top left, ${theme.palette.grey[200]}, ${theme.palette.grey[300]})`,
      }}
    >
      <Paper
        elevation={12}
        sx={{
          width: "100%",
          maxWidth: 1080,
          minHeight: { md: 600 },
          borderRadius: 6,
          overflow: "hidden",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            flexBasis: { md: "52%" },
            display: { xs: "none", md: "block" },
          }}
        >
          <Image
            src={HERO_IMAGE}
            alt="Fleet of trucks at sunset"
            fill
            sizes="(min-width: 900px) 50vw, 0vw"
            style={{ objectFit: "cover" }}
            priority
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(15,26,51,0.15) 0%, rgba(15,26,51,0.7) 100%)",
            }}
          />
          <Stack
            spacing={3}
            sx={{
              position: "absolute",
              inset: 0,
              color: "common.white",
              p: 5,
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, letterSpacing: 6 }}>
                LOGI-TRACK
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 1, maxWidth: 280, color: "rgba(255,255,255,0.75)" }}
              >
                Monitor and optimize your logistics operations with real-time insights.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Box
                sx={{
                  position: "relative",
                  width: 220,
                  height: 130,
                  borderRadius: 4,
                  overflow: "hidden",
                  background: "rgba(15,26,51,0.5)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/globe.svg"
                  alt="Global logistics"
                  fill
                  style={{ objectFit: "cover", opacity: 0.85 }}
                />
              </Box>
            </Box>
          </Stack>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#212936",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: { xs: 8, md: 0 },
            px: { xs: 3, sm: 6, md: 8 },
          }}
        >
          <Paper
            component="form"
            onSubmit={handleSubmit}
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: 360,
              p: 4,
              borderRadius: 4,
              backgroundColor: "rgba(255,255,255,0.98)",
              boxShadow: "0 24px 48px rgba(15,26,51,0.18)",
            }}
          >
            <Stack spacing={3}>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, color: "#2563EB", letterSpacing: 2 }}
                >
                  LOGI-TRACK
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
                  Create Your Company Account
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Sign up to access analytics, fleet monitoring, and secure operations.
                </Typography>
              </Box>

              <Stack spacing={2.5}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  value={form.fullName}
                  onChange={handleChange("fullName")}
                  fullWidth
                  required
                />
                <TextField
                  label="Company"
                  variant="outlined"
                  value={form.company}
                  onChange={handleChange("company")}
                  fullWidth
                  required
                />
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={form.email}
                  onChange={handleChange("email")}
                  fullWidth
                  required
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={form.password}
                  onChange={handleChange("password")}
                  fullWidth
                  required
                />
              </Stack>

              <Stack spacing={2.5}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    py: 1.2,
                    borderRadius: 2.5,
                    background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                    boxShadow: "0 16px 32px rgba(37,99,235,0.3)",
                  }}
                >
                  Create Account
                </Button>
                <Divider>
                  <Typography variant="caption" color="text.secondary">
                    Trusted SSL, encrypted for your security
                  </Typography>
                </Divider>
                <Typography variant="body2" textAlign="center" color="text.secondary">
                  Already have an account?{" "}
                  <Link
                    component={NextLink}
                    href="../login"
                    underline="none"
                    sx={{ fontWeight: 600, color: "#2563EB" }}
                  >
                    Sign in
                  </Link>
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
}
