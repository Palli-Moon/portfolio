import Image from 'next/image';

export default function Hero() {
  return (
    <div className='hero min-h-[50vh] lg:min-h-[40vh] bg-neutral-900'>
      <div className='hero-content flex-col lg:flex-row gap-10'>
        <Image src='/palli.jpg' className='max-w-sm rounded-lg shadow-2xl' priority alt='A picture of Palli' width={150} height={150} />
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold text-primary'>Gunnar Páll Gunnarsson</h1>
          <p className='text-muted-foreground text-secondary'>Software Developer, Audio Engineer, Musician, Lover...</p>
        </div>
      </div>
    </div>
  );
}
