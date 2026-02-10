function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__section">
          <h3 className="footer__title">Address</h3>
          <ul className="footer__list">
            <li><address className="footer__info">MN. Zen #945, Ita Chile</address></li>
            <li><address className="footer__info">9AM - 11PM</address></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Contact</h3>
          <ul className="footer__list">
            <li><address className="footer__info">tastytidbits@gmail.com</address></li>
            <li><address className="footer__info">+91-9876543210</address></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Follow Us</h3>
          <div className="footer__social">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <i className="ri-facebook-circle-line"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
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
