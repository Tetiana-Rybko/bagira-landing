import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, phone, comment } = req.body;

  const token = process.env.TOKEN;
  const adminId = process.env.ADMIN_ID;

  if (!token || !adminId) {
    return res.status(500).json({ message: "Telegram settings missing" });
  }

  const text = `🔥 Нова заявка з сайту Bagira:

👤 Ім'я: ${name || "-"}
📞 Телефон: ${phone || "-"}
💬 Коментар: ${comment || "-"}`;

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: adminId,
        text,
      }),
    }
  );

  if (!telegramResponse.ok) {
    return res.status(500).json({ message: "Telegram error" });
  }

  return res.status(200).json({ message: "OK" });
}