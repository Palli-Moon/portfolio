'use client';

// Markdown is rendered on the server and passed in as children, keeping react-markdown out of the client bundle.
export default function CardModal({ name, identifier, children }: { name: string; identifier: number; children: React.ReactNode }) {
  const i = `showmore-${identifier}`;

  return (
    <div>
      <button className='btn btn-xs btn-primary' onClick={() => (document.getElementById(i) as HTMLDialogElement).showModal()}>
        Show More
      </button>
      <dialog id={i} className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h2 className='card-title text-primary bg-neutral-900 rounded-xl p-2 justify-center'>{name}</h2>
          {children}
          <div className='modal-action'>
            <form method='dialog'>
              <button className='btn'>Close</button>
            </form>
          </div>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
