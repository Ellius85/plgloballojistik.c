import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Calendar, Globe2, Package } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const t = useTranslations('About');

  const stats = [
    {
      id: 'years',
      icon: <Calendar className="w-8 h-8" />,
      value: '15+',
      label: t('years'),
    },
    {
      id: 'geography',
      icon: <Globe2 className="w-8 h-8" />,
      value: '50+',
      label: t('geography'),
    },
    {
      id: 'volume',
      icon: <Package className="w-8 h-8" />,
      value: '10M+',
      label: t('volume'),
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-background-gray)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20corporate%20logistics%20office%2C%20team%20working%2C%20professional%20environment&image_size=landscape_4_3')" }}
            />
            <div className="absolute inset-0 bg-[var(--color-dark-blue)] opacity-20" />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[var(--color-dark-blue)] mb-6">{t('title')}</h2>
            <div className="w-24 h-1 bg-[var(--color-accent-blue)] mb-8 rounded-full" />
            
            <p className="text-[var(--color-light-gray)] text-lg mb-10 leading-relaxed">
              PLGLOBALLOJISTIK has been at the forefront of international logistics, providing innovative and reliable supply chain solutions. Our commitment to excellence and customer satisfaction drives us to deliver beyond expectations.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[var(--color-accent-blue)] mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-[var(--color-dark-blue)] mb-2">{stat.value}</div>
                  <div className="text-sm text-[var(--color-light-gray)] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link 
              href="/about"
              className="inline-block border-2 border-[var(--color-accent-blue)] text-[var(--color-accent-blue)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-accent-blue)] hover:text-white transition-colors"
            >
              {t('readMore')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}