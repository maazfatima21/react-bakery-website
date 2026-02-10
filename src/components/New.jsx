function New() {
  const newItems = [
    {
      id: 1,
      title: "Rey Bread",
      description: "Baked with healthy, gluten-free sourdough for good nutrition.",
      img: "/images/new-bread-1.png",
    },
    {
      id: 2,
      title: "Red Rose Cupcake",
      description: "Red and White combo made with love, Tangy Touch.",
      img: "/images/new-bread-2.png",
    },
    {
      id: 3,
      title: "Frozen Cookie",
      description: "Tasty and made with sweetness, biscotto.",
      img: "/images/new-bread-3.png",
    },
  ];

  return (
    <section className="new section" id="new">
      <h2 className="section__title">New</h2>

      <div className="new__container container grid">
        <div className="new__content grid">
          {newItems.map((item) => (
            <article key={item.id} className="new__card">
              <div className="new__data">
                <h2 className="new__title">{item.title}</h2>
                <p className="new__description">{item.description}</p>
              </div>
              <img
                src={item.img}
                className="new__img"
                alt={item.title}
              />
            </article>
          ))}
        </div>

        <button className="new__button button">Search More</button>
      </div>
    </section>
  );
}

export default New;
