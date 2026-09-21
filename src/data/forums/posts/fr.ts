import type { ForumPostFull } from '../types';

/** Les fils du forum reprennent la structure des instructions de cheats WarDogs — contenu Rainbow Six Siege uniquement. */
export const forumPosts: ForumPostFull[] = [
  {
    tag: 'Guide',
    featured: true,
    title: 'Meilleurs R6 Cheats 2026 — Lite vs Pro vs Elite',
    slug: 'best-r6-cheats-2026',
    desc: 'Comparatif best R6 cheats 2026 pour Rainbow Six Siege PC — aimbot, ESP wallhack, HWID spoofer, unlock all et vitesse de patch BattlEye. Comment Lite, Pro et Elite de r6scheats.net se comparent aux listings typiques de revendeurs.',
    date: 'Sep 18, 2026',
    readTime: '6 min de lecture',
    body: [
      {
        type: 'p',
        text: 'Chercher **best R6 cheats 2026** mène souvent à des sites revendeurs qui relistent les mêmes loaders avec markup et notes de patch plus lentes. r6scheats.net vend en direct — un loader, trois tiers, plus des outils **HWID spoofer** et **unlock all** autonomes quand vous avez besoin de récupération matérielle ou de preview cosmétique hors abonnement cheat.',
      },
      { type: 'h2', text: 'Choix rapide de tier' },
      {
        type: 'ul',
        items: [
          '**Lite** — ESP, gadget wallhack, radar 2D ; pas d\'**aimbot**',
          '**Pro** — Lite plus **aimbot**, soft aim, triggerbot et no recoil',
          '**Elite** — build privée avec **unlock all**, drone hack et reloads BattlEye prioritaires',
        ],
      },
      { type: 'h2', text: 'Comparatif best R6 cheats 2026' },
      {
        type: 'table',
        headers: ['Fonctionnalité', 'Lite', 'Pro', 'Elite', 'Revendeur typique'],
        rows: [
          ['ESP / wallhack', 'Oui', 'Oui', 'Complet', 'Varie selon listing'],
          ['Aimbot / soft aim', 'Non', 'Oui', 'Oui', 'Builds souvent obsolètes'],
          ['Unlock all', 'Non', 'Non', 'Oui', 'Rarement inclus'],
          ['Chemin HWID spoofer', 'Lien portal', 'Lien portal', 'Support prioritaire', 'Souvent non mentionné'],
          ['Vitesse patch BattlEye', 'Bannière statut live', 'Bannière statut live', 'Reload prioritaire', 'Notes revendeur retardées'],
          ['Support direct', 'Standard', 'Standard', 'Elite dev Discord', 'Ticket tiers uniquement'],
        ],
      },
      { type: 'h2', text: 'Choix de tier aimbot en 2026' },
      {
        type: 'p',
        text: 'BattlEye en 2026 flag rapidement le comportement **aimbot** FOV ouvert évident. Pro et Elite livrent un soft aim ranked-safe avec visible check activé par défaut — pas de modes snap bruts. Première config : [Aimbot Setup](/forums/r6s-aimbot-setup/). Choisissez **Lite** si vous voulez uniquement l\'intel ESP et refusez totalement les modules **aimbot**.',
      },
      { type: 'h2', text: 'HWID et unlock all — ce que les revendeurs omettent' },
      {
        type: 'p',
        text: 'La plupart des pages **best R6 cheats 2026** revendeurs ignorent la récupération **HWID**. Quand des comptes Ubisoft neufs échouent instantanément sur un PC, il faut un workflow **HWID spoofer** — pas une autre clé cheat. Guide : [HWID Spoofer Guide](/forums/r6s-hwid-spoofer-guide/). **Unlock all** pour preview locale opérateurs et skins elite est dans Elite ; les revendeurs le regroupent rarement. Guide : [Unlock All Guide](/forums/r6s-unlock-all-guide/).',
      },
      { type: 'h2', text: 'Avant d\'acheter chez un revendeur' },
      {
        type: 'ol',
        items: [
          'Confirmez si le vendeur est direct ou revendeur avec markup — la vitesse de patch diffère',
          'Vérifiez le support **aimbot**, **HWID spoofer** et **unlock all** avant checkout',
          'Lisez la bannière statut live sur r6scheats.net après chaque patch Siege ou BattlEye',
          'Comparez les tiers officiels : [Lite](/cheats/lite/), [Pro](/cheats/pro/), [Elite](/cheats/elite/)',
        ],
      },
      { type: 'h2', text: 'Nos picks 2026' },
      {
        type: 'p',
        text: '**Best R6 cheats 2026 pour la plupart des joueurs ranked :** **Pro** — ESP plus **aimbot** sans limites de slots Elite. **Meilleur bundle premium :** **Elite** quand vous voulez **unlock all**, drone hack et reloads les plus rapides. **Intel seul :** **Lite** si vous n\'utiliserez pas **aimbot** du tout.',
      },
    ],
  },
  {
    tag: 'Installation',
    title: 'Configuration antivirus pour cheats R6S',
    slug: 'r6s-antivirus-setup',
    desc: 'Windows Defender et les antivirus tiers signalent souvent les loaders R6s Cheats pour Rainbow Six Siege parce qu\'ils s\'accrochent à un processus protégé par BattlEye. Ce guide r6scheats.net vous accompagne pour les exclusions de dossiers sous Windows 10 et 11 afin que votre loader s\'installe proprement et injecte avant la file.',
    date: 'Sep 14, 2026',
    readTime: '4 min de lecture',
    body: [
      {
        type: 'p',
        text: 'Les loaders de cheats pour Rainbow Six Siege sont souvent signalés comme suspects parce qu\'ils s\'injectent dans un jeu protégé par BattlEye. Cela ne signifie pas toujours que le fichier est malveillant — mais vous devez quand même télécharger uniquement depuis l\'e-mail de livraison r6scheats.net et jamais depuis des liens Discord aléatoires.',
      },
      { type: 'h2', text: 'Exclusions Windows Defender' },
      {
        type: 'ol',
        items: [
          'Ouvrez **Sécurité Windows → Protection contre les virus et menaces → Gérer les paramètres**',
          'Faites défiler jusqu\'à **Exclusions → Ajouter une exclusion → Dossier**',
          'Ajoutez le dossier où vous avez extrait le loader (pas le dossier d\'installation de Siege)',
          'Répétez pour le `.exe` du loader si Defender l\'a déjà mis en quarantaine — restaurez d\'abord, puis excluez',
        ],
      },
      { type: 'h2', text: 'Antivirus tiers' },
      {
        type: 'p',
        text: 'Avast, AVG, Bitdefender et Norton bloquent souvent les injecteurs plus fortement que Defender. Désactivez brièvement le bouclier en temps réel lors de la première installation, ou ajoutez la même exclusion de dossier. Réactivez la protection une fois le loader en liste blanche.',
      },
      { type: 'h2', text: 'Pourquoi BattlEye déclenche les scans antivirus' },
      {
        type: 'p',
        text: 'BattlEye surveille l\'injection mémoire dans Rainbow Six Siege — les loaders légitimes R6s Cheats utilisent les mêmes techniques bas niveau que l\'heuristique antivirus signale comme suspectes. Les builds officielles de r6scheats.net sont scannées avant release ; vérifiez votre hash dans le portail de livraison si Defender continue la quarantaine après exclusions. Parcours complet : [Configuration des cheats](/forums/r6s-cheat-setup/).',
      },
      { type: 'h2', text: 'Avant d\'injecter' },
      {
        type: 'p',
        text: 'Terminez d\'abord les exclusions, puis suivez [Configuration des cheats Rainbow Six Siege](/forums/r6s-cheat-setup/). Si le loader échoue encore, consultez [Erreurs du loader](/forums/r6s-loader-errors/).',
      },
    ],
  },
  {
    tag: 'Installation',
    title: 'Configuration des cheats R6S',
    slug: 'r6s-cheat-setup',
    desc: 'Installation pas à pas R6s Cheats pour Rainbow Six Siege — Lite ESP, Pro aimbot, Elite unlock all. E-mail de livraison r6scheats.net jusqu\'à la première injection et menu en jeu sur PC Windows avec builds compatibles BattlEye.',
    date: 'Sep 14, 2026',
    readTime: '5 min de lecture',
    body: [
      { type: 'h2', text: 'Obtenez votre licence' },
      {
        type: 'p',
        text: 'Une fois le paiement validé, votre licence arrive par e-mail. Conservez l\'ID de commande pour le support. **Lite** active l\'ESP uniquement ; **Pro** ajoute les modules **aimbot** ; **Elite** inclut **unlock all** et toutes les fonctions combat. Comparez les tiers sur [Cheats Rainbow Six Siege](/cheats/) ou lisez [Meilleurs R6 Cheats 2026](/forums/best-r6-cheats-2026/).',
      },
      { type: 'h2', text: 'Installez le loader' },
      {
        type: 'p',
        text: 'Téléchargez le loader depuis votre e-mail de livraison. Exécutez-le en tant qu\'administrateur sur PC Windows. Collez votre clé de licence lorsque demandé. Si Windows bloque le fichier, complétez la [Configuration antivirus](/forums/r6s-antivirus-setup/) avant de réessayer.',
      },
      { type: 'h2', text: 'Premier lancement' },
      {
        type: 'p',
        text: 'Cliquez sur injecter ou lancer dans le loader, puis démarrez Rainbow Six Siege via Ubisoft Connect. Ouvrez le menu de cheats avec **INSERT** (ou votre touche assignée). Ensuite : [Comment utiliser les cheats Rainbow Six Siege](/forums/how-to-use-r6s-cheats/) et la liste des [Raccourcis clavier](/forums/r6s-cheat-hotkeys/).',
      },
      { type: 'h2', text: 'Ordre de lancement Ubisoft Connect' },
      {
        type: 'p',
        text: 'Injectez via le loader r6scheats.net **avant** que Siege n\'atteigne le menu principal — BattlEye s\'initialise tôt dans la séquence de boot. Ne lancez jamais Siege en premier ni n\'injectez tard. Les conflits overlay Steam/Ubisoft sont rares, fermez les launchers inutiles si l\'inject bloque. Réglage des fonctions : [Utiliser les cheats Rainbow Six Siege](/forums/how-to-use-r6s-cheats/).',
      },
      { type: 'h2', text: 'Si la configuration échoue' },
      {
        type: 'p',
        text: 'Consultez [Erreurs du loader](/forums/r6s-loader-errors/). Si chaque compte Ubisoft neuf échoue sur ce PC, BattlEye a peut-être flaggé votre **HWID** — consultez [HWID Spoofer Guide](/forums/r6s-hwid-spoofer-guide/). Contactez le support avec votre ID de commande et le texte d\'erreur.',
      },
    ],
  },
  {
    tag: 'Instructions',
    title: 'Comment utiliser les cheats R6S',
    slug: 'how-to-use-r6s-cheats',
    desc: 'Comment utiliser R6s Cheats dans Rainbow Six Siege — injection loader, aimbot, ESP, unlock all et modules en jeu par match. Ranked et non classé sur PC Windows via r6scheats.net.',
    date: 'Sep 14, 2026',
    readTime: '4 min de lecture',
    body: [
      {
        type: 'p',
        text: 'Utilisez un ou deux modules à la fois jusqu\'à connaître leur ressenti dans Siege. Les joueurs ranked commencent généralement avec l\'ESP seul, puis ajoutent **aimbot** (soft aim sur Pro/Elite) ou no recoil après tests unranked. Le preview **unlock all** va en custom games — pas dans votre première file ranked.',
      },
      { type: 'h2', text: 'Déroulement typique d\'une session' },
      {
        type: 'ol',
        items: [
          'Lancez le loader en admin et injectez avant que Siege n\'atteigne le menu principal',
          'Ouvrez le menu (**INSERT** par défaut) et chargez un profil enregistré ou utilisez les valeurs par défaut',
          'Activez l\'**ESP** pour le renseignement en phase drone — tenez les angles, ne préfirez pas chaque mur',
          'Activez **aimbot** / soft aim ou **no recoil** uniquement quand vous êtes prêt pour l\'automatisation des gunfights',
          'Désactivez les fonctions lourdes entre les manches si vous enregistrez ou streamez',
        ],
      },
      { type: 'h2', text: 'Discipline en phase drone' },
      {
        type: 'p',
        text: 'Utilisez l\'ESP r6scheats.net en phase prep pour tracker les roamers, pas pour préfirer chaque mur mou — les reports montent quand le feed de kills paraît impossible. Marquez les rotations mentalement et désactivez les modules aim lourds jusqu\'à la phase action. Référence menu : [Guide du menu de cheats](/forums/r6s-cheat-menu-guide/).',
      },
      { type: 'h2', text: 'Habitudes en ranked' },
      {
        type: 'p',
        text: 'Vérifiez la bannière de statut du site avant de lancer la file après un patch Siege ou BattlEye. Un FOV et un lissage conservateurs valent mieux que le max dès le premier jour. Détails du menu : [Guide du menu de cheats](/forums/r6s-cheat-menu-guide/).',
      },
    ],
  },
  {
    tag: 'Dépannage',
    title: 'Guide de reconstruction après patch R6S',
    slug: 'r6s-patch-rebuild-guide',
    desc: 'Quand Ubisoft patch Rainbow Six Siege ou que BattlEye se met à jour, les anciennes builds loader R6s Cheats cessent d\'injecter. Suivez cette checklist r6scheats.net pour récupérer la build la plus récente compatible BattlEye avant de relancer le ranked.',
    date: 'Sep 15, 2026',
    readTime: '4 min de lecture',
    body: [
      {
        type: 'p',
        text: 'Quand Ubisoft déploie un patch saisonnier ou que BattlEye se met à jour, le loader d\'hier peut cesser d\'injecter. Ne lancez pas la file ranked tant que le statut du site n\'est pas vert pour votre niveau.',
      },
      { type: 'h2', text: 'Checklist post-patch' },
      {
        type: 'ol',
        items: [
          'Mettez Rainbow Six Siege entièrement à jour via Ubisoft Connect',
          'Lisez la bannière de statut sur r6scheats.net pour Lite, Pro ou Elite',
          'Téléchargez la dernière build du loader depuis votre portail ou l\'annonce Discord',
          'Chargez des profils conservateurs — retestez le FOV **aimbot**, soft aim étroit, portée ESP réduite',
          'Jouez une Quick Match avant le ranked',
        ],
      },
      { type: 'h2', text: 'Vérifiez d\'abord le statut r6scheats.net' },
      {
        type: 'p',
        text: 'La bannière sur r6scheats.net se met à jour en quelques heures après un patch Siege ou BattlEye — vert signifie que votre niveau est validé pour Quick Match et ranked. Ne lancez pas le loader d\'hier en espérant qu\'il marche encore ; injecter une build périmée est un vecteur de ban post-patch fréquent. Correctifs détaillés : [Erreurs du loader](/forums/r6s-loader-errors/).',
      },
      { type: 'h2', text: 'Statut jaune ou rouge' },
      {
        type: 'p',
        text: '**Jaune** — utilisable avec réserves ; lisez les notes Discord. **Rouge** — attendez les instructions du staff pour recharger. Injecter en statut rouge, c\'est la façon la plus rapide de se faire flagger.',
      },
    ],
  },
  {
    tag: 'Instructions',
    title: 'Guide du menu de cheats R6S',
    slug: 'r6s-cheat-menu-guide',
    desc: 'Menu R6s Cheats pour Rainbow Six Siege onglet par onglet — aimbot, ESP, unlock all, radar, misc et profils enregistrés pour que le premier lancement depuis r6scheats.net ne soit pas du guesswork.',
    date: 'Sep 15, 2026',
    readTime: '5 min de lecture',
    body: [
      { type: 'h2', text: 'Onglet Aimbot / Aim' },
      {
        type: 'p',
        text: 'Modules **aimbot** sur Pro et Elite : soft aim, triggerbot, FOV, lissage, visible check et priorité d\'os. Associez au no recoil pour les opérateurs d\'entrée. Premier lancement : [Aimbot Setup](/forums/r6s-aimbot-setup/). Réglage : [Paramètres soft aim](/forums/r6s-soft-aim-settings/).',
      },
      { type: 'h2', text: 'Onglet Unlock All (Elite)' },
      {
        type: 'p',
        text: 'Le panneau **unlock all** prévisualise opérateurs, skins elite et charms localement — les autres joueurs voient toujours votre inventaire réel. Pas sur Lite ni Pro. Guide complet : [Unlock All Guide](/forums/r6s-unlock-all-guide/).',
      },
      { type: 'h2', text: 'Onglet Visuals / ESP' },
      {
        type: 'p',
        text: 'Boîtes joueurs, ESP gadgets, infos bombe, marqueurs de drones, opacité wallhack et couleurs d\'équipe. Détails : [Paramètres ESP](/forums/r6s-esp-settings/).',
      },
      { type: 'h2', text: 'Onglet Radar' },
      {
        type: 'p',
        text: 'Radar 2D style minimap pour les opérateurs hors du champ de vision de votre caméra. Portée, zoom et taille des icônes. Détails : [Paramètres radar](/forums/r6s-radar-settings/).',
      },
      { type: 'h2', text: 'Onglet Misc' },
      {
        type: 'ul',
        items: [
          'Basculer l\'overlay stream-proof',
          'Sauvegarder/charger la config cloud',
          'Profils no recoil par arme',
          'Raccourcis de rebinding des touches',
        ],
      },
      { type: 'h2', text: 'Overlay stream-proof' },
      {
        type: 'p',
        text: 'Activez stream-proof depuis l\'onglet Misc en clippant du ranked ou en streamant — les overlays r6scheats.net sont masqués de la capture OBS et Discord par défaut sur les tiers Pro et Elite. ESP et radar restent rendus uniquement sur votre écran. Layout touches : [Raccourcis clavier](/forums/r6s-cheat-hotkeys/).',
      },
      { type: 'h2', text: 'Profils' },
      {
        type: 'p',
        text: 'Enregistrez des configs séparées pour ranked, non classé et parties perso. Nommez-les par rôle — entry, anchor, flex — pour ne pas retoucher en pleine session.',
      },
    ],
  },
  {
    tag: 'Dépannage',
    title: 'Erreurs du loader R6S',
    slug: 'r6s-loader-errors',
    desc: 'Corrigez les erreurs loader R6s Cheats pour Rainbow Six Siege — clés invalides, blocs BattlEye, flags matériels HWID, vérifications d\'intégrité et quarantaine antivirus — avant d\'ouvrir un ticket support sur r6scheats.net.',
    date: 'Sep 15, 2026',
    readTime: '5 min de lecture',
    body: [
      { type: 'h2', text: 'Licence invalide ou expirée' },
      {
        type: 'p',
        text: 'Copiez la clé exactement depuis votre e-mail — sans espaces en fin. Confirmez que le niveau d\'abonnement correspond à la build téléchargée. Les clés Lite ne débloquent pas les modules Pro.',
      },
      { type: 'h2', text: 'Injection échouée / blocage BattlEye' },
      {
        type: 'p',
        text: 'Signifie généralement que Siege ou BattlEye a été mis à jour. Suivez le [Guide de reconstruction après patch](/forums/r6s-patch-rebuild-guide/). Lancez Siege vanilla une fois pour confirmer que le jeu s\'ouvre avant de réinjecter.',
      },
      { type: 'h2', text: 'Impossible de vérifier l\'intégrité du jeu' },
      {
        type: 'p',
        text: 'Réparez Rainbow Six Siege dans Ubisoft Connect, redémarrez le PC, puis testez sans le loader. Cette erreur est souvent une installation de jeu corrompue — pas une détection de cheat.',
      },
      { type: 'h2', text: 'L\'antivirus a supprimé le loader' },
      {
        type: 'p',
        text: 'Restaurez depuis la quarantaine et ajoutez les exclusions depuis [Configuration antivirus](/forums/r6s-antivirus-setup/). Retéléchargez si le fichier était corrompu.',
      },
      { type: 'h2', text: 'Lancez Siege vanilla d\'abord' },
      {
        type: 'p',
        text: 'Après toute mise à jour BattlEye, lancez Rainbow Six Siege sans le loader r6scheats.net une fois pour confirmer qu\'Ubisoft Connect termine la vérification des fichiers. Si Siege vanilla échoue, réparez le jeu avant d\'accuser la build cheat — la plupart des tickets « injection échouée » viennent de loaders obsolètes ou d\'installations cassées. Flux post-patch : [Guide reconstruction](/forums/r6s-patch-rebuild-guide/).',
      },
      { type: 'h2', text: 'Hardware ban / comptes échouent instantanément' },
      {
        type: 'p',
        text: 'Quand chaque compte Ubisoft neuf échoue sur un PC mais fonctionne ailleurs, BattlEye a probablement flaggé votre **HWID** — ce n\'est pas un bug loader. Suivez [HWID Spoofer Walkthrough](/forums/r6s-hwid-spoofer-guide/) et l\'[outil HWID Spoofer](/tools/r6s-cheats/hwid-spoofer/) avant d\'acheter une autre clé cheat.',
      },
      { type: 'h2', text: 'Toujours bloqué ?' },
      {
        type: 'p',
        text: 'Ouvrez un ticket support avec l\'ID de commande, la version Windows, le numéro de build Siege et une capture du texte d\'erreur exact. Mentionnez si vous avez déjà exécuté un workflow **HWID spoofer**.',
      },
    ],
  },
  {
    tag: 'Fonctionnalités',
    title: 'Paramètres radar R6S',
    slug: 'r6s-radar-settings',
    desc: 'Configurez le radar 2D R6s Cheats pour Rainbow Six Siege — portée, zoom, taille des icônes et placement HUD en ranked. Le radar r6scheats.net complète l\'ESP pour le timing de flanc sans encombrer votre overlay sûr BattlEye.',
    date: 'Sep 16, 2026',
    readTime: '4 min de lecture',
    body: [
      {
        type: 'p',
        text: 'Le radar complète l\'ESP — utilisez-le pour le timing des flancs sur des maps comme Clubhouse et Border où le son vertical est bruyant. Il ne remplace pas la discipline en phase drone.',
      },
      { type: 'h2', text: 'Preset de départ' },
      {
        type: 'ul',
        items: [
          '**Portée** — 25–35 m en ranked ; plus large uniquement en parties perso',
          '**Zoom** — moyen pour que le radar reste lisible à côté de la minimap',
          '**Taille des icônes** — petite ; les gros points bloquent l\'espace du réticule en 1080p',
          '**Couleurs d\'équipe** — alignez-les sur les couleurs ESP pour des callouts cohérents',
        ],
      },
      { type: 'h2', text: 'Associez radar et couleurs ESP' },
      {
        type: 'p',
        text: 'Alignez les couleurs d\'équipe du radar r6scheats.net sur votre palette ESP pour des callouts de flanc cohérents mid-round — défenseurs bleu, attaquants orange est la répartition Siege par défaut. Des couleurs désalignées vous font hésiter lors des executes site. Réglage ESP : [Paramètres ESP](/forums/r6s-esp-settings/).',
      },
      { type: 'h2', text: 'Notes par map' },
      {
        type: 'p',
        text: 'Oregon et Clubhouse : augmentez légèrement la portée verticale pour les changements d\'étage. Bank et Chalet, longs couloirs : réduisez la portée pour éviter le bruit des roamers lointains que vous ne pouvez de toute façon pas toucher.',
      },
    ],
  },
  {
    tag: 'Fonctionnalités',
    title: 'Paramètres soft aim R6S',
    slug: 'r6s-soft-aim-settings',
    desc: 'Paramètres aimbot et soft aim pour R6s Cheats dans Rainbow Six Siege — FOV, lissage, visible check et profils par opérateur qui restent crédibles sous BattlEye en ranked.',
    date: 'Sep 16, 2026',
    readTime: '5 min de lecture',
    body: [
      {
        type: 'p',
        text: 'Les gunfights Siege reposent sur le peek — le soft aim **aimbot** doit aider le tracking, pas snapper à travers les murs. C\'est le mode **aimbot** ranked-safe sur Pro et Elite. Commencez en unranked avant de l\'activer en ranked. Nouveau aux modules aim ? D\'abord [Aimbot Setup](/forums/r6s-aimbot-setup/).',
      },
      { type: 'h2', text: 'Profil aimbot ranked de base' },
      {
        type: 'ul',
        items: [
          '**FOV** — 3–8° ; resserrez pour le ranked, ne lancez jamais un FOV ouvert en lobbies haut rang',
          '**Lissage** — élevé sur écrans 144Hz+ pour des flicks naturels',
          '**Visible check** — activé pour les peeks le long des murs',
          '**Os** — poitrine par défaut ; tête uniquement pour les holds Glaz/Kali',
          '**Lien no recoil** — activez pour les entrées Ash R4-C et Zofia M762',
        ],
      },
      { type: 'h2', text: 'Visible check est non négociable' },
      {
        type: 'p',
        text: 'Gardez visible check activé en ranked sur les builds r6scheats.net Pro et Elite — tracker à travers les murs mous est la voie la plus rapide vers les reports même si BattlEye ne flag pas instantanément. FOV serré plus lissage élevé paraît naturel sur les paths entry Ash et Zofia. Menu aim complet : [Guide du menu de cheats](/forums/r6s-cheat-menu-guide/).',
      },
      { type: 'h2', text: 'Sauvegardes par opérateur' },
      {
        type: 'p',
        text: 'Enregistrez des profils séparés pour entry (Ash), anchor (Smoke MP5) et roamer (Caveira). L\'entry veut un lissage légèrement plus bas ; les anchors veulent le triggerbot optionnel uniquement sur les portes.',
      },
    ],
  },
  {
    tag: 'Fonctionnalités',
    title: 'Paramètres ESP R6S',
    slug: 'r6s-esp-settings',
    desc: 'Setup ESP minimal R6s Cheats pour Rainbow Six Siege ranked — boîtes joueurs, marqueurs gadgets et info bombe sans encombrer l\'écran. Tiers Lite et Elite r6scheats.net expliqués pour un renseignement sûr BattlEye en phase drone et execute.',
    date: 'Sep 16, 2026',
    readTime: '5 min de lecture',
    body: [
      {
        type: 'p',
        text: 'L\'ESP gagne des manches en montrant les rotations et gadgets avant de vous engager. Trop de toggles encombrent l\'écran et vous rendent évident.',
      },
      { type: 'h2', text: 'Set de départ tier Lite' },
      {
        type: 'ul',
        items: [
          'Boîtes joueurs + distance sous 25 m',
          'ESP gadgets : caméras, claymores, Gu mines, pièges Kapkan',
          'Indicateur porteur bombe / désamorceur',
          'Opacité wallhack ~40 %',
        ],
      },
      { type: 'h2', text: 'Extras Elite' },
      {
        type: 'p',
        text: 'ESP drone pour les drones attaquants et les feeds Yokai/Maestro défenseurs. Activez seulement quand l\'ESP Lite semble naturel — marqueurs de drones plus boîtes joueurs peuvent se chevaucher en phase prep. Elite inclut aussi le preview opérateurs **unlock all** — voir [Unlock All Guide](/forums/r6s-unlock-all-guide/).',
      },
      { type: 'h2', text: 'L\'ESP gadgets sauve des manches' },
      {
        type: 'p',
        text: 'L\'ESP gadgets r6scheats.net pour caméras, claymores, Gu mines et pièges Kapkan évite les morts gratuites en rotate — activez les marqueurs gadgets avant les boîtes joueurs si l\'écran semble chargé. Icônes désamorceur et porteur bombe comptent le plus au match point. Combo radar : [Paramètres radar](/forums/r6s-radar-settings/).',
      },
      { type: 'h2', text: 'Jouez plus malin, pas plus bruyant' },
      {
        type: 'p',
        text: 'Utilisez le renseignement pour **tenir** les angles et appeler les rotations. Préférer chaque mur mou génère des reports. Activez stream-proof si vous clippez des manches ou streamez le ranked.',
      },
    ],
  },
  {
    tag: 'Instructions',
    title: 'Raccourcis clavier cheats R6S',
    slug: 'r6s-cheat-hotkeys',
    desc: 'Raccourcis R6s Cheats par défaut pour Rainbow Six Siege — menu, ESP, soft aim, no recoil, radar et arrêt d\'urgence. Reassignez dans le panneau en jeu r6scheats.net pour que les touches ne entrent jamais en conflit avec les binds gadgets Siege.',
    date: 'Sep 16, 2026',
    readTime: '3 min de lecture',
    body: [
      { type: 'h2', text: 'Assignations par défaut' },
      {
        type: 'table',
        headers: ['Action', 'Touche par défaut'],
        rows: [
          ['Ouvrir / fermer le menu', 'INSERT'],
          ['Basculer ESP', 'F1'],
          ['Basculer soft aim', 'F2'],
          ['Basculer no recoil', 'F3'],
          ['Basculer radar', 'F4'],
          ['Arrêt d\'urgence (toutes les fonctions)', 'F12'],
        ],
      },
      { type: 'h2', text: 'Conseils de rebinding' },
      {
        type: 'p',
        text: 'Évitez les touches que Siege utilise pour gadgets, ping ou voix. Les boutons latéraux de la souris conviennent bien à l\'arrêt d\'urgence. Enregistrez les profils après rebinding pour garder des layouts ranked et non classé séparés.',
      },
      { type: 'h2', text: 'Entraînez l\'arrêt d\'urgence (F12)' },
      {
        type: 'p',
        text: 'Assignez l\'arrêt d\'urgence à un bouton latéral souris sur les profils r6scheats.net que vous emportez en ranked — F12 désactive chaque module instantanément si un clip, glitch overlay ou pause spectateur vous stresse mid-manche. Testez le bind en match perso avant la file BattlEye ranked. Guide d\'usage : [Utiliser les cheats Rainbow Six Siege](/forums/how-to-use-r6s-cheats/).',
      },
      { type: 'h2', text: 'Avant le ranked' },
      {
        type: 'p',
        text: 'Testez chaque touche assignée en match perso — un arrêt d\'urgence mal assigné en milieu de manche est pire que pas de cheats. Carte complète du menu : [Guide du menu de cheats](/forums/r6s-cheat-menu-guide/).',
      },
    ],
  },
  {
    tag: 'Instructions',
    title: 'Configuration aimbot R6S',
    slug: 'r6s-aimbot-setup',
    desc: 'Première configuration aimbot R6s Cheats Pro et Elite pour Rainbow Six Siege — activer soft aim en sécurité, FOV, lissage, lier no recoil et tester en unranked avant le ranked sur les builds r6scheats.net.',
    date: '17 sep. 2026',
    readTime: '5 min de lecture',
    body: [
      {
        type: 'p',
        text: 'Les modules aimbot sont sur les tiers Pro et Elite uniquement. Utilisateurs Lite : ignorez ce fil et ouvrez [Paramètres ESP](/forums/r6s-esp-settings/). Terminez d\'abord [Setup cheats](/forums/r6s-cheat-setup/) et [Antivirus](/forums/r6s-antivirus-setup/).',
      },
      { type: 'h2', text: 'Ouvrir l\'onglet Aim' },
      {
        type: 'p',
        text: 'Injectez via le loader r6scheats.net, lancez Siege, **INSERT** et onglet **Aim**. Chargez **Ranked Safe** si vous débutez — l\'équipe envoie des defaults conservateurs après chaque patch BattlEye.',
      },
      { type: 'h2', text: 'Checklist première session' },
      {
        type: 'ol',
        items: [
          'Activez **visible check** avant tout',
          '**FOV** 5–8° pour les premiers tests ; resserrez en ranked',
          'Montez le **smoothing** jusqu\'à des flicks naturels sur votre écran',
          'Os **chest** par défaut ; head seulement pour les holds longue portée',
          'Liez **no recoil** pour les armes entry (Ash R4-C, Zofia M762)',
          'Un match unranked avec soft aim seul — pas encore de triggerbot',
        ],
      },
      { type: 'h2', text: 'Soft aim vs aimbot complet' },
      {
        type: 'p',
        text: 'Commencez par **soft aim** — il aide le tracking sur les peeks au lieu de snapper à travers les murs. Modes aimbot complets en custom games seulement. Réglage fin : [Paramètres soft aim](/forums/r6s-soft-aim-settings/).',
      },
      { type: 'h2', text: 'Avant le ranked' },
      {
        type: 'p',
        text: 'Vérifiez la bannière de statut sur r6scheats.net après les patches Siege. Statut jaune : lisez les notes staff avant aim en ranked. Touche panic (**F12** par défaut) : [Raccourcis](/forums/r6s-cheat-hotkeys/).',
      },
    ],
  },
  {
    tag: 'Instructions',
    title: 'Guide pas à pas HWID Spoofer R6S',
    slug: 'r6s-hwid-spoofer-guide',
    desc: 'Walkthrough HWID spoofer pour hardware bans BattlEye sur Rainbow Six Siege — point de restauration, téléchargement portal, vérification des identifiants et premier lancement Siege après spoof depuis r6scheats.net.',
    date: '17 sep. 2026',
    readTime: '6 min de lecture',
    body: [
      {
        type: 'p',
        text: 'Utilisez le HWID spoofer quand des comptes Ubisoft neufs échouent instantanément sur un PC mais fonctionnent ailleurs — BattlEye a généralement flaggé le matériel, pas le compte. Bans compte seul : [UGC](/tools/r6s-cheats/ugc/). Produit : [HWID Spoofer](/tools/r6s-cheats/hwid-spoofer/).',
      },
      { type: 'h2', text: 'Avant le spoof' },
      {
        type: 'ol',
        items: [
          'Créez un **point de restauration** Windows — obligatoire',
          'Fermez Rainbow Six Siege, Ubisoft Connect et autres jeux anti-cheat',
          'Téléchargez le spoofer uniquement depuis votre portal r6scheats.net',
          'Lancez d\'abord le **scan de compatibilité** du portal',
        ],
      },
      { type: 'h2', text: 'Workflow spoof' },
      {
        type: 'p',
        text: 'Suivez la checklist portal dans l\'ordre : profil serial disque → rotation MAC → étape GPU si listée. N\'empilez pas un second spoof tool. À la fin, **cold reboot** (arrêt complet, pas redémarrage rapide).',
      },
      { type: 'h2', text: 'Vérifier le changement d\'identifiants' },
      {
        type: 'p',
        text: 'Après reboot, lancez le rapport **identifier diff** du portal. Disk et MAC doivent différer du snapshot pre-spoof. Si rien n\'a changé, ne lancez pas Siege — rouvrez le guide portal ou contactez le support avec order ID.',
      },
      { type: 'h2', text: 'Premier lancement Siege après spoof' },
      {
        type: 'p',
        text: 'Lancez Rainbow Six Siege vanilla via Ubisoft Connect une fois avant d\'injecter des cheats. Confirmez le menu principal. Puis profil **conservateur** r6scheats.net — ESP seul en première session. Erreurs loader : [Erreurs loader](/forums/r6s-loader-errors/).',
      },
      { type: 'h2', text: 'Ce que le spoof ne corrige pas' },
      {
        type: 'p',
        text: 'Le HWID spoof ne retire pas les strikes de réputation ni ne garantit un lift BattlEye Global Ban. PC partagés, portables pro et VM peuvent échouer au scan — le support conseille avant tools driver-level.',
      },
    ],
  },
  {
    tag: 'Instructions',
    title: 'Guide Unlock All R6S',
    slug: 'r6s-unlock-all-guide',
    desc: 'Utiliser Unlock All R6s Cheats dans Rainbow Six Siege — parcourir opérateurs et skins elite localement, favoris, export loadout et notes ranked pour utilisateurs Elite sur r6scheats.net.',
    date: '17 sep. 2026',
    readTime: '4 min de lecture',
    body: [
      {
        type: 'p',
        text: 'Unlock All prévisualise opérateurs, skins elite, charms et attachments **localement sur votre client**. Les autres joueurs voient votre inventaire Ubisoft réel — preview cosmétique, pas déblocage store. Inclus dans [Elite](/cheats/elite/) ; page : [Unlock All](/tools/r6s-cheats/unlock-all/).',
      },
      { type: 'h2', text: 'Ouvrir Unlock All dans le menu' },
      {
        type: 'p',
        text: 'Injectez Elite (ou build Unlock All standalone), lancez Siege et ouvrez le menu. Le panneau **Unlock All** liste opérateurs, skins elite et charms dans un catalogue searchable. Favoris pour loadouts en custom games.',
      },
      { type: 'h2', text: 'Workflow recommandé' },
      {
        type: 'ol',
        items: [
          'Parcourez opérateurs et skins d\'abord en **custom match** ou entraînement',
          'Sauvegardez favoris pour loadouts entry, anchor et flex',
          'Exportez JSON loadout depuis le panneau si vous changez de PC',
          'Désactivez overlays preview lourds avant ranked — ESP minimal',
          'Ne supposez pas que l\'équipe voit les skins preview en phase drone',
        ],
      },
      { type: 'h2', text: 'Sécurité ranked' },
      {
        type: 'p',
        text: 'Unlock All ne modifie pas les serveurs Ubisoft, mais des modules preview en ranked chargent les overlays. Le staff recommande preview en menu ou custom games, puis modules combat (ESP, soft aim) pour ranked. Carte menu : [Guide menu](/forums/r6s-cheat-menu-guide/).',
      },
      { type: 'h2', text: 'Rappel bundle Elite' },
      {
        type: 'p',
        text: 'Si vous avez déjà Elite, Unlock All est dans le même loader — pas de second achat. Comparez les tiers sur [Rainbow Six Siege Cheats](/cheats/) avant Unlock All standalone.',
      },
    ],
  },
];
