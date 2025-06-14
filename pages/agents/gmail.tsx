import { useState } from "react";

export default function GmailAgentPage() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [result, setResult] = useState("");

  const sendEmail = async () => {
    const res = await fetch("/api/gmail/send", {
      method: "POST",
      body: JSON.stringify({ to, subject, body }),
    });
    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Envoyer un e-mail via Gmail Agent</h1>
      <input
        type="email"
        placeholder="Destinataire"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Sujet"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <textarea
        placeholder="Message"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button onClick={sendEmail} className="bg-blue-500 text-white px-4 py-2 rounded">
        Envoyer
      </button>
      <pre className="mt-4 text-sm text-gray-700 whitespace-pre-wrap">{result}</pre>
    </div>
  );
}
