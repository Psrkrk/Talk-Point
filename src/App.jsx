// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Room from "./Pages/Room";
import Header from "./Header/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Help from "./Pages/Help";
import NotFound from "./Pages/NotFound"; // 404 page component
import Footer from "./Footer/Footer"; // Optional Footer component
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import DiscordPage from "./Pages/DiscordPage"; // Import DiscordPage component

function App() {
  return (
    <div className="App">
      {/* Header visible on all pages */}
      <Header />

      {/* Main content with routes */}
      <div className="pt-16 min-h-screen flex flex-col justify-between">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/discord" element={<DiscordPage />} />{" "}
          {/* Add this route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
