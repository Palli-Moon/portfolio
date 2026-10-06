import { getParagraphs } from '@/lib/content';
import Content from './content';
import Markdown from './markdown';

export default async function Bio() {
  const [main, extended] = await Promise.all([getParagraphs('BIO'), getParagraphs('BIO_MORE')]);

  return (
    <Content title='Biography'>
      <Markdown>{main.join('\n\n')}</Markdown>

      <div tabIndex={0} className='collapse collapse-arrow bg-neutral-900'>
        <div className='collapse-title text-m font-medium'>Click for more info and interests...</div>
        <div className='collapse-content'>
          <Markdown>{extended.join('\n\n')}</Markdown>
        </div>
      </div>
    </Content>
  );
}
