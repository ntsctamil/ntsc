import { Target, Lightbulb, Users } from 'lucide-react';
import { translations } from '../translations';

interface AboutProps {
  language: 'en' | 'ta';
}

export default function About({ language }: AboutProps) {
  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`${language === 'ta' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} font-bold text-center text-amber-900 mb-12`}>
          {t.about.title}
        </h2>

        <div className="space-y-8 mb-16">
          {t.about.content.map((paragraph, index) => (
            <p key={index} className={`${language === 'ta' ? 'text-lg' : 'text-base'} text-gray-700 leading-relaxed text-justify`}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-red-900 to-amber-800 p-8 sm:p-12 rounded-2xl text-white">
            <h3 className={`${language === 'ta' ? 'text-3xl' : 'text-2xl'} font-bold mb-6`}>{t.about.arivial.title}</h3>
            <div className="space-y-6">
              {t.about.arivial.content.map((paragraph, index) => (
                <p key={index} className={`${language === 'ta' ? 'text-base' : 'text-sm'} leading-relaxed opacity-95 text-justify`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900 to-amber-800 p-8 sm:p-12 rounded-2xl text-white">
            <h3 className={`${language === 'ta' ? 'text-3xl' : 'text-2xl'} font-bold mb-6`}>{t.about.csir.title}</h3>
            <div className="space-y-6">
              {t.about.csir.content.map((paragraph, index) => (
                <p key={index} className={`${language === 'ta' ? 'text-base' : 'text-sm'} leading-relaxed opacity-95 text-justify`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16 mt-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border-l-4 border-amber-700">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-amber-700" />
              <h3 className={`${language === 'ta' ? 'text-2xl' : 'text-xl'} font-bold text-amber-900`}>{t.about.goal.title}</h3>
            </div>
            <p className={`${language === 'ta' ? 'text-base' : 'text-sm'} text-gray-700 leading-relaxed`}>
              {t.about.goal.content}
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border-l-4 border-red-800">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-8 h-8 text-red-800" />
              <h3 className={`${language === 'ta' ? 'text-2xl' : 'text-xl'} font-bold text-red-900`}>{t.about.objectives.title}</h3>
            </div>
            <ul className="space-y-3">
              {t.about.objectives.list.map((objective, index) => (
                <li key={index} className={`${language === 'ta' ? 'text-base' : 'text-sm'} text-gray-700 flex items-start`}>
                  <span className="text-red-800 mr-2 mt-1">•</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-xl border-2 border-amber-300 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-amber-900" />
            <h3 className={`${language === 'ta' ? 'text-2xl' : 'text-xl'} font-bold text-amber-900`}>{t.about.activities.title}</h3>
          </div>
          <ul className="space-y-3">
            {t.about.activities.list.map((activity, index) => (
              <li key={index} className={`${language === 'ta' ? 'text-base' : 'text-sm'} text-gray-800 flex items-start`}>
                <span className="text-amber-900 mr-2 mt-1">•</span>
                <span className="font-medium">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}
