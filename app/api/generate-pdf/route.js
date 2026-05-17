import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const language = body.lang || "en";
  const baseUrl = process.env.SITE_URL || new URL(request.url).origin;

  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: true,
  });

  try {
    const page = await browser.newPage();

    await page.goto(`${baseUrl.replace(/\/$/, "")}?pdf=true&lang=${language}`, {
      waitUntil: "networkidle0",
    });

    await page.evaluateHandle("document.fonts.ready");

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    return new Response(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=maciej-kalwa-cv.pdf",
      },
    });
  } finally {
    await browser.close();
  }
}
