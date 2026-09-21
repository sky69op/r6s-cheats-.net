import type { ProductLocaleBundle } from './types';

const sharedGoodToKnow =
  'Rainbow Six Siege et BattlEye reçoivent des mises à jour fréquentes. Confirmez la disponibilité des modules sur le panneau de statut en direct sur r6scheats.net avant d\'acheter ou de lancer. Le comportement de l\'overlay peut différer en parties personnalisées, replays et mode spectateur après les patchs.';

const sharedLimitations =
  'Les logiciels tiers dans Rainbow Six Siege peuvent enfreindre les Conditions d\'utilisation d\'Ubisoft et entraîner des bans BattlEye ou des sanctions de compte. Vous utilisez ce logiciel à vos propres risques. La compatibilité et la disponibilité peuvent changer après des mises à jour du jeu, de BattlEye ou de Windows sans préavis.';

const r6sSystemRequirements = [
  { icon: 'windows' as const, text: 'Édition 64 bits de Windows 10 ou Windows 11 prise en charge.' },
  { icon: 'settings' as const, text: 'Client Rainbow Six Siege actuel via Ubisoft Connect avec les derniers patchs appliqués.' },
  { icon: 'settings' as const, text: 'Accès administrateur pour l\'installation du loader et les mises à jour de patch.' },
  { icon: 'wifi' as const, text: 'Connexion internet stable pour l\'accès au portail et la livraison des patchs.' },
  { icon: 'cpu' as const, text: 'Un système répondant aux exigences matérielles publiées de Rainbow Six Siege.' },
];

const acquisitionSteps = [
  {
    num: '01',
    title: 'Vérifier le statut actuel',
    desc: 'Consultez la bannière en direct sur r6scheats.net avant l\'achat—surtout après une mise à jour Rainbow Six Siege ou BattlEye.',
  },
  {
    num: '02',
    title: 'Choisir votre formule d\'accès',
    desc: 'Sélectionnez Lite, Pro, Elite ou l\'utilitaire adapté à votre objectif. L\'accès aux modules varie selon la formule—comparez la liste des fonctionnalités avant le checkout via notre checkout sécurisé.',
  },
  {
    num: '03',
    title: 'Contacter l\'équipe',
    desc: 'Confirmez la disponibilité, la plateforme Ubisoft Connect et les détails de paiement—gardez votre email de commande prêt avant le checkout.',
  },
  {
    num: '04',
    title: 'Suivre la configuration guidée',
    desc: 'Utilisez uniquement le portail opérateurs, le loader de patch et le guide de setup. Testez en partie personnalisée, chargez les préréglages, puis lancez le ranked ou le non classé.',
  },
];

const hwidSpooferAcquisitionSteps = [
  {
    num: '01',
    title: 'Confirmer un flag matériel',
    desc: 'Si un compte Ubisoft neuf échoue instantanément sur ce PC mais fonctionne sur une autre machine, BattlEye a probablement flaggé votre hardware ID — pas seulement un compte. Les bans compte seul passent par le parcours d\'appel UGC.',
  },
  {
    num: '02',
    title: 'Acheter et ouvrir le portail',
    desc: 'Payez HWID Spoofer sur r6scheats.net et accédez au portail opérateurs avec votre email de livraison. Téléchargez uniquement depuis le portail — jamais via des liens Discord aléatoires.',
  },
  {
    num: '03',
    title: 'Exécuter la checklist pre-spoof',
    desc: 'Créez un point de restauration Windows, fermez Rainbow Six Siege et Ubisoft Connect, supprimez les anciens spoofers, ajoutez des exclusions AV pour le dossier portail et lancez le scan de compatibilité avant de changer les numéros de disque ou MAC.',
  },
  {
    num: '04',
    title: 'Appliquer, vérifier et redémarrer à froid',
    desc: 'Suivez le workflow spoof du portail, redémarrez à froid quand demandé et vérifiez le rapport de différences d\'identifiants. Ce n\'est qu\'après vérification que vous lancez Siege en partie personnalisée avec un compte neuf — avant le ranked.',
  },
];

