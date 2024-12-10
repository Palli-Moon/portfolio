'use client';

import Content from './content';
import { FaEnvelope } from 'react-icons/fa6';
import { sendMail } from '@/app/utils/sendEmail';
import { FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const toastOptions = {
    style: {
      background: 'black',
    },
    success: {
      style: {
        color: 'green',
      },
    },
    error: {
      style: {
        color: 'red',
      },
    },
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get('email') as string;
    const text = (data.get('text') as string) || 'No text';

    if (email) {
      const res = await sendMail(email, text);
      if (res.error) {
        toast.error('Not able to send request.');
      } else {
        toast.success('Email sent!');
      }
    } else {
      toast.error('Please enter email.');
    }
  }

  return (
    <>
      <Content title='Contact'>
        <p className='my-4'>Send me a message with your email and I will get in touch!</p>
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
      <Toaster toastOptions={toastOptions} />
    </>
  );
}
