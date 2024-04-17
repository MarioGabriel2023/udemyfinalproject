import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={logo} alt="" />
          <p>
            Udemy este o platformă online de învățare și instruire, fondată în 2010. Ea <br /> oferă un mediu virtual pe
            care instruitorii pot încărca cursuri video pe <br /> diferite subiecte, iar studenții pot accesa aceste
            cursuri pentru a invata
            <br />
            lucruri noi.
          </p>
        </div>
        <div className="footer-content-right">
          <h2>COMPANIE</h2>
          <ul>
            <Link to="/appdownload">Descarca aplicatia</Link>
            <Link to="/terms">Termeni</Link>
            <Link to="/privacypolicy">Politica de confidentialitate</Link>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2024 Udemy, Inc.</p>
    </div>
  );
}
