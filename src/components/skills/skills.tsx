import SkillList from './skillList';
import SkillBadge from './skillBadge';
import { getSkills } from '@/lib/content';
import { Level, Skill } from '@/app/utils/types';
import Content from '../content';

const skillText = 'Skills are roughly in descending order of proficiency. The colours represent the following levels of expertise:';

const legend: Skill[] = [
  { title: 'Excellent', level: Level.Excellent },
  { title: 'Good', level: Level.Good },
  { title: 'Decent', level: Level.Decent },
];

export default async function Skills() {
  const [programming, frameWorks, tools, languages] = await Promise.all([
    getSkills('PROGRAMMING'),
    getSkills('FRAMEWORKS'),
    getSkills('TOOLS'),
    getSkills('LANGUAGES'),
  ]);

  return (
    <Content title='Skills'>
      <div className='my-4 '>
        <p className='mr-2 inline'>{skillText}</p>
        <SkillBadge skills={legend} />
      </div>
      <SkillList title='Programming' skills={programming} />
      <SkillList title='Libraries & Frameworks' skills={frameWorks} />
      <SkillList title='Tools & Other Skills' skills={tools} />
      <SkillList title='Languages' skills={languages} />
    </Content>
  );
}
