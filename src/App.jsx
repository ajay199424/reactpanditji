import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home"; // Your main website
import AdminPortal from "./admin/AdminPortal";
import MangalBhatPuja from "./pages/MangalBhatPuja";
import KaalSarpDoshPuja from "./pages/KaalSarpDoshPuja";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    return () => window.clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <>
    
      <Router>
        <ScrollToHash />
        <Routes>
          {/* Public Website Routes */}
          <Route path="/" element={<Home />} />
<Route path="/mangal-bhat-puja" element={<MangalBhatPuja />} />
<Route path="/kaal-sarp-dosh-puja" element={<KaalSarpDoshPuja />} />
          {/* Unified Admin Space */}
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
      </Router>
    </>
  );
}
