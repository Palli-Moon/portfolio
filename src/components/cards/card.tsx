export default function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className='card card-compact bg-base-300 w-fill shadow-xl '>
      <div className='card-body'>
        <h2 className='card-title text-primary bg-neutral-900 rounded-xl p-2 justify-center'>{title}</h2>
        {children}
      </div>
    </div>
  );
}
