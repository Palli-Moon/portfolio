import { Level, Skill } from '@/types';

export default function SkillBadge({ skills }: { skills: Skill[] }) {
  return (
    <>
      {skills.map((s) => (
        <div
          key={s.title}
          className={`mr-2 badge badge-outline
                ${s.level === Level.Excellent && 'badge-success'}
                ${s.level === Level.Good && 'badge-warning'}
                ${s.level === Level.Decent && 'badge-info'}
                ${s.level || 'badge-ghost'}`}
        >
          {s.title}
        </div>
      ))}
    </>
  );
}
