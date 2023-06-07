import { Metadata } from 'next';
import Posts from '@/components/text/dynamic/Posts';

export const metadata: Metadata = {
  title: 'Blogs',
};

export default function BlogsPage(): JSX.Element {
  return (
    <div className='row'>
      <div className='col-12'>
        <h1>Blogs</h1>
      </div>
      <div className='row'>
        <Posts />
      </div>
    </div>
  );
}
