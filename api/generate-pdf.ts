import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export default async function handler(req, res) {
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: true,
  });

  const page = await browser.newPage();

  await page.setContent(`
    <html>
      <body>
        <h1>PDF działa 🎉</h1>
      </body>
    </html>
  `);

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  res.setHeader("Content-Type", "application/pdf");
  res.status(200).end(pdf);
}
