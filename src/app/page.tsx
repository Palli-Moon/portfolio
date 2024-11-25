import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='container mx-auto my-10 p-5 bg-gradient-to-r dark:from-slate-800 from-slate-400 rounded-3xl shadow-2xl'>
        <div className='flex gap-8 flex-wrap items-center justify-center'>
          <Image className='rounded-full drop-shadow-2xl' src='/palli.jpg' alt='Next.js logo' width={180} height={38} priority />
          <div className='text-center'>
            <h1 className='text-7xl font-bold drop-shadow-2xl'>Palli Moon</h1>
            <h2 className='text-1xl moon-gray drop-shadow-2xl'>(Gunnar Páll Gunnarsson)</h2>
          </div>
        </div>
      </div>
    </>
  );
}
