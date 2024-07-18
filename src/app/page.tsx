'use client';
import Image from 'next/image';
import { Login } from './components/Login';
import { useState } from 'react';

export default function Home() {
  const [kidName, setKidName] = useState('');

  const handleKidName = (value) => {
    setKidName(value);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login kidName={kidName} handleKidName={handleKidName} />
    </main>
  );
}

//orden
// 1login
//2kidswelcome
//3categories
//4listtoy
//5selectedtoys
//6finallist
