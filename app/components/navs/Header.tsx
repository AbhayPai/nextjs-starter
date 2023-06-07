import Link from 'next/link';
import NavHeader from './NavHeader';

export default function Header(): JSX.Element {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark' aria-label='Third navbar example'>
      <div className='container'>
        <Link href='/' passHref className='navbar-brand'>
          NextJs 13+ Starter
        </Link>
        <NavHeader />
      </div>
    </nav>
  );
}
