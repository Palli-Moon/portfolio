import dateFormat from 'dateformat';
import { CardData } from '@/types';

export default function Card({ name, title, startDate, endDate, description }: CardData) {
  return (
    <div className='card card-compact bg-base-300 w-fill shadow-xl '>
      <div className='card-body'>
        <h2 className='card-title text-primary bg-neutral-900 rounded-xl p-2 justify-center'>{name}</h2>
        <div className='flex justify-between'>
          <p className='text-secondary'>{title}</p>
          <p className='text-slate-400 text-right'>
            {dateFormat(startDate, 'mmm yyyy')} - {dateFormat(endDate, 'mmm yyyy')}
          </p>
        </div>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-sm btn-secondary'>More info</button>
        </div>
      </div>
    </div>
  );
}
