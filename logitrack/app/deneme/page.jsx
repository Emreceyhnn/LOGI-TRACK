"use client";

import { getCurrentUser } from "@/lib/auth/user";
import { useEffect, useState } from "react";

const DenemePage = () => {
  /* --------------------------------- states --------------------------------- */
  const [user, setUser] = useState(null);

  /* ------------------------------- lifecycle ------------------------------- */
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getCurrentUser();
      console.log("userData:", userData);
      setUser(userData);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <div>
        {user ? (
          <p>
            Hoş geldin, {user.name} {user.role}
          </p>
        ) : (
          <p>Kullanıcı bilgisi alınıyor...</p>
        )}
      </div>
    </div>
  );
};
export default DenemePage;
