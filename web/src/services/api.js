export const getToysFromApi = () => {
  return fetch('http://localhost:5001/toys')
    .then((response) => response.json())
    .then((data) => {
      const toys = data.data.map((toys) => {
        return {
          id: toys.id,
          brand: toys.brand,
          category: toys.category,
          model: toys.model,
          age: toys.age,
          image: toys.image,
          link: toys.link,
        };
      });

      return toys;
    });
};
