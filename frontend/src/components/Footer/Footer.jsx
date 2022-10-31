import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { darkTheme } from "../../store/darkThemeSlice";

export default function Footer() {
  const dispatch = useDispatch();
  const { darkThemeState } = useSelector((state) => state.themeState);

  return (
    <section className="footer">
      <Link
        to="/about"
        className={`footer__link ${darkThemeState && "footer__link_dark"}`}
      >
        ABOUT
      </Link>
      <a
        className={`footer__link ${darkThemeState && "footer__link_dark"}`}
        href="https://www.paypal.com/donate/?hosted_button_id=3P83TXA9DDWF2"
        target="_blank"
        rel="noreferrer"
      >
        DONATE
      </a>
      <p
        className={`footer__link ${darkThemeState && "footer__link_dark"}`}
        onClick={() => {
          dispatch(darkTheme(!darkThemeState));
          localStorage.setItem("darkTheme", !darkThemeState);
        }}
      >
        DARK
      </p>
    </section>
  );
}
