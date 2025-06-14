import { NextResponse } from 'next/server';
import { sendWhatsAppMessage } from '@/agents/whatsapp';

export async function POST(req: Request) {
  const { to, message } = await req.json();
  const result = sendWhatsAppMessage(to, message);
  return NextResponse.json(result);
}
