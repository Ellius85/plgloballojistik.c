import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { Ship } from 'lucide-react';

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className="bg-[var(--color-dark-blue)] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Ship className="w-8 h-8 text-[var(--color-accent-blue)]" />
          <span className="text-xl font-bold tracking-tight">PLGLOBAL<span className="text-[var(--color-accent-blue)]">LOJISTIK</span></span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-[var(--color-accent-blue)] transition-colors">{t('home')}</Link>
          <Link href="/about" className="hover:text-[var(--color-accent-blue)] transition-colors">{t('about')}</Link>
          <Link href="/services" className="hover:text-[var(--color-accent-blue)] transition-colors">{t('services')}</Link>
          <Link href="/contacts" className="hover:text-[var(--color-accent-blue)] transition-colors">{t('contacts')}</Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link 
            href="/contacts" 
            className="hidden md:block bg-gradient-to-r from-[var(--color-accent-blue)] to-blue-500 px-5 py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
          >
            {t('getConsultation')}
          </Link>
        </div>
      </div>
    </header>
  );
}