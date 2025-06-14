import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const user = "ton-adresse@gmail.com"; // ← remplace ici par l’adresse utilisée dans le test

export const sendEmail = async ({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user,
      clientId: process.env.GMAIL_CLIENT_ID!,
      clientSecret: process.env.GMAIL_CLIENT_SECRET!,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN!,
    },
  });

  const info = await transporter.sendMail({
    from: \`"Agent Gmail 🤖" <\${user}>\`,
    to,
    subject,
    text: body,
  });

  return info.response;
};
