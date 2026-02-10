function Visit() {
  return (
    <section className="visit section" id="visit">
      <div className="visit__container">
        <img
          src="/images/visit-bg.jpg"
          className="visit__bg"
          alt="Bakery location background"
        />
        <div className="visit__shadow"></div>

        <div className="visit__content container grid">
          <div className="visit__data">
            <h2 className="section__title">Visit Us</h2>
            <p className="visit__description">
              "A bakery is where dreams rise and delicious memories are made."
              Discover the best, Bake and wake..!!
            </p>
            <button className="button">See Location</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Visit;
