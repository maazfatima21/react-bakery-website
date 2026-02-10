function Home() {
  return (
    <section className="home section" id="home">
      <img src="/images/home-bg.png" className="home__bg" />
      <div className="home__shadow"></div>

      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">
            "Bread and butter much better." <br /> Love at First Bite !!
          </h1>
          <a href="#" className="button">Explore</a>
        </div>

        <div className="home__image">
          <img src="/images/home-bread.png" className="home__img" />
        </div>

        <footer className="home__footer">
          <div className="home__location">
            <i className="ri-map-pin-line"></i>
            <span>MN. Zen <br /> ita chile</span>
          </div>

          <div className="home__social">
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
        </footer>
      </div>
    </section>
  );
}

export default Home;
