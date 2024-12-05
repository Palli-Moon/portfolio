import { Bio, Skill, Level, CardData } from './types';

// Bio

export const bio: Bio = {
  main: (
    <p className='my-4'>
      <b>Gunnar Páll</b>, also known as <b>Palli Moon</b>, holds a <b>Bachelor of Science</b> degree in Computer Science from <b>Reykjavík University</b>,
      graduating in the spring of 2016. With over nine years of experience in software development, he specializes in <b>C# .NET Framework</b> and{' '}
      <b>JavaScript/TypeScript</b> libraries, including <b>Node.js</b>, <b>ReactJS</b>, and <b>Next.js</b>. A lifelong learner, he continually hones his skills
      and explores new technologies in his free time.
    </p>
  ),
  extended: [
    <p key={0} className='my-4'>
      Outside of software development his interests are primarily music-related. He plays drums in an active band, is also self-taught on many other instruments
      and has a <b>Bachelor of Arts (Honours)</b> degree in Audio Engineering from <b>SAE Institute</b> in London. He also enjoys video games, travelling and
      spending times with friends and family.
    </p>,
    <p key={1} className='my-4'>
      <b>Palli</b> has a great sense of humour and thrives in team environments. He enjoys socialising with those around him and is dedicated to fostering a
      positive and uplifting atmosphere.
    </p>,
  ],
};

// Skills
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

// Experience

export const experience: CardData[] = [
  {
    name: 'Marel',
    title: 'Contract Developer',
    startDate: new Date('2016-1'),
    endDate: new Date('2016-09'),
    image: 'asdf',
    link: 'asdf',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta mollis sodales. Duis lobortis sodales turpis et porta. Vivamus aliquam eget
        quam nec auctor. Sed a mi sit amet sapien feugiat vestibulum sit amet a lorem.
      </>
    ),
    descriptionLong: <p>Marel</p>,
  },
  {
    name: 'LS Retail',
    title: 'Software Developer',
    startDate: new Date('2016-10'),
    endDate: new Date('2023-07'),
    image: 'asdf',
    link: 'asdf',
    description: (
      <>
        Donec elementum suscipit mattis. Nullam aliquet tristique mi, at laoreet est pulvinar eget. Quisque interdum, tellus nec sagittis feugiat, ligula nisl
        venenatis urna, sit amet venenatis odio eros sed nibh.{' '}
      </>
    ),
    descriptionLong: <p>LS</p>,
  },
  {
    name: 'Klappir Grænar Lausnir',
    title: 'Lead Backend Developer',
    startDate: new Date('2023-08'),
    endDate: new Date('2024-11'),
    image: 'asdf',
    link: 'asdf',
    description: (
      <>
        Vivamus tempor est sit amet commodo placerat. Integer in ex sed ipsum tristique blandit in et est. Fusce congue orci vitae dictum porta. Donec rhoncus
        eleifend scelerisque. Nam efficitur purus sed neque pulvinar, vel laoreet elit dignissim.
      </>
    ),
    descriptionLong: <p>Klappir</p>,
  },
];
