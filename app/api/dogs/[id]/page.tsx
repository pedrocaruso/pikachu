'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

type Dog = {
  id: number;
  name: string;
  imageUrl: string;
  breed: string;
};

export default function DogPage() {
  const { id } = useParams();
  const [dog, setDog] = useState<Dog | null>(null);

  useEffect(() => {
    async function fetchDog() {
      try {
        const res = await fetch(`/api/dogs/${id}`);
        if (!res.ok) throw new Error('Erro ao buscar o cachorro');
        const data = await res.json();
        setDog(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchDog();
  }, [id]);

  if (!dog) return <p>Carregando cachorro...</p>;

  return (
    <main className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">{dog.name}</h1>
      <Image
        src={dog.imageUrl}
        alt={dog.name}
        width={400}
        height={400}
        className="rounded-lg mx-auto"
      />
      <p className="mt-4 text-lg">Raça: {dog.breed}</p>
    </main>
  );
}
