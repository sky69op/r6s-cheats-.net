import type { Translations } from './types';

const toolsBase = '/tools/r6s-cheats/';

export const fr: Translations = {
  site: {
    name: 'R6s Cheats',
    domain: 'r6scheats.net',
    title: 'Hacks R6S : Cheats, Aimbot, ESP et Wallhack',
    description:
      'Cheats R6S en direct sur r6scheats.net—Lite ESP et radar, Pro aimbot et triggerbot, Elite unlock all. Loader BattlEye-aware avec statut de patch en live pour PC.',
  },
  nav: [
    { id: 'home', href: '/', label: 'Accueil' },
    { id: 'features', href: '/features/', label: 'Fonctionnalités' },
    { id: 'cheats', href: '/cheats/', label: 'Cheats' },
    { id: 'tools', href: '/tools/r6s-cheats/', label: 'Outils' },
    { id: 'forums', href: '/forums/', label: 'Forums' },
  ],
  hero: {
    status: 'Rainbow Six Siege — build patch en ligne',
    eyebrow: 'Rainbow Six Siege',
    titleLine1: 'R6s',
    titleLine2: 'Cheats',
    subtitle:
      'Directement de l\'équipe build—pas de revendeur. Un loader, trois formules et bannière de statut live à chaque patch BattlEye pour le ranked sur PC.',
    ctaPrimary: 'Voir les formules de cheats',
    modesLabel: 'Modes Rainbow Six Siege',
    modes: ['Classé', 'Non classé', 'Match rapide', 'Parties personnalisées'],
    statusPills: [
      { icon: 'eye', label: 'ESP actif' },
      { icon: 'radar', label: 'Radar en ligne' },
      { icon: 'zap', label: 'Build saison' },
      { icon: 'shield', label: 'Compatible BattlEye' },
      { icon: 'crosshair', label: 'Soft Aim prêt' },
      { icon: 'target', label: 'No Recoil' },
      { icon: 'stream', label: 'Stream Proof' },
      { icon: 'package', label: 'Loot ESP' },
      { icon: 'eye', label: 'Skeleton ESP' },
      { icon: 'radar', label: 'UAV Radar' },
      { icon: 'package', label: 'Map Hack' },
      { icon: 'headphones', label: 'Support 24/7' },
      { icon: 'zap', label: 'Livraison instantanée' },
      { icon: 'shield', label: 'Sécurisé en ranked' },
      { icon: 'crosshair', label: 'Trigger Bot' },
      { icon: 'target', label: 'Sélection d\'os' },
      { icon: 'alert', label: 'Statut en direct' },
      { icon: 'refresh', label: 'Mises à jour auto' },
    ],
  },
  features: {
    pageTitle: 'Fonctionnalités de cheats R6S — Aimbot, ESP, Wallhack et Radar 2D',
    pageDescription:
      'Aimbot fluide avec soft aim, multipoint bones et cercle FOV, ESP boîte 2D, wallhack squelette, ESP gadgets, cercle tête, radar 2D, triggerbot, sans recul, no spread et configs sauvegarder/charger pour PC sur Steam et Ubisoft Connect.',
    eyebrow: 'Fonctionnalités',
    title: 'Tout ce dont vous avez besoin en un seul pack',
    subtitle: 'ESP, contrôle de visée et outils utilitaires pour Rainbow Six Siege, maintenus à chaque patch.',
    seeAll: 'Voir toutes les fonctionnalités',
    seeAllHref: '/features/',
    items: [
      {
        title: 'Aimbot',
        subtitle: 'Suivre. Verrouiller. Gagner.',
        desc: 'Aimbot fluide avec limites de FOV, sélection d\'os et lissage humanisé pour des opérateurs comme Ash, Jäger et Vigil. Le réglage du délai garde des flicks naturels en ranked.',
        tags: ['r6s aimbot', 'soft aim', 'triggerbot', 'multipoint bones', 'r6 aimbot'],
        points: ['Assistance visée opérateurs', 'Limites de FOV', 'Sélection d\'os', 'Lissage humanisé'],
      },
      {
        title: 'ESP / Wallhack',
        subtitle: 'Voir les roamers avant qu\'ils flanquent.',
        desc: 'ESP joueurs, localisateur de gadgets, alertes drone et suivi des positions ennemies à travers les murs — même hors ligne de mire standard.',
        tags: ['r6s esp', '2d box esp', 'skeleton esp', 'r6s wallhack', 'head circle'],
        points: ['Overlay renseignement joueurs', 'Wallhack joueurs', 'Localisateur de gadgets', 'Alertes drone'],
      },
      {
        title: 'ESP Drone et Gadgets',
        subtitle: 'Renseignement sans gaspiller de drones.',
        desc: 'Marqueurs de position des drones, alertes pièges et indices gadgets. Ne manquez plus jamais une Claymore, un piège Kapkan ou un défenseur en roam.',
        tags: ['r6s drone hack', 'gadget esp', 'map hack', '2d radar', 'trap alerts'],
        points: ['ESP Gadgets', 'Marqueurs drone', 'Alertes pièges', 'Conscience de la carte'],
      },
      {
        title: 'Sans recul',
        subtitle: 'Spray comme un pro.',
        desc: 'Contrôle du recul par arme avec profils par fusil, réduction de dispersion et réglage du délai. Idéal pour les entry fraggers et les anchors avec des patterns de spray serrés.',
        tags: ['sans recul r6s', 'cheat r6s', 'contrôle recul r6', 'contrôle spray'],
        points: ['Contrôle du recul', 'Profils d\'armes', 'Réduction de dispersion', 'Contrôle du spray'],
      },
      {
        title: 'Suite utilitaire',
        subtitle: 'Outils supplémentaires pour les moments clutch.',
        desc: 'Unlock All, triggerbot, speed hack et overlays stream-proof — tout au-delà de l\'ESP et de l\'aimbot bruts.',
        points: [
          'Unlock All opérateurs',
          'Triggerbot',
          'Sans dispersion',
          'Speed hack',
          'Stream proof',
        ],
        tags: ['unlock all r6s', 'triggerbot r6s', 'cheat externe r6s', 'stream proof'],
      },
    ],
  },
  whyUs: {
    eyebrow: 'Pourquoi nous',
    title: 'Conçu pour Rainbow Six Siege',
    items: [
      {
        title: 'Mises à jour compatibles BattlEye',
        desc: 'Notre équipe suit BattlEye et les patchs du jeu, en publiant rapidement des builds pour que vous ne restiez pas hors ligne après une mise à jour Rainbow Six Siege.',
      },
      {
        title: 'Visée humanisée',
        desc: 'Lissage, timing de flick naturel et réglages conservateurs imitent les joueurs haut rang — pas des patterns de bot évidents qui attirent les signalements.',
      },
      {
        title: 'Zéro impact FPS',
        desc: 'Le rendu optimisé de l\'overlay préserve votre framerate en combats intenses et en 1v1 de fin de manche.',
      },
      {
        title: 'Support opérateurs',
        desc: 'Les guides du portail aident à la configuration du loader, aux configs opérateurs et aux resets HWID — tutoriels pas à pas dans votre tableau de bord.',
      },
    ],
  },
  setup: {
    eyebrow: 'Déploiement',
    title: 'Cinq minutes du téléchargement à la file d\'attente.',
    subtitle: 'Suivez le flux guidé du loader pour Rainbow Six Siege sur PC Ubisoft Connect.',
    steps: [
      { step: '01', title: 'Vérifier', desc: 'Finalisez le paiement via notre partenaire et débloquez votre portail opérateur.' },
      { step: '02', title: 'Télécharger', desc: 'Récupérez le dernier loader patch depuis votre tableau de bord.' },
      { step: '03', title: 'Lancer', desc: 'Exécutez le loader externe — aucune modification BIOS requise.' },
      { step: '04', title: 'Configurer', desc: 'Chargez les préréglages ranked ou non classé, ajustez les modules ESP et aimbot.' },
      { step: '05', title: 'File d\'attente', desc: 'Lancez Rainbow Six Siege et grimpez en rank en toute confiance.' },
    ],
  },
  compatibility: {
    eyebrow: 'Support plateforme',
    title: 'Fonctionne sur votre config.',
    subtitle: 'Consultez la bannière de statut en direct avant de lancer Rainbow Six Siege après les mises à jour.',
    items: ['Windows 10 et 11', 'Ubisoft Connect', 'Client de jeu R6S', 'Mise à jour automatique', 'Sync cloud des configs', 'Guides portail', 'Reset HWID', 'Loader externe'],
  },
  cheats: {
    pageTitle: 'Cheats R6S — Aimbot, ESP, Wallhack et Formules',
    pageDescription:
      'Comparez Lite, Pro et Elite pour PC ranked — Lite ESP et wallhack gadgets, Pro aimbot avec triggerbot et sans recul, Elite wallhack complet avec hack drone et Unlock All. Loader compatible BattlEye pour Steam et Ubisoft Connect.',
    eyebrow: 'Tarifs',
    title: 'Formules de cheats R6S',
    subtitle:
      'Intel Lite, contrôle de visée Pro et builds privés Elite — ESP, wallhack, radar 2D et préréglages ranked-safe pour PC.',
    viewAll: 'Voir tous les cheats',
    explore: 'Explorer',
    items: [
      {
        badge: 'Disponible',
        tier: 'Essentiel',
        name: 'Lite',
        title: 'R6S Lite',
        desc: 'Formule d\'entrée avec ESP joueurs, localisateur de gadgets, conscience drone et overlay minimap.',
        features: ['ESP joueurs et boîtes', 'Localisateur gadgets et pièges', 'Alertes position drone', 'Tags noms opérateurs', 'Overlay minimap', 'Mode streamproof'],
        more: 8,
        href: '/cheats/lite/',
        variant: 'essential',
      },
      {
        badge: 'Disponible',
        tier: 'Populaire',
        name: 'Pro',
        title: 'R6S Pro',
        desc: 'Aimbot, sans recul, triggerbot et scripts de contrôle du recul pour jeu ranked et non classé.',
        features: ['Aimbot fluide', 'Contrôle sans recul', 'Triggerbot', 'Sélecteur FOV et os', 'Profils d\'armes', 'Réduction de dispersion'],
        more: 18,
        href: '/cheats/pro/',
        variant: 'popular',
      },
      {
        badge: 'Places limitées',
        tier: 'Privé',
        name: 'Elite',
        title: 'R6S Elite',
        desc: 'Build privé avec wallhack complet, hack drone, Unlock All et support dev direct.',
        features: ['Suite wallhack complète', 'Hack drone', 'Unlock All opérateurs', 'Module speed hack', 'File patch prioritaire', 'Support dev direct'],
        more: 42,
        href: '/cheats/elite/',
        variant: 'limited',
      },
    ],
  },
  tools: {
    pageTitle: 'Outils de cheats R6S — Spoofer HWID, Déban UGC et Unlock All',
    pageDescription:
      'Outils utilitaires pour PC — spoofer HWID après signalements matériels BattlEye, espace de déban UGC pour appels Ubisoft et BattlEye, et aperçu des skins Unlock All. Guides d\'installation sur r6scheats.net.',
    eyebrow: 'Outils',
    title: 'Outils de cheats R6S',
    subtitle:
      'Spoofer HWID, espace de déban UGC, aide aux appels BattlEye et Unlock All pour PC sur Ubisoft Connect et Steam.',
    viewAll: 'Voir tous les outils',
    get: 'Obtenir',
    explore: 'Explorer',
    items: [
      {
        badge: 'Disponible',
        category: 'Utilitaire système',
        categoryKey: 'system_utility',
        title: 'Spoofer HWID',
        subtitle: 'Spoofer d\'identifiant matériel Rainbow Six Siege',
        desc: 'Spoofer HWID pour numéros de série disque, adresses MAC et ID GPU après signalements matériels BattlEye — guide de configuration portail avant de lancer via Ubisoft Connect.',
        features: ['Spoofer et outils de nettoyage', 'Rotation de profils série', 'Scan de compatibilité', 'Vérification post-spoof'],
        more: 9,
        href: `${toolsBase}hwid-spoofer/`,
      },
      {
        badge: 'Disponible',
        category: 'Récupération de compte',
        categoryKey: 'account_recovery',
        title: 'Outil de déban UGC',
        subtitle: 'Espace d\'appel BattlEye et Ubisoft',
        desc: 'Outil de déban UGC R6S pour restrictions Ubisoft, bans BattlEye et blocages sécurité — workflows d\'appel personnalisés, suivi de dossier et automatisation des litiges.',
        features: ['Workflows d\'appel personnalisés', 'Automatisation des litiges', 'Documentation de dossier', 'Tableau de bord de suivi'],
        more: 6,
        href: `${toolsBase}ugc/`,
      },
      {
        badge: 'Disponible',
        category: 'Cosmétique',
        categoryKey: 'cosmetic',
        title: 'Unlock All',
        subtitle: 'Débloquer tous les opérateurs localement',
        desc: 'Unlock All léger pour tenues opérateurs, skins d\'armes et variantes rares — aperçu local sans achats sur la boutique Ubisoft.',
        features: ['Déblocage opérateurs', 'Personnalisation armes et charms', 'Aperçu skins Elite', 'Export favoris loadout'],
        more: 7,
        href: `${toolsBase}unlock-all/`,
      },
    ],
  },
  forums: {
    pageTitle: 'Forum de configuration cheats R6S — Loader, raccourcis et guides ESP',
    pageDescription:
      'Forum de configuration : erreurs loader, exclusions antivirus, raccourcis ESP et soft aim, presets radar, réglage triggerbot, multipoint bones, guides rebuild BattlEye et configs post-patch pour PC.',
    eyebrow: 'Forum cheats',
    title: 'Forum d\'instructions cheats',
    subtitle:
      'Fils pas à pas sur R6s Cheats — installation, exclusions antivirus, erreurs loader, raccourcis, ESP, soft aim, presets radar et rebuilds post-patch. Chaque guide est rédigé uniquement pour Windows PC.',
    viewAll: 'Parcourir tous les sujets',
    read: 'Voir le fil',
    posted: 'Publié',
    relatedThreads: 'Fils connexes',
    backToForum: 'Retour au forum',
  },
  toolkit: {
    eyebrow: 'Logiciel',
    title: 'Organisé, facile à configurer',
    subtitle: 'Chaque module est regroupé pour un réglage rapide en milieu de manche sans naviguer dans le chaos.',
    items: [
      { num: '01', id: 'aimbot', label: 'Aimbot', title: 'Une visée qui s\'adapte à votre opérateur', desc: 'Aimbot fluide, triggerbot, limites de FOV et réglage du délai dans un seul onglet visée.' },
      { num: '02', id: 'vision', label: 'Vision', title: 'Un ESP qui reste lisible', desc: 'Filtrez par distance, couleur d\'équipe, type de gadget et sensibilité des alertes drone.' },
      { num: '03', id: 'intel', label: 'Renseignement', title: 'Drones et gadgets sous contrôle', desc: 'Marqueurs drone, alertes pièges et wallhack sur un overlay compact.' },
      { num: '04', id: 'operators', label: 'Opérateurs', title: 'Profils d\'armes par opérateur', desc: 'Enregistrez les scripts de recul Ash, Jäger, Vigil et anchor et changez avec des raccourcis.' },
      { num: '05', id: 'recoil', label: 'Recul', title: 'Automatisation du contrôle du spray', desc: 'Sans recul, réduction de dispersion et profils par arme pour un fragging efficace.' },
      { num: '06', id: 'profiles', label: 'Profils', title: 'Configs pour chaque mode', desc: 'Préréglages séparés ranked, non classé et parties personnalisées avec sauvegarde cloud.' },
    ],
  },
  contact: {
    eyebrow: 'Support',
    title: 'Des questions avant le déploiement ?',
    subtitle: 'Consultez d\'abord la FAQ. Pour les problèmes de compte, HWID ou loader, parcourez les guides avec votre e-mail de commande prêt.',
    asideTitle: 'À inclure lors du dépannage',
    asideItems: [
      { num: '01', title: 'E-mail de commande', desc: 'L\'adresse utilisée lors du paiement sur r6scheats.net ou via notre checkout sécurisé.' },
      { num: '02', title: 'Plateforme', desc: 'Ubisoft Connect sur Windows 10 ou 11 — et la version de votre client Rainbow Six Siege.' },
      { num: '03', title: 'Détail de l\'erreur', desc: 'Capture d\'écran ou message exact du loader ou d\'Ubisoft Connect.' },
    ],
  },
  faq: {
    pageTitle: 'FAQ Cheats R6S — Aimbot, ESP, BattlEye et aide HWID',
    pageDescription:
      'FAQ : réglages FOV et lissage aimbot, toggles ESP et wallhack gadgets, mises à jour patch BattlEye, spoofer HWID, workflows déban UGC, Unlock All et aide au checkout loader pour PC.',
    eyebrow: 'FAQ',
    title: 'Réponses claires avant le paiement.',
    subtitle: 'Compatibilité, bans et accès — sans promesses vagues.',
    viewAll: 'FAQ complète',
    topics: {
      all: 'Tous',
      plans: 'Formules',
      esp: 'Map Hack / ESP',
      scripts: 'Scripts',
      safety: 'Sécurité',
      tools: 'Outils',
      forums: 'Forum',
      setup: 'Installation',
    },
    items: [
      {
        num: '01',
        q: 'Où vérifier si les cheats R6S sont en ligne ?',
        a: 'La bannière de statut en direct est sur r6scheats.net. Vérifiez toujours après une mise à jour Rainbow Six Siege ou BattlEye.',
      },
      {
        num: '02',
        q: 'Que se passe-t-il après l\'achat ?',
        a: 'Votre portail débloque le loader, le guide d\'installation et la bibliothèque de configs via notre checkout sécurisé. Suivez le guide avant de lancer Rainbow Six Siege.',
      },
      {
        num: '03',
        q: 'Puis-je être banni en utilisant des cheats R6S tiers ?',
        a: 'Oui — toute modification comporte un risque. BattlEye et les systèmes de signalement évoluent. Consultez le statut actuel et acceptez le risque avant utilisation.',
      },
      {
        num: '04',
        q: 'Quelles plateformes sont prises en charge ?',
        a: 'Rainbow Six Siege via Ubisoft Connect sur Windows 10/11 64 bits uniquement. macOS et Linux ne sont pas pris en charge.',
      },
      {
        num: '05',
        q: 'Puis-je transférer ma licence sur un nouveau PC ?',
        a: 'Oui — utilisez le reset HWID dans votre portail. Les limites dépendent de votre formule.',
      },
      {
        num: '06',
        q: 'Où sont listés les outils et utilitaires ?',
        a: 'Les formules de cheats, le Spoofer HWID, UGC et Unlock All sont sur r6scheats.net/tools/r6s-cheats avec listes de fonctionnalités et paiement via notre partenaire.',
      },
    ],
  },
  footer: {
    tagline: 'R6s Cheats pour PC — aimbot, soft aim, skeleton ESP, wallhack, radar 2D, triggerbot et loader compatible BattlEye.',
    explore: 'Explorer',
    exploreLinks: [
      { href: '/cheats/', label: 'Aperçu des cheats', ariaLabel: 'Cheats' },
      { href: '/features/', label: 'Liste des fonctionnalités', ariaLabel: 'Fonctionnalités' },
      { href: '/cheats/pro/', label: 'Page aimbot', ariaLabel: 'Aimbot' },
      { href: '/cheats/lite/', label: 'Page ESP', ariaLabel: 'ESP' },
      { href: '/forums/r6s-radar-settings/', label: 'Page radar', ariaLabel: 'Radar' },
      { href: '/forums/', label: 'Forum communautaire', ariaLabel: 'Forums' },
    ],
    helpLegal: 'Aide et mentions légales',
    helpLegalLinks: [
      { href: '/contact/', label: 'Centre d\'aide', ariaLabel: 'Centre d\'aide' },
      { href: '/faq/', label: 'Réponses FAQ', ariaLabel: 'FAQ' },
      { href: '/forums/r6s-patch-rebuild-guide/', label: 'Mises à jour patch', ariaLabel: 'Mises à jour patch' },
      { href: '/forums/r6s-cheat-setup/', label: 'Guides d\'installation', ariaLabel: 'Guides d\'installation' },
      { href: '/forums/r6s-loader-errors/', label: 'Erreurs loader', ariaLabel: 'Erreurs loader' },
    ],
    bottomLinks: [
      { href: '/about/', label: 'À propos', ariaLabel: 'À propos' },
      { href: '/privacy/', label: 'Politique de confidentialité', ariaLabel: 'Politique de confidentialité' },
      { href: '/contact/', label: 'Contact', ariaLabel: 'Contact' },
      { href: '/sitemap.xml', label: 'Plan du site XML', ariaLabel: 'Plan du site XML' },
    ],
    rightsReserved: 'Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    about: 'À propos',
    contact: 'Contact',
  },
  legalPages: {
    about: {
      title: 'À propos des cheats Rainbow Six Siege',
      description:
        'À propos de R6s Cheats — aimbot, ESP, wallhack, radar 2D, triggerbot, spoofer HWID, Unlock All et formules compatibles BattlEye pour PC sur r6scheats.net.',
      sections: [
        {
          heading: 'Qui sommes-nous',
          paragraphs: [
            'R6s Cheats est une ressource axée PC pour les joueurs explorant ESP, aimbot, sans recul et workflows Unlock All. Nous publions des comparatifs de formules, des guides d\'installation et des notes de statut en direct pour évaluer les builds avant le paiement.',
            'Nous ne sommes pas affiliés à Ubisoft Entertainment ou Rainbow Six Siege. Tous les noms de produits sont utilisés à des fins d\'identification uniquement.',
          ],
        },
        {
          heading: 'Ce que nous publions',
          paragraphs: [
            'Notre site couvre les formules Lite, Pro et Elite, les utilitaires HWID, Unlock All et les workflows de récupération de compte. Les fils du forum expliquent les configs sûres en ranked, les vérifications jour de patch et le comportement des mises à jour BattlEye.',
            'Le contenu est mis à jour lors des patchs ou quand les modules du loader changent. Consultez la bannière de statut de la page d\'accueil avant chaque session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Les questions sur la compatibilité, les erreurs loader ou le paiement sont couvertes dans notre FAQ et nos guides d\'installation. Incluez votre e-mail de commande, compte Ubisoft et version Windows lors du dépannage.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Politique de confidentialité',
      description:
        'Comment Rainbow Six Siege Cheats gère les analytics, cookies et données de contact lorsque vous utilisez r6scheats.net.',
      sections: [
        {
          heading: 'Informations que nous collectons',
          paragraphs: [
            'Nous pouvons collecter des analytics web standard tels que pages vues, type d\'appareil, navigateur et région approximative via Google Analytics lorsqu\'activé. Le paiement et la livraison de licence se font sur des pages de checkout externes — nous ne stockons pas les données de carte bancaire sur r6scheats.net.',
          ],
        },
        {
          heading: 'Comment nous utilisons les données',
          paragraphs: [
            'Les analytics nous aident à comprendre quels guides et pages produits sont utiles pour améliorer le contenu et corriger les liens cassés. Les tickets support peuvent conserver l\'adresse e-mail et le contenu du message que vous fournissez jusqu\'à résolution du problème.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Nous utilisons des cookies minimaux requis pour les analytics et l\'attribution affiliée. Vous pouvez bloquer les cookies dans les paramètres de votre navigateur ; le contenu principal du site reste accessible sans eux.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'Pour les questions de confidentialité, consultez cette politique et utilisez la page contact pour les demandes générales du site.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contacter Rainbow Six Siege Cheats',
      description:
        'Support : erreurs loader, reset HWID, statut patch BattlEye, configuration aimbot et ESP, paiement et aide déban UGC pour PC sur r6scheats.net.',
    },
  },
  ui: {
    skipLink: 'Aller au contenu principal',
    browseCheats: 'Essayer maintenant',
    browseCheatsMobile: 'Commencer le paiement',
    homeAria: 'Accueil R6s Cheats',
    checkoutAria: 'Commencer le paiement',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    themeLight: 'Passer en mode clair',
    themeDark: 'Passer en mode sombre',
    get: 'Obtenir',
    view: 'Voir',
    breadcrumbs: {
      home: 'Accueil',
      features: 'Fonctionnalités',
      cheats: 'Cheats',
      tools: 'Outils',
      forums: 'Forums',
      faq: 'FAQ',
    },
    language: 'Langue',
    backToTop: 'Retour en haut ↑',
    backToHome: 'Retour à l\'accueil',
    popular: 'Populaire',
    moreFeatures: 'autres fonctionnalités',
    productDetail: {
      overview: 'Aperçu',
      acquisition: 'Obtention',
      keyCapabilities: 'Fonctionnalités clés',
      keyCapabilitiesLede: 'Ce qui est inclus',
      bestFit: 'Idéal pour',
      step: 'Étape',
      getProduct: 'Obtenir',
      faqEyebrow: 'FAQ',
      faqTitle: 'FAQ',
      faqSubtitle: 'Questions sur les fonctionnalités, l\'installation et le statut actuel.',
    },
  },
};
