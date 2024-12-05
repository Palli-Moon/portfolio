import { Skill, Level } from '@/types';
import SkillList from './skillList';
import SkillBadge from './skillBadge';

export default function Skills() {
  const legend: Skill[] = [
    { title: 'Excellent', level: Level.Excellent },
    { title: 'Good', level: Level.Good },
    { title: 'Decent', level: Level.Decent },
  ];

  const programming: Skill[] = [
    { title: 'C#', level: Level.Excellent },
    { title: 'JavaScript/TypeScript', level: Level.Excellent },
    { title: 'C++', level: Level.Good },
    { title: 'Java', level: Level.Good },
    { title: 'Python', level: Level.Good },
    { title: 'C', level: Level.Decent },
    { title: 'PHP', level: Level.Decent },
    { title: 'BC AL', level: Level.Decent },
    { title: 'NAV C/AL', level: Level.Decent },
  ];

  const frameWorks: Skill[] = [
    { title: '.NET', level: Level.Excellent },
    { title: 'SignalR/WebAPI', level: Level.Excellent },
    { title: 'ReactJS', level: Level.Excellent },
    { title: 'Next.js', level: Level.Excellent },
    { title: 'Node.js', level: Level.Excellent },
    { title: 'SQL', level: Level.Excellent },
    { title: 'Vue.js', level: Level.Good },
    { title: 'Express.js/GraphQL', level: Level.Good },
    { title: 'MongoDB', level: Level.Good },
  ];

  const tools: Skill[] = [
    { title: 'Git', level: Level.Excellent },
    { title: 'Agile/Scrum', level: Level.Excellent },
    { title: 'VS Code', level: Level.Excellent },
    { title: 'Vercel', level: Level.Excellent },
    { title: 'Docker', level: Level.Good },
    { title: 'Digital Ocean', level: Level.Good },
    { title: 'MS Excel', level: Level.Good },
    { title: 'CI/CD', level: Level.Good },
    { title: 'UI/UX', level: Level.Good },
    { title: 'Nx (monorepo)', level: Level.Decent },
    { title: 'AWS', level: Level.Decent },
  ];

  const languages: Skill[] = [
    { title: 'Icelandic', level: Level.Excellent },
    { title: 'English', level: Level.Excellent },
    { title: 'Swedish', level: Level.Good },
    { title: 'Danish', level: Level.Good },
    { title: 'Spanish', level: Level.Decent },
  ];

  return (
    <div className='pb-8'>
      <h1 className='text-3xl'>Skills</h1>
      <div className='my-4 '>
        <p className='mr-2 inline'>Skills are roughly in descending order of proficiency. The colours represent the following level of expertise:</p>
        <SkillBadge skills={legend} />
      </div>
      <SkillList title='Programming' skills={programming} />
      <SkillList title='Libraries & Frameworks' skills={frameWorks} />
      <SkillList title='Tools & Other Skills' skills={tools} />
      <SkillList title='Languages' skills={languages} />
    </div>
  );
}
