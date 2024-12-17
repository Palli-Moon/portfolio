import { launch } from 'puppeteer';
import fs from 'node:fs';

async function printPDF() {
  const browser = await launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/cv', { waitUntil: 'networkidle0' });

  fs.mkdir('./pdf', { recursive: true }, (err) => {
    if (err) console.error(err);
  });
  const pdf = await page.pdf({ path: './pdf/palli.pdf', format: 'A4' });

  // await browser.close();
  return pdf;
}

printPDF();
