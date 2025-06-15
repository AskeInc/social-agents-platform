import React from "react";

export default function AgentCard({ name }: { name: string }) {
  return (
    <div className="p-4 border rounded-xl shadow-md">
      <h2 className="text-xl font-semibold">{name} Agent</h2>
    </div>
  );
}
