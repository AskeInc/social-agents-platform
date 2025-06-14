import type { NextApiRequest, NextApiResponse } from "next";
import { sendGmail } from "@/backend/services/gmailService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await sendGmail();
    res.status(200).json({ success: true, message: "E-mail envoyé avec succès ✅", response });
  } catch (error) {
    res.status(500).json({ success: false, error: "Erreur lors de l'envoi d’e-mail ❌" });
  }
}
