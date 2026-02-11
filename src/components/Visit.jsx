import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Visit() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 900,
      delay: 150,
      reset: false,
    });

    sr.reveal(".visit__name", {
      origin: "top",
    });

    sr.reveal(".visit__description", {
      origin: "bottom",
      delay: 300,
    });

    return () => sr.destroy();
  }, []);

  return (
    <section className="visit section" id="visit">
      <div className="visit__container">

        <img
          src="/images/visit-bg.jpg"
          className="visit__bg"
          alt="Bakery showcase background"
        />

        <div className="visit__overlay"></div>

        <div className="visit__content container">
          <h1 className="visit__name">Vist Us</h1>
          <p className="visit__description">
            A bakery is where dreams rise and delicious memories are made.
              Discover the best — Bake and wake!
          </p>
        </div>

      </div>
    </section>
  );
}

export default Visit;
