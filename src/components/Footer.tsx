import { translations } from '../translations';

interface FooterProps {
  language: 'en' | 'ta';
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="bg-gradient-to-br from-amber-900 to-red-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className={`${language === 'ta' ? 'text-xl' : 'text-lg'} font-semibold mb-4 text-amber-200`}>
            {t.footer.organized}
          </h3>
          <div className="space-y-2">
            <p className={`${language === 'ta' ? 'text-lg' : 'text-base'} font-medium`}>
              {t.footer.organizer1}
            </p>
            <p className={`${language === 'ta' ? 'text-lg' : 'text-base'} font-medium`}>
              {t.footer.organizer2}
            </p>
          </div>
        </div>

        <div className="border-t border-amber-700 pt-8 space-y-2">
          <p className={`${language === 'ta' ? 'text-base' : 'text-sm'} text-center text-amber-100`}>
            {t.footer.copyright}
          </p>
          {t.footer.credit && (
            <p className={`${language === 'ta' ? 'text-sm' : 'text-xs'} text-center text-amber-200`}>
              {t.footer.credit}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
