import Cards from './cards';
import { education } from '@/utils/data';
import Content from '../content';

export default function Education() {
  return (
    <Content title='Education'>
      <Cards cardData={education} onlyYear />
    </Content>
  );
}
