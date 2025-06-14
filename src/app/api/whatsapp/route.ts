import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  console.log("📲 WhatsApp agent received:", body);
  return NextResponse.json({ success: true, message: "WhatsApp agent received the message" });
}
