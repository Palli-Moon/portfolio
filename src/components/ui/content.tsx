export default function Content({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className='pb-8'>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
