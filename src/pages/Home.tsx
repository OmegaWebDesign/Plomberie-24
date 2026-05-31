import { Phone, CheckCircle, Shield, Droplets, PenTool as Tool, Video, Search, ArrowRight, Star, Clock, CircleAlert, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const phoneNumber = "(438) 998-8869";
const phoneLink = "tel:4389988869";

export default function Home() {
  useEffect(() => {
    document.title = "Plombier Urgence Montréal 24h/7 | Plomberie24";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Besoin d'un plombier d'urgence à Montréal? Appelez Plomberie24. Service 24h/7j, intervention rapide pour débouchage et dégâts d'eau.");
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white border-b-4 border-accent relative overflow-hidden">
        {/* Abstract background pattern for texture without heavy images */}
        <div className="absolute inset-0">
          <div className="absolute right-[-10%] top-[20%] w-[500px] h-[500px] bg-secondary opacity-20 rounded-full blur-[120px] pointer-events-none" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10 flex flex-col items-start text-left">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
            Vrais plombiers. Vraie urgence.
          </span>
          <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl mb-6 leading-none max-w-4xl tracking-tight">
            Plombier urgence Montréal<br />
            <span className="text-accent">Disponible 24h/7j</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-10 max-w-2xl font-light">
            On décroche à toute heure. Intervention rapide, bon prix. Ne laissez pas un dégât d'eau ruiner votre journée.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href={phoneLink} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-accent hover:bg-red-700 text-white px-10 py-5 rounded-sm font-bold text-xl shadow-2xl transition-transform hover:scale-105">
              <Phone className="w-6 h-6 animate-pulse" />
              Appeler maintenant
            </a>
            <Link to="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-10 py-5 rounded-sm font-bold text-lg transition-colors">
              Demander un rappel
            </Link>
          </div>
          
          {/* Trust strip */}
          <div className="mt-16 flex flex-wrap justify-start gap-x-8 gap-y-4 text-sm sm:text-base font-medium opacity-70">
            <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /> Membre CMMTQ</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /> Disponible maintenant</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /> Prix abordable</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /> Grand Montréal</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-2">Nos Expertises</h2>
              <h3 className="font-heading font-bold text-3xl sm:text-4xl text-primary tracking-tight">Nos services principaux</h3>
              <p className="text-slate-600 max-w-2xl text-lg mt-4 font-light">Équipés pour résoudre n'importe quel problème de plomberie du premier coup.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="bg-light p-6 rounded-lg border-b-4 border-transparent hover:border-secondary transition-all group">
              <div className="w-14 h-14 bg-white shadow-sm text-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CircleAlert className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-black text-xl mb-3 text-primary">Débouchage de drains</h3>
              <p className="text-slate-600 mb-6 text-sm">Éviers, toilettes ou drains principaux bloqués? On intervient rapidement.</p>
              <a href={phoneLink} className="inline-flex items-center font-bold text-xs text-secondary uppercase tracking-wider">Voir détails <ArrowRight className="w-4 h-4 ml-1" /></a>
            </div>
            
            {/* Service 2 */}
            <div className="bg-light p-6 rounded-lg border-b-4 border-transparent hover:border-secondary transition-all group">
              <div className="w-14 h-14 bg-white shadow-sm text-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Droplets className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-black text-xl mb-3 text-primary">Plomberie générale</h3>
              <p className="text-slate-600 mb-6 text-sm">Réparation de chauffe-eau, tuyaux qui fuient et installations.</p>
              <a href={phoneLink} className="inline-flex items-center font-bold text-xs text-secondary uppercase tracking-wider">Voir détails <ArrowRight className="w-4 h-4 ml-1" /></a>
            </div>
            
            {/* Service 3 */}
            <div className="bg-light p-6 rounded-lg border-b-4 border-transparent hover:border-secondary transition-all group">
              <div className="w-14 h-14 bg-white shadow-sm text-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Video className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-black text-xl mb-3 text-primary">Inspection par caméra</h3>
              <p className="text-slate-600 mb-6 text-sm">Diagnostic précis des problèmes souterrains pour éviter des frais inutiles.</p>
              <a href={phoneLink} className="inline-flex items-center font-bold text-xs text-secondary uppercase tracking-wider">Voir détails <ArrowRight className="w-4 h-4 ml-1" /></a>
            </div>
            
            {/* Service 4 */}
            <div className="bg-light p-6 rounded-lg border-b-4 border-accent transition-all group">
              <div className="w-14 h-14 bg-white shadow-sm text-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-black text-xl mb-3 text-primary">Urgence 24h/7j</h3>
              <p className="text-slate-600 mb-6 text-sm">La fuite n'attend pas demain matin. Nos camions sont prêts à partir 24h sur 24.</p>
              <a href={phoneLink} className="inline-flex items-center font-bold text-xs text-secondary uppercase tracking-wider">Voir détails <ArrowRight className="w-4 h-4 ml-1" /></a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex text-primary font-bold hover:text-secondary hover:underline underline-offset-4">Voir tous nos services →</Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-primary mb-6 tracking-tight">Pourquoi choisir Plomberie24 ?</h2>
              <p className="text-gray-600 text-lg mb-8">On sait qu'avoir besoin d'un plombier est souvent stressant. Notre but est de régler le problème rapidement sans vider votre portefeuille.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-red-50 text-accent rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">Intervention ultra-rapide</h4>
                    <p className="text-gray-600">On priorise les urgences pour être chez vous dans les plus brefs délais, de jour comme de nuit.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-red-50 text-accent rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">Abordable et transparent</h4>
                    <p className="text-gray-600">Nos tarifs sont clairs sur place avant le début des travaux. Pas de mauvaises surprises.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-red-50 text-accent rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">Service professionnel certifié</h4>
                    <p className="text-gray-600">Notre équipe possède les licences CMMTQ et RBQ requises. Travail garanti et sécuritaire.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual element instead of a slow image */}
            <div className="bg-light rounded-3xl p-10 h-full flex flex-col justify-center items-center relative overflow-hidden border border-gray-100">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px]" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-50 rounded-full blur-[80px]" />
               
               <div className="relative z-10 w-full max-w-sm">
                 <div className="bg-white rounded-2xl shadow-xl p-8 transform rotate-2 hover:rotate-0 transition-transform">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-accent rounded-xl" />
                      <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">En route</div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 bg-gray-100 rounded w-3/4" />
                      <div className="h-4 bg-gray-100 rounded w-1/2" />
                      <div className="h-4 bg-gray-100 rounded w-5/6" />
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                      <div className="font-bold text-primary">Urgence complétée</div>
                      <div className="flex text-yellow-400">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Snippet */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MapPin className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6 tracking-tight">Zones desservies</h2>
          <p className="text-xl text-gray-300 mb-8 font-medium">
            Nos plombiers locaux sont répartis stratégiquement pour couvrir l'ensemble de la région métropolitaine.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="bg-white/10 px-6 py-3 rounded-xl font-bold">Montréal</span>
            <span className="bg-white/10 px-6 py-3 rounded-xl font-bold text-accent shadow-[inset_0_0_0_2px_rgba(230,57,70,1)]">Laval</span>
            <span className="bg-white/10 px-6 py-3 rounded-xl font-bold">Rive-Sud</span>
            <span className="bg-white/10 px-6 py-3 rounded-xl font-bold">Rive-Nord</span>
          </div>
          <Link to="/zones" className="font-bold underline underline-offset-4 hover:text-accent transition-colors">
            Voir toutes les villes que nous couvrons
          </Link>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-primary mb-4 tracking-tight">Avis clients</h2>
              <div className="flex items-center gap-4">
                <div className="flex bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                   <div className="text-3xl font-black text-primary mr-3">4.8</div>
                   <div className="flex flex-col">
                      <div className="flex text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current text-yellow-300" />
                      </div>
                      <span className="text-xs text-gray-500 font-medium">Sur 120+ avis Google</span>
                   </div>
                </div>
              </div>
            </div>
            <Link to="/avis" className="text-secondary font-bold hover:underline underline-offset-4">Lire plus d'avis →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex text-yellow-500 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
               </div>
               <p className="text-gray-700 italic mb-6">"Toilette débordée à 2h du matin. Ils ont répondu tout de suite et étaient chez moi en 45 minutes à Boucherville. Plombier très poli et efficace. Prix très correct pour une urgence de nuit."</p>
               <div>
                 <div className="font-bold text-primary">Céline M.</div>
                 <div className="text-sm text-gray-500">Boucherville</div>
               </div>
            </div>
            {/* Review 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex text-yellow-500 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
               </div>
               <p className="text-gray-700 italic mb-6">"Mon chauffe-eau a lâché un dimanche. J'ai appelé 3 endroits avant eux qui ne répondaient pas. Plomberie24 m'a envoyé quelqu'un et ils ont remplacé la cuve. Très bon service."</p>
               <div>
                 <div className="font-bold text-primary">Jean-François L.</div>
                 <div className="text-sm text-gray-500">Laval</div>
               </div>
            </div>
            {/* Review 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex text-yellow-500 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current text-yellow-200" />
               </div>
               <p className="text-gray-700 italic mb-6">"L'évier de la cuisine était complètement bloqué. Le technicien a passé sa machine spéciale et tout est revenu à la normale."</p>
               <div>
                 <div className="font-bold text-primary">Valérie P.</div>
                 <div className="text-sm text-gray-500">Plateau Mont-Royal</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-light text-center border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-primary mb-6 tracking-tight">Un problème de plomberie ?<br/>On répond.</h2>
          <p className="text-xl text-slate-600 mb-10 font-light">Ne perdez pas de temps. Appelez-nous maintenant pour une estimation verbale ou une intervention immédiate.</p>
          <a href={phoneLink} className="inline-flex items-center justify-center gap-4 bg-accent hover:bg-red-700 text-white px-10 py-5 rounded-sm font-bold text-2xl sm:text-3xl transition-transform hover:scale-105 shadow-xl">
            <Phone className="w-8 h-8 animate-pulse" />
            {phoneNumber}
          </a>
        </div>
      </section>
    </div>
  );
}
