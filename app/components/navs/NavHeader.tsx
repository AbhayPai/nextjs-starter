'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function NavHeader(): JSX.Element {
  useEffect(() => {
    import('bootstrap/js/dist/collapse');
    import('bootstrap/js/dist/dropdown');
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
          <li className='nav-item dropdown'>
            <Link href='/#' target='_blank' className='nav-link dropdown-toggle' role='button' data-bs-toggle='dropdown'>
              API
            </Link>
            <ul className='dropdown-menu'>
              <li>
                <Link className='dropdown-item' target='_blank' href='/api/v1/demo/get'>Get</Link>
                <Link className='dropdown-item' target='_blank' href='/api/v1/demo/post'>Post</Link>
                <Link className='dropdown-item' target='_blank' href='/api/v1/demo/put'>Put</Link>
                <Link className='dropdown-item' target='_blank' href='/api/v1/demo/head'>Head</Link>
                <Link className='dropdown-item' target='_blank' href='/api/v1/demo/delete'>Delete</Link>
                <Link className='dropdown-item' target='_blank' href='/api/v1/demo/patch'>Patch</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
