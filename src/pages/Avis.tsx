import { Star, ThumbsUp, ShieldCheck } from 'lucide-react';
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

const phoneNumber = "(438) 998-8869";
const phoneLink = "tel:4389988869";

export default function Avis() {
  const { lang } = useLanguage();
  const texts = t(lang).avis;

  useEffect(() => {
    document.title = texts.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', texts.metaDesc);
  }, [texts]);

  return (
    <div className="w-full bg-light">
      <div className="bg-primary text-white py-16 border-b-4 border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-4xl sm:text-5xl mb-4 tracking-tight">{texts.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light">{texts.desc}</p>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Header */}
        <div className="bg-white rounded-lg p-8 lg:p-12 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
            <div className="flex items-center gap-6">
                <div className="text-7xl font-black text-primary border-b-4 border-accent leading-[0.8] pb-1">4.8</div>
                <div>
                   <div className="flex text-yellow-500 mb-2">
                       <Star className="w-8 h-8 fill-current" />
                       <Star className="w-8 h-8 fill-current" />
                       <Star className="w-8 h-8 fill-current" />
                       <Star className="w-8 h-8 fill-current" />
                       <Star className="w-8 h-8 fill-current text-yellow-300" />
                   </div>
                   <div className="text-slate-600 font-bold uppercase tracking-wider text-xs">{texts.basedOn}</div>
                </div>
            </div>
            
            <div className="flex flex-col items-center sm:items-start gap-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                 <ShieldCheck className="w-5 h-5 text-green-500" /> {texts.verified}
              </div>
              <button className="bg-secondary hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-sm transition-colors uppercase text-sm tracking-wider">
                {texts.leaveReview}
              </button>
            </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
           {texts.reviews.map((review, i) => (
             <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 flex flex-col h-full hover:border-secondary transition-colors">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className={`w-5 h-5 fill-current ${idx < review.stars ? '' : 'text-slate-200'}`} />
                      ))}
                   </div>
                   <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">{review.date}</span>
                </div>
                <p className="text-slate-700 font-light italic mb-8 flex-grow">"{review.text}"</p>
                <div className="border-t-2 border-slate-100 pt-4 flex gap-4 items-center justify-between">
                   <div>
                     <div className="font-heading font-bold text-primary">{review.name}</div>
                     <div className="text-xs text-slate-500 flex items-center gap-1 font-medium mt-1">
                        <ThumbsUp className="w-3 h-3 text-secondary" /> {review.city}
                     </div>
                   </div>
                   <div className="w-10 h-10 bg-light text-secondary rounded-lg border border-slate-200 flex items-center justify-center font-bold text-sm">
                      {review.name.charAt(0)}
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* CTA */}
        <div className="bg-primary border-t-4 border-accent rounded-lg p-12 text-center text-white shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-[-10%] w-[400px] h-[400px] bg-secondary opacity-20 rounded-full blur-[100px]" />
           <div className="relative z-10">
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6 tracking-tight">{texts.ctaTitle}</h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto font-light text-slate-300">{texts.ctaDesc}</p>
              <a href={phoneLink} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-red-700 text-white px-10 py-5 rounded-sm font-bold text-xl transition-all shadow-2xl">
                {texts.ctaBtn} {phoneNumber}
              </a>
           </div>
        </div>

      </div>
    </div>
  );
}
