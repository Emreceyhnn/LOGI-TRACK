"use client";

import Image from "next/image";
import NextLink from "next/link";
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
  alpha,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-geist-sans)",
  },
});

const backgroundImage =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1080&q=80";

export default function SignInView({ locale = "en" }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: alpha("#0f172a", 0.12),
          py: { xs: 6, md: 8 },
          px: { xs: 2, sm: 4 },
        }}
      >
        <Paper
          elevation={12}
          sx={{
            width: "100%",
            maxWidth: 1050,
            minHeight: { xs: 560, md: 600 },
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
              flex: 1.15,
              display: "flex",
              alignItems: "stretch",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage: `linear-gradient(90deg, ${alpha(
                  "#0f172a",
                  0.75
                )}, ${alpha("#0f172a", 0.35)}), url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Stack
              spacing={4}
              justifyContent="space-between"
              sx={{
                position: "relative",
                zIndex: 1,
                px: { xs: 4, md: 6 },
                py: { xs: 6, md: 8 },
                color: "#f8fafc",
              }}
            >
              <Stack spacing={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "12px",
                      bgcolor: alpha("#38bdf8", 0.85),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 10px 30px ${alpha("#38bdf8", 0.35)}`,
                    }}
                  >
                    <Image
                      src="/globe.svg"
                      alt="Logi-Track icon"
                      width={20}
                      height={20}
                    />
                  </Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}
                  >
                    LOGI-TRACK
                  </Typography>
                </Stack>
                <Typography variant="h4" sx={{ fontWeight: 600, maxWidth: 320 }}>
                  Seamless logistics insights for your fleet
                </Typography>
                <Typography variant="body2" sx={{ maxWidth: 360, opacity: 0.8 }}>
                  Monitor deliveries, coordinate drivers, and stay ahead with actionable
                  analytics tailored for your operations team.
                </Typography>
              </Stack>
              <Stack spacing={2.5} sx={{ maxWidth: 360 }}>
                <Typography variant="overline" sx={{ opacity: 0.7 }}>
                  {locale.toUpperCase()} PLATFORM ACCESS
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  Secured with enterprise-grade encryption and multi-layered monitoring.
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box
            sx={{
              flexBasis: { xs: "100%", md: 360 },
              bgcolor: "#f8fafc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: { xs: 4, md: 6 },
              py: { xs: 6, md: 0 },
            }}
          >
            <Box sx={{ width: "100%", maxWidth: 320 }}>
              <Stack spacing={3}>
                <Stack spacing={0.5} alignItems="center">
                  <Image src="/globe.svg" alt="Logi-Track" width={36} height={36} />
                  <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center" }}>
                    Login to Your Company Dashboard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center" }}
                  >
                    Enter your credentials to access fleet analytics and dispatch tools.
                  </Typography>
                </Stack>
                <Stack component="form" spacing={2} noValidate>
                  <TextField
                    label="Email / Username"
                    name="email"
                    type="email"
                    autoComplete="email"
                    fullWidth
                  />
                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                  />
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label={<Typography variant="body2">Remember me</Typography>}
                    />
                    <Link
                      component={NextLink}
                      href={`/${locale}/auth/forgot-password`}
                      variant="body2"
                      sx={{ fontWeight: 600 }}
                    >
                      Forgot Password?
                    </Link>
                  </Stack>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      py: 1.2,
                      borderRadius: 2,
                      fontWeight: 600,
                      bgcolor: "#2563eb",
                      "&:hover": { bgcolor: "#1d4ed8" },
                      boxShadow: `0 20px 40px ${alpha("#2563eb", 0.25)}`,
                    }}
                  >
                    Login
                  </Button>
                </Stack>
                <Stack spacing={0.5} alignItems="center">
                  <Typography variant="body2" color="text.secondary">
                    Don&apos;t have an account?{` `}
                    <Link
                      component={NextLink}
                      href={`/${locale}/auth/register`}
                      sx={{ fontWeight: 600 }}
                    >
                      Create one
                    </Link>
                  </Typography>
                  <Typography variant="caption" color="text.secondary" align="center">
                    Your data secured SSL, encryption, user parity.
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
