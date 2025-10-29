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
  createTheme,
  ThemeProvider,
  CssBaseline,
  alpha,
} from "@mui/material";


const theme = createTheme({
  typography: {
    fontFamily: "var(--font-geist-sans)",
  },
});


export default function SignupPage({ locale = "en" }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Kayıt başarısız");

    } catch (error) {
      console.error("Kayıt hatası:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
          <CssBaseline/>
    <Box
      sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: alpha("#0e1c3bff", 0.60),
          py: { xs: 6, md: 8 },
          px: { xs: 2, sm: 4 },
        }}
    >
      <Paper
        elevation={12}
        sx={{
                    width: "100%",
                    maxWidth: '80%',
                    minHeight: { xs: 560, md: 750 },
                    borderRadius: { xs: 4, md: 5 },
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    bgcolor: alpha("#0f172a", 0.65),
                    position: "relative",
                  }}
      >
        <Box
          sx={{
            position: "relative",
            flexBasis: { md: "75%" },
            display: { xs: "none", md: "block" },
          }}
        >
          <Image
            src={"/background-auth.jpeg"}
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
                  width: 320,
                  height: 400,
                  borderRadius: 4,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/logo1-vector.png"
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
            
          }}
        >
          <Paper
            component="form"
            onSubmit={handleSubmit}
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: '100%',
              height: "100%",
              p: 4,
              borderRadius: 4,
              backgroundColor: "rgba(255,255,255,0.98)",
              boxShadow: "0 24px 48px rgba(15,26,51,0.18)",
            }}
          >
            <Stack spacing={7}>
              <Box >
                <Stack direction="row" spacing={0} alignItems="center">

                  <Image src="/logo1-vector.png" alt="logo" width={30} height={30}/>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: "#212222ff", letterSpacing: 2 }}
                >
                  LOGI-
                </Typography>
                  <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, color: "#47b2b1", letterSpacing: 2 }}
                >
                  TRACK
                </Typography>
                </Stack>
                
                <Typography variant="h5" sx={{ fontWeight: 700, mt: 2 }}>
                  Create Your Account
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Sign up to access analytics, fleet monitoring, and secure operations.
                </Typography>
              </Box>

              <Stack spacing={3}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  value={form.name}
                  onChange={handleChange("name")}
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
                <TextField
                  label="Repeat Password"
                  type="password"
                  variant="outlined"
                  value={form.repeatPassword}
                  onChange={handleChange("repeatPassword")}
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
                  onClick={handleSubmit}
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
                    href={`/${locale}/auth/sign-in`}
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
    </ThemeProvider>
  );
}
