export function sendInstagramMessage(to: string, message: string) {
  console.log(\`Sending Instagram DM to \${to}: \${message}\`);
  return { success: true };
}
