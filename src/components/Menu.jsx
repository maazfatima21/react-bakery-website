import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Menu() {
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
        <Link to="/">
          <img
            src="/images/logo.png"
            className="nav__logo"
            width="125"
            alt="Tasty Tidbits Logo"
          />
        </Link>

        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
          <ul className="nav__list">
            {["home", "new", "about", "favorite", "visit"].map((item) => (
              <li key={item} className="nav__item">
                <a
                  href={`#${item}`}
                  className="nav__link"
                  onClick={() => setShowMenu(false)}
                >
                  {item === "favorite"
                    ? "Favorites"
                    : item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="nav__close"
            onClick={() => setShowMenu(false)}
            aria-label="Close menu"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        <button
          className="nav__toggle"
          onClick={() => setShowMenu(true)}
          aria-label="Open menu"
        >
          <i className="ri-menu-fill"></i>
        </button>
      </nav>
    </header>
  );
}

export default Menu;
