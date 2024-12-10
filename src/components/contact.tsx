import Content from './content';
import { FaEnvelope } from 'react-icons/fa6';

export default function Contact() {
  return (
    <Content title='Contact'>
      <p className='my-4'>Send me a message with your email and I will get int touch!</p>
      <div>
        <textarea className='textarea textarea-primary w-full rounded-lg min-h-32' placeholder='Message'></textarea>
        <div className='my-3 flex gap-4'>
          <label className='input input-bordered input-primary flex items-center gap-2 rounded-lg basis-4/5'>
            <FaEnvelope className='text-primary' />
            <input type='text' className='grow' placeholder='Email' />
          </label>
          <button className='btn btn-primary basis-1/5'>Send</button>
        </div>
      </div>
    </Content>
  );
}
