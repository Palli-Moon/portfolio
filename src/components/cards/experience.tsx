import Cards from './cards';
import { experience } from '@/utils/data';
import Content from '../content';

export default function Experience() {
  return (
    <Content title='Experience'>
      <Cards cardData={experience} />
    </Content>
  );
}
