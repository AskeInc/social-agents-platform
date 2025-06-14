import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const user = "zealous@zealousincorporated.com"; // ← remplace ceci par ton adresse Gmail exacte

const main = async () => {
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
    from: `"Agent Gmail 🤖" <${user}>`,
    to: user,
    subject: "✅ Test Gmail via OAuth2 réussi !",
    text: "Bravo, ton agent peut envoyer des e-mails avec succès !",
  });

  console.log("📤 E-mail envoyé :", info.response);
};

main().catch(console.error);
