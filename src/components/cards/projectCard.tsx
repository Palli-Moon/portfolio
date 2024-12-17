import { ProjectCardData } from '@/utils/types';
import { FaGithub } from 'react-icons/fa6';
import Card from './card';
import SkillBadge from '../skills/skillBadge';

export default function ProjectCard({ data }: { data: ProjectCardData }) {
  const { name, description, ghlink, languages } = data;

  // Link's currently inactive, since the only project using on is this one, so it really doesn't need one!
  return (
    <div className='basis-1/2'>
      <Card title={name}>
        <div className='my-4'>{description}</div>
        <div className='card-actions justify-between'>
          <div className='my-auto'>{languages && <SkillBadge skills={languages} />}</div>
          <div className='flex'>
            {/* <p className='my-auto mx-2'>Visit: </p> */}
            {/* {link && (
              <a href={link}>
                <FaEarthAmericas className='mx-2' size={24} />
              </a>
            )} */}
            <a href={ghlink}>
              <FaGithub className='mx-2' size={24} />
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}
