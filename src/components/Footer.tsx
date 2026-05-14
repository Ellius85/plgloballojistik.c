import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Ship, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const tNav = useTranslations('Navigation');
  const tFoot = useTranslations('Footer');

  return (
    <footer className="bg-[var(--color-dark-blue)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Ship className="w-8 h-8 text-[var(--color-accent-blue)]" />
              <span className="text-xl font-bold tracking-tight">PLGLOBAL<span className="text-[var(--color-accent-blue)]">LOJISTIK</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {tFoot('description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">{tNav('home')}</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">{tNav('about')}</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">{tNav('services')}</Link></li>
              <li><Link href="/contacts" className="text-gray-400 hover:text-white transition-colors">{tNav('contacts')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[var(--color-accent-blue)] shrink-0" />
                <span>Istanbul, Turkey<br />Business Center, Office 101</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[var(--color-accent-blue)] shrink-0" />
                <span>+90 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[var(--color-accent-blue)] shrink-0" />
                <span>info@plgloballojistik.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for latest updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-[var(--color-accent-blue)]"
              />
              <button className="bg-[var(--color-accent-blue)] px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>{tFoot('rights')}</p>
        </div>
      </div>
    </footer>
  );
}