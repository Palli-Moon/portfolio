import { LevelStyle, Skill } from '@/types';

export default function SkillList(props: { title: string; skills: Skill[] }) {
  const { title, skills } = props;

  return (
    <ul className='my-8'>
      <li className='mr-2 inline'>{title}:</li>
      {skills.map((s) => {
        return (
          <li
            key={s.title}
            className={`mr-2 inline badge 
                ${s.level === LevelStyle.Excellent && 'badge-primary'}
                ${s.level === LevelStyle.Good && 'badge-secondary'}
                ${s.level === LevelStyle.Decent && 'badge-neutral'}`}
          >
            {s.title}
          </li>
        );
      })}
    </ul>
  );
}
