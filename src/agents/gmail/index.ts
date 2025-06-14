import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { gmailConfig } from '@/config';

export async function sendGmailMessage(to: string, subject: string, body: string) {
  const oAuth2Client = new google.auth.OAuth2(
    gmailConfig.clientId,
    gmailConfig.clientSecret,
    gmailConfig.redirectUri
  );

  oAuth2Client.setCredentials({ refresh_token: gmailConfig.refreshToken });

  const accessToken = await oAuth2Client.getAccessToken();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'me',
      clientId: gmailConfig.clientId,
      clientSecret: gmailConfig.clientSecret,
      refreshToken: gmailConfig.refreshToken,
      accessToken: accessToken.token!,
    },
  });

  const mailOptions = {
    from: 'me',
    to,
    subject,
    text: body,
  };

  const result = await transporter.sendMail(mailOptions);
  return { success: true, messageId: result.messageId };
}
