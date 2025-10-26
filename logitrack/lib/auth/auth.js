export async function getCurrentUser() {
  try {
    const res = await fetch("/api/auth/me", {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    const data = await res.json();
    if (!res.ok) {
      console.error(data.error || "Kullanıcı bilgisi alınamadı");
      return null;
    }

    return data.user;
  } catch (err) {
    console.error("getCurrentUser error:", err);
    return null;
  }
}
