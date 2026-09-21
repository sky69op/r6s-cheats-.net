import type { IconName } from '../../../components/icons/types';
import type { Locale } from '../../../i18n/config';
import { cheatPath, toolPath, ROUTES, localizedPath } from '../../../utils/path';

const faqLocale: Locale = 'fr';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'tools'
  | 'forums'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${href}">${text}</a>`;
}

const lite = link('R6S Lite', cheatPath('lite', faqLocale));
const pro = link('R6S Pro', cheatPath('pro', faqLocale));
const elite = link('R6S Elite', cheatPath('elite', faqLocale));
const toolsHub = link('outils R6S', localizedPath(faqLocale, ROUTES.tools));
const hwid = link('page HWID Spoofer', toolPath('hwid-spoofer', faqLocale));
const ugc = link('outil UGC', toolPath('ugc', faqLocale));
const unlockAll = link('page Unlock All', toolPath('unlock-all', faqLocale));
const faqPage = link('FAQ complet', localizedPath(faqLocale, '/faq/'));
const forums = link('fils du forum', localizedPath(faqLocale, ROUTES.forums));

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'alert',
    q: 'Où vérifier si les cheats R6S sont en ligne ?',
    a: a('La bannière de statut en direct est sur r6scheats.net. Vérifiez toujours après une mise à jour de Rainbow Six Siege ou BattlEye.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'package',
    q: 'Que se passe-t-il après l\'achat ?',
    a: a('Votre portail débloque le loader, le guide d\'installation et la bibliothèque de configs via notre checkout sécurisé. Suivez le guide avant de lancer Rainbow Six Siege.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'shield',
    q: 'Puis-je être banni en utilisant des cheats R6S tiers ?',
    a: a('Oui — toute modification comporte un risque. BattlEye et les systèmes de signalement évoluent. Lisez le statut actuel et acceptez le risque avant utilisation.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'windows',
    q: 'Quelles plateformes sont prises en charge ?',
    a: a('Rainbow Six Siege via Ubisoft Connect sur Windows 10/11 64 bits uniquement. macOS et Linux ne sont pas pris en charge.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'refresh',
    q: 'Puis-je transférer ma licence sur un nouveau PC ?',
    a: a('Oui — utilisez la réinitialisation HWID dans votre portail. Les limites dépendent de votre tier.'),
  },
  {
    id: 'tools-page',
    topic: 'tools',
    icon: 'package',
    q: 'Où sont listés les outils et utilitaires ?',
    a: `${toolsHub} liste les tiers de cheats, ${hwid}, ${ugc} et ${unlockAll} avec listes de fonctionnalités et checkout via notre partenaire.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'eye',
    q: 'Qu\'est-ce que R6S ESP / wallhack ?',
    a: `ESP et wallhack affichent les positions des opérateurs ennemis, gadgets, drones et pièges à travers les murs. ${lite} couvre les overlays de awareness. ${pro} et ${elite} ajoutent des modules aimbot.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-aimbot',
    topic: 'esp',
    icon: 'eye',
    q: 'Quelle est la différence entre ESP et aimbot ?',
    a: `ESP et wallhack sont des overlays informatifs — ils ne déplacent pas votre réticule. Aimbot, no recoil et triggerbot sont des modules de combat sur ${pro} et ${elite}. Vous pouvez utiliser awareness uniquement sur ${lite}.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'eye',
    q: 'Quel tier faut-il pour ESP uniquement ?',
    a: `${lite} est awareness uniquement : ESP joueurs, localisateur de gadgets, alertes drones et overlay minimap. ${pro} ajoute aimbot. ${elite} ajoute wallhack complet, drone hack et Unlock All.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-aimbot',
    topic: 'scripts',
    icon: 'crosshair',
    q: 'Quel tier inclut aimbot ?',
    a: `${pro} inclut smooth aimbot, no recoil et triggerbot. ${elite} inclut tout de Pro plus wallhack complet et drone hack. ${lite} n'a pas d'automatisation de visée.`,
    scopes: ['pro'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'package',
    q: 'Comment classez-vous Lite vs Pro vs Elite ?',
    a: `Intel uniquement → ${lite}. Gunfights ranked avec aimbot → ${pro}. Suite wallhack complète et patches prioritaires → ${elite}. Comparez sur chaque page cheat ou dans le ${faqPage}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'zap',
    q: 'Pourquoi Elite a des slots limités ?',
    a: `Elite est un build privé avec support dev direct et livraison prioritaire des patches. Les limites de slots accélèrent les cycles de patch. Vérifiez la bannière de statut avant le checkout.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'stream',
    q: 'OBS peut-il capturer mon overlay ?',
    a: `Le mode stream-proof sur ${lite}, ${pro} et ${elite} masque les overlays d\'OBS et Discord share. Testez un enregistrement local avant de passer en live.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'shield',
    q: 'Les cheats R6S undetected sont-ils garantis ?',
    a: a('Non. Undetected est le statut actuel sur la page produit — pas une garantie permanente. Arrêtez si le build affiche updating, testing ou detected.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'shield',
    q: 'ESP est-il plus sûr qu\'aimbot ?',
    a: a('ESP est plus discret en replay que les patterns évidents d\'aimbot, mais c\'est toujours un cheat. BattlEye n\'ignore pas les overlays parce que vous avez laissé aimbot désactivé.'),
  },
  {
    id: 'hwid-when',
    topic: 'tools',
    icon: 'cpu',
    q: 'Quand ai-je besoin du HWID Spoofer ?',
    a: `Utilisez ${hwid} quand de nouveaux comptes Ubisoft échouent instantanément sur un PC mais fonctionnent ailleurs — enforcement matériel. Pas pour les cas BattlEye seuls ; consultez ${ugc} à la place.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'tools',
    icon: 'mail',
    q: 'Qu\'est-ce que UGC ?',
    a: `${ugc} (Unban & Governance Control) est un espace d'appel pour restrictions Ubisoft et bans BattlEye — workflows personnalisés et suivi de cas, pas un service d'unban garanti.`,
    scopes: ['ugc'],
  },
  {
    id: 'unlock-all',
    topic: 'tools',
    icon: 'tag',
    q: 'Unlock All modifie-t-il mon inventaire Ubisoft ?',
    a: `${unlockAll} prévisualise opérateurs et skins localement sur votre client. Les autres joueurs voient votre inventaire réel. Inclus avec ${elite} ; disponible seul pour aperçu cosmétique uniquement.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'tools',
    icon: 'cpu',
    q: 'Le loader est-il injecté dans le dossier Ubisoft ?',
    a: `R6s Cheats fonctionne en externe avec sync cloud des configs — aucun fichier injecté dans le répertoire d'installation du jeu. Le risque BattlEye s'applique toujours. Consultez ${toolsHub}.`,
  },
  {
    id: 'forums-vs-cheats',
    topic: 'forums',
    icon: 'alert',
    q: 'Les codes cheat du forum sont-ils les mêmes que les cheats ranked ?',
    a: `Non. Les fils du forum sur les paramètres custom game s'appliquent uniquement offline ou en custom games. Les cheats R6S ranked sont des produits séparés — consultez ${lite}, ${pro} et ${elite}.`,
  },
  {
    id: 'forums-setup',
    topic: 'forums',
    icon: 'settings',
    q: 'Où mènent les fils setup du forum pour l\'achat ?',
    a: `Les fils lient vers les pages de tiers et ${toolsHub}. Le checkout passe par notre partenaire sécurisé — ne collez jamais de fichiers loader depuis des DMs Discord aléatoires.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'package',
    q: 'Où comparer les plans côte à côte ?',
    a: `Chaque page de tier cheat inclut un tableau comparatif. Le ${faqPage} regroupe les réponses produit, cheat et forum en un seul endroit.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'users',
    q: 'Qui devrait rester sur Lite ?',
    a: `Joueurs qui veulent uniquement intel — ESP, gadgets, drones — et ne toucheront pas à aimbot. Si vous activez constamment les modules aim, achetez ${pro} à la place.`,
    scopes: ['lite'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'crosshair',
    q: 'Qui devrait acheter Pro ?',
    a: `Joueurs ranked qui veulent aimbot, no recoil et triggerbot avec ESP inclus. Pro est le tier le plus populaire sur r6scheats.net.`,
    scopes: ['pro'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'zap',
    q: 'Qui devrait acheter Elite ?',
    a: `Opérateurs qui veulent wallhack complet, drone hack, Unlock All et livraison prioritaire des patches quand les slots sont ouverts.`,
    scopes: ['elite'],
  },
  {
    id: 'battleye-update',
    topic: 'safety',
    icon: 'refresh',
    q: 'Que faire après une mise à jour BattlEye ?',
    a: a('Vérifiez le statut sur r6scheats.net. Ne lancez pas tant que la bannière n\'affiche pas online. Chargez des presets conservateurs après chaque patch.'),
  },
  {
    id: 'install-help',
    topic: 'setup',
    icon: 'headphones',
    q: 'Comment obtenir de l\'aide à l\'installation ?',
    a: a('Suivez le guide setup du portail après achat avec votre e-mail de commande, version Windows et build client Rainbow Six Siege prêts.'),
  },
  {
    id: 'unranked-ranked',
    topic: 'plans',
    icon: 'target',
    q: 'Les tiers fonctionnent-ils en unranked et ranked ?',
    a: `Oui — ${lite}, ${pro} et ${elite} incluent des presets unranked et ranked dans le portail. Réglez les limites de distance et le lissage aim avant votre première file.`,
  },
  {
    id: 'no-recoil',
    topic: 'esp',
    icon: 'eye',
    q: 'Quel tier inclut no recoil ?',
    a: `Le contrôle no recoil est sur ${pro} et continue sur ${elite}. Les profils par arme aident entry fraggers et anchors à contrôler le spray.`,
    scopes: ['pro'],
  },
  {
    id: 'drone-hack',
    topic: 'scripts',
    icon: 'zap',
    q: 'Quel tier inclut drone hack ?',
    a: `Drone hack et wallhack complet sont ${elite} uniquement. ${pro} couvre les modules aim de combat sans la suite intel Elite.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'shield',
    q: 'Que sont les cheats R6S privés ?',
    a: a('Privé signifie clés par utilisateur et builds maintenus — pas de packs zip publics. Rainbow Six Siege Cheats livre les tiers ESP, aimbot et wallhack via le portail.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'alert',
    q: 'Où est le FAQ complet ?',
    a: `Ce site inclut des FAQs landing et des sections par page. Consultez le ${faqPage} pour toutes les réponses produit, cheat et forum — ou lisez ${forums} pour des fils détaillés.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'tools-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-lite-vs-pro', 'compare-plans', 'undetected', 'battleye-update'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const forumTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'forums-guide-start',
      topic: 'forums',
      icon: 'alert',
      q: 'Dois-je utiliser les paramètres custom game en ranked ?',
      a: a('Non. Les paramètres custom game ne fonctionnent qu\'offline ou en custom games. Ranked nécessite des cheats R6S séparés des tiers r6scheats.net.'),
    },
    {
      id: 'forums-guide-tier',
      topic: 'forums',
      icon: 'package',
      q: 'Quel tier correspond à ce guide ?',
      a: `Guides awareness → ${lite}. Guides aimbot et recoil → ${pro}. Sujets wallhack et drones → ${elite}.`,
    },
    {
      id: 'forums-guide-status',
      topic: 'forums',
      icon: 'refresh',
      q: 'Ce fil est-il encore valide après un patch ?',
      a: a('Vérifiez la date du fil et la bannière de statut en direct. Les fils du jour de patch indiquent quand les modules changent — Discord #status a les dernières notes de build.'),
    },
  ],
  Setup: [
    {
      id: 'forums-setup-loader',
      topic: 'forums',
      icon: 'settings',
      q: 'Où télécharger le loader ?',
      a: a('Uniquement depuis votre portail opérateur après checkout — pas via des liens tiers dans les commentaires ou DMs.'),
    },
    {
      id: 'forums-setup-lobby',
      topic: 'forums',
      icon: 'target',
      q: 'Dois-je tester d\'abord en custom game ?',
      a: a('Oui. Chargez des presets conservateurs en custom game avant ranked. Réglez le lissage aim et les limites de distance ESP sur plusieurs sessions.'),
    },
  ],
  Security: [
    {
      id: 'forums-sec-battleye',
      topic: 'forums',
      icon: 'shield',
      q: 'Ce fil garantit-il le statut undetected ?',
      a: a('Aucun fil ne remplace la bannière de statut en direct. Undetected est une étiquette ponctuelle — arrêtez si le statut affiche updating ou detected.'),
    },
  ],
};

const defaultForumFaqs: SiteFaqItem[] = [
  {
    id: 'forums-default-1',
    topic: 'forums',
    icon: 'alert',
    q: 'Les fils du forum sont-ils la documentation officielle du produit ?',
    a: `Les fils expliquent les workflows et lient vers ${lite}, ${pro}, ${elite} et ${toolsHub}. Les listes de fonctionnalités sur les pages outils font foi pour le checkout.`,
  },
  {
    id: 'forums-default-2',
    topic: 'forums',
    icon: 'headphones',
    q: 'Besoin d\'aide pour appliquer ce fil ?',
    a: a('Utilisez votre e-mail de commande et le slug du fil lors de la consultation des presets portail mentionnés dans les posts du forum.'),
  },
  {
    id: 'forums-default-3',
    topic: 'forums',
    icon: 'refresh',
    q: 'Les paramètres de ce fil fonctionneront-ils au prochain patch ?',
    a: a('Revérifiez le statut après chaque mise à jour Rainbow Six Siege. Les presets portail se mettent à jour avec les patch notes — rechargez les configs au lieu de copier d\'anciens sliders.'),
  },
];

export function getForumFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = forumTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('wallhack')) {
    slugHints.push({
      id: 'forums-slug-esp',
      topic: 'esp',
      icon: 'eye',
      q: 'Quel tier couvre l\'ESP de ce fil ?',
      a: `${lite} inclut ESP joueurs, localisateur de gadgets et alertes drones. ${pro} ajoute aimbot sur la même pile d'overlays.`,
    });
  }
  if (slug.includes('aimbot') || slug.includes('recoil')) {
    slugHints.push({
      id: 'forums-slug-aimbot',
      topic: 'scripts',
      icon: 'crosshair',
      q: 'Quel tier inclut les modules aim de ce fil ?',
      a: `${pro} et ${elite} incluent aimbot et no recoil. ${lite} est ESP uniquement.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('battleye')) {
    slugHints.push({
      id: 'forums-slug-hwid',
      topic: 'tools',
      icon: 'cpu',
      q: 'Ce fil remplace-t-il les outils HWID ou UGC ?',
      a: `Les fils de récupération complètent ${hwid} et ${ugc} — lisez les pages outils pour la portée du workflow et les résultats réalistes.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultForumFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'ESP joueurs et boîtes opérateurs', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Localisateur gadgets et pièges', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Alertes position drones', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Overlay minimap', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Overlay streamproof', icon: 'stream' as const, lite: true, pro: true, elite: true },
  { feature: 'Tags nom opérateur', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Smooth aimbot', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Contrôle no recoil', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Triggerbot', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'FOV et sélecteur d\'os', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Profils par arme', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Réduction du spread', icon: 'eye' as const, lite: false, pro: true, elite: true },
  { feature: 'Suite wallhack complète', icon: 'eye' as const, lite: false, pro: false, elite: true },
  { feature: 'Drone hack', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Module speed hack', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Unlock All opérateurs', icon: 'tag' as const, lite: false, pro: false, elite: true },
  { feature: 'File prioritaire de patches', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Support dev direct Discord', icon: 'headphones' as const, lite: false, pro: false, elite: true },
  { feature: 'Sauvegarde configs cloud', icon: 'package' as const, lite: true, pro: true, elite: true },
];
