import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center relative">
        <div className="overflow-hidden max-h-screen w-full">
          <Image
            className="h-screen w-full object-cover object-custom-2"
            src={'/images/KidLanding2.jpg'}
            alt="two kids playing"
            width={640}
            height={427}
          />
        </div>
        <div
          className="absolute top-20 flex flex-col items-center px-5 text-center
        "
        >
          <h1 className="text-2xl md:text-4xl bg-white px-5 py-3 text-background3 font-bold rounded-full mb-4">
            Make your kids happy
          </h1>
          <p className="bg-white px-5 py-1 rounded-full text-xs md:text-lg text-slate-600">
            Give them the opportunity to choose their presents
          </p>
          <Link
            href="/login"
            className="mt-5 bg-background3 w-32 text-white p-3 rounded-full text-center font-semibold"
          >
            Let&apos;s Go
          </Link>
        </div>
      </div>
      <div className="bg-background text-white p-4 md:h-56">
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
