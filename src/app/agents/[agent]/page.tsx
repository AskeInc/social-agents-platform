import { notFound } from 'next/navigation';

const agentDescriptions: Record<string, string> = {
  gmail: 'Interact with Gmail AI agent.',
  whatsapp: 'Interact with WhatsApp AI agent.',
  instagram: 'Interact with Instagram AI agent.',
};

export default function AgentPage({ params }: { params: { agent: string } }) {
  const agent = params.agent;
  const description = agentDescriptions[agent];

  if (!description) return notFound();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold capitalize">{agent} Agent</h1>
      <p className="mt-4 text-gray-700">{description}</p>
    </div>
  );
}
