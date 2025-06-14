import { NextResponse } from 'next/server';
import { sendInstagramMessage } from '@/agents/instagram';

export async function POST(req: Request) {
  const { to, message } = await req.json();
  const result = sendInstagramMessage(to, message);
  return NextResponse.json(result);
}
