import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom"; 

function Home() {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2000,
      delay: 300,
      reset: false,
    });

    sr.reveal(".home__data");
    sr.reveal(".home__image", { delay: 600 });
    sr.reveal(".home__footer", { delay: 800, origin: "bottom" });
  }, []);

  return (
    <section className="home section" id="home">
      <img
        src="/images/home-bg.png"
        className="home__bg"
        alt="Bakery background"
        loading="lazy"
      />
      <div className="home__shadow"></div>

      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">
            "Bread and butter much better." <br /> Love at First Bite !!
          </h1>

          <Link to="/products" className="button">Explore</Link>
        </div>

        <div className="home__image">
          <img
            src="/images/home-bread.png"
            className="home__img"
            alt="Fresh baked bread"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
