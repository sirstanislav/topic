import React from "react";
import { useState } from "react";
import "./Header.css";

export default function Header({ headerLink }) {
  const [active, setActive] = useState(1);

  function handleLink(e) {
    headerLink(e);
  }

  function displayStyle(position) {
    if (active === position) {
      return "block";
    }
    return "";
  }

  console.log("active: ", active);

  return (
    <div className="header">
      <div className="header__links">
        <div
          className={"header__link"}
          onClick={(e) => {
            handleLink(e);
            setActive(0);
          }}
        >
          <p className="header__link-title">#нюдсочетверг</p>
          <div
            className="header__link-subline"
            style={{ display: displayStyle(0) }}
          ></div>
        </div>
        <div
          className={"header__link"}
          onClick={(e) => {
            handleLink(e);
            setActive(1);
          }}
        >
          <p className="header__link-title">#sitnikfriday</p>
          <div
            className="header__link-subline"
            style={{ display: displayStyle(1) }}
          ></div>
        </div>
        <div
          className="header__link"
          onClick={(e) => {
            handleLink(e);
            setActive(2);
          }}
        >
          <p className="header__link-title">#sexymonday</p>
          <div
            className="header__link-subline"
            style={{ display: displayStyle(2) }}
          ></div>
        </div>
        <div
          className="header__link"
          onClick={(e) => {
            handleLink(e);
            setActive(3);
          }}
        >
          <p className="header__link-title">#нюдсыкаждыйдень</p>
          <div
            className="header__link-subline"
            style={{ display: displayStyle(3) }}
          ></div>
        </div>
      </div>
    </div>
  );
}
