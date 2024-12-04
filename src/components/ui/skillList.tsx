import { Skill } from '@/types';

export default function SkillList(props: { title: string; skills: Skill[] }) {
  const { title, skills } = props;

  return (
    <ul className='my-8'>
      <li className='mr-2 inline'>{title}:</li>
      {skills.map((s) => {
        return (
          <li key={s.title} className={s.level}>
            {s.title}
          </li>
        );
      })}
    </ul>
  );
}
