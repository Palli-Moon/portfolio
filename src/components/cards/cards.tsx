import { ExpCardData } from '@/app/utils/types';
import ExpCard from './expCard';

export default function Cards({ cardData, onlyYear }: { cardData: ExpCardData[]; onlyYear?: boolean }) {
  return (
    <div className='flex gap-4 flex-col lg:flex-row'>
      {cardData.map((d, i) => {
        //           ^?
        return (
          <div key={i} className='basis-1/3'>
            <ExpCard cardData={d} identifier={i} onlyYear={onlyYear} />
          </div>
        );
      })}
    </div>
  );
}
