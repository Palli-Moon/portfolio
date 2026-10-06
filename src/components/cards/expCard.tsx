import dateFormat from 'dateformat';
import { ExpCardData } from '@/app/utils/types';
import SkillBadge from '@/components/skills/skillBadge';
import CardModal from './cardModal';
import Card from './card';
import Markdown from '../markdown';

export default function ExpCard({ cardData, identifier, onlyYear }: { cardData: ExpCardData; identifier: number; onlyYear?: boolean }) {
  const { name, title, startDate, endDate, languages, description, descriptionLong } = cardData;
  const format = onlyYear ? 'yyyy' : 'mmm yyyy';

  return (
    <Card title={name}>
      <div className='flex justify-between'>
        <p className='text-secondary'>{title}</p>
        <p className='text-gray-400 text-right'>
          {dateFormat(startDate, format)} - {endDate ? dateFormat(endDate, format) : 'Present'}
        </p>
      </div>
      <Markdown>{description}</Markdown>
      <div className='card-actions justify-between mt-auto'>
        <div className='my-auto'>{languages && <SkillBadge skills={languages} />}</div>
        <div>{descriptionLong && (
            <CardModal name={name} identifier={identifier}>
              <Markdown>{descriptionLong}</Markdown>
            </CardModal>
          )}</div>
      </div>
    </Card>
  );
}
