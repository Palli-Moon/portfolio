import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default function sendMail() {
  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'pallimoon@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
  });
}
