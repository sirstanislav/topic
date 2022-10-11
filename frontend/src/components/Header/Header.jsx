import React from "react";
import "./Header.css";

export default function Header({ headerLink }) {
  return (
    <div className="header">
      <div className="header__links">
        <div className={"header__link"} onClick={headerLink}>
          #нюдсочетверг
        </div>
        <div className={"header__link"} onClick={headerLink}>
          #sitnikfriday
        </div>
        <div className="header__link" onClick={headerLink}>
          #sexymonday
        </div>
        <div className="header__link" onClick={headerLink}>
          #нюдсыкаждыйдень
        </div>
      </div>
      <div className="header__logo" />
    </div>
  );
}
