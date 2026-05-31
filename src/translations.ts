export type Language = 'fr' | 'en';

export const t = (lang: Language) => ({
  layout: {
    topBar: lang === 'fr' ? 'Intervention immédiate 24h/24 • Montréal, Laval, Rive-Sud, Rive-Nord' : 'Immediate intervention 24/7 • Montreal, Laval, South Shore, North Shore',
    accredited: lang === 'fr' ? 'Accrédité' : 'Accredited',
    member: lang === 'fr' ? 'MEMBRE CMMTQ' : 'CMMTQ MEMBER',
    navHome: lang === 'fr' ? 'Accueil' : 'Home',
    navServices: lang === 'fr' ? 'Services' : 'Services',
    navZones: lang === 'fr' ? 'Zones' : 'Areas',
    navAvis: lang === 'fr' ? 'Avis' : 'Reviews',
    navContact: lang === 'fr' ? 'Contact' : 'Contact',
    footerDesc: lang === 'fr' ? 'Intervention rapide et professionnelle dans le Grand Montréal. Disponibilité 24h sur 24 pour toutes vos urgences.' : 'Fast and professional intervention in Greater Montreal. Available 24/7 for all your emergencies.',
    footerLicense: lang === 'fr' ? 'Licence RBQ en règle' : 'Valid RBQ license',
    footerServices: lang === 'fr' ? 'Services' : 'Services',
    footerZones: lang === 'fr' ? 'Secteurs' : 'Service Areas',
    footerContact: lang === 'fr' ? 'Contact' : 'Contact',
    footerAvailable: lang === 'fr' ? 'Disponible 24h/7j' : 'Available 24/7',
    footerMobile: lang === 'fr' ? 'Service mobile couvrant tout le Grand Montréal' : 'Mobile service covering all of Greater Montreal',
    footerAddress: '8489 rue St-Hubert, Montréal, QC H2P 1K9',
    footerSocial: lang === 'fr' ? 'Réseaux sociaux' : 'Social Networks',
    footerRights: lang === 'fr' ? 'Plomberie24. Tous droits réservés.' : 'Plomberie24. All rights reserved.',
    fabEmergency: lang === 'fr' ? 'Urgence?' : 'Emergency?',
    fabClick: lang === 'fr' ? 'Cliquez ici' : 'Click here',
    callUs: lang === 'fr' ? 'Appeler :' : 'Call:',
  },
  home: {
    metaTitle: lang === 'fr' ? 'Plombier Urgence Montréal 24h/7 | Plomberie24' : 'Emergency Plumber Montreal 24/7 | Plomberie24',
    metaDesc: lang === 'fr' ? 'Besoin d\'un plombier d\'urgence à Montréal? Appelez Plomberie24. Service 24h/7j, intervention rapide pour débouchage et dégâts d\'eau.' : 'Need an emergency plumber in Montreal? Call Plomberie24. 24/7 service, rapid intervention for unclogging and water damage.',
    heroBadge: lang === 'fr' ? 'Vrais plombiers. Vraie urgence.' : 'Real plumbers. Real emergencies.',
    heroTitle1: lang === 'fr' ? 'Plombier urgence Montréal' : 'Emergency Plumber Montreal',
    heroTitle2: lang === 'fr' ? 'Disponible 24h/7j' : 'Available 24/7',
    heroDesc: lang === 'fr' ? 'On décroche à toute heure. Intervention rapide, bon prix. Ne laissez pas un dégât d\'eau ruiner votre journée.' : 'We answer at any hour. Rapid intervention, fair price. Don\'t let water damage ruin your day.',
    heroCall: lang === 'fr' ? 'Appeler maintenant' : 'Call now',
    heroCallback: lang === 'fr' ? 'Demander un rappel' : 'Request a callback',
    trustMember: lang === 'fr' ? 'Membre CMMTQ' : 'CMMTQ Member',
    trustAvailable: lang === 'fr' ? 'Disponible maintenant' : 'Available now',
    trustPrice: lang === 'fr' ? 'Prix abordable' : 'Affordable price',
    trustArea: lang === 'fr' ? 'Grand Montréal' : 'Greater Montreal',
    servExpertise: lang === 'fr' ? 'Nos Expertises' : 'Our Expertise',
    servTitle: lang === 'fr' ? 'Nos services principaux' : 'Our main services',
    servDesc: lang === 'fr' ? 'Équipés pour résoudre n\'importe quel problème de plomberie du premier coup.' : 'Equipped to solve any plumbing problem on the first try.',
    serv1Title: lang === 'fr' ? 'Débouchage de drains' : 'Drain Unclogging',
    serv1Desc: lang === 'fr' ? 'Éviers, toilettes ou drains principaux bloqués? On intervient rapidement.' : 'Blocked sinks, toilets or main drains? We intervene rapidly.',
    serv2Title: lang === 'fr' ? 'Plomberie générale' : 'General Plumbing',
    serv2Desc: lang === 'fr' ? 'Réparation de chauffe-eau, tuyaux qui fuient et installations.' : 'Water heater repair, leaking pipes and installations.',
    serv3Title: lang === 'fr' ? 'Inspection par caméra' : 'Camera Inspection',
    serv3Desc: lang === 'fr' ? 'Diagnostic précis des problèmes souterrains pour éviter des frais inutiles.' : 'Precise diagnosis of underground problems to avoid unnecessary costs.',
    serv4Title: lang === 'fr' ? 'Urgence 24h/7j' : '24/7 Emergency',
    serv4Desc: lang === 'fr' ? 'La fuite n\'attend pas demain matin. Nos camions sont prêts à partir 24h sur 24.' : 'Leaks don\'t wait until morning. Our trucks are ready 24 hours a day.',
    servDetails: lang === 'fr' ? 'Voir détails' : 'See details',
    servAll: lang === 'fr' ? 'Voir tous nos services →' : 'See all our services →',
    whyTitle: lang === 'fr' ? 'Pourquoi choisir Plomberie24 ?' : 'Why choose Plomberie24?',
    whyDesc: lang === 'fr' ? 'On sait qu\'avoir besoin d\'un plombier est souvent stressant. Notre but est de régler le problème rapidement sans vider votre portefeuille.' : 'We know needing a plumber is often stressful. Our goal is to fix the problem fast without emptying your wallet.',
    why1Title: lang === 'fr' ? 'Intervention ultra-rapide' : 'Ultra-fast intervention',
    why1Desc: lang === 'fr' ? 'On priorise les urgences pour être chez vous dans les plus brefs délais, de jour comme de nuit.' : 'We prioritize emergencies to be at your place as quickly as possible, day or night.',
    why2Title: lang === 'fr' ? 'Abordable et transparent' : 'Affordable and transparent',
    why2Desc: lang === 'fr' ? 'Nos tarifs sont clairs sur place avant le début des travaux. Pas de mauvaises surprises.' : 'Our rates are clear on site before work begins. No bad surprises.',
    why3Title: lang === 'fr' ? 'Service professionnel certifié' : 'Certified professional service',
    why3Desc: lang === 'fr' ? 'Notre équipe possède les licences CMMTQ et RBQ requises. Travail garanti et sécuritaire.' : 'Our team holds the required CMMTQ and RBQ licenses. Guaranteed and safe work.',
    whyStatusEnRoute: lang === 'fr' ? 'En route' : 'On the way',
    whyStatusDone: lang === 'fr' ? 'Urgence complétée' : 'Emergency completed',
    zoneTitle: lang === 'fr' ? 'Zones desservies' : 'Service Areas',
    zoneDesc: lang === 'fr' ? 'Nos plombiers locaux sont répartis stratégiquement pour couvrir l\'ensemble de la région métropolitaine.' : 'Our local plumbers are strategically distributed to cover the entire metropolitan area.',
    zone1: lang === 'fr' ? 'Montréal' : 'Montreal',
    zone2: lang === 'fr' ? 'Laval' : 'Laval',
    zone3: lang === 'fr' ? 'Rive-Sud' : 'South Shore',
    zone4: lang === 'fr' ? 'Rive-Nord' : 'North Shore',
    zoneLink: lang === 'fr' ? 'Voir toutes les villes que nous couvrons' : 'See all cities we cover',
    revTitle: lang === 'fr' ? 'Avis clients' : 'Customer Reviews',
    revCount: lang === 'fr' ? 'Sur 120+ avis Google' : 'Based on 120+ Google reviews',
    revLink: lang === 'fr' ? 'Lire plus d\'avis →' : 'Read more reviews →',
    ctaTitle1: lang === 'fr' ? 'Un problème de plomberie ?' : 'A plumbing problem?',
    ctaTitle2: lang === 'fr' ? 'On répond.' : 'We answer.',
    ctaDesc: lang === 'fr' ? 'Ne perdez pas de temps. Appelez-nous maintenant pour une estimation verbale ou une intervention immédiate.' : 'Don\'t waste time. Call us now for a verbal estimate or an immediate intervention.',
    reviews: [
      {
        text: lang === 'fr' ? '"Toilette débordée à 2h du matin. Ils ont répondu tout de suite et étaient chez moi en 45 minutes à Boucherville. Plombier très poli et efficace. Prix très correct pour une urgence de nuit."' : '"Overflowing toilet at 2am. They answered right away and were at my house in 45 minutes in Boucherville. Very polite and efficient plumber. Very fair price for a night emergency."',
        name: 'Céline M.', city: 'Boucherville'
      },
      {
        text: lang === 'fr' ? '"Mon chauffe-eau a lâché un dimanche. J\'ai appelé 3 endroits avant eux qui ne répondaient pas. Plomberie24 m\'a envoyé quelqu\'un et ils ont remplacé la cuve. Très bon service."' : '"My water heater broke on a Sunday. I called 3 places before them that didn\'t answer. Plomberie24 sent someone and they replaced the tank. Very good service."',
        name: 'Jean-François L.', city: 'Laval'
      },
      {
        text: lang === 'fr' ? '"L\'évier de la cuisine était complètement bloqué. Le technicien a passé sa machine spéciale et tout est revenu à la normale."' : '"The kitchen sink was completely blocked. The technician used his special machine and everything went back to normal."',
        name: 'Valérie P.', city: 'Plateau Mont-Royal'
      },
    ]
  },
  services: {
    metaTitle: lang === 'fr' ? 'Nos Services de Plomberie | Débouchage et Urgence | Plomberie24' : 'Our Plumbing Services | Unclogging and Emergency | Plomberie24',
    metaDesc: lang === 'fr' ? 'Découvrez tous nos services de plomberie: débouchage de drains, inspection par caméra, réparation de chauffe-eau, et urgence 24h.' : 'Discover all our plumbing services: drain unclogging, camera inspection, water heater repair, and 24/7 emergency.',
    title: lang === 'fr' ? 'Nos services de plomberie' : 'Our plumbing services',
    desc: lang === 'fr' ? 'Professionnels, équipés et toujours prêts. Découvrez notre gamme complète d\'interventions pour le secteur résidentiel et commercial léger.' : 'Professional, equipped, and always ready. Discover our full range of interventions for the residential and light commercial sector.',
    cta: lang === 'fr' ? 'Appeler pour ce service' : 'Call for this service',
    otherTitle: lang === 'fr' ? 'Besoin d\'autre chose ?' : 'Need something else?',
    otherDesc: lang === 'fr' ? 'Ceci n\'est qu\'un aperçu de nos services les plus demandés. Pour tout autre problème de plomberie, appelez-nous. Nous avons l\'expertise.' : 'This is just a glimpse of our most requested services. For any other plumbing problem, call us. We have the expertise.',
    otherBtn: lang === 'fr' ? 'Parler à un plombier' : 'Speak to a plumber',
    items: [
      {
        id: "debouchage",
        title: lang === 'fr' ? "Débouchage et nettoyage de drains" : "Drain Unclogging and Cleaning",
        desc: lang === 'fr' ? "Un drain bouché peut causer d'énormes dégâts rapidement. Nous avons l'équipement lourd (fichoir électrique, hydrojet) pour vider la ligne principale de votre maison ou déboucher un simple évier de cuisine." : "A blocked drain can cause huge damage quickly. We have the heavy equipment (electric snake, hydrojet) to clear your home's main line or unclog a simple kitchen sink.",
        list: lang === 'fr' 
          ? ["Toilettes bouchées", "Éviers et lavabos qui refoulent", "Drain principal de la maison (égout)", "Drains français et puisards"] 
          : ["Clogged toilets", "Sinks that back up", "Main house drain (sewer)", "French drains and sump pumps"]
      },
      {
        id: "urgence",
        title: lang === 'fr' ? "Plomberie d'urgence 24h" : "24/7 Emergency Plumbing",
        desc: lang === 'fr' ? "Les dégâts d'eau ne préviennent pas. 70% de nos interventions sont des urgences. Nos camions sont remplis de pièces de rechange courantes pour régler le problème lors de la première visite." : "Water damage doesn't give warnings. 70% of our interventions are emergencies. Our trucks are stocked with common spare parts to fix the problem on the first visit.",
        list: lang === 'fr'
          ? ["Fuites d'eau majeures", "Tuyaux éclatés", "Refoulement d'égout", "Intervention de nuit ou fin de semaine"]
          : ["Major water leaks", "Burst pipes", "Sewer backup", "Night or weekend interventions"]
      },
      {
        id: "chauffe-eau",
        title: lang === 'fr' ? "Installation & réparation de chauffe-eau" : "Water Heater Installation & Repair",
        desc: lang === 'fr' ? "Plus d'eau chaude ou cuve qui coule ? Ne risquez pas l'inondation. Nous remplaçons et réparons toutes les marques de chauffe-eau électriques dans la journée." : "No more hot water or a leaking tank? Don't risk a flood. We replace and repair all brands of electric water heaters the same day.",
        list: lang === 'fr'
          ? ["Remplacement rapide", "Diagnostic de chauffe-eau défectueux", "Entretien préventif", "Recyclage de l'ancien réservoir"]
          : ["Fast replacement", "Defective water heater diagnosis", "Preventive maintenance", "Recycling of the old tank"]
      },
      {
        id: "camera",
        title: lang === 'fr' ? "Inspection de drains par caméra" : "Camera Drain Inspection",
        desc: lang === 'fr' ? "Avant de tout casser, on regarde. Une inspection par caméra localise exactement les racines, affaissements ou blocages dans vos tuyaux souterrains." : "Before breaking everything, we look. A camera inspection exactly locates roots, sagging, or blockages in your underground pipes.",
        list: lang === 'fr'
          ? ["Localisation précise du problème", "Inspection pré-achat de maison", "Vérification de l'état des égouts", "Enregistrement vidéo fourni"]
          : ["Precise problem localization", "Pre-purchase home inspection", "Sewer condition check", "Video recording provided"]
      },
      {
        id: "fuites",
        title: lang === 'fr' ? "Réparation de fuites et robinetterie" : "Leak and Faucet Repair",
        desc: lang === 'fr' ? "Un robinet qui goutte peut coûter cher en facture d'eau, et une fuite invisible derriere un mur peut causer des moisissures. Nous réparons et remplaçons la robinetterie de A à Z." : "A dripping faucet can be costly on the water bill, and an invisible leak behind a wall can cause mold. We repair and replace faucets from A to Z.",
        list: lang === 'fr'
          ? ["Fuites sous les éviers", "Remplacement de robinets", "Réparation de bains et douches", "Vérification de la pression d'eau"]
          : ["Leaks under sinks", "Faucet replacement", "Bath and shower repair", "Water pressure check"]
      },
      {
        id: "hiver",
        title: lang === 'fr' ? "Tuyaux gelés et dégel" : "Frozen Pipes and Thawing",
        desc: lang === 'fr' ? "Spécialité des hivers québécois. Si l'eau ne coule plus par grand froid, contactez-nous avant que le tuyau n'éclate. Nous avons l'équipement pour dégeler la tuyauterie de façon sécuritaire." : "A Quebec winter specialty. If the water stops flowing in extreme cold, contact us before the pipe bursts. We have the equipment to safely thaw piping.",
        list: lang === 'fr'
          ? ["Dégel de tuyauterie", "Prévention d'éclatement", "Isolation et conseils", "Colmatage de bris dus au gel"]
          : ["Pipe thawing", "Burst prevention", "Insulation and advice", "Patching frost-induced breaks"]
      }
    ]
  },
  zones: {
    metaTitle: lang === 'fr' ? 'Plombier Grand Montréal, Laval, Rive-Sud | Zones Desservies | Plomberie24' : 'Plumber Greater Montreal, Laval, South Shore | Service Areas | Plomberie24',
    metaDesc: lang === 'fr' ? 'Nous intervenons dans tout le Grand Montréal, Laval, Rive-Sud et Rive-Nord. Trouvez un plombier d\'urgence près de chez vous en quelques minutes.' : 'We operate throughout Greater Montreal, Laval, South Shore, and North Shore. Find an emergency plumber near you in minutes.',
    title: lang === 'fr' ? 'Zones desservies' : 'Service Areas',
    desc: lang === 'fr' ? 'Plomberie24 intervient dans tout le Grand Montréal, 24 heures sur 24. Où que vous soyez, un technicien est prêt à partir.' : 'Plomberie24 responds throughout Greater Montreal, 24 hours a day. Wherever you are, a technician is ready to go.',
    fastMapTitle: lang === 'fr' ? 'Service rapide au Grand Montréal' : 'Fast service in Greater Montreal',
    fastMapDesc: lang === 'fr' ? 'Nos techniciens sont répartis sur la route pour vous atteindre au plus vite, peu importe l\'heure ou la météo.' : 'Our technicians are distributed on the road to reach you as quickly as possible, regardless of the time or weather.',
    fastMapCta: lang === 'fr' ? 'Appeler le répartiteur' : 'Call the dispatcher',
    notFoundTitle: lang === 'fr' ? 'Votre ville n\'est pas listée ?' : 'Your city is not listed?',
    notFoundDesc: lang === 'fr' ? 'Ne vous inquiétez pas, il est fort probable que nous puissions tout de même nous déplacer chez vous. Contactez-nous pour le confirmer !' : 'Don\'t worry, it\'s highly likely we can still come to your location. Contact us to confirm!',
    notFoundCta: lang === 'fr' ? 'Vérifier ma zone —' : 'Check my area —'
  },
  avis: {
    metaTitle: lang === 'fr' ? 'Avis Clients et Témoignages | Plomberie24' : 'Customer Reviews and Testimonials | Plomberie24',
    metaDesc: lang === 'fr' ? 'Lisez les avis de nos clients satisfaits. Plomberie24 est évalué 4.8 étoiles sur plus de 120 avis Google pour notre service d\'urgence.' : 'Read reviews from our satisfied clients. Plomberie24 is rated 4.8 stars based on 120+ Google reviews for our emergency service.',
    title: lang === 'fr' ? 'Avis clients' : 'Customer Reviews',
    desc: lang === 'fr' ? 'La confiance de nos clients est notre plus grande fierté. Découvrez ce qu\'ils disent de nos interventions.' : 'The trust of our clients is our greatest pride. Discover what they say about our interventions.',
    basedOn: lang === 'fr' ? '120+ Avis Google vérifiés' : '120+ Verified Google Reviews',
    verified: lang === 'fr' ? 'Profil vérifié Google' : 'Google Verified Profile',
    leaveReview: lang === 'fr' ? 'Laisser mon avis →' : 'Leave my review →',
    ctaTitle: lang === 'fr' ? 'Faites partie de nos clients satisfaits' : 'Become one of our satisfied clients',
    ctaDesc: lang === 'fr' ? 'Une intervention rapide, courtoise et efficace, peu importe l\'urgence de plomberie.' : 'A fast, courteous, and efficient intervention, no matter the plumbing emergency.',
    ctaBtn: lang === 'fr' ? 'Appeler maintenant :' : 'Call now:',
    reviews: [
      { name: "Céline M.", city: "Boucherville", date: lang === 'fr' ? "Il y a 2 semaines" : "2 weeks ago", stars: 5, text: lang === 'fr' ? "Toilette débordée à 2h du matin. Ils ont répondu tout de suite et étaient chez moi en 45 minutes à Boucherville. Plombier très poli et efficace. Prix très correct pour une urgence de nuit." : "Overflowing toilet at 2am. They answered right away and were at my house in 45 minutes in Boucherville. Very polite and efficient plumber. Very fair price for a night emergency." },
      { name: "Jean-François L.", city: "Laval", date: lang === 'fr' ? "Il y a 1 mois" : "1 month ago", stars: 5, text: lang === 'fr' ? "Mon chauffe-eau a lâché un dimanche. J'ai appelé 3 endroits avant eux qui ne répondaient pas. Plomberie24 m'a envoyé quelqu'un et ils ont remplacé la cuve. Très bon service." : "My water heater broke on a Sunday. I called 3 places before them that didn't answer. Plomberie24 sent someone and they replaced the tank. Very good service." },
      { name: "Valérie P.", city: "Le Plateau-Mont-Royal", date: lang === 'fr' ? "Il y a 2 mois" : "2 months ago", stars: 5, text: lang === 'fr' ? "L'évier de la cuisine était complètement bloqué. Le technicien a passé sa machine spéciale et tout est revenu à la normale." : "The kitchen sink was completely blocked. The technician used his special machine and everything went back to normal." },
      { name: "Michel T.", city: "Terrebonne", date: lang === 'fr' ? "Il y a 2 mois" : "2 months ago", stars: 4, text: lang === 'fr' ? "Intervention rapide pour une fuite dans le sous-sol. Le plombier a bien expliqué le problème. Un peu cher, mais c'était un dimanche soir." : "Fast response for a basement leak. The plumber explained the problem well. A bit expensive, but it was a Sunday night." },
      { name: "Amélie C.", city: "Brossard", date: lang === 'fr' ? "Il y a 3 mois" : "3 months ago", stars: 5, text: lang === 'fr' ? "J'ai eu un refoulement de drain principal. C'était un cauchemar. L'équipe de Plomberie24 est arrivée avec leur équipement hydrojet et a tout nettoyé. Merci d'avoir sauvé notre maison !" : "I had a main drain backup. It was a nightmare. The Plomberie24 team arrived with their hydrojet equipment and cleaned everything. Thank you for saving our home!" },
      { name: "Sylvain D.", city: "Longueuil", date: lang === 'fr' ? "Il y a 3 mois" : "3 months ago", stars: 5, text: lang === 'fr' ? "J'ai appelé pour un tuyau gelé en plein mois de janvier. Ils sont arrivés avec leur machine thermique et ont dégelé le tout sans rien briser. Des pros." : "I called for a frozen pipe in the middle of January. They arrived with their thermal machine and thawed it all without breaking anything. Professionals." }
    ]
  },
  contact: {
    metaTitle: lang === 'fr' ? 'Contacter Plomberie24 | Urgence Plombier 24h/7j' : 'Contact Plomberie24 | Emergency Plumber 24/7',
    metaDesc: lang === 'fr' ? 'Contactez Plomberie24 pour une urgence ou un devis. Appelez le (438) 998-8869 pour une intervention immédiate dans le Grand Montréal.' : 'Contact Plomberie24 for an emergency or a quote. Call (438) 998-8869 for an immediate intervention in Greater Montreal.',
    title: lang === 'fr' ? 'Contactez-nous' : 'Contact us',
    desc: lang === 'fr' ? 'Une urgence ? Le plus rapide est de nous appeler directement. Pour toute autre demande, utilisez le formulaire.' : 'An emergency? The fastest way is to call us directly. For any other request, use the form.',
    servTitle: lang === 'fr' ? 'Service d\'urgence 24h' : '24/7 Emergency Service',
    servDesc: lang === 'fr' ? 'On répond à toute heure. Estimation verbale gratuite.' : 'We answer at all hours. Free verbal estimate.',
    infoTitle: lang === 'fr' ? 'Informations' : 'Information',
    infoHours: lang === 'fr' ? 'Heures d\'ouverture' : 'Opening Hours',
    infoHoursDesc: lang === 'fr' ? '24 heures sur 24, 7 jours sur 7' : '24 hours a day, 7 days a week',
    infoAreas: lang === 'fr' ? 'Secteurs desservis' : 'Service Areas',
    infoAreasDesc: lang === 'fr' ? 'Grand Montréal, Laval, Rive-Nord, Rive-Sud' : 'Greater Montreal, Laval, North Shore, South Shore',
    infoEmail: lang === 'fr' ? 'Courriel' : 'Email',
    infoAddress: lang === 'fr' ? 'Adresse' : 'Address',
    infoAddressDesc: '8489 rue St-Hubert, Montréal, QC H2P 1K9',
    infoSocial: lang === 'fr' ? 'Réseaux sociaux' : 'Social Networks',
    formTitle: lang === 'fr' ? 'Demande en ligne' : 'Online Request',
    formDesc: lang === 'fr' ? 'Remplissez ce formulaire et nous vous contacterons rapidement.' : 'Fill out this form and we will contact you shortly.',
    formSuccessTitle: lang === 'fr' ? 'Message envoyé !' : 'Message sent!',
    formSuccessDesc: lang === 'fr' ? 'Nous avons bien reçu votre demande. Un membre de notre équipe vous contactera sous peu.' : 'We have received your request. A member of our team will contact you shortly.',
    formSuccessBtn: lang === 'fr' ? 'Envoyer un autre message' : 'Send another message',
    formName: lang === 'fr' ? 'Prénom et nom' : 'Full Name',
    formPhone: lang === 'fr' ? 'Téléphone' : 'Phone',
    formArea: lang === 'fr' ? 'Secteur / Ville' : 'Area / City',
    formType: lang === 'fr' ? 'Type de problème' : 'Problem Type',
    formTypeOpt1: lang === 'fr' ? 'Urgence d\'eau' : 'Water Emergency',
    formTypeOpt2: lang === 'fr' ? 'Débouchage' : 'Unclogging',
    formTypeOpt3: lang === 'fr' ? 'Chauffe-eau' : 'Water Heater',
    formTypeOpt4: lang === 'fr' ? 'Réparation de fuite' : 'Leak Repair',
    formTypeOpt5: lang === 'fr' ? 'Autre / Estimation' : 'Other / Estimate',
    formDescProblem: lang === 'fr' ? 'Description du problème' : 'Description of the problem',
    formDescHolder: lang === 'fr' ? 'Expliquez brièvement votre situation...' : 'Briefly explain your situation...',
    formSubmit: lang === 'fr' ? 'Envoyer la demande' : 'Send request'
  }
});
