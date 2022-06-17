import React, { useEffect } from "react";
import { useRouter } from "next/router";
import supabase from "lib/supabase";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
  const router = useRouter();

  useEffect(() => {
    const user = supabase.auth.user();

    if (!user) {
      router.push('/');
    }
  }, []);

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
