import React from 'react';
import { Toy } from '@/types/toy';
import Image from 'next/image';

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
    <div className="flex flex-col justify-center items-center content-center gap-4">
      <p className="p-1">
        <strong>{parentName}</strong>, these are the <strong>{kidName}</strong>{' '}
        selection according to their age:
        <strong>{kidAge}</strong>.
      </p>
      <p className="pb-2 md:pb-4">
        Copy these links to keep this information in a safe place.
      </p>

      <ol>
        {toysSelected.map((toy, index) => {
          return (
            <li key={index} className="text-blue-700 pb-5 flex flex-row gap-4">
              <Image
                src={toy.image}
                height={100}
                width={100}
                alt="toy"
                className="w-12 h-12 md:w-24 md:h-24 object-cover rounded-full  border-2 border-background3"
              />
              <a
                href={toy.link}
                target="_blank"
                className="text-xs md:text-base"
              >
                {toy.model.length > 25
                  ? toy.model.slice(0, 50) + '...'
                  : toy.model}
              </a>
            </li>
          );
        })}
      </ol>
      {/* <div className="text-xs">
        <p>Share</p>
        <p>whatapp</p>
        <p>email</p>
        <p>sms</p>
      </div> */}
      <div className="text-background3 font-semibold pt-5 text-center">
        <p>Thanks for using</p>{' '}
        <p>
          The Gift List {''}
          <span className="animate-heartbeat text-2xl ">❤️</span>
        </p>
      </div>
    </div>
  );
};
