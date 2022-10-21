import "./App.css";
import { React, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import ImagePopup from "../ImagePopup/ImagePopup";
import { linkContext } from "../../utils/LinkContext";

function App() {
  const [link, setLink] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const history = useNavigate()

  function headerLink(e) {
    history("/");
    setLink(e.target.innerHTML);
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

  return (
    <div className="App">
      <linkContext.Provider value={link}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header headerLink={headerLink} />
                <Main onCardClick={handleCardClick} />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="about"
            element={
              <>
                <Header headerLink={headerLink} />
                <About />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </linkContext.Provider>
      <ImagePopup card={selectedCard} onClose={handleClosePopup} />
    </div>
  );
}

export default App;
