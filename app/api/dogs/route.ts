import { NextResponse } from 'next/server';

const dogs = [
  { id: 1, name: "Rex", imageUrl: "https://placedog.net/400/400?id=1", breed: "Labrador" },
  { id: 2, name: "Bella", imageUrl: "https://placedog.net/400/400?id=2", breed: "Poodle" },
  { id: 3, name: "Thor", imageUrl: "https://placedog.net/400/400?id=3", breed: "Beagle" },
  { id: 4, name: "Luna", imageUrl: "https://placedog.net/400/400?id=4", breed: "Bulldog" },
  { id: 5, name: "Max", imageUrl: "https://placedog.net/400/400?id=5", breed: "Golden Retriever" },
  { id: 6, name: "Mel", imageUrl: "https://placedog.net/400/400?id=6", breed: "Pastor Alemão" }
];

export async function GET(request: Request) {
  return NextResponse.json(dogs);
}
