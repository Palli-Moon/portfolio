import { Skill } from '@/app/utils/types';
import SkillBadge from './skillBadge';

export default function SkillList(props: { title: string; skills: Skill[] }) {
  const { title, skills } = props;

  return (
    <div className='my-8'>
      <div className='mr-2'>{title}:</div>
      <SkillBadge skills={skills} />
    </div>
  );
}
