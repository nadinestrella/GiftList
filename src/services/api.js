const getDataFromApi = () => {
  return fetch('https://hp-api.onrender.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        //IMAGES
        let image = character.image;
        if (!image) {
          image = `https://via.placeholder.com/210x295/ffffff/666666/?text=${character.name}`;
        }

        return {
          id: character.id,
          name: character.name,
          specie: specie,
          status: alive,
          gender: character.gender,
          house: character.house,
          photo: image,
          alternativeNames: character.alternate_names,
        };
      });
      return cleanData;
    });
};

export default getDataFromApi;
