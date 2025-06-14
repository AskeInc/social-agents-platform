export function sendGmailMessage(to: string, subject: string, body: string) {
  console.log(\`Sending Gmail to \${to}: \${subject} - \${body}\`);
  return { success: true };
}
