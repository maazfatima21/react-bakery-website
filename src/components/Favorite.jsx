import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Favorite() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "40px",
      duration: 800,
      delay: 100,
      reset: false,
    });

    sr.reveal(".home_section__title", {
      origin: "top",
    });

    sr.reveal(".homefav__card", {
      origin: "bottom",
      interval: 100, 
    });

    return () => sr.destroy();
  }, []);

  const favorites = [
    { id: 1, img: "/images/favorite-bread-1.png", title: "Whole Grain", subtitle: "Bread", price: 120 },
    { id: 2, img: "/images/favorite-bread-2.png", title: "Rye", subtitle: "Bread", price: 140 },
    { id: 3, img: "/images/favorite-bread-3.png", title: "Chocolate", subtitle: "Cookie", price: 140 },
    { id: 4, img: "/images/favorite-bread-4.png", title: "Star Frozen", subtitle: "Cookie", price: 180 },
    { id: 5, img: "/images/favorite-bread-5.png", title: "Choco cup", subtitle: "Cupcake", price: 170 },
    { id: 6, img: "/images/favorite-bread-6.png", title: "Red Velvet", subtitle: "Cupcake", price: 180 },
    { id: 7, img: "/images/favorite-bread-7.png", title: "Vanilla", subtitle: "Cupcake", price: 160 },
    { id: 8, img: "/images/favorite-bread-8.png", title: "Red velvet", subtitle: "Cookie", price: 170 },
  ];

  return (
    <section className="homefav section" id="favorite">
      <div className="divider"></div>

      <div className="container">
      <h2 className="home_section__title">Customer Favorites</h2>

      <div className="homefav__container container grid">
        {favorites.map((item) => (
          <article key={item.id} className="homefav__card">
            <img
              src={item.img}
              alt="image"
              className="homefav__img"
              loading="lazy"
            />

            <div className="homefav__data">
              <h2 className="homefav__title">{item.title}</h2>
              <span className="homefav__subtitle">{item.subtitle}</span>
              <h3 className="homefav__price">₹{item.price}</h3>
            </div>

            <button className="homefav__button button">
              <i className="ri-add-line"></i>
            </button>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Favorite;
