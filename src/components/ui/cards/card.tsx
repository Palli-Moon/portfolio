import Image from 'next/image';
import palli from '@/../public/palli.jpg';

export default function Card() {
  return (
    <div className='card card-compact bg-base-300 w-72 shadow-xl '>
      <figure className='relative'>
        <Image src={palli} alt='Palli' className='w-fill max-h-32 object-cover' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
