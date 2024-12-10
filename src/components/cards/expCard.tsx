import dateFormat from 'dateformat';
import { ExpCardData } from '@/app/utils/types';
import SkillBadge from '@/components/skills/skillBadge';
import CardModal from './cardModal';
import Card from './card';

export default function ExpCard({ cardData, identifier, onlyYear }: { cardData: ExpCardData; identifier: number; onlyYear?: boolean }) {
  const { name, title, startDate, endDate, languages, description, descriptionLong } = cardData;
  const format = onlyYear ? 'yyyy' : 'mmm yyyy';

  return (
    <Card title={name}>
      <div className='flex justify-between'>
        <p className='text-secondary'>{title}</p>
        <p className='text-gray-400 text-right'>
          {dateFormat(startDate, format)} - {dateFormat(endDate, format)}
        </p>
      </div>
      <div>{description}</div>
      <div className='card-actions justify-between'>
        <div className='my-auto'>{languages && <SkillBadge skills={languages} />}</div>
        <div>{descriptionLong && <CardModal cardData={cardData} identifier={identifier} />}</div>
      </div>
    </Card>
  );
}
