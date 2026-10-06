import Hero from '@/components/hero';
import Bio from '@/components/bio';
import Skills from '@/components/skills/skills';
import Experience from '@/components/cards/experience';
import Education from '@/components/cards/education';
import Projects from '@/components/projects';

// Content comes from the database; re-render at most once an hour so edits show up without a redeploy.
export const revalidate = 3600;

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
      </div>
    </main>
  );
}
