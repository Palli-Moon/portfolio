import dateFormat from 'dateformat';
import { CardData } from '@/types';
import SkillBadge from '@/components/ui/skills/skillBadge';
import CardModal from './cardModal';

export default function Card({ cardData, identifier }: { cardData: CardData; identifier: number }) {
  const { name, title, startDate, endDate, languages, description, descriptionLong } = cardData;

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
          <div>{description}</div>
          <div className='card-actions justify-between'>
            <div className='my-auto'>{languages && <SkillBadge skills={languages} />}</div>
            <div>{descriptionLong && <CardModal cardData={cardData} identifier={identifier} />}</div>
          </div>
        </div>
      </div>
    </>
  );
}
