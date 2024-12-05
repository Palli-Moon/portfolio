import { bio, bioContinued } from '@/data';

export default function Bio() {
  return (
    <div className='pb-8'>
      <h1 className='text-3xl'>Bio</h1>
      <p className='my-4'>{bio}</p>

      <div tabIndex={0} className='collapse bg-base-200'>
        <div className='collapse-title text-m font-medium'>Click for more info and interests...</div>
        <div className='collapse-content'>
          <p className='my-4'>{bioContinued}</p>
        </div>
      </div>
    </div>
  );
}
