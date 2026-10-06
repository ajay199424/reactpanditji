import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Your main website
import AdminPortal from "./admin/AdminPortal";
import MangalBhatPuja from "./pages/MangalBhatPuja";
import KaalSarpDoshPuja from "./pages/KaalSarpDoshPuja";
export default function App() {
  return (
    <>
    
      <Router>
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
