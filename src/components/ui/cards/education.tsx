import Cards from './cards';
import { education } from '@/data';

export default function Education() {
  return (
    <div className='pb-8'>
      <h1>Education</h1>
      <div className='my-4'>
        <Cards cardData={education} onlyYear />
      </div>
    </div>
  );
}
