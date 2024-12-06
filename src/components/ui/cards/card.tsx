import dateFormat from 'dateformat';
import { CardData } from '@/types';
import SkillBadge from '@/components/ui/skills/skillBadge';

export default function Card({ name, title, startDate, endDate, languages, description, descriptionLong }: CardData) {
  return (
    <>
      <div className='card card-compact bg-base-300 w-fill shadow-xl '>
        <div className='card-body'>
          <h2 className='card-title text-primary bg-neutral-900 rounded-xl p-2 justify-center'>{name}</h2>
          <div className='flex justify-between'>
            <p className='text-secondary'>{title}</p>
            <p className='text-slate-400 text-right'>
              {dateFormat(startDate, 'mmm yyyy')} - {dateFormat(endDate, 'mmm yyyy')}
            </p>
          </div>
          <div className='text-left'>{description}</div>
          <div className='card-actions justify-between'>
            <div className='my-auto'>{languages && <SkillBadge skills={languages} />}</div>
            <div>{descriptionLong && <button className='btn btn-sm btn-ghost'>More info</button>}</div>
          </div>
        </div>
      </div>
    </>
  );
}
