import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className='container mx-auto my-10'>
        <div className='flex gap-8 flex-wrap items-center justify-center'>
          <Image src='/palli.jpg' alt='Next.js logo' width={180} height={38} priority />
          <div className='text-center'>
            <h1 className='text-7xl shadow-sm font-bold'>Palli Moon</h1>
            <h1 className='text-1xl text-gray-400'>(Gunnar Páll Gunnarsson)</h1>
          </div>
        </div>
      </header>
    </>
  );
}
