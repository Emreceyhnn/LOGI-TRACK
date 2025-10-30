"use client";

import Image from "next/image";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

const featureCards = [
  {
    title: "Smart Route Planning",
    description:
      "Optimize deliveries with live traffic and warehouse capacity data to cut delays.",
  },
  {
    title: "Predictive ETAs",
    description: "Accurately forecast arrival times with AI-powered scheduling models.",
  },
  {
    title: "Driver Performance",
    description:
      "Track utilization, safety metrics, and compliance from a unified dashboard.",
  },
  {
    title: "Exception Alerts",
    description:
      "React instantly to disruptions with automated notifications and workflows.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Connect Your Fleet",
    description:
      "Integrate telematics, TMS, and WMS data sources in minutes with prebuilt connectors.",
  },
  {
    step: "2",
    title: "Visualize Operations",
    description:
      "Monitor every shipment and asset in real time with adaptive dashboards and heatmaps.",
  },
  {
    step: "3",
    title: "Automate Decisions",
    description:
      "Trigger proactive workflows, alerts, and customer updates before issues escalate.",
  },
];

const trustedLogos = [
  "Global Cargo",
  "Oceanic",
  "Alpha Freight",
  "Continental",
  "ExpressWay",
];

export default function LandingPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0f172a",
        color: "#f1f5f9",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "relative",
          flex: 1,
          overflow: "hidden",
          background: "linear-gradient(135deg, #0f172a 0%, #1f2a44 45%, #111827 100%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35) 0%, transparent 45%)," +
              "radial-gradient(circle at 80% 10%, rgba(6,182,212,0.25) 0%, transparent 50%)," +
              "radial-gradient(circle at 80% 80%, rgba(99,102,241,0.18) 0%, transparent 55%)",
          }}
        />

        <AppBar
          position="static"
          elevation={0}
          color="transparent"
          sx={{
            backdropFilter: "blur(16px)",
            backgroundColor: alpha("#0f172a", 0.6),
            borderBottom: `1px solid ${alpha("#cbd5f5", 0.08)}`,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", py: 3 }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #38bdf8, #6366f1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/logo1-beyaz.png"
                  alt="LogiTrack Logo"
                  width={28}
                  height={28}
                  priority
                />
              </Box>
              <Typography variant="h6" fontWeight={700} letterSpacing={1.5}>
                LOGI-TRACK
              </Typography>
            </Stack>

            <Stack direction="row" spacing={4} alignItems="center">
              {[
                "Features",
                "Testimonials",
                "Pricing",
                "About",
                "Blog",
              ].map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    cursor: "pointer",
                    color: alpha("#e2e8f0", 0.88),
                    transition: "color 0.2s ease",
                    "&:hover": { color: "#38bdf8" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>

            <Stack direction="row" spacing={2}>
              <Button
                variant="text"
                sx={{
                  color: alpha("#e2e8f0", 0.8),
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": { color: "#38bdf8" },
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  px: 3,
                  borderRadius: "999px",
                  background: "linear-gradient(135deg, #22d3ee, #2563eb)",
                  boxShadow: "0 12px 30px rgba(37, 99, 235, 0.35)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #0ea5e9, #1d4ed8)",
                  },
                }}
              >
                Request a Demo
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, pt: 12, pb: 14 }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={4}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "#38bdf8",
                    fontWeight: 700,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                  }}
                >
                  Operations in real time
                </Typography>
                <Typography variant="h2" fontWeight={800} lineHeight={1.1}>
                  Smart tracking for enterprise logistics.
                </Typography>
                <Typography variant="body1" sx={{ color: alpha("#cbd5f5", 0.9), fontSize: 18 }}>
                  Manage your entire fleet, dispatch, and delivery times from a single
                  command center. Monitor every shipment with predictive insights and
                  automated alerts.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      fontWeight: 700,
                      px: 4,
                      py: 1.6,
                      borderRadius: "999px",
                      background: "linear-gradient(135deg, #22d3ee, #2563eb)",
                      boxShadow: "0 18px 40px rgba(37, 99, 235, 0.45)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #0ea5e9, #1d4ed8)",
                      },
                    }}
                  >
                    Discover Now
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      fontWeight: 700,
                      px: 4,
                      py: 1.6,
                      borderRadius: "999px",
                      borderColor: alpha("#38bdf8", 0.6),
                      color: "#38bdf8",
                      "&:hover": {
                        borderColor: "#38bdf8",
                        backgroundColor: alpha("#38bdf8", 0.08),
                      },
                    }}
                  >
                    Request a Demo
                  </Button>
                </Stack>

                <Stack
                  direction="row"
                  spacing={4}
                  pt={2}
                  divider={
                    <Divider
                      flexItem
                      orientation="vertical"
                      sx={{ borderColor: alpha("#94a3b8", 0.2) }}
                    />
                  }
                >
                  <Stack>
                    <Typography variant="h4" fontWeight={800}>
                      98%
                    </Typography>
                    <Typography variant="body2" sx={{ color: alpha("#e2e8f0", 0.75) }}>
                      On-time delivery rate
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography variant="h4" fontWeight={800}>
                      12k+
                    </Typography>
                    <Typography variant="body2" sx={{ color: alpha("#e2e8f0", 0.75) }}>
                      Shipments monitored
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 6,
                  overflow: "hidden",
                  p: 3,
                  background: alpha("#1e293b", 0.6),
                  border: `1px solid ${alpha("#38bdf8", 0.18)}`,
                  boxShadow: "0 40px 120px rgba(15, 23, 42, 0.45)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at 25% 20%, rgba(56,189,248,0.25) 0%, transparent 45%)," +
                      "radial-gradient(circle at 80% 80%, rgba(37,99,235,0.25) 0%, transparent 55%)",
                  }}
                />

                <Stack spacing={3} position="relative" zIndex={1}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle2" sx={{ color: alpha("#e2e8f0", 0.8) }}>
                      Live Fleet Overview
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        textTransform: "none",
                        borderColor: alpha("#38bdf8", 0.4),
                        color: alpha("#38bdf8", 0.85),
                        borderRadius: "999px",
                        px: 2,
                        "&:hover": { borderColor: "#38bdf8" },
                      }}
                    >
                      Export
                    </Button>
                  </Stack>

                  <Box
                    sx={{
                      borderRadius: 4,
                      overflow: "hidden",
                      border: `1px solid ${alpha("#38bdf8", 0.2)}`,
                    }}
                  >
                    <Image
                      src="/sign-up.webp"
                      alt="Fleet dashboard"
                      width={960}
                      height={600}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>

                  <Stack direction="row" spacing={2}>
                    {[
                      { label: "Active Routes", value: "128" },
                      { label: "Vehicles", value: "542" },
                      { label: "Alerts", value: "6" },
                    ].map((metric) => (
                      <Box
                        key={metric.label}
                        sx={{
                          flex: 1,
                          p: 2,
                          borderRadius: 3,
                          backgroundColor: alpha("#0f172a", 0.55),
                          border: `1px solid ${alpha("#38bdf8", 0.12)}`,
                        }}
                      >
                        <Typography variant="h6" fontWeight={700}>
                          {metric.value}
                        </Typography>
                        <Typography variant="caption" sx={{ color: alpha("#cbd5f5", 0.75) }}>
                          {metric.label}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#0b1120", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            display="block"
            textAlign="center"
            sx={{ color: alpha("#38bdf8", 0.8), fontWeight: 600, letterSpacing: 4 }}
          >
            Trusted by industry leaders
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
            mt={4}
          >
            {trustedLogos.map((logo) => (
              <Typography
                key={logo}
                variant="subtitle1"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  color: alpha("#e2e8f0", 0.65),
                }}
              >
                {logo}
              </Typography>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#0f172a", py: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Typography variant="overline" sx={{ color: "#38bdf8", letterSpacing: 3 }}>
                  Core features
                </Typography>
                <Typography variant="h3" fontWeight={800}>
                  Everything you need for end-to-end visibility.
                </Typography>
                <Typography variant="body1" sx={{ color: alpha("#cbd5f5", 0.85) }}>
                  Coordinate dispatch, drivers, and customer updates with intelligent
                  workflows designed for complex logistics operations.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                {featureCards.map((card) => (
                  <Grid key={card.title} item xs={12} sm={6}>
                    <Box
                      sx={{
                        height: "100%",
                        p: 3,
                        borderRadius: 4,
                        backgroundColor: alpha("#1e293b", 0.65),
                        border: `1px solid ${alpha("#38bdf8", 0.16)}`,
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 24px 60px rgba(15, 23, 42, 0.45)",
                        },
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight={700} mb={1.5}>
                        {card.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: alpha("#e2e8f0", 0.75) }}>
                        {card.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#0b1120", py: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {workflow.map((item) => (
              <Grid key={item.step} item xs={12} md={4}>
                <Box
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    p: 4,
                    backgroundColor: alpha("#1e293b", 0.6),
                    border: `1px solid ${alpha("#38bdf8", 0.16)}`,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: alpha("#38bdf8", 0.85), fontWeight: 700, mb: 1 }}
                  >
                    Step {item.step}
                  </Typography>
                  <Typography variant="h5" fontWeight={700} mb={1.5}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha("#cbd5f5", 0.8) }}>
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#0f172a", py: 10 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center" justifyContent="space-between">
            <Stack spacing={2}>
              <Typography variant="h4" fontWeight={800}>
                Ready to modernize your logistics operations?
              </Typography>
              <Typography variant="body1" sx={{ color: alpha("#cbd5f5", 0.85) }}>
                Partner with Logi-Track to unlock real-time visibility, predictive
                intelligence, and exceptional customer experiences.
              </Typography>
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: "999px",
                  background: "linear-gradient(135deg, #22d3ee, #2563eb)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #0ea5e9, #1d4ed8)",
                  },
                }}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: "999px",
                  borderColor: alpha("#38bdf8", 0.6),
                  color: "#38bdf8",
                  "&:hover": {
                    borderColor: "#38bdf8",
                    backgroundColor: alpha("#38bdf8", 0.08),
                  },
                }}
              >
                Talk to Sales
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#0b1120", py: 6 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems="center" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: alpha("#e2e8f0", 0.6) }}>
              © {new Date().getFullYear()} Logi-Track. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={3}>
              {"Privacy Policy Terms Support".split(" ").map((item) => (
                <Typography key={item} variant="body2" sx={{ color: alpha("#e2e8f0", 0.65) }}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
