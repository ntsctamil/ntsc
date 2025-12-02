import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ImportantDates from './components/ImportantDates';
import Committee from './components/Committee';
import Registration from './components/Registration';
import Venue from './components/Venue';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'en' | 'ta'>('ta');

  return (
    <div className={`min-h-screen ${language === 'ta' ? 'ta-smaller' : ''}`}>
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <ImportantDates language={language} />
      <Committee language={language} />
      <Registration language={language} />
      <Venue language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
