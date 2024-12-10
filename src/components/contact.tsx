'use client';

import Content from './content';
import { FaEnvelope } from 'react-icons/fa6';
import { sendMail } from '@/app/utils/sendEmail';
import { FormEvent } from 'react';

export default function Contact() {
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    sendMail(data.get('email') as string, data.get('text') as string);
  }

  return (
    <Content title='Contact'>
      <p className='my-4'>Send me a message with your email and I will get int touch!</p>
      <form onSubmit={onSubmit}>
        <textarea className='textarea textarea-primary w-full rounded-lg min-h-32' placeholder='Message' name='text'></textarea>
        <div className='my-3 flex gap-4'>
          <label className='input input-bordered input-primary flex items-center gap-2 rounded-lg basis-4/5'>
            <FaEnvelope className='text-primary' />
            <input type='text' className='grow' placeholder='Email' name='email' />
          </label>
          <button className='btn btn-primary basis-1/5' type='submit'>
            Send
          </button>
        </div>
      </form>
    </Content>
  );
}
