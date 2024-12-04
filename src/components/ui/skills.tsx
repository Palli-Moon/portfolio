import { Skill, LevelStyle as Level } from '@/types';
import SkillList from './skillList';

export default function Skills() {
  const legend: Skill[] = [
    { title: 'Excellent', level: Level.Excellent },
    { title: 'Good', level: Level.Good },
    { title: 'Decent', level: Level.Decent },
  ];

  const programming: Skill[] = [
    { title: 'C#', level: Level.Excellent },
    { title: 'JavaScript/TypeScript', level: Level.Excellent },
    { title: 'SQL', level: Level.Excellent },
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
    { title: 'Vue.js', level: Level.Good },
    { title: 'Express.js/GraphQL', level: Level.Good },
    { title: 'MongoDB', level: Level.Good },
  ];

  const tools: Skill[] = [
    { title: 'Git', level: Level.Excellent },
    { title: 'Agile/Scrum', level: Level.Excellent },
    { title: 'VS Code', level: Level.Excellent },
    { title: 'Digital Ocean', level: Level.Good },
    { title: 'MS Excel', level: Level.Good },
    { title: 'Continuous Integration/Delivery', level: Level.Good },
    { title: 'Nx (monorepo)', level: Level.Decent },
    { title: 'AWS', level: Level.Decent },
  ];

  const languages: Skill[] = [
    { title: 'Icelandic', level: Level.Excellent },
    { title: 'English', level: Level.Excellent },
    { title: 'Swedish', level: Level.Good },
    { title: 'Danish', level: Level.Good },
  ];

  return (
    <div className='pb-8'>
      <h1 className='text-3xl'>Skills</h1>
      <SkillList title='Legend' skills={legend} />
      <SkillList title='Programming' skills={programming} />
      <SkillList title='Libraries & Frameworks' skills={frameWorks} />
      <SkillList title='Tools & Other Skills' skills={tools} />
      <SkillList title='Languages' skills={languages} />
    </div>
  );
}
