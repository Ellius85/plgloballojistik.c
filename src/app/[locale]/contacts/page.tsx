import { useTranslations } from 'next-intl';
import ContactSection from '@/components/ContactSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactsPage() {
  const t = useTranslations('Navigation');

  return (
    <main>
      <div className="bg-[var(--color-dark-blue)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('contacts')}</h1>
          <div className="w-24 h-1 bg-[var(--color-accent-blue)] mx-auto rounded-full" />
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-[var(--color-background-gray)] p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[var(--color-accent-blue)] mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-dark-blue)] mb-2">Office</h3>
              <p className="text-[var(--color-light-gray)]">Istanbul, Turkey<br/>Business Center, Office 101</p>
            </div>
            
            <div className="bg-[var(--color-background-gray)] p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[var(--color-accent-blue)] mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-dark-blue)] mb-2">Phone</h3>
              <p className="text-[var(--color-light-gray)]">+90 (555) 123-4567<br/>+90 (555) 765-4321</p>
            </div>
            
            <div className="bg-[var(--color-background-gray)] p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[var(--color-accent-blue)] mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-dark-blue)] mb-2">Email</h3>
              <p className="text-[var(--color-light-gray)]">info@plgloballojistik.com<br/>support@plgloballojistik.com</p>
            </div>

            <div className="bg-[var(--color-background-gray)] p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[var(--color-accent-blue)] mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-dark-blue)] mb-2">Working Hours</h3>
              <p className="text-[var(--color-light-gray)]">Mon - Fri: 09:00 - 18:00<br/>24/7 Support Available</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}