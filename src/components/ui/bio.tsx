export default function Bio() {
  return (
    <div className='pb-8'>
      <h1 className='text-3xl'>Bio</h1>
      <p className='my-4'>
        Gunnar Páll studied computer science at Reykjavík University and graduated with a Bachelor of Science degree in the spring of 2016. He has more than 9
        years’ experience in software development. Mainly specializing in C# .NET Framework and JavaScript (TypeScript) libraries and frameworks like Node,
        React and Next. but has also worked with SQL, Business Central AL, and a plethora of other languages at his most recent job at Klappir Grænar Lausnir,
        while at RU or on his own. He loves to learn new things and is constantly sharpening his skills in his free time.
      </p>

      <div tabIndex={0} className='collapse bg-base-200'>
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
