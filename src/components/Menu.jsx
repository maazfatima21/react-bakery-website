import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeader(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);

  const handleScrollTo = (sectionId) => {
    setShowMenu(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "New", id: "new" },
    { name: "About", id: "about" },
    { name: "Favorites", id: "favorite" },
    { name: "Visit", id: "visit" },
  ];

  return (
    <header
      className={`header ${scrollHeader ? "scroll-header" : ""}`}
      id="header"
    >

      <nav className="nav container">
        <div
          className="nav__logo"
          onClick={() => handleScrollTo("home")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="/images/logo.png"
            alt="Tasty Tidbits Logo"
          />
        </div>

        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <button
                  className="nav__link"
                  onClick={() => handleScrollTo(item.id)}
                >
                  {item.name}
                </button>
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
          aria-expanded={showMenu}
        >
          <i className="ri-menu-fill"></i>
        </button>
      </nav>
    </header>
  );
}

export default Menu;
