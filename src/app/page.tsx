import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Image src='/palli.jpg' alt='Next.js logo' width={180} height={38} priority />
    </main>
  );
}
