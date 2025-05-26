import { NextResponse } from 'next/server';

const dogs = [
  { id: 1, name: 'Bob', imageUrl: '/images/bob.jpg', breed: 'Labrador' },
  { id: 2, name: 'Rex', imageUrl: '/images/rex.jpg', breed: 'Pastor Alemão' },
];

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const dog = dogs.find(d => d.id === Number(params.id));

  if (!dog) {
    return NextResponse.json({ error: 'Cachorro não encontrado' }, { status: 404 });
  }

  return NextResponse.json(dog);
}
