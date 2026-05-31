import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Phone, Menu, X, CheckCircle, Clock, MapPin, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

const phoneNumber = "(438) 998-8869";
const phoneLink = "tel:4389988869";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const { lang, setLang } = useLanguage();
  const texts = t(lang).layout;

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: texts.navHome, path: '/' },
    { name: texts.navServices, path: '/services' },
    { name: texts.navZones, path: '/zones' },
    { name: texts.navAvis, path: '/avis' },
    { name: texts.navContact, path: '/contact' },
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans text-gray-900 bg-white">
      {/* Top Bar for Trust Signals */}
      <div className="bg-accent text-white py-1 px-4 text-center text-xs font-bold tracking-widest uppercase">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-4">
          <span>{texts.topBar}</span>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-primary text-white px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4">
              <div className="text-2xl font-bold tracking-tighter">
                PLOMBERIE<span className="text-accent">24</span>
              </div>
              <div className="h-8 w-[1px] bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider opacity-60">{texts.accredited}</span>
                <span className="text-xs font-bold">{texts.member}</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
              {navLinks.map(link => (
                <Link key={link.name} to={link.path} className={`hover:text-accent transition-colors ${location.pathname === link.path ? 'text-accent' : ''}`}>
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button & Language Toggle */}
            <div className="flex items-center gap-4">
              <a href={phoneLink} className="hidden sm:flex bg-accent hover:bg-red-700 text-white px-6 py-3 rounded-md font-black text-lg items-center transition-colors">
                <span className="mr-2">📞</span> {phoneNumber}
              </a>
              
              <div className="hidden sm:flex items-center bg-white/10 rounded-md p-1">
                <button 
                  onClick={() => setLang('fr')} 
                  className={`px-3 py-1.5 text-xs font-bold rounded ${lang === 'fr' ? 'bg-white text-primary' : 'text-white hover:bg-white/20'} transition-colors`}
                >
                  FR
                </button>
                <button 
                  onClick={() => setLang('en')} 
                  className={`px-3 py-1.5 text-xs font-bold rounded ${lang === 'en' ? 'bg-white text-primary' : 'text-white hover:bg-white/20'} transition-colors`}
                >
                  EN
                </button>
              </div>
              
              <button 
                className="md:hidden p-2 text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden text-primary">
            <div className="flex flex-col p-4 space-y-4">
              <div className="flex bg-gray-100 rounded-md p-1 mb-2 self-start">
                <button 
                  onClick={() => setLang('fr')} 
                  className={`px-4 py-2 text-sm font-bold rounded ${lang === 'fr' ? 'bg-white text-primary shadow' : 'text-gray-500 hover:text-primary'} transition-colors`}
                >
                  FR
                </button>
                <button 
                  onClick={() => setLang('en')} 
                  className={`px-4 py-2 text-sm font-bold rounded ${lang === 'en' ? 'bg-white text-primary shadow' : 'text-gray-500 hover:text-primary'} transition-colors`}
                >
                  EN
                </button>
              </div>
              {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-lg font-medium p-2 rounded-lg ${location.pathname === link.path ? 'bg-light text-accent' : 'text-primary'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a href={phoneLink} className="flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-xl font-bold mt-2 text-lg">
                <Phone className="w-5 h-5" />
                {texts.callUs} {phoneNumber}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-accent text-white p-2 text-xl font-heading font-bold rounded">P24</div>
              <span className="font-heading font-bold text-2xl text-white">Plomberie24</span>
            </Link>
            <p className="text-sm mb-6">{texts.footerDesc}</p>
            <div className="flex items-center gap-2 text-white">
              <Award className="w-6 h-6 text-accent" />
              <div className="flex flex-col">
                <span className="font-bold text-sm">{texts.accredited}</span>
                <span className="text-xs text-gray-400">{texts.footerLicense}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-4">{texts.footerServices}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">{t(lang).services.items[0].title}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t(lang).services.items[1].title}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t(lang).services.items[2].title}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t(lang).services.items[3].title}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t(lang).services.items[4].title}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-4">{texts.footerZones}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/zones" className="hover:text-white transition-colors">{t(lang).home.zone1}</Link></li>
              <li><Link to="/zones" className="hover:text-white transition-colors">{t(lang).home.zone2}</Link></li>
              <li><Link to="/zones" className="hover:text-white transition-colors">{t(lang).home.zone3}</Link></li>
              <li><Link to="/zones" className="hover:text-white transition-colors">{t(lang).home.zone4}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-4">{texts.footerContact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <a href={phoneLink} className="text-white font-bold text-lg hover:text-accent transition-colors">{phoneNumber}</a>
                  <span className="block text-xs text-gray-400">{texts.footerAvailable}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{texts.footerMobile}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} {texts.footerRights}</p>
        </div>
      </footer>

      {/* Mobile Floating Action Button (FAB) */}
      <a 
        href={phoneLink} 
        className="md:hidden fixed bottom-8 right-8 bg-accent text-white p-4 rounded-full shadow-2xl flex items-center border-4 border-white animate-pulse z-50"
      >
        <span className="text-2xl mr-2">📞</span>
        <div className="flex flex-col pr-2 text-left">
          <span className="text-[10px] font-black uppercase opacity-90 leading-tight block">{texts.fabEmergency}</span>
          <span className="text-[10px] font-black uppercase opacity-90 leading-tight block mb-0.5">{texts.fabClick}</span>
          <span className="text-sm font-black whitespace-nowrap leading-tight">{phoneNumber}</span>
        </div>
      </a>
      
      {/* CSS for custom animation */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </div>
  );
}
