import { Users } from 'lucide-react';
import { translations } from '../translations';

interface CommitteeProps {
  language: 'en' | 'ta';
}

export default function Committee({ language }: CommitteeProps) {
  const t = translations[language];
  const details = (t.committee as any).details ?? (translations as any).ta.committee.details;
  const subtitle = (t.committee as any).subtitle ?? '';
  return (
    <section id="committee" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`${language === 'ta' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} font-bold text-center text-amber-900 mb-8`}>
          {t.committee.title}
        </h2>

        <div className="max-w-6xl mx-auto px-2">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-amber-700 rounded-full flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>

          {subtitle && (
            <p className={`${language === 'ta' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} text-gray-700 leading-relaxed text-center font-semibold mb-4`}>
              {subtitle}
            </p>
          )}

          {details && (
            <div className="mt-8 text-center space-y-8">
              {details.map((section: any, sIdx: number) => {
                const titleLower = (section.title || '').toLowerCase();
                const itemCount = (section.items || []).length;
                // default grid and card classes
                let gridClass = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center';
                let cardClass = 'p-5 bg-gradient-to-b from-white to-amber-50 rounded-xl shadow-lg border-2 border-amber-100 w-80 relative overflow-hidden hover:border-amber-300 transition-all duration-300';
                let nameClass = 'leading-relaxed text-amber-900 text-center text-base md:text-lg font-bold';
                let decorClass = 'absolute inset-0 border-[3px] border-amber-100/30 rounded-lg m-2 pointer-events-none';

                // Chief patron -> single wide centered card (always center)
                if (titleLower.includes('chief')) {
                  gridClass = 'flex justify-center';
                  cardClass = 'p-8 bg-gradient-to-br from-amber-50 to-red-50 rounded-xl shadow-xl border-2 border-amber-200 w-full max-w-3xl relative overflow-hidden hover:border-amber-400 transition-all duration-300';
                  nameClass = 'leading-relaxed text-amber-900 text-center text-base md:text-lg font-bold';
                  decorClass = 'absolute inset-0 border-4 border-amber-200/40 rounded-lg m-3 pointer-events-none';
                } else if (titleLower.includes('patron') && !titleLower.includes('co')) {
                  // Patrons (not co-patrons)
                  if (itemCount === 1) {
                    gridClass = 'flex justify-center';
                    cardClass = 'p-7 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg border-2 border-amber-200 w-full max-w-2xl relative overflow-hidden hover:border-amber-400 transition-all duration-300';
                    nameClass = 'leading-relaxed text-amber-900 text-center text-base md:text-lg font-bold';
                  } else if (itemCount === 2) {
                    gridClass = 'flex justify-center gap-6';
                    cardClass = 'p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg border-2 border-amber-200 w-96 relative overflow-hidden hover:border-amber-300 transition-all duration-300';
                    nameClass = 'leading-relaxed text-amber-900 text-center text-base md:text-lg font-bold';
                  } else {
                    // 3 or more
                    gridClass = 'grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center';
                    cardClass = 'p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-md border-2 border-amber-100 w-72 relative overflow-hidden hover:border-amber-300 transition-all duration-300';
                  }
                } else if (titleLower.includes('co') && titleLower.includes('patron')) {
                  // Co-Patrons -> two wider cards or centered single
                  if (itemCount === 1) {
                    gridClass = 'flex justify-center';
                    cardClass = 'p-7 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg border-2 border-amber-200 w-full max-w-2xl relative overflow-hidden hover:border-amber-300 transition-all duration-300';
                    nameClass = 'leading-relaxed text-amber-900 text-center text-base md:text-lg font-bold';
                  } else {
                    gridClass = 'grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center';
                    cardClass = 'p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg border-2 border-amber-200 w-96 relative overflow-hidden hover:border-amber-300 transition-all duration-300';
                    nameClass = 'leading-relaxed text-amber-900 text-center text-base md:text-lg font-bold';
                  }
                } else if (itemCount === 1) {
                  // Any other single-name section -> center the single card
                  gridClass = 'flex justify-center';
                  cardClass = 'p-6 bg-gradient-to-b from-white to-amber-50 rounded-xl shadow-md border-2 border-amber-100 w-full max-w-2xl relative overflow-hidden hover:border-amber-300 transition-all duration-300';
                } else if (itemCount === 2) {
                  // small groups -> two centered columns
                  gridClass = 'flex justify-center gap-6';
                  cardClass = 'p-5 bg-gradient-to-b from-white to-amber-50 rounded-xl shadow-md border-2 border-amber-100 w-96 relative overflow-hidden hover:border-amber-300 transition-all duration-300';
                }

                return (
                  <div key={sIdx} className="mb-6 text-center">
                    <h4 className="text-amber-900 font-semibold mb-4 text-lg md:text-xl">{section.title}</h4>
                    <div className={gridClass}>
                      {section.items.map((it: string, idx: number) => (
                        <div key={idx} className={cardClass}>
                          <div className={decorClass}></div>
                          <p className={`${language === 'ta' ? 'leading-tight' : 'leading-relaxed'} ${nameClass}`}>
                            {it}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
