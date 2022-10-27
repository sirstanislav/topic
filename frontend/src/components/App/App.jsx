import "./App.css";
import { React, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import ImagePopup from "../ImagePopup/ImagePopup";
import { hashtagContext } from "../../utils/hashtagContext";
import { useEffect } from "react";

function App() {
  const [hashtag, setHashtag] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [darkTheme, setDarkTheme] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const local = localStorage.getItem("darkTheme");
    if (local === "true") {
      return setDarkTheme(true);
    }
    return setDarkTheme(false);
  }, []);

  function headerLink(e) {
    history("/");
    setHashtag(e.target.innerHTML);
  }

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      ...card,
    });
  }

  function handleClosePopup() {
    setSelectedCard({ isOpen: false });
  }

  function handleDarkTheme() {
    setDarkTheme(!darkTheme);
    localStorage.setItem("darkTheme", !darkTheme);
  }

  return (
    <div
      className="App"
      style={{ backgroundColor: darkTheme ? "#212124" : "#f7f9fb" }}
    >
      <hashtagContext.Provider value={hashtag}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header headerLink={headerLink} />
                <Main onCardClick={handleCardClick} />
                <Footer darkTheme={darkTheme} changeTheme={handleDarkTheme} />
              </>
            }
          ></Route>
          <Route
            path="about"
            element={
              <>
                <Header headerLink={headerLink} />
                <About darkTheme={darkTheme} />
                <Footer darkTheme={darkTheme} changeTheme={handleDarkTheme} />
              </>
            }
          ></Route>
        </Routes>
      </hashtagContext.Provider>
      <ImagePopup card={selectedCard} onClose={handleClosePopup} />
    </div>
  );
}

export default App;
