export async function sendTestMessage(agent: string, payload: any) {
  const res = await fetch(\`/api/\${agent}/send\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return await res.json();
}
