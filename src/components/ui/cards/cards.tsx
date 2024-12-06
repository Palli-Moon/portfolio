import { CardData } from '@/types';
import Card from './card';

export default function Cards({ cardData, onlyYear }: { cardData: CardData[]; onlyYear?: boolean }) {
  return (
    <div className='flex gap-4 flex-col lg:flex-row'>
      {cardData.map((d, i) => {
        //           ^?
        return (
          <div key={i} className='basis-1/3'>
            <Card cardData={d} identifier={i} onlyYear={onlyYear} />
          </div>
        );
      })}
    </div>
  );
}
