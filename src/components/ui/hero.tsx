import Image from 'next/image';

export default function Hero() {
  return (
    <div className='hero min-h-[40vh] bg-neutral-900'>
      <div className='hero-content flex-col lg:flex-row gap-10'>
        <Image src='/palli.jpg' className='max-w-sm rounded-lg shadow-2xl' alt='image' width={150} height={150} />
        <div>
          <h1 className='text-5xl font-bold text-primary'>Palli Moon</h1>
          <p className='text-muted-foreground text-secondary'>Software Developer, Audio Engineer, Musician, Lover...</p>
        </div>
      </div>
    </div>
  );
}
