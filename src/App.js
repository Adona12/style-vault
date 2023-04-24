const App = () => {
  const categoreies = [
    {
      id: 1,
      title: "Hats",
      subtitle: "Shop Now",
      img: "",
    },
    {
      id: 2,
      title: "Jackets",
      subtitle: "Shop Now",
      img: "",
    },
    {
      id: 3,
      title: "sneakers",
      subtitle: "Shop Now",
      img: "",
    },
    {
      id: 4,
      title: "Womens",
      subtitle: "Shop Now",
      img: "",
    },
    {
      id: 5,
      title: "Mens",
      subtitle: "Shop Now",
      img: "",
    },
  ];
  return (
    <div className="container">
      <div className="flex flex-row">
        {categoreies.map((category) => {
          return (
            <div className="categories basis-1/3">
              <div className="category">
                {category.title}
                <p>Shop Now</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
