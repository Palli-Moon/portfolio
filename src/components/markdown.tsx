import ReactMarkdown from 'react-markdown';

// Renders Markdown content from the database with the site's paragraph spacing.
export default function Markdown({ children }: { children: string }) {
  return <ReactMarkdown components={{ p: ({ children }) => <p className='my-4'>{children}</p> }}>{children}</ReactMarkdown>;
}
