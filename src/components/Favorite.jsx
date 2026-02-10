function Favorite() {
  const favorites = [
    { id: 1, img: "/images/favorite-bread-1.png", title: "Whole Grain", subtitle: "Bread", price: 140 },
    { id: 2, img: "/images/favorite-bread-2.png", title: "Rye", subtitle: "Bread", price: 160 },
    { id: 3, img: "/images/favorite-bread-3.png", title: "Chocolate", subtitle: "Cookie", price: 120 },
    { id: 4, img: "/images/favorite-bread-4.png", title: "Star Frozen", subtitle: "Cookie", price: 190 },
    { id: 5, img: "/images/favorite-bread-5.png", title: "Choco Cup", subtitle: "Cupcake", price: 170 },
    { id: 6, img: "/images/favorite-bread-6.png", title: "Red Rose", subtitle: "Cupcake", price: 150 },
    { id: 7, img: "/images/favorite-bread-7.png", title: "Vanilla", subtitle: "Cupcake", price: 125 },
    { id: 8, img: "/images/favorite-bread-8.png", title: "Red Velvet", subtitle: "Cookie", price: 190 },
  ];

  return (
    <section className="favorite section" id="favorite">
      <h2 className="section__title">Customer Favorites</h2>

      <div className="favorite__container container grid">
        {favorites.map((item) => (
          <article key={item.id} className="favorite__card">
            <img src={item.img} className="favorite__img" alt={item.title} />

            <div className="favorite__data">
              <h2 className="favorite__title">{item.title}</h2>
              <span className="favorite__subtitle">{item.subtitle}</span>
              <h3 className="favorite__price">₹{item.price}</h3>
            </div>

            <button className="favorite__button button" aria-label="Add to cart">
              <i className="ri-add-line"></i>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Favorite;
