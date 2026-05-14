import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Hero');
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl text-dark-blue font-bold">{t('title')}</h1>
      <p className="text-light-gray">{t('subtitle')}</p>
    </main>
  );
}