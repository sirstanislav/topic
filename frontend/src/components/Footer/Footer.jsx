import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer({ darkTheme, changeTheme }) {
  return (
    <section className="footer">
      <Link
        to="/about"
        className={`footer__link ${darkTheme && "footer__link_dark"}`}
      >
        ABOUT
      </Link>
      <a
        className={`footer__link ${darkTheme && "footer__link_dark"}`}
        href="https://www.paypal.com/donate/?hosted_button_id=3P83TXA9DDWF2"
        target="_blank"
        rel="noreferrer"
      >
        DONATE
      </a>
      <p
        className={`footer__link ${darkTheme && "footer__link_dark"}`}
        onClick={changeTheme}
      >
        DARK
      </p>
    </section>
  );
}
