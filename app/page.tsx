import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-gray-100">
      <header className="bg-gray-800 text-white px-8 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">LOGO</div>
        <nav className="space-x-6">
          <Link href="/sobre" className="hover:underline">SOBRE</Link>
          {/* Adicione os links que quiser */}
        </nav>
      </header>

      <section className="h-full flex flex-col md:flex-row items-center justify-center bg-black text-white px-8 py-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/dog.png" alt="Cachorro para adoção" className="max-w-md w-full h-auto rounded" />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left px-6">
          <h1 className="text-5xl font-serif mb-6 leading-snug">
            "Adote amor,<br />transforme vidas."
          </h1>

          <Link href="/sobre">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base sm:text-lg hover:bg-blue-700 transition duration-300">
              Adote Aqui!
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
