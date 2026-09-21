import type { IconName } from '../../../components/icons/types';
import type { Locale } from '../../../i18n/config';
import { cheatPath, toolPath, ROUTES, localizedPath } from '../../../utils/path';

const faqLocale: Locale = 'de';

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
const toolsHub = link('R6S-Tools', localizedPath(faqLocale, ROUTES.tools));
const hwid = link('HWID-Spoofer-Toolseite', toolPath('hwid-spoofer', faqLocale));
const ugc = link('UGC-Entsperr-Tool', toolPath('ugc', faqLocale));
const unlockAll = link('Unlock-All-Toolseite', toolPath('unlock-all', faqLocale));
const faqPage = link('vollständiges FAQ', localizedPath(faqLocale, '/faq/'));
const forums = link('Forum-Threads', localizedPath(faqLocale, ROUTES.forums));

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'alert',
    q: 'Wo prüfe ich, ob R6S-Cheats online sind?',
    a: a('Das Live-Status-Banner ist auf r6scheats.net. Immer nach einem Rainbow Six Siege- oder BattlEye-Update prüfen.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'package',
    q: 'Was passiert nach dem Kauf?',
    a: a('Dein Portal schaltet Loader, Setup-Anleitung und Config-Bibliothek über unseren sicheren Checkout frei. Folge der Anleitung, bevor du Rainbow Six Siege startest.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'shield',
    q: 'Kann ich mit Drittanbieter-R6S-Cheats gebannt werden?',
    a: a('Ja — jede Modifikation birgt Risiko. BattlEye und Meldesysteme entwickeln sich weiter. Lies den aktuellen Status und akzeptiere das Risiko vor der Nutzung.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'windows',
    q: 'Welche Plattformen werden unterstützt?',
    a: a('Rainbow Six Siege über Ubisoft Connect nur auf Windows 10/11 64-Bit. macOS und Linux werden nicht unterstützt.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'refresh',
    q: 'Kann ich meine Lizenz auf einen neuen PC übertragen?',
    a: a('Ja — nutze den HWID-Reset in deinem Portal. Limits hängen von deinem Tarif ab.'),
  },
  {
    id: 'tools-page',
    topic: 'tools',
    icon: 'package',
    q: 'Wo sind Tools und Utilities aufgelistet?',
    a: `${toolsHub} listet Cheat-Tarife, ${hwid}, ${ugc} und ${unlockAll} mit Feature-Listen und Checkout über unseren Partner.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'eye',
    q: 'Was ist R6S ESP / Wallhack?',
    a: `ESP und Wallhack zeigen feindliche Operator-Positionen, Gadgets, Drohnen und Fallen durch Wände. ${lite} deckt Awareness-Overlays ab. ${pro} und ${elite} fügen Aimbot-Module hinzu.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-aimbot',
    topic: 'esp',
    icon: 'eye',
    q: 'Was ist der Unterschied zwischen ESP und Aimbot?',
    a: `ESP und Wallhack sind Informations-Overlays — sie bewegen dein Fadenkreuz nicht. Aimbot, No Recoil und Triggerbot sind Kampfmodule auf ${pro} und ${elite}. Auf ${lite} kannst du nur Awareness nutzen.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'eye',
    q: 'Welcher Tarif reicht für nur ESP?',
    a: `${lite} ist nur Awareness: Spieler-ESP, Gadget-Locator, Drohnen-Alerts und Minimap-Overlay. ${pro} fügt Aimbot hinzu. ${elite} fügt vollen Wallhack, Drohnen-Hack und Unlock All hinzu.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-aimbot',
    topic: 'scripts',
    icon: 'crosshair',
    q: 'Welcher Tarif enthält Aimbot?',
    a: `${pro} liefert Smooth Aimbot, No Recoil und Triggerbot. ${elite} enthält alles aus Pro plus vollen Wallhack und Drohnen-Hack. ${lite} hat keine Zielautomatisierung.`,
    scopes: ['pro'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'package',
    q: 'Wie ordnet ihr Lite vs Pro vs Elite ein?',
    a: `Nur Intel → ${lite}. Ranked-Schießereien mit Aimbot → ${pro}. Volles Wallhack-Paket und Priority-Patches → ${elite}. Vergleiche auf den Cheat-Seiten oder im ${faqPage}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'zap',
    q: 'Warum ist Elite auf begrenzte Slots?',
    a: `Elite ist ein privater Build mit direktem Dev-Support und Priority-Patch-Lieferung. Slot-Limits halten Patch-Zyklen schnell. Prüfe das Status-Banner vor dem Checkout.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'stream',
    q: 'Kann OBS mein Overlay erfassen?',
    a: `Der Stream-Proof-Modus auf ${lite}, ${pro} und ${elite} verbirgt Overlays vor OBS und Discord Share. Teste eine lokale Aufnahme vor dem Live-Stream.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'shield',
    q: 'Sind undetected R6S-Cheats garantiert?',
    a: a('Nein. Undetected ist der aktuelle Status auf der Produktseite — keine dauerhafte Garantie. Stoppe, wenn der Build updating, testing oder detected anzeigt.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'shield',
    q: 'Ist ESP sicherer als Aimbot?',
    a: a('ESP ist im Replay leiser als offensichtliche Aimbot-Muster, aber es ist trotzdem ein Cheat. BattlEye ignoriert Overlays nicht, nur weil du Aimbot ausgelassen hast.'),
  },
  {
    id: 'hwid-when',
    topic: 'tools',
    icon: 'cpu',
    q: 'Wann brauche ich den HWID Spoofer?',
    a: `Nutze ${hwid}, wenn frische Ubisoft-Accounts auf einem PC sofort scheitern, aber woanders funktionieren — Hardware-Sperre. Nicht für reine BattlEye-Fälle; siehe stattdessen ${ugc}.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'tools',
    icon: 'mail',
    q: 'Was ist UGC?',
    a: `${ugc} (Unban & Governance Control) ist ein Appeal-Workspace für Ubisoft-Beschränkungen und BattlEye-Bans — individuelle Workflows und Case-Tracking, kein garantierter Unban-Service.`,
    scopes: ['ugc'],
  },
  {
    id: 'unlock-all',
    topic: 'tools',
    icon: 'tag',
    q: 'Verändert Unlock All mein Ubisoft-Inventar?',
    a: `${unlockAll} zeigt Operatoren und Skins lokal auf deinem Client in der Vorschau. Andere Spieler sehen dein echtes Inventar. In ${elite} enthalten; einzeln nur für kosmetische Vorschau verfügbar.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'tools',
    icon: 'cpu',
    q: 'Wird der Loader in den Ubisoft-Ordner injiziert?',
    a: `R6s Cheats läuft extern mit Cloud-Config-Sync — keine Dateien im Spielinstallationsverzeichnis. BattlEye-Risiko gilt weiterhin. Siehe ${toolsHub}.`,
  },
  {
    id: 'forums-vs-cheats',
    topic: 'forums',
    icon: 'alert',
    q: 'Sind Forum-Cheat-Codes dasselbe wie Ranked-Cheats?',
    a: `Nein. Forum-Threads über Custom-Game-Einstellungen gelten nur offline oder in Custom Games. Ranked-R6S-Cheats sind separate Produkte — siehe ${lite}, ${pro} und ${elite}.`,
  },
  {
    id: 'forums-setup',
    topic: 'forums',
    icon: 'settings',
    q: 'Wohin verweisen Forum-Setup-Threads zum Kauf?',
    a: `Threads verlinken auf Tarif-Seiten und ${toolsHub}. Checkout läuft über unseren sicheren Partner — füge niemals Loader-Dateien aus zufälligen Discord-DMs ein.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'package',
    q: 'Wo vergleiche ich Tarife nebeneinander?',
    a: `Jede Cheat-Tarif-Seite enthält eine Vergleichstabelle. Das ${faqPage} sammelt Produkt-, Cheat- und Forum-Antworten an einem Ort.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'users',
    q: 'Für wen reicht Lite?',
    a: `Spieler, die nur Intel wollen — ESP, Gadgets, Drohnen — und Aimbot nicht anfassen. Wenn du ständig Aim-Module aktivierst, kaufe stattdessen ${pro}.`,
    scopes: ['lite'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'crosshair',
    q: 'Für wen ist Pro?',
    a: `Ranked-Spieler, die Aimbot, No Recoil und Triggerbot mit ESP wollen. Pro ist der beliebteste Tarif auf r6scheats.net.`,
    scopes: ['pro'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'zap',
    q: 'Für wen ist Elite?',
    a: `Operatoren, die vollen Wallhack, Drohnen-Hack, Unlock All und Priority-Patch-Lieferung wollen, wenn Slots offen sind.`,
    scopes: ['elite'],
  },
  {
    id: 'battleye-update',
    topic: 'safety',
    icon: 'refresh',
    q: 'Was soll ich nach einem BattlEye-Update tun?',
    a: a('Prüfe den Status auf r6scheats.net. Starte nicht, bis das Banner online anzeigt. Lade konservative Presets nach jedem Patch.'),
  },
  {
    id: 'install-help',
    topic: 'setup',
    icon: 'headphones',
    q: 'Wie bekomme ich Installationshilfe?',
    a: a('Folge der Portal-Setup-Anleitung nach dem Kauf mit Bestell-E-Mail, Windows-Version und Rainbow Six Siege-Client-Build bereit.'),
  },
  {
    id: 'unranked-ranked',
    topic: 'plans',
    icon: 'target',
    q: 'Funktionieren Tarife in Unranked und Ranked?',
    a: `Ja — ${lite}, ${pro} und ${elite} enthalten Unranked- und Ranked-Presets im Portal. Stelle Distanz-Limits und Aim-Smoothing vor deiner ersten Queue ein.`,
  },
  {
    id: 'no-recoil',
    topic: 'esp',
    icon: 'eye',
    q: 'Welcher Tarif enthält No Recoil?',
    a: `No-Recoil-Kontrolle ist auf ${pro} und geht bis ${elite} durch. Waffenspezifische Profile helfen Entry-Fragern und Anchors beim Spray-Kontrolle.`,
    scopes: ['pro'],
  },
  {
    id: 'drone-hack',
    topic: 'scripts',
    icon: 'zap',
    q: 'Welcher Tarif enthält Drohnen-Hack?',
    a: `Drohnen-Hack und voller Wallhack sind nur ${elite}. ${pro} deckt Kampf-Aim-Module ohne Elite-Intel-Suite ab.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'shield',
    q: 'Was sind private R6S-Cheats?',
    a: a('Privat bedeutet pro Nutzer Keys und gepflegte Builds — keine öffentlichen Zip-Pakete. Rainbow Six Siege Cheats liefert ESP-, Aimbot- und Wallhack-Tarife über das Portal.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'alert',
    q: 'Wo ist das vollständige FAQ?',
    a: `Diese Seite enthält Landing-FAQs und Abschnitte pro Seite. Siehe das ${faqPage} für alle Produkt-, Cheat- und Forum-Antworten — oder lies ${forums} für ausführliche Threads.`,
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
      q: 'Soll ich Custom-Game-Einstellungen im Ranked nutzen?',
      a: a('Nein. Custom-Game-Einstellungen funktionieren nur offline oder in Custom Games. Ranked erfordert separate R6S-Cheats von r6scheats.net-Tarifen.'),
    },
    {
      id: 'forums-guide-tier',
      topic: 'forums',
      icon: 'package',
      q: 'Welcher Tarif passt zu diesem Guide?',
      a: `Awareness-Guides → ${lite}. Aimbot- und Recoil-Guides → ${pro}. Wallhack- und Drohnen-Themen → ${elite}.`,
    },
    {
      id: 'forums-guide-status',
      topic: 'forums',
      icon: 'refresh',
      q: 'Ist dieser Thread nach einem Patch noch gültig?',
      a: a('Prüfe das Thread-Datum und das Live-Status-Banner. Patch-Day-Threads notieren Modul-Änderungen — Discord #status hat die neuesten Build-Notes.'),
    },
  ],
  Setup: [
    {
      id: 'forums-setup-loader',
      topic: 'forums',
      icon: 'settings',
      q: 'Wo lade ich den Loader herunter?',
      a: a('Nur aus deinem Operator-Portal nach dem Checkout — nicht über Drittanbieter-Links in Kommentaren oder DMs.'),
    },
    {
      id: 'forums-setup-lobby',
      topic: 'forums',
      icon: 'target',
      q: 'Soll ich zuerst in einem Custom Game testen?',
      a: a('Ja. Lade konservative Presets in einem Custom Game vor Ranked. Stelle Aim-Smoothing und ESP-Distanz-Limits über mehrere Sessions ein.'),
    },
  ],
  Security: [
    {
      id: 'forums-sec-battleye',
      topic: 'forums',
      icon: 'shield',
      q: 'Garantiert dieser Thread undetected-Status?',
      a: a('Kein Thread ersetzt das Live-Status-Banner. Undetected ist ein Zeitpunkt-Label — stoppe, wenn der Status updating oder detected anzeigt.'),
    },
  ],
};

const defaultForumFaqs: SiteFaqItem[] = [
  {
    id: 'forums-default-1',
    topic: 'forums',
    icon: 'alert',
    q: 'Sind Forum-Threads offizielle Produktdokumentation?',
    a: `Threads erklären Workflows und verlinken auf ${lite}, ${pro}, ${elite} und ${toolsHub}. Feature-Listen auf Tool-Seiten sind maßgeblich für den Checkout.`,
  },
  {
    id: 'forums-default-2',
    topic: 'forums',
    icon: 'headphones',
    q: 'Hilfe bei der Anwendung dieses Threads nötig?',
    a: a('Nutze deine Bestell-E-Mail und den Thread-Slug beim Prüfen der in Forum-Posts genannten Portal-Presets.'),
  },
  {
    id: 'forums-default-3',
    topic: 'forums',
    icon: 'refresh',
    q: 'Funktionieren Einstellungen aus diesem Thread beim nächsten Patch?',
    a: a('Prüfe den Status nach jedem Rainbow Six Siege-Update erneut. Portal-Presets aktualisieren sich mit Patch-Notes — lade Configs neu statt alte Slider zu kopieren.'),
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
      q: 'Welcher Tarif deckt ESP aus diesem Thread ab?',
      a: `${lite} enthält Spieler-ESP, Gadget-Locator und Drohnen-Alerts. ${pro} fügt Aimbot auf demselben Overlay-Stack hinzu.`,
    });
  }
  if (slug.includes('aimbot') || slug.includes('recoil')) {
    slugHints.push({
      id: 'forums-slug-aimbot',
      topic: 'scripts',
      icon: 'crosshair',
      q: 'Welcher Tarif enthält die Aim-Module aus diesem Thread?',
      a: `${pro} und ${elite} liefern Aimbot und No Recoil. ${lite} ist nur ESP.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('battleye')) {
    slugHints.push({
      id: 'forums-slug-hwid',
      topic: 'tools',
      icon: 'cpu',
      q: 'Ersetzt dieser Thread HWID- oder UGC-Tools?',
      a: `Recovery-Threads ergänzen ${hwid} und ${ugc} — lies Tool-Seiten für Workflow-Umfang und realistische Ergebnisse.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultForumFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Spieler-ESP & Operator-Boxen', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Gadget- & Fallen-Locator', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Drohnen-Positions-Alerts', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Minimap-Overlay', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Streamproof-Overlay', icon: 'stream' as const, lite: true, pro: true, elite: true },
  { feature: 'Operator-Namens-Tags', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Smooth Aimbot', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'No-Recoil-Kontrolle', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Triggerbot', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'FOV & Knochen-Auswahl', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Waffenspezifische Profile', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Spread-Reduktion', icon: 'eye' as const, lite: false, pro: true, elite: true },
  { feature: 'Volles Wallhack-Paket', icon: 'eye' as const, lite: false, pro: false, elite: true },
  { feature: 'Drohnen-Hack', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Speed-Hack-Modul', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Unlock All Operatoren', icon: 'tag' as const, lite: false, pro: false, elite: true },
  { feature: 'Priority-Patch-Warteschlange', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Direkter Dev-Discord-Support', icon: 'headphones' as const, lite: false, pro: false, elite: true },
  { feature: 'Cloud-Config-Backup', icon: 'package' as const, lite: true, pro: true, elite: true },
];
