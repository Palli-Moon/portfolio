import SkillList from './skillList';
import SkillBadge from './skillBadge';
import { legend, programming, frameWorks, tools, languages } from '@/data';

export default function Skills() {
  return (
    <div className='pb-8'>
      <h1 className='text-3xl'>Skills</h1>
      <div className='my-4 '>
        <p className='mr-2 inline'>Skills are roughly in descending order of proficiency. The colours represent the following levels of expertise:</p>
        <SkillBadge skills={legend} />
      </div>
      <SkillList title='Programming' skills={programming} />
      <SkillList title='Libraries & Frameworks' skills={frameWorks} />
      <SkillList title='Tools & Other Skills' skills={tools} />
      <SkillList title='Languages' skills={languages} />
    </div>
  );
}
