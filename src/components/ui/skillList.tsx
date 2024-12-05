import { Skill } from '@/types';
import SkillTitle from './skillTitle';

export default function SkillList(props: { title: string; skills: Skill[] }) {
  const { title, skills } = props;

  return (
    <div className='my-8'>
      <div className='mr-2'>{title}:</div>
      <SkillTitle skills={skills} />
    </div>
  );
}
