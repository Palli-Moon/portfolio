export default function Bio() {
  return (
    <div className='pb-8'>
      <h1 className='text-3xl'>Bio</h1>
      <p className='my-4'>
        <b>Gunnar Páll</b>, also known as &quot;<b>Palli Moon</b>&quot;, holds a Bachelor of Science degree in Computer Science from Reykjavík University,
        graduating in the spring of 2016. With over nine years of experience in software development, he specializes in C# .NET Framework and
        JavaScript/TypeScript technologies, including Node.js, ReactJS, and Next.js. A lifelong learner, he continually hones his skills and explores new
        technologies in his free time.
      </p>

      <div tabIndex={0} className='collapse collapse-arrow bg-base-200'>
        <div className='collapse-title text-m font-medium'>Click for more info and interests...</div>
        <div className='collapse-content'>
          <p className='my-4'>
            Outside of software development his interests are mostly music related. He plays drums in an active band. He is also self-taught on many other
            instruments and has a Bachelor of Arts (Honours) degree in audio engineering from SAE Institute in London. He also enjoys video games, traveling and
            spending times with friends and family.
          </p>
        </div>
      </div>
    </div>
  );
}
