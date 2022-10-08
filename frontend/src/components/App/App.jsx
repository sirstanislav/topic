import "./App.css";
import { React, useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { linkContext } from "../../utils/LinkContext";

function App() {
  const [link, setLink] = useState("");

  function headerLink(e) {
    setLink(e.target.innerHTML);
  }

  return (
    <div className="App">
      <linkContext.Provider value={link}>
        <Header headerLink={headerLink} />
        <Main />
        <Footer />
      </linkContext.Provider>
    </div>
  );
}

export default App;
