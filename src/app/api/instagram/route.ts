import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  console.log("📸 Instagram agent received:", body);
  return NextResponse.json({ success: true, message: "Instagram agent received the message" });
}
