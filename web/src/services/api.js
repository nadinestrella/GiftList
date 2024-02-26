const getDataFromApi = () => {
  return fetch('https://localhost:5001/categories')
    .then((response) => response.json())
    .then((data) => {
      const categories = data.map((category) => {
        return {
          category: data.category,
        };
      });
      return categories;
    });
};

export default getDataFromApi;
