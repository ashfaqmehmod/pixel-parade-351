import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";
const SPREADSHEET_ID = "1ueOkp0DvMtmbwXw10pQvqPRy4vKYO4Wsf0tZ1pflid8";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  practice: z.string().trim().min(2).max(150),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30),
  service: z.string().min(1).max(200),
  message: z.string().trim().max(1000).optional(),
});

export const appendLead = createServerFn({ method: "POST" })
  .inputValidator((input) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    const connKey = process.env["GOOGLE_SHEETS_API_KEY"];
    if (!apiKey || !connKey) {
      console.error("Google Sheets credentials are not configured");
      return { ok: false, error: "not_configured" };
    }
    const row = [
      [
        new Date().toISOString(),
        data.name,
        data.practice,
        data.email,
        data.phone,
        data.service,
        data.message ?? "",
      ],
    ];
    try {
      const res = await fetch(
        `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/Leads!A1:G1:append?valueInputOption=USER_ENTERED`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
            "X-Connection-Api-Key": connKey,
          },
          body: JSON.stringify({ values: row }),
        },
      );
      if (!res.ok) {
        const body = await res.text();
        console.error(`Sheets append failed [${res.status}]: ${body}`);
        return { ok: false, error: `sheets_${res.status}` };
      }
      return { ok: true };
    } catch (err) {
      console.error("Sheets append threw", err);
      return { ok: false, error: "network" };
    }
  });
