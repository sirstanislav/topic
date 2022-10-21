import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer">
      <Link to="/about" className="footer__about">
        ABOUT
      </Link>
      <p className="footer__about">DONATE</p>
      <p className="footer__about">DARK</p>
    </section>
  );
}
