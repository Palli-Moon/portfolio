import Cards from './cards';
import { education } from '@/data';
import Content from '../content';

export default function Education() {
  return (
    <Content title='Education'>
      <div className='my-4'>
        <Cards cardData={education} onlyYear />
      </div>
    </Content>
  );
}
