import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Store, Settings, Cart } from "./pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full max-w-[950px] lg:max-w-[1020px] mx-auto">
        <main className="px-4 md:px-0 py-5">
          <Routes>
            <Route path="/" element={<Navigate to="/store" />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
