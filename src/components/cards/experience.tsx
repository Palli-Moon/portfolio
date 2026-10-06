import Cards from './cards';
import { getExperience } from '@/lib/content';
import Content from '../content';

export default async function Experience() {
  const experience = await getExperience('WORK');

  return (
    <Content title='Experience'>
      <Cards cardData={experience} twoColumns />
    </Content>
  );
}
