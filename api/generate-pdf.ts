import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export default async function handler(req, res) {
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: true,
  });

  const { lang } = req.body || {};
  if (typeof req.body === "string") {
    req.body = JSON.parse(req.body);
  }
  const language = lang || "en";
  const page = await browser.newPage();

  await page.goto(`${process.env.SITE_URL}?pdf=true&lang=${language}`, {
    waitUntil: "networkidle0",
  });

  await page.evaluateHandle("document.fonts.ready");

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=maciej-kalwa-cv.pdf",
  );

  res.status(200).end(pdf);
}
