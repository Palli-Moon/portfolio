import Hero from '@/components/ui/hero';
import Bio from '@/components/ui/bio';
import Skills from '@/components/ui/skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='md:container md:mx-auto p-8 text-justify'>
        <Bio />
        <Skills />
      </div>
    </main>
  );
}
