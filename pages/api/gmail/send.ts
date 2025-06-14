import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "@/backend/services/gmailService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    const { to, subject, body } = JSON.parse(req.body);
    const response = await sendEmail({ to, subject, body });
    res.status(200).json({ message: "Email envoyé ✅", response });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Erreur interne" });
  }
}
