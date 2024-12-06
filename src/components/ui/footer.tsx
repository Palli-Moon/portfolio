import { SlSocialGithub, SlSocialFacebook, SlSocialLinkedin } from 'react-icons/sl';

export default function Footer() {
  const size = 24;

  return (
    <footer className='footer bg-neutral-900  items-center p-6 text-primary'>
      <aside className='grid-flow-col items-center justify-self-center md:justify-self-start'>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className='grid-flow-col gap-4 justify-self-center md:place-self-center md:justify-self-end'>
        <a href='https://github.com/Palli-Moon'>
          <SlSocialGithub size={size} />
        </a>
        <a href='https://www.facebook.com/pallimoon/'>
          <SlSocialFacebook size={size} />
        </a>
        <a href='https://www.linkedin.com/in/gunnarpall/'>
          <SlSocialLinkedin size={size} />
        </a>
      </nav>
    </footer>
  );
}
