import React from 'react';
import Image from 'next/image';

export const SelectedToys = ({ kidName, toysSelected }) => {
  return (
    <div className="generalContainer">
      <div>
        <p>{kidName} </p>
        <p> You have choosen these {toysSelected.length} toys!!</p>
      </div>
      <ul>
        {toysSelected.map((toy, index) => {
          return (
            <li key={index}>
              <Image
                className="toys__image"
                src={toy.image}
                width={80}
                height={80}
                alt="toy selected"
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
  );
};
