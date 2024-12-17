import { launch } from 'puppeteer';
import fs from 'node:fs';

async function printPDF() {
  const browser = await launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.pallimoon.com', { waitUntil: 'networkidle0' });
  fs.mkdir('./pdf', { recursive: true }, (err) => {
    if (err) console.error(err);
  });
  const pdf = await page.pdf({ path: './pdf/palli.pdf', format: 'A4' });

  await browser.close();
  return pdf;
}

printPDF();
