import SkillList from './skillList';
import SkillBadge from './skillBadge';
import { skillText, legend, programming, frameWorks, tools, languages } from '@/app/utils/data';
import Content from '../content';

export default function Skills() {
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
