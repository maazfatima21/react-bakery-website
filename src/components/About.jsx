function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container">

        {/* LEFT SIDE */}
        <div className="about__text">
          <h2 className="section__title">About</h2>
          <span className="section__subtitle">How We Work</span>

          <p className="about__description">
            At Tasty Tidbits, baking is our passion and our craft. Each dessert is created with love and attention to detail, ensuring the highest quality in every bite.
          </p>

          <p className="about__description">
            From artisan breads to cupcakes and cookies, we use only natural, fresh ingredients to deliver delicious flavors that bring smiles to our customers.
          </p>

          <p className="about__description">
            Our team carefully designs every dessert, taking pride in presentation, taste, and creativity. At Tasty Tidbits, every moment is made sweeter.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="about__images">
          <div className="about__grid">
            <div className="about__small-images">
              <img src="/images/about-1.jpg" alt="Baking bread" />
              <img src="/images/about-2.jpg" alt="Preparing pastries" />
            </div>
            <div className="about__large-image">
              <img src="/images/about-3.jpg" alt="Freshly baked cake" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
