import "./App.css";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ImagePopup from "../ImagePopup/ImagePopup";
import { React, useState, useEffect } from "react";
import { darkTheme } from "../../store/darkThemeSlice";
import { useSelector, useDispatch } from "react-redux";
import { hashtagContext } from "../../utils/hashtagContext";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [hashtag, setHashtag] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const { darkThemeState } = useSelector((state) => state.themeState);

  useEffect(() => {
    const local = localStorage.getItem("darkTheme");
    if (local === "true") {
      dispatch(darkTheme(true));
    } else {
      dispatch(darkTheme(false));
    }
  }, []);

  const headerLink = (e) => {
    history("/");
    setHashtag(e.target.innerHTML);
  };

  const handleCardClick = (card) => {
    setSelectedCard({
      isOpen: true,
      ...card,
    });
  };

  const handleClosePopup = () => {
    setSelectedCard({ isOpen: false });
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: darkThemeState ? "#212124" : "#f7f9fb" }}
    >
      <hashtagContext.Provider value={hashtag}>
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
      </hashtagContext.Provider>
      <ImagePopup card={selectedCard} onClose={handleClosePopup} />
    </div>
  );
}

export default App;
