import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import Menu from "./components/Menu";
import Home from "./components/Home";
import New from "./components/New";
import About from "./components/About";
import Favorite from "./components/Favorite";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
// import NotFound from "./components/NotFound"; // use later if adding routing

function App() {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2000,
      delay: 300,
      reset: false,
    });

    sr.reveal(
      ".home__data, .new__container, .about__data, .favorite__data, .visit__data, .footer"
    );
  }, []);

  return (
    <>
      <Menu />

      <main className="main">
        <Home />
        <New />
        <About />
        <Favorite />
        <Visit />
      </main>

      <Footer />
    </>
  );
}

export default App;
