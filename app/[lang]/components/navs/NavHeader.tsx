'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function NavHeader(): JSX.Element {
  useEffect(() => {
    import('bootstrap/js/dist/collapse');
  }, []);

  const pathname: string = usePathname();

  return (
    <>
      <button className='navbar-toggler collapsed' type='button' data-bs-toggle='collapse'
        data-bs-target='#navHeader' aria-controls='navHeader' aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='navbar-collapse collapse' id='navHeader'>
        <ul className='navbar-nav me-auto mb-2 mb-sm-0'>
          <li className='nav-item'>
            <Link href='/' passHref className={pathname === '/' ? 'nav-link active' : 'nav-link'} aria-current='page'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/blog' passHref className={pathname === '/blog' ? 'nav-link active' : 'nav-link'} aria-current='page'>
              Blog
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/sitemap.xml' target='_blank' passHref className='nav-link' aria-current='page'>
              Sitemap
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
