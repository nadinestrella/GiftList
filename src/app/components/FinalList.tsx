import React from 'react';
import { Toy } from '@/types/toy';

interface FinalListProps {
  kidName: string;
  kidAge: number;
  parentName: string;
  toysSelected: Toy[];
}

export const FinalList: React.FC<FinalListProps> = ({
  kidName,
  kidAge,
  parentName,
  toysSelected,
}) => {
  return (
    <div className="flex flex-col justify-center items-center content-center gap-4 p-4">
      <p className="p-1">
        {parentName}, these are the {kidName} selection acording to their age:
        {kidAge}.
      </p>
      <p>Copy these links to keep this information in a safe place.</p>

      <ol>
        {toysSelected.map((toy, index) => {
          return (
            <li key={index} className="text-blue-700 pb-2">
              <a href={toy.link} target="_blank">
                {toy.model.length > 25
                  ? toy.model.slice(0, 50) + '...'
                  : toy.model}
              </a>
            </li>
          );
        })}
      </ol>
      <div className="text-xs">
        <p>Share</p>
        <p>whatapp</p>
        <p>email</p>
        <p>sms</p>
      </div>
      <div className="text-background3 font-semibold">
        Thank you for using The Gift List {''}❤️
      </div>
    </div>
  );
};
