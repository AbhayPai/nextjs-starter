import { Metadata } from 'next';

import { Locale } from '@/app/i18n-config'
import Posts from '@/components/text/dynamic/Posts';
import { getDictionary } from '@/app/getDictionary'

export const metadata: Metadata = {
  title: 'Blogs',
};

export default async function BlogsPage({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<any> {
  const dictionary = await getDictionary(lang)

  return (
    <div className='row'>
      <div className='col-12'>
        <h1>{dictionary.content.blogs.title}</h1>
      </div>
      <div className='row'>
        <Posts />
      </div>
    </div>
  );
}
