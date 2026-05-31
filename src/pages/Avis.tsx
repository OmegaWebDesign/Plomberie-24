import { Star, ThumbsUp, ShieldCheck } from 'lucide-react';
import React, { useEffect } from 'react';

const phoneNumber = "(438) 998-8869";
const phoneLink = "tel:4389988869";

export default function Avis() {
  useEffect(() => {
    document.title = "Avis Clients et Témoignages | Plomberie24";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Lisez les avis de nos clients satisfaits. Plomberie24 est évalué 4.8 étoiles sur plus de 120 avis Google pour notre service d'urgence.");
  }, []);

  const reviews = [
    { name: "Céline M.", city: "Boucherville", date: "Il y a 2 semaines", stars: 5, text: "Toilette débordée à 2h du matin. Ils ont répondu tout de suite et étaient chez moi en 45 minutes à Boucherville. Plombier très poli et efficace. Prix très correct pour une urgence de nuit." },
    { name: "Jean-François L.", city: "Laval", date: "Il y a 1 mois", stars: 5, text: "Mon chauffe-eau a lâché un dimanche. J'ai appelé 3 endroits avant eux qui ne répondaient pas. Plomberie24 m'a envoyé quelqu'un et ils ont remplacé la cuve. Très bon service." },
    { name: "Valérie P.", city: "Le Plateau-Mont-Royal", date: "Il y a 2 mois", stars: 5, text: "L'évier de la cuisine était complètement bloqué. Le technicien a passé sa machine spéciale et tout est revenu à la normale." },
    { name: "Michel T.", city: "Terrebonne", date: "Il y a 2 mois", stars: 4, text: "Intervention rapide pour une fuite dans le sous-sol. Le plombier a bien expliqué le problème. Un peu cher, mais c'était un dimanche soir." },
    { name: "Amélie C.", city: "Brossard", date: "Il y a 3 mois", stars: 5, text: "J'ai eu un refoulement de drain principal. C'était un cauchemar. L'équipe de Plomberie24 est arrivée avec leur équipement hydrojet et a tout nettoyé. Merci d'avoir sauvé notre maison !" },
    { name: "Sylvain D.", city: "Longueuil", date: "Il y a 3 mois", stars: 5, text: "J'ai appelé pour un tuyau gelé en plein mois de janvier. Ils sont arrivés avec leur machine thermique et ont dégelé le tout sans rien briser. Des pros." }
  ];

  return (
    <div className="w-full bg-light">
      <div className="bg-primary text-white py-16 border-b-4 border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-4xl sm:text-5xl mb-4 tracking-tight">Avis clients</h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light">La confiance de nos clients est notre plus grande fierté. Découvrez ce qu'ils disent de nos interventions.</p>
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
                   <div className="text-slate-600 font-bold uppercase tracking-wider text-xs">120+ Avis Google vérifiés</div>
                </div>
            </div>
            
            <div className="flex flex-col items-center sm:items-start gap-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                 <ShieldCheck className="w-5 h-5 text-green-500" /> Profil vérifié Google
              </div>
              <button className="bg-secondary hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-sm transition-colors uppercase text-sm tracking-wider">
                Laisser mon avis →
              </button>
            </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
           {reviews.map((review, i) => (
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
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6 tracking-tight">Faites partie de nos clients satisfaits</h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto font-light text-slate-300">Une intervention rapide, courtoise et efficace, peu importe l'urgence de plomberie.</p>
              <a href={phoneLink} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-red-700 text-white px-10 py-5 rounded-sm font-bold text-xl transition-all shadow-2xl">
                Appeler maintenant : {phoneNumber}
              </a>
           </div>
        </div>

      </div>
    </div>
  );
}
