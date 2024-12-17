import Bio from '@/components/bio';
import Education from '@/components/cards/education';
import Experience from '@/components/cards/experience';
import Projects from '@/components/projects';
import Skills from '@/components/skills/skills';
import React from 'react';
import { HeroMini } from '@/components/hero';

function page() {
  return (
    <main>
      <div className='md:container md:mx-auto p-8 text-justify'>
        <HeroMini />
        <Bio mini />
        <Skills />
        <Experience />
        <Education />
        <Projects />
      </div>
    </main>
  );
}

export default page;
