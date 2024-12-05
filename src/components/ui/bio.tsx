import { bio } from '@/data';

export default function Bio() {
  return (
    <div className='pb-8'>
      <h1>Biography</h1>
      {bio.main}

      <div tabIndex={0} className='collapse collapse-arrow bg-base-200'>
        <div className='collapse-title text-m font-medium'>Click for more info and interests...</div>
        <div className='collapse-content'>{bio.extended}</div>
      </div>
    </div>
  );
}
