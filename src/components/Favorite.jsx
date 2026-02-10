function Favorite() {
  return (
    <section className="favorite section" id="favorite">
      <h2 className="section__title">Customer Favorites</h2>

      <div className="favorite__container container grid">

        <article className="favorite__card">
          <img src="/public/images/favorite-bread-1.png" className="favorite__img" />
          <div className="favorite__data">
            <h2 className="favorite__title">Whole Grain</h2>
            <span className="favorite__subtitle">Bread</span>
            <h3 className="favorite__price">₹120</h3>
          </div>
          <button className="favorite__button button">
            <i className="ri-add-line"></i>
          </button>
        </article>

        {/* Repeat for others same way */}

      </div>
    </section>
  );
}

export default Favorite;
