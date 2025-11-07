import { Calendar, MapPin } from 'lucide-react';
import { translations } from '../translations';

interface HeroProps {
  language: 'en' | 'ta';
}

const thirukkuralList = [
  {
    number: '391',
    ta: {
      kural: 'கற்க கசடறக் கற்பவை கற்றபின்\nநிற்க அதற்குத் தக',
      meaning: 'கற்க வேண்டிய நூல்களைப் பிழையறக் கற்று, கற்றபடி நடக்க வேண்டும்'
    },
    en: {
      kural: 'Learn flawlessly whatever you learn;\nAnd let your conduct be worthy of that learning',
      meaning: 'Let a man learn thoroughly whatever he may learn, and let his conduct be worthy of his learning.'
    }
  },
  {
    number: '397',
    ta: {
      kural: 'யாதானும் நாடாமால் ஊராமால் என்னொருவன்\nசாந்துணையும் கல்லாத வாறு',
      meaning: 'எந்த நாட்டிலிருந்தாலும், எந்த ஊரில் இருந்தாலும் ஒருவன் இறக்கும் வரை கல்லாமல் இருப்பது ஏன்?'
    },
    en: {
      kural: 'Why should one stop learning until death,\nWhichever country or town one lives in?',
      meaning: 'In whatever land one may reside, why should one not keep learning until death?'
    }
  },
  {
    number: '400',
    ta: {
      kural: 'கேடில் விழுச்செல்வம் கல்வி யொருவற்கு\nமாடல்ல மற்றை யவை',
      meaning: 'ஒருவனுக்கு அழிவில்லாத சிறந்த செல்வம் கல்வி; மற்றவை செல்வங்கள் அல்ல'
    },
    en: {
      kural: 'Learning is the imperishable wealth supreme;\nAll else follows transient scheme',
      meaning: 'Education is the true imperishable riches; all other things are not riches.'
    }
  },
  {
    number: '399',
    ta: {
      kural: 'தாமின் புறுவ துலகின் புறக்கண்டு\nகாமுறுவர் கற்றறிந் தார்',
      meaning: 'கற்றுத் தெளிந்தவர்கள், தாம் இன்புறும் கல்வி உலகமும் இன்புறுவதைக் கண்டு மேலும் கல்வியை விரும்புவர்'
    },
    en: {
      kural: 'The learned take delight in learning more;\nSeeing the world too thirsts for lore',
      meaning: 'The learned will long for more learning, when they see that while they rejoice in their learning, the world also rejoices.'
    }
  }
];

export default function Hero({ language }: HeroProps) {
  const t = translations[language];
  // Get a random Thirukkural
  const randomThirukkural = thirukkuralList[Math.floor(Math.random() * thirukkuralList.length)];

  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23800000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h1 className={`${language === 'ta' ? 'text-5xl sm:text-7xl' : 'text-4xl sm:text-6xl'} font-bold text-amber-900 mb-4 leading-tight`}>
              {t.hero.title}
            </h1>
            {t.hero.subtitle && (
              <p className="text-2xl sm:text-3xl text-amber-800 mb-2">{t.hero.subtitle}</p>
            )}
            <h2 className={`${language === 'ta' ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-4xl'} font-semibold text-red-900 mb-8`}>
              {t.hero.theme}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-lg">
            <div className="flex items-center gap-2 text-amber-800">
              <Calendar className="w-6 h-6" />
              <span className="font-medium">{t.hero.dates}</span>
            </div>
            <div className="hidden sm:block w-1 h-6 bg-amber-400" />
            <div className="flex items-center gap-2 text-amber-800">
              <MapPin className="w-6 h-6" />
              <span className="font-medium">{t.hero.location}</span>
            </div>
          </div>

          {/* Thirukkural Section */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="p-6 bg-gradient-to-r from-amber-50/90 to-orange-50/90 rounded-xl border-2 border-amber-200 shadow-lg">
              <p className="text-amber-900 font-semibold mb-2">{`திருக்குறள் ${randomThirukkural.number}`}</p>
              <p className="text-xl font-bold text-red-800 mb-3 whitespace-pre-line">
                {randomThirukkural.ta.kural}
              </p>
              <p className="text-amber-800 italic text-lg">
                {randomThirukkural.ta.meaning}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-sm text-amber-700 mb-2">{t.hero.organized}</p>
            <p className="text-lg font-semibold text-red-800">{t.hero.organizers}</p>
          </div>

          <button
            onClick={scrollToRegistration}
            className="bg-gradient-to-r from-red-800 to-amber-700 text-white px-10 py-4 rounded-full text-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {t.hero.register}
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
