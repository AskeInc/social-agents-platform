"use client";
import { useState } from "react";

export default function Dashboard() {
  const [response, setResponse] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  const handleGmailTest = async () => {
    const res = await fetch("/api/gmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject: "Test", message: "Hello from UI" }),
    });

    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));

    if (data.success) {
      setLogs((prev) => [
        `✅ Gmail agent responded at ${new Date().toLocaleTimeString()}`,
        ...prev,
      ]);
    } else {
      setLogs((prev) => [
        `❌ Failed at ${new Date().toLocaleTimeString()}`,
        ...prev,
      ]);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📬 Agents I.A Dashboard</h1>
      <button
        onClick={handleGmailTest}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Test Gmail Agent
      </button>

      {response && (
        <pre className="mt-4 p-2 bg-gray-100 rounded text-sm">{response}</pre>
      )}

      <div className="mt-8">
        <h2 className="font-semibold text-lg mb-2">📝 Action Logs</h2>
        <ul className="bg-gray-50 rounded p-3 space-y-1 text-sm text-gray-700 max-h-40 overflow-y-auto">
          {logs.map((log, i) => (
            <li key={i}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
