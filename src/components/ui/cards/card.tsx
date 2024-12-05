import Image from 'next/image';
import dateFormat from 'dateformat';
import palli from '@/../public/palli.jpg';
import { CardData } from '@/types';

export default function Card({ title, startDate, endDate, image, description }: CardData) {
  return (
    <div className='card card-compact bg-base-300 w-72 shadow-xl '>
      <figure className='relative'>
        <Image src={palli} alt='Palli' className='w-fill max-h-20 object-cover' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        {dateFormat(startDate, 'mmm yyyy')}-{dateFormat(endDate, 'mmm yyyy')}
        {image}
        {description}
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
