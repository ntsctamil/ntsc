import { BookOpen, Microscope, Calculator, Sprout, Stethoscope, Cpu, Globe, Library } from 'lucide-react';
import { translations } from '../translations';

interface ConferenceTracksProps {
  language: 'en' | 'ta';
}

const icons = [BookOpen, Microscope, Calculator, Sprout, Stethoscope, Cpu, Globe, Library];

export default function ConferenceTracks({ language }: ConferenceTracksProps) {
  const t = translations[language];

  return (
    <section id="tracks" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`${language === 'ta' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} font-bold text-center text-amber-900 mb-4`}>
          {t.tracks.title}
        </h2>
        <p className={`${language === 'ta' ? 'text-2xl' : 'text-xl'} text-center text-red-800 font-semibold mb-4`}>
          {t.tracks.subtitle}
        </p>
        <p className={`${language === 'ta' ? 'text-lg' : 'text-base'} text-center text-amber-800 font-medium mb-12`}>
          {t.tracks.domains}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.tracks.list.map((track, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-red-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`${language === 'ta' ? 'text-base' : 'text-sm'} font-semibold text-gray-800 leading-snug`}>
                    {track}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
