import React from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}
