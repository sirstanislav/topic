import "./More.css";

import React from "react";

export default function More({loadMore}) {
  return (
    <section className="more">
      <button className="more__button" onClick={loadMore}>MORE</button>
    </section>
  );
}
