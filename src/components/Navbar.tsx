import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { translations } from '../translations';

interface NavbarProps {
  language: 'en' | 'ta';
  setLanguage: (lang: 'en' | 'ta') => void;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else if (stored === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      // default: respect prefers-color-scheme
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      }
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'dates', label: t.nav.dates },
    { id: 'committee', label: t.nav.committee },
    { id: 'registration', label: t.nav.registration },
    { id: 'venue', label: t.nav.venue },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-b from-amber-50/90 to-white shadow-[0_2px_20px_rgba(251,191,36,0.1)] border-b border-amber-100' 
        : 'bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20 relative">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-br from-amber-800 to-amber-950 bg-clip-text text-transparent
              drop-shadow-[0_1px_1px_rgba(251,191,36,0.2)] hover:drop-shadow-[0_2px_2px_rgba(251,191,36,0.3)]
              transition-all duration-300">NTSC 2K26</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative text-amber-900 text-sm font-medium px-2 py-1
                  hover:text-amber-700 transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-500/0 via-amber-500/70 to-amber-500/0
                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            ))}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
              className="px-4 py-2 bg-gradient-to-br from-amber-700 to-amber-800 text-white rounded-lg
                hover:from-amber-800 hover:to-amber-900 shadow-[0_2px_8px_rgba(146,64,14,0.2)]
                hover:shadow-[0_4px_12px_rgba(146,64,14,0.3)] transform hover:-translate-y-0.5
                transition-all duration-300 text-sm font-medium relative overflow-hidden
                before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r 
                before:from-transparent before:via-white/10 before:to-transparent
                before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700"
            >
              {t.nav.language}
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
              className="px-3 py-1.5 bg-gradient-to-br from-amber-700 to-amber-800 text-white rounded-lg
                hover:from-amber-800 hover:to-amber-900 shadow-[0_2px_6px_rgba(146,64,14,0.2)]
                hover:shadow-[0_3px_8px_rgba(146,64,14,0.3)] transform hover:-translate-y-0.5
                transition-all duration-300 text-sm font-medium"
            >
              {t.nav.language}
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-amber-900 hover:text-amber-700 transition-all duration-300
                transform hover:scale-110 p-1 rounded-full hover:bg-amber-50"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-amber-50/90 to-white border-t border-amber-200
          shadow-[0_4px_12px_rgba(251,191,36,0.1)]">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2.5 text-amber-900 rounded-lg
                  hover:bg-gradient-to-r hover:from-amber-50 hover:to-transparent
                  transition-all duration-300 text-sm font-medium
                  hover:shadow-[0_2px_8px_rgba(251,191,36,0.1)]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
