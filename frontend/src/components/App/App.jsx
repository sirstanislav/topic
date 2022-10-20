import "./App.css";
import { React, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ImagePopup from "../ImagePopup/ImagePopup";
import { linkContext } from "../../utils/LinkContext";

function App() {
  const [link, setLink] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  function headerLink(e) {
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
        <Header headerLink={headerLink} />
        <Main onCardClick={handleCardClick} />
        <Footer />
      </linkContext.Provider>
      <ImagePopup card={selectedCard} onClose={handleClosePopup} />
    </div>
  );
}

export default App;
