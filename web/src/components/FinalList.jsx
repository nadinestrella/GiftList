import React from 'react';

function FinalList({ kidName, kidAge }) {
  return (
    <div className="generalContainer">
      <div>
        <p>
          Mum or Dad, these are the {kidName} selection acording to their age:
          {kidAge}
          copy this link to keep this information in a safe place
        </p>
      </div>
      <div>
        <p>Share</p>
        <p>whatapp</p>
        <p>email</p>
        <p>sms</p>
      </div>
      <div>Thank you for using The Gift List</div>
    </div>
  );
}

export default FinalList;
