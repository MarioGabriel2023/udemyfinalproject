import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Buy from "./pages/Buy/Buy";
import Footer from "./components/footer/Footer";
import Login from "./components/Login/Login";
import Testimonials from "./pages/Testimonials/Testimonials";
import Contact from "./pages/Contact/Contact";
import AppDownload from "./pages/AppDownload/AppDownload";
import Terms from "./pages/Terms/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (username) => {
    setUsername(username);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername("");
    setLoggedIn(false);
  };

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} onLogin={handleLogin} /> : <></>}
      <Navbar loggedIn={loggedIn} username={username} onLogout={handleLogout} setShowLogin={setShowLogin} />

      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/appdownload" element={<AppDownload />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
