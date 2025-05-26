'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Dog = {
  id: number;
  name: string;
  imageUrl: string;
  breed: string;
};

export default function Sobre() {
  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    async function fetchDogs() {
      try {
        const res = await fetch('/api/dogs');
        if (!res.ok) throw new Error('Erro ao buscar os cachorros');
        const data = await res.json();
        setDogs(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDogs();
  }, []);

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">DOAÇÕES</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {dogs.map((dog) => (
          <Link
            key={dog.id}
            href={`/dogs/${dog.id}`}
            className="rounded-xl bg-gray-400 p-2 flex flex-col justify-center items-center shadow-lg hover:scale-105 transition"
          >
            <Image
              src={dog.imageUrl}
              alt={`Cachorro ${dog.name}`}
              width={300}
              height={300}
              className="rounded-md object-cover w-full h-full max-h-[300px]"
            />
            <p className="mt-4 font-semibold text-white text-xl">{dog.name}</p>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link href="/">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base sm:text-lg hover:bg-blue-700 transition duration-300">
            Voltar para Home
          </button>
        </Link>
      </div>
    </main>
  );
}
