export const metadata = {
  title: "Social Agents Platform",
  description: "Manage your Gmail, WhatsApp, and Instagram Agents",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
