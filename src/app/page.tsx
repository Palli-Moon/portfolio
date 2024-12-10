import Hero from '@/components/hero';
import Bio from '@/components/bio';
import Skills from '@/components/skills/skills';
import Experience from '@/components/cards/experience';
import Education from '@/components/cards/education';
import Projects from '@/components/projects';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='md:container md:mx-auto p-8 text-justify'>
        <Bio />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
