'use client';

import { ExpCardData } from '@/types';

export default function CardModal({ cardData, identifier }: { cardData: ExpCardData; identifier: number }) {
  const { name, descriptionLong } = cardData;
  const i = `showmore-${identifier}`;

  return (
    <div>
      <button className='btn btn-sm btn-ghost' onClick={() => (document.getElementById(i) as HTMLDialogElement).showModal()}>
        Show More
      </button>
      <dialog id={i} className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h2 className='card-title text-primary bg-neutral-900 rounded-xl p-2 justify-center'>{name}</h2>
          {descriptionLong}
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
