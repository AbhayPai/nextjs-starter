import { Metadata } from 'next';

import { Roboto } from 'next/font/google';

import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Custom imports for css
import './global.css'

// Custom imports for components
import Header from '@/components/navs/Header';
import Copyright from '@/components/text/Copyright';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  creator: 'Abhay Pai',
  publisher: 'Abhay Pai',
  authors: [{ name: 'Abhay Pai', url: 'https://github.com/AbhayPai' }],
  title: {
    template: '%s | NextJs Starter',
    default: 'NextJs Starter',
  },
  description: 'A project starter kit for kicking off next.js application.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://github.com/AbhayPai/nextjs-starter'),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang='en'>
      <link rel='icon' href={`${process.env.assetsBasePath + '/favicon.ico'}`}
        type='image/x-icon' sizes='any' />
      <body className={'bg-light' + roboto.className}>
        <Header />
        <main className='container-fluid'>
          {children}
        </main>
        <footer className='bg-dark'>
          <Copyright />
        </footer>
      </body>
    </html>
  )
}
