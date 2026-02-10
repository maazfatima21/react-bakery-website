import { useState, useEffect } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);

  // Show background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrollHeader ? "scroll-header" : ""}`}>
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src="/img/logo.png" width="120" />
        </a>

        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
          <ul className="nav__list">
            <li><a href="#home" onClick={() => setShowMenu(false)}>Home</a></li>
            <li><a href="#new" onClick={() => setShowMenu(false)}>New</a></li>
            <li><a href="#about" onClick={() => setShowMenu(false)}>About</a></li>
            <li><a href="#favorite" onClick={() => setShowMenu(false)}>Favorite</a></li>
            <li><a href="#visit" onClick={() => setShowMenu(false)}>Visit</a></li>
          </ul>

          <div className="nav__close" onClick={() => setShowMenu(false)}>
            ✖
          </div>
        </div>

        <div className="nav__toggle" onClick={() => setShowMenu(true)}>
          ☰
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
