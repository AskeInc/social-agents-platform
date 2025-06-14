import dotenv from 'dotenv';
dotenv.config();

export const gmailConfig = {
  clientId: process.env.GMAIL_CLIENT_ID!,
  clientSecret: process.env.GMAIL_CLIENT_SECRET!,
  redirectUri: process.env.GMAIL_REDIRECT_URI!,
  refreshToken: process.env.GMAIL_REFRESH_TOKEN!,
};

export function validateConfig() {
  if (!gmailConfig.clientId || !gmailConfig.clientSecret || !gmailConfig.redirectUri || !gmailConfig.refreshToken) {
    throw new Error('La configuration Gmail est invalide : vérifie ton fichier .env');
  }
}
