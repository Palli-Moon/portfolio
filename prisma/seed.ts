import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, SkillCategory, SkillLevel, Section } from '../src/generated/prisma/client';

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });

const { EXCELLENT, GOOD, DECENT } = SkillLevel;

const paragraphs: Record<Section, string[]> = {
  BIO: [
    `**Páll Máni**, also known as **Palli Moon**, holds a **Bachelor of Science** degree in Computer Science from **Reykjavík University**, graduating in the spring of 2016. With over nine years of experience (and at least twice that as a hobbyist) in software development, he specializes in **C# .NET Framework** and **JavaScript/TypeScript** libraries, including **Node.js**, **ReactJS**, and **Next.js**. A lifelong learner, he continually hones his skills and explores new technologies in his free time.`,
  ],
  BIO_MORE: [
    `Outside of software development his interests are primarily music-related. He plays drums in an active band, is also self-taught on many other instruments and has a **Bachelor of Arts (Honours)** degree in Audio Engineering from **SAE Institute** in London. He also enjoys video games, travelling and spending times with friends and family.`,
    `**Palli** has a great sense of humour and thrives in team environments. He enjoys socialising with those around him and is dedicated to fostering a positive and uplifting atmosphere.`,
  ],
  PROJECTS: [
    `Palli has explored software development through countless personal projects, each varying in scope and completeness. Some of these projects are showcased on his [GitHub Page](https://github.com/Palli-Moon), while others remain private or unfinished.`,
  ],
};

const skills: Record<SkillCategory, [string, SkillLevel][]> = {
  PROGRAMMING: [
    ['C#', EXCELLENT],
    ['JavaScript/TypeScript', EXCELLENT],
    ['CSS', GOOD],
    ['C++', GOOD],
    ['Java', GOOD],
    ['Python', GOOD],
    ['C', DECENT],
    ['PHP', DECENT],
    ['BC AL', DECENT],
    ['NAV C/AL', DECENT],
  ],
  FRAMEWORKS: [
    ['.NET', EXCELLENT],
    ['SignalR/WebAPI', EXCELLENT],
    ['ReactJS', EXCELLENT],
    ['Next.js', EXCELLENT],
    ['Node.js', EXCELLENT],
    ['SQL', EXCELLENT],
    ['Tailwind', GOOD],
    ['Vue.js', GOOD],
    ['Express.js/GraphQL', GOOD],
    ['MongoDB', GOOD],
  ],
  TOOLS: [
    ['Git', EXCELLENT],
    ['Agile/Scrum', EXCELLENT],
    ['VS Code', EXCELLENT],
    ['Vercel', EXCELLENT],
    ['Docker', GOOD],
    ['Microservices', GOOD],
    ['Digital Ocean', GOOD],
    ['CI/CD', GOOD],
    ['UI/UX', GOOD],
    ['Nx (monorepo)', DECENT],
    ['AWS', DECENT],
    ['Azure', DECENT],
  ],
  LANGUAGES: [
    ['Icelandic', EXCELLENT],
    ['English', EXCELLENT],
    ['Swedish', GOOD],
    ['Danish', GOOD],
    ['Spanish', DECENT],
  ],
};

const work = [
  {
    name: 'M7',
    title: 'Software Specialist',
    startDate: new Date('2025-02'),
    tags: ['.NET Framework', 'MS AX POS'],
    description: `I'm there now.`,
  },
  {
    name: 'Klappir Grænar Lausnir',
    title: 'Tech Lead',
    startDate: new Date('2023-08'),
    endDate: new Date('2024-11'),
    tags: ['NodeJS', 'SQL', 'GraphQL'],
    description: `Responsible for upgrading and maintaining the backend of **Klappir's** environmental platform. Played a key role in the hiring process and onboarding new developers. Encouraged the team to adopt **Agile** and **Scrum** methodologies and contributed significantly to **architectural design decisions**.`,
  },
  {
    name: 'LS Retail',
    title: 'Software Developer',
    startDate: new Date('2016-10'),
    endDate: new Date('2023-07'),
    tags: ['C#', 'SignalR', 'BC AL', 'TS'],
    description: `Designed and developed a service to manage retail hardware devices and facilitate communication with the **POS** system. Also created clients in **TypeScript** and **.NET** for integration with the service, including backend development in **Business Central** using **AL** and **C/AL** and a frontend using **ReactJS**. The solution is fully unit-tested, customizable, and packaged as an installer.`,
    descriptionLong: `Solely responsible for the end-to-end design and development of a **service** that manages **retail hardware** devices and facilitates communication with the POS (Point of Sale) system. The hardware includes **OPOS** devices (e.g., receipt printers, scanners, scales), A4 printers, EFT (Electronic Funds Transfer) terminals, and forecourt devices. The service leverages **SignalR** and **WebAPI** for seamless communication with the POS and includes a configuration web application built with **ReactJS**. The solution is fully **unit-tested**, supports **custom device implementations**, and can **simulate** various hardware devices. It also features robust **test tools** and is packaged for **deployment** as an **installer**.

He was also responsible for developing the **clients** that interact with the service, implemented in **JavaScript (TypeScript)** and **.NET**. These clients were integrated into the **Business Central** backend, requiring the development of **AL** and **C/AL** code as part of the process.`,
  },
  {
    name: 'Marel',
    title: 'Contract Developer',
    startDate: new Date('2016-01'),
    endDate: new Date('2016-09'),
    tags: ['C#', 'AngularJS', 'MS Azure'],
    description: `Final project at **Reykjavík University** was in collaboration with **Marel**, focusing on the design and development of software for Marel's **Innova systems**. The software collects and analyzes data, primarily error logs, and presents the results through an intuitive web-based interface. The system is hosted on the **Microsoft Azure** cloud platform. The work involved front-end and back-end development, along with dev-ops tasks, documentation, and more. Following graduation, development on the project continued through September 2016.`,
  },
];

