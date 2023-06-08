import { Locale } from '@/app/i18n-config'
import { getDictionary } from '@/app/getDictionary'

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<any> {
  const dictionary = await getDictionary(lang)

  return (
    <div className='row'>
      <div className='col-12 text-center'>
        <h1>{dictionary.content.home.title}</h1>
        <p>This is an nextjs starter pack for any project.</p>
      </div>
    </div>
  );
}