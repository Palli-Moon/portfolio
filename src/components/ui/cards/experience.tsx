import Cards from './cards';
import { experience } from '@/data';

export default function Experience() {
  return (
    <div className='pb-8'>
      <h1>Experience</h1>
      <div className='my-4'>
        <Cards cardData={experience} />
      </div>
    </div>
  );
}
