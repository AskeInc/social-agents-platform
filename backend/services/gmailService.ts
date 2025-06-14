import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const user = process.env.GMAIL_USER!;

export const sendGmail = async () => {
  try {
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
      from: `"Agent Gmail" <${user}>`,
      to: user,
      subject: "Test Gmail via API reussi",
      text: "Bravo, ton backend Gmail fonctionne depuis l'API.",
    });

    return info.response;
  } catch (err) {
    console.error("Erreur envoi Gmail:", err);
    throw err;
  }
};
