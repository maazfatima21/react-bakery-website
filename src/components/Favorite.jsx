function Favorite() {
  return (
    <section className="favorite section" id="favorite">
      <h2 className="section__title">Customer Favorites</h2>

      <div className="favorite__container container grid">

        <article className="favorite__card">
          <img src="/images/favorite-bread-1.png" className="favorite__img" />
          <div className="favorite__data">
            <h2 className="favorite__title">Whole Grain</h2>
            <span className="favorite__subtitle">Bread</span>
            <h3 className="favorite__price">₹140</h3>
          </div>
          <button className="favorite__button button">
            <i className="ri-add-line"></i>
          </button>
        </article>

        <article className="favorite__card">
          <img src="/images/favorite-bread-2.png" className="favorite__img" />
          <div className="favorite__data">
            <h2 className="favorite__title">Rye</h2>
            <span className="favorite__subtitle">Bread</span>
            <h3 className="favorite__price">₹160</h3>
          </div>
          <button className="favorite__button button">
            <i className="ri-add-line"></i>
          </button>
        </article>

        <article className="favorite__card">
          <img src="/images/favorite-bread-3.png" className="favorite__img" />
          <div className="favorite__data">
            <h2 className="favorite__title">Chocolate</h2>
            <span className="favorite__subtitle">Cookie</span>
            <h3 className="favorite__price">₹120</h3>
          </div>
          <button className="favorite__button button">
            <i className="ri-add-line"></i>
          </button>
        </article>

        <article className="favorite__card">
          <img src="/images/favorite-bread-4.png" className="favorite__img" />
          <div className="favorite__data">
            <h2 className="favorite__title">Star Frozen</h2>
            <span className="favorite__subtitle">Cookie</span>
            <h3 className="favorite__price">₹190</h3>
          </div>
          <button className="favorite__button button">
            <i className="ri-add-line"></i>
          </button>
        </article>

        <article className="favorite__card">
          <img src="/images/favorite-bread-5.png" className="favorite__img" />
          <div className="favorite__data">
            <h2 className="favorite__title">Choco cup</h2>
            <span className="favorite__subtitle">cupcake</span>
            <h3 className="favorite__price">₹170</h3>
          </div>
          <button className="favorite__button button">
            <i className="ri-add-line"></i>
          </button>
        </article>

        <article className="favorite__card">
          <img src="/images/favorite-bread-6.png" className="favorite__img" />
          <div className="favorite__data">
            <h2 className="favorite__title">Red Rose</h2>
            <span className="favorite__subtitle">cupcake</span>
            <h3 className="favorite__price">₹150</h3>
          </div>
          <button className="favorite__button button">
            <i className="ri-add-line"></i>
          </button>
        </article>

        <article className="favorite__card">
          <img src="/images/favorite-bread-7.png" className="favorite__img" />
          <div className="favorite__data">
            <h2 className="favorite__title">Vanilla</h2>
            <span className="favorite__subtitle">cupcake</span>
            <h3 className="favorite__price">₹125</h3>
          </div>
          <button className="favorite__button button">
            <i className="ri-add-line"></i>
          </button>
        </article>

        <article className="favorite__card">
          <img src="/images/favorite-bread-8.png" className="favorite__img" />
          <div className="favorite__data">
            <h2 className="favorite__title">Red velvet</h2>
            <span className="favorite__subtitle">Cookie</span>
            <h3 className="favorite__price">₹190</h3>
          </div>
          <button className="favorite__button button">
            <i className="ri-add-line"></i>
          </button>
        </article>

      </div>
    </section>
  );
}

export default Favorite;
