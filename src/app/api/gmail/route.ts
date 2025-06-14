import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("📨 Gmail agent received:", body);
  return NextResponse.json({ success: true, message: "Gmail agent received the message" });
}
