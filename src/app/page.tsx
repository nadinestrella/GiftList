import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="overflow-hidden max-h-screen">
          <Image
            className="h-screen w-full object-cover object-custom-2"
            src={'/images/KidLanding2.jpg'}
            alt="two kids playing"
            width={300}
            height={300}
          />
        </div>

        <Link
          href="/login"
          className="mt-4 bg-background3 w-32 text-white p-2 rounded-full absolute bottom-11 left-28 text-center"
        >
          Let's Go
        </Link>
      </div>
      <div className="bg-background text-white p-4">
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          consectetur adipisci voluptatibus illum suscipit fugiat ducimus
          distinctio sed reprehenderit facere. Sint quisquam ratione eius libero
          consequatur nostrum nemo nam iusto?
        </p>
      </div>
    </div>
  );
}
