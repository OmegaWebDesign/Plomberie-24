import { Phone, ArrowRight, CircleAlert, Droplets, Video, Wrench, Thermometer, Flame } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

const phoneNumber = "(438) 998-8869";
const phoneLink = "tel:4389988869";

export default function Services() {
  const { lang } = useLanguage();
  const texts = t(lang).services;

  useEffect(() => {
    document.title = texts.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', texts.metaDesc);
  }, [texts]);

  const servicesIcons = [
    <CircleAlert className="w-8 h-8" key="0" />,
    <Droplets className="w-8 h-8" key="1" />,
    <Thermometer className="w-8 h-8" key="2" />,
    <Video className="w-8 h-8" key="3" />,
    <Wrench className="w-8 h-8" key="4" />,
    <Flame className="w-8 h-8" key="5" />
  ];

  return (
    <div className="w-full bg-light">
      <div className="bg-primary text-white py-16 border-b-4 border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-4xl sm:text-5xl mb-4 tracking-tight">{texts.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light">{texts.desc}</p>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10">
          {texts.items.map((service, idx) => (
            <div key={service.id} className="bg-white rounded-lg p-8 lg:p-10 border-b-4 border-transparent hover:border-secondary shadow-sm flex flex-col lg:flex-row gap-8 items-start relative overflow-hidden group transition-all">
              <div className="shrink-0 w-20 h-20 bg-light text-secondary rounded-lg flex items-center justify-center border border-slate-100">
                {servicesIcons[idx]}
              </div>
              <div className="flex-grow">
                <h2 className="font-heading font-black text-2xl lg:text-3xl text-primary mb-4">{service.title}</h2>
                <p className="text-slate-600 text-lg mb-6 max-w-3xl leading-relaxed">{service.desc}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.list.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div>
                  <a href={phoneLink} className="inline-flex items-center gap-3 bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-sm font-bold transition-colors uppercase tracking-wider text-sm">
                    {texts.cta} <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Missing something? */}
        <div className="mt-16 bg-primary text-white rounded-lg p-10 text-center border-t-4 border-accent relative overflow-hidden">
          <div className="absolute right-[-10%] top-[-20%] w-[300px] h-[300px] bg-secondary opacity-20 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="font-heading font-black text-3xl mb-4 tracking-tight relative z-10">{texts.otherTitle}</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg font-light relative z-10">{texts.otherDesc}</p>
          <a href={phoneLink} className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-red-700 text-white px-8 py-4 rounded-sm font-bold text-xl transition-all shadow-2xl relative z-10">
            <Phone className="w-6 h-6 animate-pulse" />
            {texts.otherBtn}
          </a>
        </div>
      </div>
    </div>
  );
}
