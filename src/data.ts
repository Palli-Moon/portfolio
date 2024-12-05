import { Skill, Level } from './types';

export const bio = `Gunnar Páll aka "Palli Moon" studied computer science at Reykjavík University and graduated with a Bachelor of Science degree in the spring of 2016. He
                    has more than 9 years’ experience in software development. Mainly specializing in C# .NET Framework and JavaScript (TypeScript) libraries and frameworks
                    like Node, React and Next. but has also worked with SQL, Business Central AL, and a plethora of other languages at his most recent job at Klappir Grænar
                    Lausnir, while at RU or on his own. He loves to learn new things and is constantly sharpening his skills in his free time.`;

export const bioContinued = `Outside of software development his interests are mostly music related. He plays drums in an active band. He is also self-taught on many other
                            instruments and has a Bachelor of Arts (Honours) degree in audio engineering from SAE Institute in London. He also enjoys video games, traveling and
                            spending times with friends and family.`;

export const legend: Skill[] = [
  { title: 'Excellent', level: Level.Excellent },
  { title: 'Good', level: Level.Good },
  { title: 'Decent', level: Level.Decent },
];

export const programming: Skill[] = [
  { title: 'C#', level: Level.Excellent },
  { title: 'JavaScript/TypeScript', level: Level.Excellent },
  { title: 'CSS', level: Level.Good },
  { title: 'C++', level: Level.Good },
  { title: 'Java', level: Level.Good },
  { title: 'Python', level: Level.Good },
  { title: 'C', level: Level.Decent },
  { title: 'PHP', level: Level.Decent },
  { title: 'BC AL', level: Level.Decent },
  { title: 'NAV C/AL', level: Level.Decent },
];

export const frameWorks: Skill[] = [
  { title: '.NET', level: Level.Excellent },
  { title: 'SignalR/WebAPI', level: Level.Excellent },
  { title: 'ReactJS', level: Level.Excellent },
  { title: 'Next.js', level: Level.Excellent },
  { title: 'Node.js', level: Level.Excellent },
  { title: 'SQL', level: Level.Excellent },
  { title: 'Tailwind', level: Level.Good },
  { title: 'Vue.js', level: Level.Good },
  { title: 'Express.js/GraphQL', level: Level.Good },
  { title: 'MongoDB', level: Level.Good },
];

export const tools: Skill[] = [
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

export const languages: Skill[] = [
  { title: 'Icelandic', level: Level.Excellent },
  { title: 'English', level: Level.Excellent },
  { title: 'Swedish', level: Level.Good },
  { title: 'Danish', level: Level.Good },
  { title: 'Spanish', level: Level.Decent },
];
