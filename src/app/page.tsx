import Hero from '@/components/ui/hero';
import Bio from '@/components/ui/bio';
import Skills from '@/components/ui/skills/skills';
import Experience from '@/components/ui/cards/experience';
import Education from '@/components/ui/cards/education';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='md:container md:mx-auto p-8 text-justify'>
        <Bio />
        <Skills />
        <Experience />
        <Education />
      </div>
    </main>
  );
}
