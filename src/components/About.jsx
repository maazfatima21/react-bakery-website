function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title">About Us</h2>

          <p className="about__description">
            We prepare different types of bakery products made at home,
            maintaining tradition using only the best ingredients and local products.
          </p>

          <button className="button">Know More</button>
        </div>

        <img
          src="/images/about-bread.png"
          className="about__img"
          alt="About our bakery"
        />
      </div>
    </section>
  );
}

export default About;
