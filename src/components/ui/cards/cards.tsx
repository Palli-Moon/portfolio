import { CardData } from '@/types';
import Card from './card';

export default function Cards({ cardData }: { cardData: CardData[] }) {
  return (
    <div className='flex gap-4 flex-wrap'>
      {cardData.map((d, i) => {
        console.log(d);
        return <Card key={i} {...d} />;
      })}
    </div>
  );
}
