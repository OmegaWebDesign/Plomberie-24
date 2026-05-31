import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Clock } from 'lucide-react';

const phoneNumber = "(438) 998-8869";
const phoneLink = "tel:4389988869";

export default function Contact() {
  useEffect(() => {
    document.title = "Contacter Plomberie24 | Urgence Plombier 24h/7j";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Contactez Plomberie24 pour une urgence ou un devis. Appelez le (438) 998-8869 pour une intervention immédiate dans le Grand Montréal.");
  }, []);

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
    }, 800);
  };

  return (
    <div className="w-full bg-light">
      <div className="bg-primary text-white py-16 border-b-4 border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-4xl sm:text-5xl mb-4 tracking-tight">Contactez-nous</h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light">Une urgence ? Le plus rapide est de nous appeler directement. Pour toute autre demande, utilisez le formulaire.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Direct Contact Info */}
          <div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 mb-8 hover:border-secondary transition-colors">
              <h2 className="font-heading font-black text-2xl text-primary mb-6">Service d'urgence 24h</h2>
              <a href={phoneLink} className="flex items-center justify-center gap-4 bg-accent hover:bg-red-700 text-white px-8 py-5 rounded-sm font-bold text-2xl transition-transform shadow-xl hover:shadow-2xl hover:scale-105 mb-6">
                <Phone className="w-8 h-8 animate-pulse" />
                {phoneNumber}
              </a>
              <p className="text-center text-slate-600 font-light">On répond à toute heure. Estimation verbale gratuite.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="font-black text-xl text-primary mb-6 border-b-2 border-slate-100 pb-4">Informations</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-light p-3 rounded-lg text-secondary border border-slate-100">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="block text-primary uppercase text-xs tracking-wider mb-1">Heures d'ouverture</strong>
                    <span className="text-slate-600 font-light font-medium">24 heures sur 24, 7 jours sur 7</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-light p-3 rounded-lg text-secondary border border-slate-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="block text-primary uppercase text-xs tracking-wider mb-1">Secteurs desservis</strong>
                    <span className="text-slate-600 font-light font-medium">Grand Montréal, Laval, Rive-Nord, Rive-Sud</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-light p-3 rounded-lg text-secondary border border-slate-100">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="block text-primary uppercase text-xs tracking-wider mb-1">Courriel</strong>
                    <span className="text-slate-600 font-light font-medium">info@plomberie24.ca</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg p-8 lg:p-10 shadow-sm border border-slate-200 border-t-4 border-t-primary">
            <h2 className="font-heading font-black text-3xl text-primary mb-2">Demande en ligne</h2>
            <p className="text-slate-500 mb-8 font-light">Remplissez ce formulaire et nous vous contacterons rapidement.</p>
            
            {formState === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-heading font-black text-2xl mb-2">Message envoyé !</h3>
                <p className="font-light">Nous avons bien reçu votre demande. Un membre de notre équipe vous contactera sous peu.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-6 font-bold text-green-700 hover:underline uppercase text-xs tracking-wider"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="font-bold text-xs uppercase tracking-wider text-slate-700">Prénom et nom</label>
                    <input type="text" required className="w-full bg-light border border-slate-200 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-sm px-4 py-3 outline-none transition-colors" placeholder="Jean Tremblay" />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-xs uppercase tracking-wider text-slate-700">Téléphone</label>
                    <input type="tel" required className="w-full bg-light border border-slate-200 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-sm px-4 py-3 outline-none transition-colors" placeholder="(514) 123-4567" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="font-bold text-xs uppercase tracking-wider text-slate-700">Secteur / Ville</label>
                    <input type="text" required className="w-full bg-light border border-slate-200 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-sm px-4 py-3 outline-none transition-colors" placeholder="Brossard" />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-xs uppercase tracking-wider text-slate-700">Type de problème</label>
                    <select className="w-full bg-light border border-slate-200 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-sm px-4 py-3 outline-none transition-colors">
                      <option>Urgence d'eau</option>
                      <option>Débouchage</option>
                      <option>Chauffe-eau</option>
                      <option>Réparation de fuite</option>
                      <option>Autre / Estimation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-xs uppercase tracking-wider text-slate-700">Description du problème</label>
                  <textarea required rows={4} className="w-full bg-light border border-slate-200 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-sm px-4 py-3 outline-none transition-colors resize-none" placeholder="Expliquez brièvement votre situation..."></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full bg-primary hover:bg-gray-800 text-white font-bold py-4 rounded-sm transition-colors disabled:opacity-70 flex justify-center items-center uppercase tracking-wider text-sm"
                >
                  {formState === 'submitting' ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Envoyer la demande"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
