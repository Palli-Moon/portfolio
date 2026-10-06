import Content from './content';
import ProjectCard from './cards/projectCard';
import Markdown from './markdown';
import { getParagraphs, getProjects } from '@/lib/content';

export default async function Projects() {
  const [intro, projects] = await Promise.all([getParagraphs('PROJECTS'), getProjects()]);

  return (
    <Content title='Personal Projects'>
      <Markdown>{intro.join('\n\n')}</Markdown>
      <div className='flex gap-4 flex-col lg:flex-row'>
        {projects.map((p, i) => (
          <ProjectCard key={i} data={p} />
        ))}
      </div>
    </Content>
  );
}
