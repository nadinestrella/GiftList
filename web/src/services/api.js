const getDataFromApi = () => {
  return fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((product) => {
        //IMAGES
        let image = product.image;
        if (!image) {
          image = `https://via.placeholder.com/210x295/ffffff/666666/?text=${product.title}`;
        }

        return {
          id: product.id,
          title: product.title,
          category: product.category,
          image: product.image,
        };
      });
      return cleanData;
    });
};

export default getDataFromApi;
