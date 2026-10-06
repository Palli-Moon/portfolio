import Cards from './cards';
import { getExperience } from '@/lib/content';
import Content from '../content';

export default async function Education() {
  const education = await getExperience('EDUCATION');

  return (
    <Content title='Education'>
      <Cards cardData={education} onlyYear />
    </Content>
  );
}
