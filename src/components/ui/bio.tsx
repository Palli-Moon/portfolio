export default function Bio() {
  return (
    <div className='pb-8'>
      <h1>Biography</h1>
      <p className='my-4'>
        <b>Gunnar Páll</b>, also known as <b>Palli Moon</b>, holds a <b>Bachelor of Science</b> degree in Computer Science from <b>Reykjavík University</b>,
        graduating in the spring of 2016. With over nine years of experience in software development, he specializes in <b>C# .NET Framework</b> and{' '}
        <b>JavaScript/TypeScript</b> libraries, including <b>Node.js</b>, <b>ReactJS</b>, and <b>Next.js</b>. A lifelong learner, he continually hones his
        skills and explores new technologies in his free time.
      </p>

      <div tabIndex={0} className='collapse collapse-arrow bg-base-200'>
        <div className='collapse-title text-m font-medium'>Click for more info and interests...</div>
        <div className='collapse-content'>
          <p className='my-4'>
            Outside of software development his interests are primarily music-related. He plays drums in an active band, is also self-taught on many other
            instruments and has a <b>Bachelor of Arts (Honours)</b> degree in Audio Engineering from <b>SAE Institute</b> in London. He also enjoys video games,
            travelling and spending times with friends and family.
          </p>
          <p className='my-4'>
            <b>Palli</b> has a great sense of humour and thrives in team environments. He enjoys socialising with those around him and is dedicated to fostering
            a positive and uplifting atmosphere.
          </p>
        </div>
      </div>
    </div>
  );
}
