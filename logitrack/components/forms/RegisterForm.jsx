"use client";

import { useState } from "react";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Kayıt başarısız");

      setMessage("Kayıt başarılı! Giriş yapabilirsiniz 🎉");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" align="center" fontWeight={600}>
        Kayıt Ol
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}
      {message && <Alert severity="success">{message}</Alert>}

      <TextField
        label="Ad Soyad"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="E-posta"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Şifre"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        sx={{ mt: 1 }}
      >
        {loading ? "Kayıt yapılıyor..." : "Kayıt Ol"}
      </Button>
    </Box>
  );
}
