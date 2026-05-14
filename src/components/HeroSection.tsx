import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative h-[80vh] flex items-center bg-[var(--color-dark-blue)] overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20photo%20of%20a%20seaport%20with%20containers%20and%20cranes%2C%20logistics%2C%20dark%20blue%20theme&image_size=landscape_16_9')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-blue)] to-transparent z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
            {t('subtitle')}
          </p>
          <div className="flex gap-4">
            <Link 
              href="/contacts" 
              className="inline-flex items-center gap-2 bg-[var(--color-accent-blue)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-lg"
            >
              {t('cta')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}