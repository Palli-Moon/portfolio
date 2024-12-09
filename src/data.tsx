import { Bio, Skill, Level, ExpCardData, ProjectCardData } from './types';

// Bio

export const bio: Bio = {
  main: (
    <p className='my-4'>
      <b>Gunnar Páll</b>, also known as <b>Palli Moon</b>, holds a <b>Bachelor of Science</b> degree in Computer Science from <b>Reykjavík University</b>,
      graduating in the spring of 2016. With over nine years of experience (and at least twice that as a hobbyist) in software development, he specializes in{' '}
      <b>C# .NET Framework</b> and <b>JavaScript/TypeScript</b> libraries, including <b>Node.js</b>, <b>ReactJS</b>, and <b>Next.js</b>. A lifelong learner, he
      continually hones his skills and explores new technologies in his free time.
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
export const skillText = 'Skills are roughly in descending order of proficiency. The colours represent the following levels of expertise:';

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
  { title: 'Microservices', level: Level.Good },
  { title: 'Digital Ocean', level: Level.Good },
  { title: 'CI/CD', level: Level.Good },
  { title: 'UI/UX', level: Level.Good },
  { title: 'Nx (monorepo)', level: Level.Decent },
  { title: 'AWS', level: Level.Decent },
  { title: 'Azure', level: Level.Decent },
];

export const languages: Skill[] = [
  { title: 'Icelandic', level: Level.Excellent },
  { title: 'English', level: Level.Excellent },
  { title: 'Swedish', level: Level.Good },
  { title: 'Danish', level: Level.Good },
  { title: 'Spanish', level: Level.Decent },
];

// Experience and Education

export const experience: ExpCardData[] = [
  {
    name: 'Klappir Grænar Lausnir',
    title: 'Tech Lead',
    startDate: new Date('2023-08'),
    endDate: new Date('2024-11'),
    languages: [{ title: 'NodeJS' }, { title: 'SQL' }, { title: 'GraphQL' }],
    description: (
      <p className='my-4'>
        Responsible for upgrading and maintaining the backend of <b>Klappir&apos;s</b> environmental platform. Played a key role in the hiring process and
        onboarding new developers. Encouraged the team to adopt <b>Agile</b> and <b>Scrum</b> methodologies and contributed significantly to{' '}
        <b>architectural design decisions</b>.
      </p>
    ),
  },
  {
    name: 'LS Retail',
    title: 'Software Developer',
    startDate: new Date('2016-10'),
    endDate: new Date('2023-07'),
    languages: [{ title: 'C#' }, { title: 'SignalR' }, { title: 'BC AL' }, { title: 'TS' }],
    description: (
      <p className='my-4'>
        Designed and developed a service to manage retail hardware devices and facilitate communication with the <b>POS</b> system. Also created clients in{' '}
        <b>TypeScript</b> and <b>.NET</b> for integration with the service, including backend development in <b>Business Central</b> using <b>AL</b> and{' '}
        <b>C/AL</b> and a frontend using <b>ReactJS</b>. The solution is fully unit-tested, customizable, and packaged as an installer.
      </p>
    ),
    descriptionLong: (
      <>
        <p className='my-4'>
          Solely responsible for the end-to-end design and development of a <b>service</b> that manages <b>retail hardware</b> devices and facilitates
          communication with the POS (Point of Sale) system. The hardware includes <b>OPOS</b> devices (e.g., receipt printers, scanners, scales), A4 printers,
          EFT (Electronic Funds Transfer) terminals, and forecourt devices. The service leverages <b>SignalR</b> and <b>WebAPI</b> for seamless communication
          with the POS and includes a configuration web application built with <b>ReactJS</b>. The solution is fully <b>unit-tested</b>, supports{' '}
          <b>custom device implementations</b>, and can <b>simulate</b> various hardware devices. It also features robust <b>test tools</b> and is packaged for{' '}
          <b>deployment</b> as an <b>installer</b>.
        </p>
        <p className='my-4'>
          He was also responsible for developing the <b>clients</b> that interact with the service, implemented in <b>JavaScript (TypeScript)</b> and{' '}
          <b>.NET</b>. These clients were integrated into the <b>Business Central</b> backend, requiring the development of <b>AL</b> and <b>C/AL</b> code as
          part of the process.
        </p>
      </>
    ),
  },
  {
    name: 'Marel',
    title: 'Contract Developer',
    startDate: new Date('2016-1'),
    endDate: new Date('2016-09'),
    languages: [{ title: 'C#' }, { title: 'AngularJS' }, { title: 'MS Azure' }],
    description: (
      <p className='my-4'>
        Final project at <b>Reykjavík University</b> was in collaboration with <b>Marel</b>, focusing on the design and development of software for Marel&apos;s{' '}
        <b>Innova systems</b>. The software collects and analyzes data, primarily error logs, and presents the results through an intuitive web-based interface.
        The system is hosted on the <b>Microsoft Azure</b> cloud platform. The work involved front-end and back-end development, along with dev-ops tasks,
        documentation, and more. Following graduation, development on the project continued through September 2016.
      </p>
    ),
  },
];

export const education: ExpCardData[] = [
  {
    name: 'Reykjavík University',
    title: 'Computer Science, B.Sc.',
    startDate: new Date('2023-08'),
    endDate: new Date('2024-11'),
    description: (
      <p className='my-4'>
        <b>Bachelor of Science</b> degree in Computer Science from Reykjavík University with focus on <b>Game Development</b> and <b>Web Services</b>.
      </p>
    ),
  },

  {
    name: 'SAE Institute',
    title: 'Audio Engineering, B.A.',
    startDate: new Date('2023-08'),
    endDate: new Date('2024-11'),
    description: (
      <p className='my-4'>
        <b>Bachelor of Arts (Hons)</b> degree in Audio Engineering from SAE Institute in <b>London</b>
      </p>
    ),
  },
  {
    name: 'Borgarholtsskóli',
    title: 'Media, Stúdentspróf',
    startDate: new Date('2007'),
    endDate: new Date('2009'),
    description: (
      <p className='my-4'>
        <b>Stúdentspróf</b>, the Icelandic equivalent to A-levels, majoring in <b>Media</b>.
      </p>
    ),
  },
];

// Projects

export const projectText = (
  <p>
    Palli has explored software development through countless personal projects, each varying in scope and completeness. Some of these projects are showcased on
    his <a href='https://github.com/Palli-Moon'>GitHub Page</a>, while others remain private or unfinished.
  </p>
);

export const projects: ProjectCardData[] = [
  {
    name: "Palli's Portfolio",
    link: 'https://www.pallimoon.com/',
    ghlink: 'https://github.com/Palli-Moon/portfolio',
    description: (
      <>
        This portfolio site — yes, the one you&apos;re currently visiting! — is built in <b>NextJS</b> and features a variety of <b>components</b> to showcase
        versatility. It conporates <b>Daisy UI</b> and <b>Tailwind CSS</b> for styling. While it currently lacks a <b>backend</b>, it still effectively
        separates <b>data</b> and <b>UI</b> concerns. Hosted on <b>Vercel</b> and deployed using <b>GitHub Actions</b>, this project is a continuous work in
        progress. I plan to expand it over time by adding my <b>music</b> and other <b>content</b> as my career evolves.
      </>
    ),
    languages: [{ title: 'NextJS' }, { title: 'TypeScript' }, { title: 'Daisy UI' }, { title: 'Tailwind' }, { title: 'Vercel' }],
  },
  {
    name: 'Ticketing',
    ghlink: 'https://github.com/Palli-Moon/ticketing',
    description: (
      <>
        A self-driven project designed to gain hands-on experience with the <b>microservice</b> paradigm. It features a <b>Node.js</b> backend paired with a{' '}
        <b>ReactJS and Next.js</b> frontend. The architecture incorporates <b>Docker</b> within a <b>Kubernetes cluster</b>, with{' '}
        <b>NGINX Ingress Controller</b> managing service communication. The application allows users to create event tickets that can be &quot;purchased&quot;
        using the <b>Stripe API</b> (in test mode). The project is not currently available online for testing but includes detailed setup steps for deployment.
      </>
    ),
    languages: [{ title: 'Node.js' }, { title: 'ReactJS' }, { title: 'MongoDB' }, { title: 'Microservices' }, { title: 'StripeAPI' }],
  },
];
