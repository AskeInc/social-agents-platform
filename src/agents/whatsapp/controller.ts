export function sendWhatsAppMessage(to: string, message: string) {
  console.log(\`Sending WhatsApp message to \${to}: \${message}\`);
  return { success: true };
}
