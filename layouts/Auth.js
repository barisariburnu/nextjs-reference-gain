import React, { useEffect } from "react";
import { useRouter } from "next/router";
import supabase from "lib/supabase";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

export default function Auth({ children }) {
  const router = useRouter();

  useEffect(() => {
    const user = supabase.auth.user();

    if (user) {
      return router.push('/admin/dashboard');
    }
  }, []);

  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
