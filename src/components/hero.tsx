import Image from 'next/image';

export default function Hero() {
  return (
    <div className='hero min-h-[50vh] lg:min-h-[40vh] bg-neutral-900'>
      <div className='hero-content flex-col lg:flex-row gap-10'>
        <Image src='/palli.jpg' className='max-w-sm rounded-lg shadow-2xl' priority alt='A picture of Palli' width={150} height={150} />
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl pb-4'>Gunnar Páll Gunnarsson</h1>
          <p className='text-muted-foreground text-secondary font-[family-name:var(--font-geist-mono)]'>
            Software Developer, Audio Engineer, <br className='inline md:hidden' />
            Musician, Lover...
          </p>
        </div>
      </div>
    </div>
  );
}

export function HeroMini() {
  return (
    <div className='hero bg-neutral-900'>
      <div className='hero-content flex-row gap-10'>
        <Image src='/palli.jpg' className='max-w-sm rounded-lg shadow-2xl' priority alt='A picture of Palli' width={100} height={100} />
        <div className='text-center lg:text-left'>
          <h1 className='text-3xl pb-2'>Gunnar Páll Gunnarsson</h1>
          <p className='text-muted-foreground text-secondary font-[family-name:var(--font-geist-mono)]'>Software Developer, Audio Engineer, Musician...</p>
        </div>
      </div>
    </div>
  );
}
