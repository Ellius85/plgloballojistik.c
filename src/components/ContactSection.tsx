'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('ContactForm');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/submit-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-[var(--color-dark-blue)] relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="w-full md:w-5/12 bg-gradient-to-br from-[var(--color-accent-blue)] to-blue-700 p-10 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">{t('title')}</h3>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Have a question or need a quote? Fill out the form and our logistics experts will get back to you shortly.
            </p>
          </div>

          <div className="w-full md:w-7/12 p-10">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl">✓</div>
                <h4 className="text-2xl font-bold text-[var(--color-dark-blue)] mb-2">Thank You!</h4>
                <p className="text-[var(--color-light-gray)]">{t('success')}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-[var(--color-accent-blue)] font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-dark-blue)] mb-2">{t('name')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-dark-blue)] mb-2">{t('email')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-dark-blue)] mb-2">{t('phone')}</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-dark-blue)] mb-2">{t('message')}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">{t('error')}</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-[var(--color-accent-blue)] text-white py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-70"
                >
                  {status === 'loading' ? 'Sending...' : t('submit')}
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}