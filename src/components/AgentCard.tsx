import Link from 'next/link';
import { Mail, MessageCircle, Instagram } from 'lucide-react';

type AgentCardProps = {
  name: string;
  description: string;
  route: string;
};

const icons: Record<string, JSX.Element> = {
  gmail: <Mail className="h-8 w-8 text-red-500" />,
  whatsapp: <MessageCircle className="h-8 w-8 text-green-500" />,
  instagram: <Instagram className="h-8 w-8 text-pink-500" />,
};

export default function AgentCard({ name, description, route }: AgentCardProps) {
  const key = route.split('/').pop() || '';
  return (
    <Link href={route} className="block bg-white shadow-lg p-6 rounded-2xl hover:shadow-xl transition border">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-100 p-3 rounded-full">{icons[key]}</div>
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}
