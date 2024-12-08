import { ProjectCardData } from '@/types';
import Card from './card';

export default function ProjectCard({ data }: { data: ProjectCardData }) {
  const { name } = data;

  return (
    <div className='basis-1/2'>
      <Card title={name}>{name}</Card>
    </div>
  );
}