const education = [
  {
    name: 'Reykjavík University',
    title: 'Computer Science, B.Sc.',
    startDate: new Date('2013'),
    endDate: new Date('2016'),
    description: `**Bachelor of Science** degree in Computer Science from Reykjavík University with focus on **Game Development** and **Web Services**.`,
  },
  {
    name: 'SAE Institute',
    title: 'Audio Engineering, B.A.',
    startDate: new Date('2010'),
    endDate: new Date('2012'),
    description: `**Bachelor of Arts (Hons)** degree in Audio Engineering from SAE Institute in **London**`,
  },
  {
    name: 'Borgarholtsskóli',
    title: 'Media, Stúdentspróf',
    startDate: new Date('2007'),
    endDate: new Date('2009'),
    description: `**Stúdentspróf**, the Icelandic equivalent to A-levels, majoring in **Media**.`,
  },
];

const projects = [
  {
    name: "Palli's Portfolio",
    link: 'https://www.pallimoon.com/',
    ghlink: 'https://github.com/Palli-Moon/portfolio',
    tags: ['NextJS', 'TypeScript', 'Daisy UI', 'Tailwind', 'Vercel'],
    description: `This portfolio site — yes, the one you're currently visiting! — is built in **NextJS** and features a variety of **components** to showcase versatility. It conporates **Daisy UI** and **Tailwind CSS** for styling. While it currently lacks a **backend**, it still effectively separates **data** and **UI** concerns. Hosted on **Vercel** and deployed using **GitHub Actions**, this project is a continuous work in progress. I plan to expand it over time by adding my **music** and other **content** as my career evolves.`,
  },
  {
    name: 'Ticketing',
    ghlink: 'https://github.com/Palli-Moon/ticketing',
    tags: ['Node.js', 'ReactJS', 'MongoDB', 'Microservices', 'StripeAPI'],
    description: `A self-driven project designed to gain hands-on experience with the **microservice** paradigm. It features a **Node.js** backend paired with a **ReactJS and Next.js** frontend. The architecture incorporates **Docker** within a **Kubernetes cluster**, with **NGINX Ingress Controller** managing service communication. The application allows users to create event tickets that can be "purchased" using the **Stripe API** (in test mode). The project is not currently available online for testing but includes detailed setup steps for deployment.`,
  },
];

// Wipes and re-inserts everything, so the seed can be re-run to reset content.
async function main() {
  await prisma.$transaction([
    prisma.paragraph.deleteMany(),
    prisma.skill.deleteMany(),
    prisma.experience.deleteMany(),
    prisma.project.deleteMany(),
    prisma.paragraph.createMany({
      data: Object.entries(paragraphs).flatMap(([section, bodies]) => bodies.map((body, order) => ({ section: section as Section, order, body }))),
    }),
    prisma.skill.createMany({
      data: Object.entries(skills).flatMap(([category, list]) =>
        list.map(([title, level], order) => ({ category: category as SkillCategory, title, level, order })),
      ),
    }),
    prisma.experience.createMany({
      data: [...work.map((e) => ({ ...e, kind: 'WORK' as const })), ...education.map((e) => ({ ...e, kind: 'EDUCATION' as const }))],
    }),
    prisma.project.createMany({ data: projects.map((p, order) => ({ ...p, order })) }),
  ]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
