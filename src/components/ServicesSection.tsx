import { useTranslations } from 'next-intl';
import { Ship, Plane, Train, Warehouse, FileCheck } from 'lucide-react';

export default function ServicesSection() {
  const t = useTranslations('Services');

  const services = [
    {
      id: 'sea',
      icon: <Ship className="w-10 h-10" />,
      title: t('seaFreight'),
      description: t('seaFreightDesc'),
    },
    {
      id: 'air',
      icon: <Plane className="w-10 h-10" />,
      title: t('airFreight'),
      description: t('airFreightDesc'),
    },
    {
      id: 'rail',
      icon: <Train className="w-10 h-10" />,
      title: t('railFreight'),
      description: t('railFreightDesc'),
    },
    {
      id: 'warehousing',
      icon: <Warehouse className="w-10 h-10" />,
      title: t('warehousing'),
      description: t('warehousingDesc'),
    },
    {
      id: 'customs',
      icon: <FileCheck className="w-10 h-10" />,
      title: t('customs'),
      description: t('customsDesc'),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-dark-blue)] mb-4">{t('title')}</h2>
          <div className="w-24 h-1 bg-[var(--color-accent-blue)] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-[var(--color-background-gray)] p-8 rounded-xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-[var(--color-accent-blue)] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-dark-blue)] mb-4">{service.title}</h3>
              <p className="text-[var(--color-light-gray)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}