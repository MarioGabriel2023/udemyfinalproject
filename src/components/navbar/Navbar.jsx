import "./Navbar.css";
import logo from "../../assets/logo.png";
import icon_cart from "../../assets/cart-icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { assets } from "../../assets/assets";

export default function Navbar({ loggedIn, username, onLogout, setShowLogin }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src={logo} className="logo" alt="" />
        </Link>

        <div className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="navbar-right">
            <Link to="/cart" className="cart-link">
              <img src={icon_cart} className="cart-icon" alt="" />
            </Link>

            {loggedIn && (
              <div className="user-profile">
                <span>{username}</span>
                <img src={assets.icon_user} alt="" />
              </div>
            )}

            {loggedIn && (
              <button onClick={onLogout} className="signin-btn">
                Sign Out
              </button>
            )}

            {!loggedIn && (
              <button onClick={() => setShowLogin(true)} className="signin-btn">
                Sign In
              </button>
            )}
          </div>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
        </div>
      </nav>
    </>
  );
}
