import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='hero min-h-[70vh] bg-gradient-to-b from-[oklch(var(--n))]'>
      <div className='hero-content flex-col lg:flex-row'>
        <Image src='/palli.jpg' className='max-w-sm rounded-lg shadow-2xl' alt='image' width={200} height={200} />
        <div>
          <h1 className='text-5xl font-bold text-primary'>Palli Moon</h1>
          <p className='text-muted-foreground text-secondary'>Software Developer, Audio Engineer, Musician, Lover...</p>
        </div>
      </div>
    </div>
  );
}
