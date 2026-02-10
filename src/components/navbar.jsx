import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#">
          <img src="/images/logo.png" className="nav__logo" width="125" />
        </a>

        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#new" className="nav__link">New</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About Us</a></li>
            <li className="nav__item"><a href="#favorite" className="nav__link">Favorites</a></li>
            <li className="nav__item"><a href="#visit" className="nav__link">Location</a></li>
          </ul>

          <div className="nav__close" onClick={() => setShowMenu(false)}>
            <i className="ri-close-line"></i>
          </div>

          <img src="/images/bread-4.png" className="nav__img-1" />
          <img src="/images/bread-1.png" className="nav__img-2" />
        </div>

        <div className="nav__toggle" onClick={() => setShowMenu(true)}>
          <i className="ri-menu-fill"></i>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
