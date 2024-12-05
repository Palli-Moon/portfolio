import Hero from '@/components/ui/hero';
// import Bio from '@/components/ui/bio';
// import Skills from '@/components/ui/skills/skills';
import Cards from '@/components/ui/cards';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='md:container md:mx-auto p-8 text-justify'>
        {/* <Bio /> */}
        {/* <Skills /> */}
        <Cards />
      </div>
    </main>
  );
}
