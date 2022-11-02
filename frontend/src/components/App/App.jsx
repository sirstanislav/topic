import "./App.css";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ImagePopup from "../ImagePopup/ImagePopup";
import { React, useState, useEffect } from "react";
import { darkTheme } from "../../store/darkThemeSlice";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState({});
  const { darkThemeState } = useSelector((state) => state.themeState);

  useEffect(() => {
    const local = localStorage.getItem("darkTheme");
    if (local === "true") {
      dispatch(darkTheme(true));
    } else {
      dispatch(darkTheme(false));
    }
  }, [dispatch]);

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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main onCardClick={handleCardClick} />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
      <ImagePopup card={selectedCard} onClose={handleClosePopup} />
    </div>
  );
}

export default App;
