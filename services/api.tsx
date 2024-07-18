export const getToysFromApi = () => {
  return fetch(`${import.meta.env.VITE_GIFTLIST_API_URL}/toys`)
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
