import { NextResponse } from 'next/server';

export async function HEAD(request: Request) {
  return NextResponse.json({
    cache: request.cache,
    time: new Date().getTime(),
    data: "This is simple HEAD request",
  });
}