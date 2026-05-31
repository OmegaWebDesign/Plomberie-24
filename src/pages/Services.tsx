import { Phone, ArrowRight, CircleAlert, Droplets, Video, Wrench, Thermometer, Flame } from 'lucide-react';
import { useEffect } from 'react';

const phoneNumber = "(438) 998-8869";
const phoneLink = "tel:4389988869";

const services = [
  {
    id: "debouchage",
    title: "Débouchage et nettoyage de drains",
    icon: <CircleAlert className="w-8 h-8" />,
    desc: "Un drain bouché peut causer d'énormes dégâts rapidement. Nous avons l'équipement lourd (fichoir électrique, hydrojet) pour vider la ligne principale de votre maison ou déboucher un simple évier de cuisine.",
    list: ["Toilettes bouchées", "Éviers et lavabos qui refoulent", "Drain principal de la maison (égout)", "Drains français et puisards"]
  },
  {
    id: "urgence",
    title: "Plomberie d'urgence 24h",
    icon: <Droplets className="w-8 h-8" />,
    desc: "Les dégâts d'eau ne préviennent pas. 70% de nos interventions sont des urgences. Nos camions sont remplis de pièces de rechange courantes pour régler le problème lors de la première visite.",
    list: ["Fuites d'eau majeures", "Tuyaux éclatés", "Refoulement d'égout", "Intervention de nuit ou fin de semaine"]
  },
  {
    id: "chauffe-eau",
    title: "Installation & réparation de chauffe-eau",
    icon: <Thermometer className="w-8 h-8" />,
    desc: "Plus d'eau chaude ou cuve qui coule ? Ne risquez pas l'inondation. Nous remplaçons et réparons toutes les marques de chauffe-eau électriques dans la journée.",
    list: ["Remplacement rapide", "Diagnostic de chauffe-eau défectueux", "Entretien préventif", "Recyclage de l'ancien réservoir"]
  },
  {
    id: "camera",
    title: "Inspection de drains par caméra",
    icon: <Video className="w-8 h-8" />,
    desc: "Avant de tout casser, on regarde. Une inspection par caméra localise exactement les racines, affaissements ou blocages dans vos tuyaux souterrains.",
    list: ["Localisation précise du problème", "Inspection pré-achat de maison", "Vérification de l'état des égouts", "Enregistrement vidéo fourni"]
  },
  {
    id: "fuites",
    title: "Réparation de fuites et robinetterie",
    icon: <Wrench className="w-8 h-8" />,
    desc: "Un robinet qui goutte peut coûter cher en facture d'eau, et une fuite invisible derriere un mur peut causer des moisissures. Nous réparons et remplaçons la robinetterie de A à Z.",
    list: ["Fuites sous les éviers", "Remplacement de robinets", "Réparation de bains et douches", "Vérification de la pression d'eau"]
  },
  {
    id: "hiver",
    title: "Tuyaux gelés et dégel",
    icon: <Flame className="w-8 h-8" />,
    desc: "Spécialité des hivers québécois. Si l'eau ne coule plus par grand froid, contactez-nous avant que le tuyau n'éclate. Nous avons l'équipement pour dégeler la tuyauterie de façon sécuritaire.",
    list: ["Dégel de tuyauterie", "Prévention d'éclatement", "Isolation et conseils", "Colmatage de bris dus au gel"]
  }
];

export default function Services() {
  useEffect(() => {
    document.title = "Nos Services de Plomberie | Débouchage et Urgence | Plomberie24";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Découvrez tous nos services de plomberie: débouchage de drains, inspection par caméra, réparation de chauffe-eau, et urgence 24h.");
  }, []);

  return (
    <div className="w-full bg-light">
      <div className="bg-primary text-white py-16 border-b-4 border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-4xl sm:text-5xl mb-4 tracking-tight">Nos services de plomberie</h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light">Professionnels, équipés et toujours prêts. Découvrez notre gamme complète d'interventions pour le secteur résidentiel et commercial léger.</p>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10">
          {services.map((service, idx) => (
            <div key={service.id} className="bg-white rounded-lg p-8 lg:p-10 border-b-4 border-transparent hover:border-secondary shadow-sm flex flex-col lg:flex-row gap-8 items-start relative overflow-hidden group transition-all">
              <div className="shrink-0 w-20 h-20 bg-light text-secondary rounded-lg flex items-center justify-center border border-slate-100">
                {service.icon}
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
                    Appeler pour ce service <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Missing something? */}
        <div className="mt-16 bg-primary text-white rounded-lg p-10 text-center border-t-4 border-accent relative overflow-hidden">
          <div className="absolute right-[-10%] top-[-20%] w-[300px] h-[300px] bg-secondary opacity-20 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="font-heading font-black text-3xl mb-4 tracking-tight relative z-10">Besoin d'autre chose ?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg font-light relative z-10">Ceci n'est qu'un aperçu de nos services les plus demandés. Pour tout autre problème de plomberie, appelez-nous. Nous avons l'expertise.</p>
          <a href={phoneLink} className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-red-700 text-white px-8 py-4 rounded-sm font-bold text-xl transition-all shadow-2xl relative z-10">
            <Phone className="w-6 h-6 animate-pulse" />
            Parler à un plombier
          </a>
        </div>
      </div>
    </div>
  );
}
