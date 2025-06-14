import AgentCard from '@/components/AgentCard';

const agents = [
  {
    name: 'Gmail Agent',
    description: 'Send emails easily via Gmail API.',
    route: '/agents/gmail',
  },
  {
    name: 'WhatsApp Agent',
    description: 'Send WhatsApp messages automatically.',
    route: '/agents/whatsapp',
  },
  {
    name: 'Instagram Agent',
    description: 'Automate Instagram DMs and more.',
    route: '/agents/instagram',
  },
];

export default function AgentsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Available Agents</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <AgentCard key={agent.route} {...agent} />
        ))}
      </div>
    </main>
  );
}
