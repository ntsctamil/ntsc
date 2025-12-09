import { translations } from '../translations';
import { useState } from 'react';

interface FooterProps {
  language: 'en' | 'ta';
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];
  const [showLogo, setShowLogo] = useState(true);

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

          {/* Attempt to load Rotaract logo from site root: /rotaract-logo.png
              Place the provided image at the project `public/rotaract-logo.png` or server root.
              If the image fails to load, we fall back to the textual credit. */}
          {t.footer.credit && showLogo ? (
            <div className="flex items-center justify-center mt-2">
              <img
                src="https://i.ibb.co/GrtKMZ3/b7604212-8fb5-4e76-aa77-7bf021624dff.jpg"
                alt={t.footer.credit}
                className="w-12 h-auto mr-3 object-contain"
                onError={() => setShowLogo(false)}
              />
              <span className={`${language === 'ta' ? 'text-sm' : 'text-xs'} text-amber-200`}>
                {t.footer.credit}
              </span>
            </div>
          ) : (
            t.footer.credit && (
              <p className={`${language === 'ta' ? 'text-sm' : 'text-xs'} text-center text-amber-200`}>
                {t.footer.credit}
              </p>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
