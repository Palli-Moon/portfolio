import { bio } from '@/app/utils/data';
import Content from './content';

export default function Bio() {
  return (
    <Content title='Biography'>
      {bio.main}

      <div tabIndex={0} className='collapse collapse-arrow bg-neutral-900'>
        <div className='collapse-title text-m font-medium'>Click for more info and interests...</div>
        <div className='collapse-content'>{bio.extended}</div>
      </div>
    </Content>
  );
}
