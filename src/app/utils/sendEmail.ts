'use server';

import { Resend } from 'resend';

export async function sendMail(replyTo: string, text: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  return await resend.emails.send({
    from: 'pallimoon.com@pallimoon.com',
    replyTo,
    to: 'pallimoon+portfolio@gmail.com',
    subject: `Contact email from ${replyTo} on pallimoon.com`,
    text,
  });
}
