import React from 'react';
import { Link } from 'react-router-dom';

function ListToy({ kidName, toys, filters }) {
  const filteredByCategAndAge = toys
    .filter((toy) => filters.categories.includes(toy.category))
    .filter((toy) => toy.age <= Number(filters.age))
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <div className="generalContainer">
      <div>
        <h3>{kidName}</h3>
        <p>This is what we found for you</p>
        <p>Add in the bag 6 toys that you like the most</p>
      </div>
      <div>
        <ul className="toys">
          {filteredByCategAndAge.map((toy, index) => {
            return (
              <li key={index}>
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
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p>Any match? Try again</p>
      </div>

      <div>
        <i className="fa-solid fa-bag-shopping"></i>
      </div>
    </div>
  );
}

export default ListToy;
