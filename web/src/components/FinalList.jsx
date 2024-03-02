import React from 'react';

function FinalList({ kidName, kidAge, toysSelected }) {
  return (
    <div className="generalContainer">
      <p className="finalList">
        Mum or Dad, these are the {kidName} selection acording to their age:
        {kidAge}. Copy these links to keep this information in a safe place.
      </p>

      <ol>
        {toysSelected.map((toy, index) => {
          return (
            <li key={index}>
              <a href={toy.link} target="_blank">
                {toy.model.length > 25
                  ? toy.model.slice(0, 25) + '...'
                  : toy.model}
              </a>
            </li>
          );
        })}
      </ol>
      <div className="finalListShare">
        <p>Share</p>
        <p>whatapp</p>
        <p>email</p>
        <p>sms</p>
      </div>
      <div>Thank you for using The Gift List {''}❤️</div>
    </div>
  );
}

export default FinalList;
