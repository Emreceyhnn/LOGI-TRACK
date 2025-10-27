"use client";

import { useState } from "react";
import { TextField, Box, Typography, Alert } from "@mui/material";
import LogiButton from "@/components/ui/Button/button";

export default function RegisterForm({ showTitle = true, onSuccess, ...boxProps }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Kayıt başarısız");

      setMessage(data.message || "Kayıt başarılı! Giriş yapabilirsiniz 🎉");
      setName("");
      setEmail("");
      setPassword("");
      onSuccess?.(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
      }}
      {...boxProps}
    >
      {showTitle && (
        <div>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Kayıt Ol
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Logitrack platformunda yeni bir hesap oluşturun.
          </Typography>
        </div>
      )}

      {error && <Alert severity="error">{error}</Alert>}
      {message && <Alert severity="success">{message}</Alert>}

      <TextField
        label="Ad Soyad"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
        autoComplete="name"
      />
      <TextField
        label="E-posta"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
        autoComplete="email"
      />
      <TextField
        label="Şifre"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
        autoComplete="new-password"
        inputProps={{ minLength: 6 }}
        helperText="En az 6 karakter olmalıdır."
      />

      <LogiButton
        type="submit"
        variant="contained"
        loading={loading}
        fullWidth
        size="large"
      >
        Kayıt Ol
      </LogiButton>
    </Box>
  );
}