const ugcAcquisitionSteps = [
  {
    num: '01',
    title: 'Identifier l\'émetteur du ban',
    desc: 'Lisez l\'avis attentivement : un BattlEye « Global Ban #ID » va au support BattlEye ; sanctions Ubisoft, retenues sécurité ou pénalités chat passent par Ubisoft Help. UGC route chaque type de dossier différemment.',
  },
  {
    num: '02',
    title: 'Rassembler les preuves du dossier',
    desc: 'Réunissez l\'écran ou email de ban, Global Ban ID si affiché, nom Ubisoft Connect, chronologie, liste des logiciels installés et toute preuve de connexion ou compromission avant le checkout.',
  },
  {
    num: '03',
    title: 'Acheter et construire votre workflow',
    desc: 'Payez UGC Unban Tool sur r6scheats.net, ouvrez le tableau de bord des dossiers et assemblez votre appel avec le bon modèle — faux positif, compromission de compte ou litige de restriction.',
  },
  {
    num: '04',
    title: 'Envoyer une fois et suivre les relances',
    desc: 'Envoyez un seul appel via le bon canal officiel (Contact BattlEye ou ticket Ubisoft Help — pas le chat live). Enregistrez l\'envoi dans UGC et surveillez l\'email, spam inclus, pour les réponses du réviseur.',
  },
];

const unlockAllAcquisitionSteps = [
  {
    num: '01',
    title: 'Choisir standalone ou bundle Elite',
    desc: 'Unlock All est inclus avec les cheats Elite. Achetez standalone ici si vous voulez seulement un aperçu cosmétique local — opérateurs, skins elite, charms et accessoires — sans modules de combat.',
  },
  {
    num: '02',
    title: 'Checkout et livraison portail',
    desc: 'Finalisez le checkout sur r6scheats.net, confirmez votre email de commande et téléchargez la build Unlock All depuis le portail opérateurs une fois la livraison effectuée.',
  },
  {
    num: '03',
    title: 'Préparer Siege pour l\'aperçu local',
    desc: 'Mettez Rainbow Six Siege à jour via Ubisoft Connect, lancez le loader Unlock All avant le menu principal et utilisez une partie personnalisée ou une situation d\'entraînement pour que les invites de sauvegarde cloud n\'écrasent pas votre session de preview.',
  },
  {
    num: '04',
    title: 'Parcourir, favoriser et exporter',
    desc: 'Cherchez dans le catalogue cosmétique, prévisualisez opérateurs et skins elite uniquement sur votre client, enregistrez vos favoris et exportez les presets de loadout depuis le portail. Les autres joueurs en lobby voient toujours votre inventaire Ubisoft réel.',
  },
];

