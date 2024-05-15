import { useEffect } from "react";
import "./App.css";
import { Questions } from "./components/Questions";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Activities } from "./components/Activities";
import { Navbar } from "./components/Navbar";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* NAVBAR */}
      <Navbar />
      {/* INICIO */}
      <Home />
      {/* ACTIVITIES */}
      <Activities />
      {/* Questions */}
      <Questions />
      {/* Contact */}
      <Contact />
    </>
  );
}

export default App;
