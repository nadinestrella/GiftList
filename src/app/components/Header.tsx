import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className="bg-background3 text-white flex  items-center text-2xl font-bold h-14 px-4">
      <h1 className="uppercase tracking-widest">
        <Link href="/">🎁 Giftlist</Link>
      </h1>
    </header>
  );
};
