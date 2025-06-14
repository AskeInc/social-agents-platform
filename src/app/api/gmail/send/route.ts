import { validateConfig } from "@/config";
validateConfig();
import { NextResponse } from 'next/server';
import { sendGmailMessage } from '@/agents/gmail';

export async function POST(req: Request) {
  const { to, subject, body } = await req.json();
  const result = sendGmailMessage(to, subject, body);
  return NextResponse.json(result);
}
