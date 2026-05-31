import { MapPin, Phone } from 'lucide-react';
import { useEffect } from 'react';

const phoneNumber = "(438) 998-8869";
const phoneLink = "tel:4389988869";

export default function Zones() {
  useEffect(() => {
    document.title = "Plombier Grand Montréal, Laval, Rive-Sud | Zones Desservies | Plomberie24";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Nous intervenons dans tout le Grand Montréal, Laval, Rive-Sud et Rive-Nord. Trouvez un plombier d'urgence près de chez vous en quelques minutes.");
  }, []);

  return (
    <div className="w-full bg-light">
      <div className="bg-primary text-white py-16 border-b-4 border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-4xl sm:text-5xl mb-4 tracking-tight">Zones desservies</h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light">Plomberie24 intervient dans tout le Grand Montréal, 24 heures sur 24. Où que vous soyez, un technicien est prêt à partir.</p>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Map placeholder */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 mb-12 h-96 flex items-center justify-center bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Montreal,QC&zoom=10&size=1200x400&maptype=roadmap&sensor=false&style=feature:water|element:geometry|color:0xc8d7d4&client=google-maps')] bg-cover bg-center">
            {/* If we don't load a real map API key, we just represent it contextually */}
            <div className="bg-white/90 backdrop-blur p-8 rounded-lg text-center max-w-md shadow-xl border border-slate-200">
               <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
               <h3 className="font-heading font-black text-2xl text-primary mb-2">Service rapide au Grand Montréal</h3>
               <p className="text-slate-600 mb-6">Nos techniciens sont répartis sur la route pour vous atteindre au plus vite, peu importe l'heure ou la météo.</p>
               <a href={phoneLink} className="inline-block bg-accent text-white font-bold py-2 px-6 rounded-sm hover:bg-red-700 transition-colors uppercase tracking-wider text-sm">
                 Appeler le répartiteur
               </a>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Montreal */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <h3 className="font-heading font-black text-2xl text-primary border-b-2 border-slate-100 pb-4 mb-4">Montréal</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li><strong>Ahuntsic-Cartierville</strong></li>
              <li>Anjou</li>
              <li>Côte-des-Neiges–Notre-Dame-de-Grâce</li>
              <li>Lachine</li>
              <li>LaSalle</li>
              <li><strong>Le Plateau-Mont-Royal</strong></li>
              <li>Le Sud-Ouest</li>
              <li>L'Île-Bizard–Sainte-Geneviève</li>
              <li>Mercier–Hochelaga-Maisonneuve</li>
              <li>Montréal-Nord</li>
              <li>Outremont</li>
              <li>Pierrefonds-Roxboro</li>
              <li>Rivière-des-Prairies–Pointe-aux-Trembles</li>
              <li><strong>Rosemont–La Petite-Patrie</strong></li>
              <li>Saint-Laurent</li>
              <li>Saint-Léonard</li>
              <li>Verdun</li>
              <li><strong>Ville-Marie (Centre-Ville)</strong></li>
              <li>Villeray–Saint-Michel–Parc-Extension</li>
            </ul>
          </div>

          {/* Rive-Sud */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <h3 className="font-heading font-black text-2xl text-primary border-b-2 border-slate-100 pb-4 mb-4">Rive-Sud</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li><strong>Longueuil</strong></li>
              <li><strong>Brossard</strong></li>
              <li>Boucherville</li>
              <li>Saint-Hubert</li>
              <li>Saint-Lambert</li>
              <li>Saint-Bruno-de-Montarville</li>
              <li>Chambly</li>
              <li>Sainte-Julie</li>
              <li>Belœil</li>
              <li>Saint-Jean-sur-Richelieu</li>
              <li>La Prairie</li>
              <li>Candiac</li>
              <li>Delson</li>
              <li>Sainte-Catherine</li>
              <li>Varennes</li>
            </ul>
          </div>
          
          {/* Laval */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <h3 className="font-heading font-black text-2xl text-primary border-b-2 border-slate-100 pb-4 mb-4">Laval</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li><strong>Chomedey</strong></li>
              <li>Sainte-Dorothée</li>
              <li>Fabreville</li>
              <li>Sainte-Rose</li>
              <li>Vimont</li>
              <li><strong>Laval-des-Rapides</strong></li>
              <li>Pont-Viau</li>
              <li>Duvernay</li>
              <li>Saint-François</li>
            </ul>
          </div>

          {/* Rive-Nord */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <h3 className="font-heading font-black text-2xl text-primary border-b-2 border-slate-100 pb-4 mb-4">Rive-Nord</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li><strong>Terrebonne</strong></li>
              <li><strong>Repentigny</strong></li>
              <li>Blainville</li>
              <li>Sainte-Thérèse</li>
              <li>Boisbriand</li>
              <li>Saint-Eustache</li>
              <li>Mascouche</li>
              <li>Mirabel</li>
              <li>Rosemère</li>
              <li>L'Assomption</li>
            </ul>
          </div>

        </div>

        {/* Not listed CTA */}
        <div className="mt-12 text-center bg-white rounded-lg p-8 border-l-4 border-accent shadow-sm">
          <h4 className="font-black text-xl text-primary mb-2">Votre ville n'est pas listée ?</h4>
          <p className="text-slate-600 mb-6 font-light">Ne vous inquiétez pas, il est fort probable que nous puissions tout de même nous déplacer chez vous. Contactez-nous pour le confirmer !</p>
          <a href={phoneLink} className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-gray-800 text-white px-6 py-3 rounded-sm font-bold transition-all uppercase tracking-wider text-sm">
            <Phone className="w-5 h-5" />
            Vérifier ma zone — {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
}
