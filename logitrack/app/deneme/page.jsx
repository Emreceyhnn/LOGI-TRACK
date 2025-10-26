"use client";

import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";

import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import { getCurrentUser } from "@/lib/auth/auth";

export default function Profile() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const u = await getCurrentUser();
      setUser(u);
      setLoading(false);
    })();
  }, []);

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      setUser(null);
    } catch (err) {
      console.error("Logout hatası:", err);
    }
  }

  if (loading) return <p>Yükleniyor...</p>;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        margin: "auto",
        mt: 5,
      }}
      bgcolor={"white"}
    >
      <Box sx={{ maxWidth: 400, margin: "auto", mt: 5 }} bgcolor={"white"}>
        {user ? (
          <>
            <h3>Hoş geldin, {user.name} 👋</h3>
            <p>{user.email}</p>

            <Button
              variant="contained"
              color="error"
              sx={{ mt: 2 }}
              onClick={handleLogout}
            >
              Çıkış Yap
            </Button>
          </>
        ) : (
          <>
            <LoginForm />
            <RegisterForm />
          </>
        )}
      </Box>
    </Box>
  );
}
