function New() {
  return (
    <section className="new section" id="new">
      <h2 className="section__title">New</h2>

      <div className="new__container container grid">
        <div className="new__content grid">

          <article className="new__card">
            <div className="new__data">
              <h2 className="new__title">Rey Bread</h2>
              <p className="new__description">
                Baked with healthy, gluten-free sourdough for good nutrition.
              </p>
            </div>
            <img src="/images/new-bread-1.png" className="new__img" />
          </article>

          <article className="new__card">
            <div className="new__data">
              <h2 className="new__title">Red Rose cupcake</h2>
              <p className="new__description">
                Red and White combo made with love, Tangy Touch.
              </p>
            </div>
            <img src="/images/new-bread-2.png" className="new__img" />
          </article>

          <article className="new__card">
            <div className="new__data">
              <h2 className="new__title">Frozen Cookie</h2>
              <p className="new__description">
                Tasty and made with sweetness, biscotto.
              </p>
            </div>
            <img src="/images/new-bread-3.png" className="new__img" />
          </article>

        </div>

        <a href="#" className="new__button button">Search More</a>
      </div>
    </section>
  );
}

export default New;
