import { useTranslations } from 'next-intl';
import AboutSection from '@/components/AboutSection';
import AdvantagesSection from '@/components/AdvantagesSection';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <main>
      <div className="bg-[var(--color-dark-blue)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('title')}</h1>
          <div className="w-24 h-1 bg-[var(--color-accent-blue)] mx-auto rounded-full" />
        </div>
      </div>
      <AboutSection />
      <AdvantagesSection />
    </main>
  );
}