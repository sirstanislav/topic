import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <a href="https://twitter.com/sirstanis" target="_blank" className="footer__twitter" rel="noreferrer">@sirstanislav</a>
      <p className="footer__about">ABOUT</p>
      <p className="footer__about">DONATE</p>
      <p className="footer__about">DARK</p>
    </section>
  );
}
