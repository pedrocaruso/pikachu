'use client'
import Link from "next/link";
import Image from "next/image";

const dogs = [
  "/dogs/dog1.jpg",
  "/dogs/dog2.jpg",
  "/dogs/dog3.jpg",
  "/dogs/dog4.jpg",
  "/dogs/dog5.jpg",
  "/dogs/dog6.jpg",
];

export default function Doacoes() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">DOAÇÕES</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {dogs.map((src, index) => (
          <div
            key={index}
            className="rounded-xl bg-gray-400 p-2 flex justify-center items-center shadow-lg"
          >
            <Image
              src={src}
              alt={`Cachorro ${index + 1}`}
              width={300}
              height={300}
              className="rounded-md object-cover w-full h-full max-h-[300px]"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link href="/">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Voltar para Home
          </button>
        </Link>
      </div>
    </main>
  );
}