export const frProductContent: ProductLocaleBundle = {
  lite: {
    overview: {
      title: 'Conçu autour d\'un workflow d\'awareness R6S clair',
      paragraphs: [
        'R6S Lite se concentre sur l\'ESP joueurs, le localisateur de gadgets, les alertes drone et l\'overlay minimap—tout ce qu\'il faut pour suivre les roamers et le contrôle de manche sans automatisation d\'aimbot. Les modules sont regroupés dans le portail pour ajuster distance, couleurs et mode stream-proof avant votre première file.',
        'Lite est la voie d\'entrée pour les joueurs ranked et non classés qui veulent de l\'intel avec un risque de report minimal. Pas d\'aimbot, pas de triggerbot—juste des overlays lisibles maintenus à chaque patch sur r6scheats.net.',
      ],
    },
    about: [
      {
        type: 'p',
        text: 'R6S Lite est pensé pour les joueurs qui veulent l\'intel en premier. En ranked, connaître les positions ennemies, le placement des gadgets et les emplacements de drones gagne plus de manches que la visée brute—Lite vous donne cet avantage sans automatisation d\'aimbot.',
      },
      { type: 'h2', text: 'Sûr pour le ranked par conception' },
      {
        type: 'p',
        text: 'Lite ignore complètement les modules aimbot et triggerbot. Votre gameplay reste naturel tandis que l\'ESP, le suivi des gadgets et les alertes drone vous informent. Le mode stream-proof masque les overlays à la capture OBS—idéal pour les créateurs de contenu.',
      },
    ],
    body: [
      { type: 'h2', text: 'Modules inclus' },
      {
        type: 'p',
        text: 'ESP joueurs avec distance et tags de nom, localisateur de gadgets et pièges, alertes de position drone et masquage d\'overlay stream-safe. Préréglages ranked et non classé dans le portail—chargez-les avant votre première file.',
      },
      { type: 'h2', text: 'Chemin de mise à niveau' },
      {
        type: 'p',
        text: 'Les détenteurs de licence Lite peuvent passer à Pro ou Elite via le portail sans perdre leurs sauvegardes de config. Comparez les formules sur la page produit principale avant le checkout via notre checkout sécurisé.',
      },
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    fullFeatures: [
      'ESP joueurs et boîtes opérateurs',
      'Localisateur de gadgets et pièges',
      'Alertes de position drone',
      'Tags de nom opérateurs',
      'Overlay minimap',
      'Mode overlay stream-proof',
      'Affichages de distance',
      'Filtre couleur d\'équipe',
      'Filtre défenseur/attaquant',
      'Suivi des cooldowns gadgets',
      'Config préréglage non classé',
      'Config préréglage ranked',
      'Sauvegarde config cloud',
      'Auto-updater de patch',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps,
    acquisitionTitle: 'Comment obtenir {name}',
  },
  pro: {
    overview: {
      title: 'Conçu autour d\'un workflow aimbot R6S clair',
      paragraphs: [
        'R6S Pro ajoute aimbot fluide, sans recul et triggerbot par-dessus tous les modules Lite. Profils d\'armes, réglage du lissage et touches d\'activation dans un onglet aim—calibré pour les lobbies ranked quand vous démarrez avec les préréglages du portail, pas les sliders au max.',
        'Pro est la formule la plus populaire : assez de puissance de feu pour ranked et non classé sans limites de places Elite. Les limites de FOV et le lissage vous gardent efficace en combat tandis que la visée reste humaine aux valeurs par défaut.',
      ],
    },
    about: [
      {
        type: 'p',
        text: 'R6S Pro est le sweet spot pour les grinders ranked. Aimbot, sans recul et triggerbot vous aident à gagner les duels sans patterns évidents de bot—quand vous réglez le lissage avec nos préréglages du portail.',
      },
      { type: 'h2', text: 'Visée + awareness combinés' },
      {
        type: 'p',
        text: 'Pro hérite de tous les modules Lite et ajoute aimbot fluide, contrôle du recul, triggerbot et limites de FOV. Vous voyez le combat avant qu\'il commence et le gagnez avec des réglages de visée qui restent humains aux valeurs par défaut.',
      },
    ],
    body: [
      { type: 'h2', text: 'Visée et automatisation' },
      {
        type: 'p',
        text: 'Aimbot fluide, contrôle sans recul, triggerbot avec limites de FOV et sélection d\'os. Le lissage ajuste le timing de visée pour que les réglages restent naturels en ranked. Démarrez avec les préréglages du portail, pas les sliders au max.',
      },
      { type: 'h2', text: 'Combinaison recommandée' },
      {
        type: 'p',
        text: 'Pro est la formule la plus populaire sur r6scheats.net—assez de puissance pour les lobbies haut rang sans limites de places Elite. Consultez notre fil aimbot sur les forums avant votre première session ranked.',
      },
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    fullFeatures: [
      'Tous les modules ESP Lite',
      'Aimbot fluide',
      'Contrôle sans recul',
      'Triggerbot',
      'Sélecteur FOV et os',
      'Profils spécifiques par arme',
      'Réduction de dispersion',
      'Réglage du lissage',
      'Profils de visée par opérateur',
      'Intégration alertes drone',
      'Préréglages sûrs ranked par défaut',
      'Profil test partie personnalisée',
      'Sauvegarde config cloud',
      'Auto-updater de patch',
      'Guides setup portail',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps,
    acquisitionTitle: 'Comment obtenir {name}',
  },
  elite: {
    overview: {
      title: 'Conçu autour d\'un workflow opérateur R6S complet',
      paragraphs: [
        'R6S Elite est le build privé avec wallhack complet, hack drone, Unlock All et livraison prioritaire de patch. Tous les modules Lite et Pro inclus—pas de plafonds, pas d\'upsells dans le loader.',
        'Les places Elite sont limitées pour garder des cycles de patch rapides et des builds maintenables. Le support dev direct vous aide à régler des profils conservateurs avant le ranked. Vérifiez la bannière de statut sur r6scheats.net avant l\'achat.',
      ],
    },
    about: [
      {
        type: 'p',
        text: 'R6S Elite est le build privé pour ceux qui veulent tout—wallhack complet, hack drone, Unlock All et support dev direct. Des places limitées gardent le build maintenable et les cycles de patch rapides.',
      },
      { type: 'h2', text: 'Utilisez Elite avec responsabilité' },
      {
        type: 'p',
        text: 'La puissance Elite exige des profils disciplinés. Testez en parties personnalisées, démarrez avec les préréglages conservateurs du portail et montez progressivement sur des jours—pas des minutes. Les guides setup Elite vous aident à régler avant votre première file ranked.',
      },
    ],
    body: [
      { type: 'h2', text: 'Suite wallhack et intel complète' },
      {
        type: 'p',
        text: 'Wallhack complet, hack drone, Unlock All et module speed hack. Testez en parties personnalisées avant le ranked—la puissance Elite exige des profils disciplinés, pas des réglages rage.',
      },
      { type: 'h2', text: 'Disponibilité' },
      {
        type: 'p',
        text: 'Elite apparaît en places limitées sur la bannière de statut. Consultez la page de statut si le checkout est bloqué—confirmez la disponibilité des places avant l\'achat.',
      },
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    fullFeatures: [
      'Tous les modules Lite + Pro',
      'Suite wallhack complète',
      'Hack drone',
      'Module speed hack',
      'Unlock All opérateurs',
      'File prioritaire de patch',
      'Support dev direct',
      'Préréglages conservateurs Elite',
      'Sauvegarde config cloud',
      'Auto-updater de patch',
      'Accès places privées',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps,
    acquisitionTitle: 'Comment obtenir {name}',
  },
  'hwid-spoofer': {
    overview: {
      title: 'Conçu autour d\'un workflow de récupération matérielle clair',
      paragraphs: [
        'Le HWID Spoofer aide les joueurs Rainbow Six Siege quand BattlEye flaggue le matériel PC mais le compte Ubisoft reste propre. Outils de profil disque et MAC avec checklist point de restauration, scan de compatibilité et étapes de vérification post-spoof.',
        'Utilisez cette voie quand des comptes neufs échouent instantanément sur une machine mais fonctionnent ailleurs—pas pour les cas BattlEye compte uniquement. Après vérification, lancez Rainbow Six Siege en partie personnalisée avec un compte Ubisoft neuf—avant le ranked.',
      ],
    },
    body: [
      { type: 'h2', text: 'Quand en avoir besoin' },
      {
        type: 'p',
        text: 'Utilisez-le quand des comptes Ubisoft neufs échouent instantanément sur un PC mais fonctionnent ailleurs—enforcement HWID classique. Ne l\'utilisez pas pour les cas BattlEye compte uniquement ; consultez [UGC](/tools/r6s-cheats/ugc/) à la place.',
      },
      { type: 'h2', text: 'Workflow complet' },
      {
        type: 'p',
        text: 'Point de restauration, nettoyage drivers, application du spoof, redémarrage à froid, vérification des identifiants, puis test de connexion en partie personnalisée avec un compte Ubisoft neuf. La checklist complète est dans le portail et notre fil forum HWID.',
      },
    ],
    goodToKnow:
      'Lancez le scan de compatibilité dans le portail avant le spoofing. Créez d\'abord un point de restauration Windows. Vérifiez que les identifiants ont changé après un redémarrage à froid avant de lancer Rainbow Six Siege.',
    limitations:
      'Le spoofing n\'aide pas pour les cas BattlEye compte uniquement. Ne combinez jamais deux outils de spoof. Les PC partagés ou professionnels peuvent ne pas convenir. Vous assumez tous les risques des changements au niveau driver.',
    fullFeatures: [
      'Outils profil série disque',
      'Rotation adresse MAC',
      'Checklist point de restauration',
      'Scan de compatibilité',
      'Détection conflits drivers',
      'Vérification post-spoof',
      'Rapport diff identifiants',
      'Guide redémarrage à froid',
      'Workflow pas à pas portail',
      'Support récupération portail',
    ],
    systemRequirements: [
      { icon: 'windows', text: 'Windows 10 ou 11 64 bits avec accès administrateur.' },
      { icon: 'refresh', text: 'Capacité à créer un point de restauration système avant exécution.' },
      { icon: 'shield', text: 'Suivez le guide setup du portail avant de lancer Rainbow Six Siege après le spoofing.' },
      { icon: 'wifi', text: 'Connexion stable pour les outils de vérification du portail.' },
    ],
    acquisitionSteps: hwidSpooferAcquisitionSteps,
    acquisitionTitle: 'Comment obtenir {name}',
  },
  ugc: {
    overview: {
      title: 'Conçu autour de workflows de récupération de compte et d\'appel',
      paragraphs: [
        'UGC (Unban & Governance Control) vous aide à récupérer des comptes gaming, sociaux et marketplace restreints avec des workflows d\'appel structurés et de l\'automatisation—pas de garanties de déban instantané.',
        'Construisez des parcours de litige personnalisés, suivez le statut des dossiers et reconstruisez votre présence avec des outils intelligents de gestion des restrictions. Les guides du portail vous accompagnent étape par étape quand vous avez besoin d\'aide concrète.',
      ],
    },
    body: [
      { type: 'h2', text: 'Ce que couvre UGC' },
      {
        type: 'p',
        text: 'UGC (Unban & Governance Control) est un espace de travail d\'appel pour restrictions Ubisoft, bans BattlEye et flags de sécurité. Créez des workflows personnalisés, automatisez les étapes de litige et suivez le statut depuis un tableau de bord—pas un service de déban garanti.',
      },
      { type: 'h2', text: 'Attentes réalistes' },
      {
        type: 'p',
        text: 'Certains bans BattlEye ne peuvent pas être annulés. UGC organise les preuves et relances pour examen Ubisoft. Combinez avec [HWID Spoofer](/tools/r6s-cheats/hwid-spoofer/) quand le matériel est flaggué, ou un nouveau compte quand la réputation est brûlée.',
      },
    ],
    goodToKnow:
      'Rassemblez email de commande, détails du compte plateforme et captures de la restriction avant d\'ouvrir un ticket. UGC structure les appels—il ne contourne pas l\'examen de la plateforme.',
    limitations:
      'UGC ne garantit pas la restauration du compte. Les résultats varient selon le type de dossier. Les bans BattlEye permanents peuvent nécessiter un nouveau compte plutôt qu\'un appel.',
    fullFeatures: [
      'Workflows d\'appel personnalisés',
      'Automatisation litiges restrictions',
      'Modèles documentation dossier',
      'Tableau de bord suivi statut',
      'Guide vérification identité',
      'Structure upload preuves',
      'Tracker chronologie',
      'Modèles réponses de relance',
      'Support multi-plateforme',
    ],
    systemRequirements: [
      { icon: 'mail', text: 'Email de commande utilisé au checkout sur r6scheats.net.' },
      { icon: 'shield', text: 'Détails du compte et notification de ban ou restriction si disponible.' },
      { icon: 'wifi', text: 'Accès internet pour support portail et tableau de bord dossiers.' },
    ],
    acquisitionSteps: ugcAcquisitionSteps,
    acquisitionTitle: 'Comment obtenir {name}',
  },
  'unlock-all': {
    overview: {
      title: 'Conçu autour d\'un workflow de prévisualisation cosmétique locale',
      paragraphs: [
        'Unlock All vous permet de parcourir opérateurs, skins elite et charms d\'armes exclusifs localement dans Rainbow Six Siege—catalogue searchable, favoris et export de loadouts sans modifier les achats Ubisoft en direct.',
        'Les cosmétiques s\'affichent sur votre client pour tests et création de contenu. Les autres joueurs voient votre inventaire réel, pas les skins en prévisualisation. Inclus gratuitement avec Elite ; disponible seul pour prévisualisation cosmétique sans modules de combat.',
      ],
    },
    body: [
      { type: 'h2', text: 'Prévisualisation locale uniquement' },
      {
        type: 'p',
        text: 'Opérateurs et skins s\'affichent sur votre client pour tests et création de contenu. Les autres joueurs dans votre lobby voient votre inventaire réel, pas les skins en prévisualisation.',
      },
      { type: 'h2', text: 'Inclus avec Elite' },
      {
        type: 'p',
        text: 'Unlock All est inclus dans la formule Elite. Achetez-le seul ici si vous voulez la prévisualisation cosmétique sans les modules de combat complets.',
      },
    ],
    goodToKnow:
      'Unlock All prévisualise opérateurs et skins localement sur votre client. Les autres joueurs dans votre lobby voient votre inventaire réel—pas les skins en prévisualisation. Inclus dans la formule Elite.',
    limitations:
      'Prévisualisation locale uniquement—ne modifie pas l\'inventaire Ubisoft ni l\'état du store. Les autres joueurs ne peuvent pas voir les skins elite ou opérateurs prévisualisés.',
    fullFeatures: [
      'Prévisualisation déblocage opérateurs',
      'Prévisualisation skins elite',
      'Personnaliseur armes et charms',
      'Éditeur charms et accessoires',
      'Échange thème HUD',
      'Remplacement carte opérateur',
      'Liste favoris',
      'Export loadout',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps: unlockAllAcquisitionSteps,
    acquisitionTitle: 'Comment obtenir {name}',
  },
};
