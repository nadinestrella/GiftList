import { useState } from 'react';

function ListToy({ kidName, toys, filters, toysSelected, onToysChange }) {
  const getToysFilteredByCategAndAge = () =>
    toys
      .filter((toy) => filters.categories.includes(toy.category))
      .filter((toy) => toy.age <= Number(filters.age))
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);

  const [toysList, setToysList] = useState(getToysFilteredByCategAndAge());

  return (
    <div className="generalContainer">
      <div>
        <h3>{kidName}</h3>
        <p>This is what we found for you</p>
        <p>Add in the bag 3 toys that you like the most</p>
      </div>
      <div>
        <ul className="toys">
          {toysList.map((toy, index) => {
            return (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    value={toy.id}
                    onChange={onToysChange}
                    checked={toysSelected.map((toy) => toy.id).includes(toy.id)}
                  />
                  <img
                    className="toys__image"
                    src={toy.image}
                    width={80}
                    height={80}
                  />
                  <strong className="toys__title">
                    {toy.model.length > 15
                      ? toy.model.slice(0, 15) + '...'
                      : toy.model}
                  </strong>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p>Any match? Try again</p>
      </div>
    </div>
  );
}

export default ListToy;
