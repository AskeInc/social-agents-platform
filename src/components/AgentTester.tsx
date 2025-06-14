"use client";
import { useState } from "react";

export default function AgentTester() {
  const [response, setResponse] = useState("");

  const testAgent = async () => {
    const res = await fetch("/api/gmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject: "Test", message: "Hello from UI" })
    });
    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">🤖 Gmail Agent</h1>
      <button onClick={testAgent} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Test Gmail Agent
      </button>
      {response && <pre className="mt-4 bg-gray-100 p-4 rounded">{response}</pre>}
    </div>
  );
}
