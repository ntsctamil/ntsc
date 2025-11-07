import { Calendar, BookOpen } from 'lucide-react';
import { translations } from '../translations';

interface ImportantDatesProps {
  language: 'en' | 'ta';
}

export default function ImportantDates({ language }: ImportantDatesProps) {
  const t = translations[language];

  return (
    <section id="dates" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`${language === 'ta' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} font-bold text-center text-amber-900 mb-16`}>
          {t.dates.title}
        </h2>

        <div className="mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-amber-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {t.dates.timeline.map((item, index) => (
                <div key={index} className="p-4">
                  <div className={`p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 border-2 ${item.highlight ? 'bg-gradient-to-r from-red-800 to-amber-700 text-white border-red-900' : 'bg-white border-amber-200'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className={`w-5 h-5 ${item.highlight ? 'text-white' : 'text-amber-700'}`} />
                      <p className={`${language === 'ta' ? 'text-base' : 'text-sm'} font-bold ${item.highlight ? 'text-white' : 'text-amber-900'}`}>
                        {item.date}
                      </p>
                    </div>
                    <p className={`${language === 'ta' ? 'text-lg' : 'text-base'} font-semibold ${item.highlight ? 'text-white' : 'text-gray-800'}`}>
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-amber-300">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-amber-700" />
            <h3 className={`${language === 'ta' ? 'text-3xl' : 'text-2xl'} font-bold text-amber-900`}>
              {t.tracks.title}
            </h3>
          </div>
          <p className={`${language === 'ta' ? 'text-xl' : 'text-lg'} text-center text-red-800 font-semibold mb-2`}>
            {t.tracks.subtitle}
          </p>
          <p className={`${language === 'ta' ? 'text-base' : 'text-sm'} text-center text-amber-700 font-medium mb-6`}>
            {t.tracks.domains}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.tracks.list.map((track, index) => (
              <div key={index} className="flex items-start">
                <span className="text-amber-700 mr-3 mt-1 text-xl">•</span>
                <p className={`${language === 'ta' ? 'text-base' : 'text-sm'} text-gray-800`}>
                  {track}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
