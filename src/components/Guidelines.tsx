import { FileText, Presentation } from 'lucide-react';
import { translations } from '../translations';

interface GuidelinesProps {
  language: 'en' | 'ta';
}

export default function Guidelines({ language }: GuidelinesProps) {
  const t = translations[language];

  return (
    <section id="guidelines" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`${language === 'ta' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} font-bold text-center text-amber-900 mb-16`}>
          {t.guidelines.title}
        </h2>

        <div className="space-y-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-amber-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-red-800 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${language === 'ta' ? 'text-2xl' : 'text-xl'} font-bold text-amber-900`}>
                {t.guidelines.abstract.title}
              </h3>
            </div>
            <ul className="space-y-4">
              {t.guidelines.abstract.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-0.5">
                    {index + 1}
                  </span>
                  <p className={`${language === 'ta' ? 'text-base' : 'text-sm'} text-gray-700 leading-relaxed`}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-800 to-amber-700 rounded-full flex items-center justify-center">
                <Presentation className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${language === 'ta' ? 'text-2xl' : 'text-xl'} font-bold text-red-900`}>
                {t.guidelines.poster.title}
              </h3>
            </div>
            <ul className="space-y-4">
              {t.guidelines.poster.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-800 rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-0.5">
                    {index + 1}
                  </span>
                  <p className={`${language === 'ta' ? 'text-base' : 'text-sm'} text-gray-700 leading-relaxed`}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
