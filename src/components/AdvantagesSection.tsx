import { useTranslations } from 'next-intl';
import { Award, Users, ShieldCheck, Clock } from 'lucide-react';

export default function AdvantagesSection() {
  const t = useTranslations('Advantages');

  const advantages = [
    {
      id: 'experience',
      icon: <Award className="w-12 h-12" />,
      title: t('experience'),
      description: t('experienceDesc'),
    },
    {
      id: 'approach',
      icon: <Users className="w-12 h-12" />,
      title: t('approach'),
      description: t('approachDesc'),
    },
    {
      id: 'reliability',
      icon: <ShieldCheck className="w-12 h-12" />,
      title: t('reliability'),
      description: t('reliabilityDesc'),
    },
    {
      id: 'support',
      icon: <Clock className="w-12 h-12" />,
      title: t('support'),
      description: t('supportDesc'),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-dark-blue)] mb-4">{t('title')}</h2>
          <div className="w-24 h-1 bg-[var(--color-accent-blue)] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage) => (
            <div 
              key={advantage.id}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-[var(--color-accent-blue)] mb-6 shadow-sm">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-dark-blue)] mb-4">{advantage.title}</h3>
              <p className="text-[var(--color-light-gray)] leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}