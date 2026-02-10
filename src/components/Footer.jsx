function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">

        <div className="footer__brand">
          <img src="/images/logo.png" alt="Tasty Tidbits Logo" className="footer__logo" />
          <p className="footer__about">
            Bringing warmth, sweetness, and joy to your table with freshly baked breads,
            cupcakes, cookies, and treats made with love.
          </p>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Visit Us</h3>
          <ul className="footer__list">
            <li className="footer__info">MN. Zen #945, Ita Chile</li>
            <li className="footer__info">Open: 9AM - 11PM</li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Connect</h3>
          <ul className="footer__list">
            <li>
              <a href="mailto:tastytidbits@gmail.com" className="footer__info">
                tastytidbits@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919876543210" className="footer__info">
                +91-9876543210
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="ri-facebook-circle-line"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              <i className="ri-youtube-line"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer__copy">
        © {new Date().getFullYear()} Tasty Tidbits. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
