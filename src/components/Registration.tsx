import { ExternalLink, Users, GraduationCap, Building, Briefcase, FileText, Presentation, Award, Layers } from 'lucide-react';
import { translations } from '../translations';

interface RegistrationProps {
  language: 'en' | 'ta';
}

// Provide a set of icons long enough for all categories. If there are more categories
// than icons, the list will wrap using modulo indexing.
const categoryIcons = [Users, GraduationCap, Building, Briefcase, Award, Layers];

export default function Registration({ language }: RegistrationProps) {
  const t = translations[language];
  const reg: any = t.registration;

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-red-900 to-amber-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`${language === 'ta' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} font-bold text-center mb-4`}>
          {t.registration.title}
        </h2>
        <p className={`${language === 'ta' ? 'text-xl' : 'text-lg'} text-center text-amber-100 mb-12`}>
          {t.registration.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
          {t.registration.categories.map((category, index) => {
            const Icon = categoryIcons[index];
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className={`${language === 'ta' ? 'text-xl' : 'text-lg'} font-bold text-center mb-2`}>
                  {category.type}
                </h3>
                <p className="text-3xl font-bold text-center text-amber-200 mb-2">
                  {category.price}
                </p>
                <p className={`${language === 'ta' ? 'text-sm' : 'text-xs'} text-center text-amber-100`}>
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-12">
          <a
            href="https://forms.gle/your-google-form-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-red-900 px-10 py-4 rounded-full text-xl font-semibold hover:bg-amber-100 transform hover:-translate-y-1 transition-all duration-300 shadow-xl"
          >
            {t.registration.button}
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>

        <p className={`${language === 'ta' ? 'text-base' : 'text-sm'} text-center text-amber-100 mb-12`}>
          {t.registration.note}
        </p>

        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${language === 'ta' ? 'text-2xl' : 'text-xl'} font-bold`}>{reg.targetAudience?.title}</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 mb-2">
              {(reg.targetAudience?.list ?? []).map((item: string, index: number) => (
                <li key={index} className={`${language === 'ta' ? 'text-sm' : 'text-xs'} text-amber-50`}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${language === 'ta' ? 'text-2xl' : 'text-xl'} font-bold`}>
                {t.guidelines.abstract.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {t.guidelines.abstract.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-7 h-7 bg-white/20 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <p className={`${language === 'ta' ? 'text-sm' : 'text-xs'} text-amber-50 leading-relaxed`}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Presentation className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${language === 'ta' ? 'text-2xl' : 'text-xl'} font-bold`}>
                {t.guidelines.poster.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {t.guidelines.poster.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-7 h-7 bg-white/20 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <p className={`${language === 'ta' ? 'text-sm' : 'text-xs'} text-amber-50 leading-relaxed`}>
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
