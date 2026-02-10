import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

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

    return () => sr.destroy();
  }, []);

  return (
    <section
      className="home section"
      id="home"
      style={{ backgroundImage: "url('/images/home-bg1.png')" }}
    >
      <div className="home__overlay"></div>

      <div className="home__container">
        <div className="home__data">
          <span className="home__subtitle">
            Bread and butter much better. <br /> Love at First Bite !!
          </span>

          <h1 className="home__title">TASTY TIDBITES</h1>

          <p className="home__description">
            Exceedingly delicious bakery and cafe. <br />
            Naturally crafted and made with premium ingredients. <br />
            Baked fresh daily for your sweetest moments.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
