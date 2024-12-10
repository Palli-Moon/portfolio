import Content from './content';
import ProjectCard from './cards/projectCard';
import { projectText, projects } from '@/app/utils/data';

export default function Projects() {
  return (
    <Content title='Personal Projects'>
      <div className='my-4'>{projectText}</div>
      <div className='flex gap-4 flex-col lg:flex-row'>
        {projects.map((p, i) => (
          <ProjectCard key={i} data={p} />
        ))}
      </div>
    </Content>
  );
}
