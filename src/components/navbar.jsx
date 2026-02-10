import { useState, useEffect } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeader(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrollHeader ? "scroll-header" : ""}`} id="header">
      <nav className="nav container">
        <a href="#">
          <img 
            src="/images/logo.png" 
            className="nav__logo" 
            width="125"
            alt="Bakery Logo"
          />
        </a>

        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={() => setShowMenu(false)}>Home</a>
            </li>
            <li className="nav__item">
              <a href="#new" className="nav__link" onClick={() => setShowMenu(false)}>New</a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={() => setShowMenu(false)}>About Us</a>
            </li>
            <li className="nav__item">
              <a href="#favorite" className="nav__link" onClick={() => setShowMenu(false)}>Favorites</a>
            </li>
            <li className="nav__item">
              <a href="#visit" className="nav__link" onClick={() => setShowMenu(false)}>Location</a>
            </li>
          </ul>

          <div className="nav__close" onClick={() => setShowMenu(false)}>
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__toggle" onClick={() => setShowMenu(true)}>
          <i className="ri-menu-fill"></i>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
