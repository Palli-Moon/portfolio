import { ExpCardData } from '@/app/utils/types';
import ExpCard from './expCard';

export default function Cards({ cardData, onlyYear, twoColumns }: { cardData: ExpCardData[]; onlyYear?: boolean; twoColumns?: boolean }) {
  return (
    <div className={twoColumns ? 'grid gap-4 grid-cols-1 lg:grid-cols-2' : 'flex gap-4 flex-col lg:flex-row'}>
      {cardData.map((d, i) => {
        //           ^?
        return (
          <div key={i} className={twoColumns ? undefined : 'basis-1/3'}>
            <ExpCard cardData={d} identifier={i} onlyYear={onlyYear} />
          </div>
        );
      })}
    </div>
  );
}
