import { MapPin, Mail, Phone } from 'lucide-react';
import { translations } from '../translations';

interface VenueProps {
  language: 'en' | 'ta';
}

export default function Venue({ language }: VenueProps) {
  const t = translations[language];

  return (
    <section id="venue" className="py-20 bg-white relative overflow-hidden">
      {/* Tamil kolam-inspired decorative pattern */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-5 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox=%220 0 80 80%22%3E%3Cpath d=%22M40 0c-5 0-10 5-10 10s5 10 10 10 10-5 10-10S45 0 40 0zm0 60c-5 0-10 5-10 10s5 10 10 10 10-5 10-10-5-10-10-10zM10 20C5 20 0 25 0 30s5 10 10 10 10-5 10-10-5-10-10-10zm60 0c-5 0-10 5-10 10s5 10 10 10 10-5 10-10-5-10-10-10z%22 fill=%22%23B45309%22%2F%3E%3C%2Fsvg%3E')] bg-repeat-x"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className={`${language === 'ta' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} 
          font-bold text-center mb-16 relative`}>
          <span className="relative inline-block bg-gradient-to-br from-amber-800 to-amber-950 
            bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300
            after:content-[''] after:absolute after:inset-0 after:bg-amber-900/10 
            after:blur-lg after:translate-y-2 after:-z-10">
            {t.venue.title}
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl
            shadow-[0_10px_20px_rgba(251,191,36,0.1)] hover:shadow-[0_15px_30px_rgba(251,191,36,0.2)]
            transform hover:-translate-y-1 transition-all duration-300
            border-2 border-amber-200 relative overflow-hidden
            before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r 
            before:from-transparent before:via-white/30 before:to-transparent
            before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-1000">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-red-800 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${language === 'ta' ? 'text-2xl' : 'text-xl'} font-bold text-amber-900`}>
                {t.venue.address.title}
              </h3>
            </div>
            <div className="space-y-2">
              {t.venue.address.lines.map((line, index) => (
                <p key={index} className={`${language === 'ta' ? 'text-lg' : 'text-base'} text-gray-700`}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl
            shadow-[0_10px_20px_rgba(251,191,36,0.1)] hover:shadow-[0_15px_30px_rgba(251,191,36,0.2)]
            transform hover:-translate-y-1 transition-all duration-300
            border-2 border-amber-200 relative overflow-hidden
            before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r 
            before:from-transparent before:via-white/30 before:to-transparent
            before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-1000">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full 
                flex items-center justify-center shadow-[0_4px_12px_rgba(180,83,9,0.3)]
                transform hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${language === 'ta' ? 'text-2xl' : 'text-xl'} font-bold 
                bg-gradient-to-br from-amber-800 to-amber-950 bg-clip-text text-transparent`}>
                {t.venue.contact.title}
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-amber-100/50 group-hover:bg-amber-100 
                  transform group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-amber-800" />
                </div>
                <a
                  href={`mailto:${t.venue.contact.email}`}
                  className={`${language === 'ta' ? 'text-lg' : 'text-base'} text-gray-700 
                    hover:text-amber-800 transition-colors relative
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                    after:bg-amber-800/30 after:scale-x-0 hover:after:scale-x-100 
                    after:transition-transform after:duration-300`}
                >
                  {t.venue.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-amber-100/50 group-hover:bg-amber-100 
                  transform group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5 text-amber-800" />
                </div>
                <a
                  href={`tel:${t.venue.contact.phone}`}
                  className={`${language === 'ta' ? 'text-lg' : 'text-base'} text-gray-700 
                    hover:text-amber-800 transition-colors relative
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                    after:bg-amber-800/30 after:scale-x-0 hover:after:scale-x-100 
                    after:transition-transform after:duration-300`}
                >
                  {t.venue.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(251,191,36,0.15)] 
          border-4 border-amber-200 transform hover:scale-[1.02] transition-transform duration-500
          relative after:content-[''] after:absolute after:inset-0 
          after:bg-gradient-to-t after:from-amber-900/10 after:to-transparent after:opacity-0 
          hover:after:opacity-100 after:transition-opacity after:duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8858458906834!2d80.23845931482158!3d12.992858990858313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526788f70e2d45%3A0x17c3d2d5c7b6e3f7!2sCSIR-Structural%20Engineering%20Research%20Centre!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CSIR-SERC Location"
          />
        </div>
        {/* Tamil temple-inspired decorative pattern */}
        <div className="absolute bottom-0 left-0 w-full h-24 opacity-5 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox=%220 0 100 40%22%3E%3Cpath d=%22M0 40h10L5 20 0 40zm20 0h10l-5-20-5 20zm20 0h10l-5-20-5 20zm20 0h10l-5-20-5 20zm20 0h10l-5-20-5 20z%22 fill=%22%23B45309%22%2F%3E%3C%2Fsvg%3E')] bg-repeat-x"></div>
      </div>
    </section>
  );
}
