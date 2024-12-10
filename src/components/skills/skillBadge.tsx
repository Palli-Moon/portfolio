import { Level, Skill } from '@/app/utils/types';

export default function SkillBadge({ skills }: { skills: Skill[] }) {
  return (
    <>
      {skills.map((s) => (
        <div
          key={s.title}
          className={`mr-2 badge badge-outline rounded-md
                ${s.level === Level.Excellent && 'border-green-600'}
                ${s.level === Level.Good && 'border-yellow-600'}
                ${s.level === Level.Decent && 'border-orange-600'}
                ${s.level || 'border-gray-600 '}`}
        >
          {s.title}
        </div>
      ))}
    </>
  );
}
