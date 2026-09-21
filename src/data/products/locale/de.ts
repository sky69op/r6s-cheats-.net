import type { ProductLocaleBundle } from './types';

const sharedGoodToKnow =
  'Rainbow Six Siege und BattlEye werden häufig aktualisiert. Prüfe die Modulverfügbarkeit im Live-Status-Panel auf r6scheats.net, bevor du kaufst oder startest. Overlay-Verhalten kann sich in Custom Games, Replays und im Zuschauermodus nach Patches unterscheiden.';

const sharedLimitations =
  'Drittanbieter-Software in Rainbow Six Siege kann gegen die Ubisoft-Nutzungsbedingungen verstoßen und zu BattlEye-Banns oder Kontosanktionen führen. Du nutzt diese Software auf eigenes Risiko. Kompatibilität und Verfügbarkeit können sich nach Spiel-, BattlEye- oder Windows-Updates ohne Vorankündigung ändern.';

const r6sSystemRequirements = [
  { icon: 'windows' as const, text: 'Unterstützte 64-Bit-Edition von Windows 10 oder Windows 11.' },
  { icon: 'settings' as const, text: 'Aktueller Rainbow Six Siege-Client über Ubisoft Connect mit neuesten Patches.' },
  { icon: 'settings' as const, text: 'Administratorrechte für Loader-Installation und Patch-Updates.' },
  { icon: 'wifi' as const, text: 'Stabile Internetverbindung für Portal-Zugang und Patch-Lieferung.' },
  { icon: 'cpu' as const, text: 'System, das die veröffentlichten Hardware-Anforderungen von Rainbow Six Siege erfüllt.' },
];

const acquisitionSteps = [
  {
    num: '01',
    title: 'Aktuellen Status prüfen',
    desc: 'Schau dir das Live-Banner auf r6scheats.net vor dem Kauf an—besonders nach einem Rainbow Six Siege- oder BattlEye-Update.',
  },
  {
    num: '02',
    title: 'Zugangsstufe wählen',
    desc: 'Wähle Lite, Pro, Elite oder das Utility, das zu deinem Ziel passt. Modulzugang unterscheidet sich je nach Stufe—vergleiche die Feature-Liste vor dem Checkout über unseren sicheren Checkout.',
  },
  {
    num: '03',
    title: 'Team kontaktieren',
    desc: 'Bestätige Verfügbarkeit, Ubisoft Connect-Plattform und Zahlungsdetails—halte deine Bestell-E-Mail vor dem Checkout bereit.',
  },
  {
    num: '04',
    title: 'Geführtes Setup folgen',
    desc: 'Nutze ausschließlich das Operatoren-Portal, den Patch-Loader und die Setup-Anleitung. Teste in einer Custom Game, lade Presets und queue dann Ranked oder Unranked.',
  },
];

const hwidSpooferAcquisitionSteps = [
  {
    num: '01',
    title: 'Hardware-Flag bestätigen',
    desc: 'Wenn ein brandneuer Ubisoft-Account auf diesem PC sofort scheitert, auf einem anderen Rechner aber funktioniert, hat BattlEye wahrscheinlich deine Hardware-ID markiert — nicht nur einen Account. Reine Account-Banns gehören zum UGC-Appeal-Pfad.',
  },
  {
    num: '02',
    title: 'Kaufen und Portal öffnen',
    desc: 'Checkout HWID Spoofer auf r6scheats.net und nutze deine Liefer-E-Mail für das Operatoren-Portal. Lade nur von dort — niemals über zufällige Discord-Links.',
  },
  {
    num: '03',
    title: 'Pre-Spoof-Checkliste ausführen',
    desc: 'Erstelle einen Windows-Wiederherstellungspunkt, schließe Rainbow Six Siege und Ubisoft Connect, entferne alte Spoof-Tools, füge Portal-Ordner als AV-Ausnahme hinzu und führe den integrierten Kompatibilitätsscan aus, bevor du Disk-Seriennummern oder MAC-Adressen änderst.',
  },
  {
    num: '04',
    title: 'Anwenden, prüfen und neu starten',
    desc: 'Folge dem Spoof-Workflow im Portal, führe den geforderten Cold Reboot aus und prüfe den Identifier-Diff-Report. Erst danach Siege in einer Custom Game mit frischem Account starten — vor Ranked.',
  },
];

const ugcAcquisitionSteps = [
  {
    num: '01',
    title: 'Ban-Aussteller identifizieren',
    desc: 'Lies die Mitteilung genau: Ein BattlEye „Global Ban #ID“ geht an BattlEye Support; Ubisoft-Sanktionen, Security Holds oder Chat-Strafen über Ubisoft Help. UGC leitet jeden Falltyp anders.',
  },
  {
    num: '02',
    title: 'Fall-Beweise sammeln',
    desc: 'Sammle Ban-Screen oder E-Mail, Global Ban ID falls angezeigt, Ubisoft Connect-Benutzername, Zeitlinie, installierte Software und ggf. Login- oder Kompromittierungsnachweise vor dem Checkout.',
  },
  {
    num: '03',
    title: 'Kaufen und Workflow aufbauen',
    desc: 'Checkout UGC Unban Tool auf r6scheats.net, öffne das Case-Dashboard und stelle deinen Appeal mit dem passenden Template zusammen — False Positive, Account-Kompromittierung oder Restrictions-Streit.',
  },
  {
    num: '04',
    title: 'Einmal einreichen und Follow-ups tracken',
    desc: 'Sende genau einen Appeal über den richtigen offiziellen Kanal (BattlEye Contact oder Ubisoft Help-Ticket — kein Live-Chat). Protokolliere die Einreichung in UGC und prüfe E-Mail inkl. Spam auf Antworten.',
  },
];

const unlockAllAcquisitionSteps = [
  {
    num: '01',
    title: 'Standalone oder Elite wählen',
    desc: 'Unlock All ist im Elite-Tarif enthalten. Kaufe standalone hier, wenn du nur lokale Kosmetik-Vorschau willst — Operatoren, Elite-Skins, Charms und Attachments — ohne Kampfmodule.',
  },
  {
    num: '02',
    title: 'Checkout und Portal-Lieferung',
    desc: 'Schließe den Checkout auf r6scheats.net ab, bestätige deine Bestell-E-Mail und lade den Unlock-All-Build aus dem Operatoren-Portal nach der Lieferung.',
  },
  {
    num: '03',
    title: 'Siege für lokale Vorschau vorbereiten',
    desc: 'Aktualisiere Rainbow Six Siege über Ubisoft Connect, starte den Unlock-All-Loader vor dem Hauptmenü und nutze Custom Game oder Trainingssituation, damit Cloud-Save-Abfragen deine Vorschau-Session nicht überschreiben.',
  },
  {
    num: '04',
    title: 'Durchsuchen, favorisieren und exportieren',
    desc: 'Durchsuche den Kosmetik-Katalog, preview Operatoren und Elite-Skins nur auf deinem Client, speichere Favoriten und exportiere Loadout-Presets aus dem Portal. Andere Spieler im Lobby sehen weiterhin dein echtes Ubisoft-Inventar.',
  },
];

export const deProductContent: ProductLocaleBundle = {
  lite: {
    overview: {
      title: 'Auf einen klaren R6S-Awareness-Workflow ausgelegt',
      paragraphs: [
        'R6S Lite konzentriert sich auf Spieler-ESP, Gadget-Locator, Drohnen-Warnungen und Minimap-Overlay—alles, was du brauchst, um Roamer und Rundenkontrolle zu tracken, ohne Aimbot-Automatisierung. Module sind im Portal gruppiert, damit du Entfernung, Farben und Streamproof-Modus vor deiner ersten Queue einstellen kannst.',
        'Lite ist der Einstieg für Ranked- und Unranked-Spieler, die Intel wollen mit minimalem Report-Risiko. Kein Aimbot, kein Triggerbot—nur lesbare Overlays, die bei jedem Patch auf r6scheats.net gepflegt werden.',
      ],
    },
    about: [
      {
        type: 'p',
        text: 'R6S Lite ist für Spieler gemacht, die Intel zuerst wollen. Im Ranked gewinnt man mehr Runden, wenn man Gegnerpositionen, Gadget-Platzierungen und Drohnenstandorte kennt—Lite gibt dir diesen Vorteil ohne Aimbot-Automatisierung.',
      },
      { type: 'h2', text: 'Ranked-sicher by Design' },
      {
        type: 'p',
        text: 'Lite überspringt Aimbot- und Triggerbot-Module komplett. Dein Gameplay wirkt natürlich, während ESP, Gadget-Tracking und Drohnen-Warnungen dich informiert halten. Der Streamproof-Modus versteckt Overlays vor OBS-Aufnahme—ideal für Content Creator.',
      },
    ],
    body: [
      { type: 'h2', text: 'Enthaltene Module' },
      {
        type: 'p',
        text: 'Spieler-ESP mit Entfernung und Namens-Tags, Gadget- und Fallen-Locator, Drohnenpositions-Warnungen und stream-sicheres Overlay-Hiding. Ranked- und Unranked-Presets liegen im Portal bereit—lade sie vor deiner ersten Queue.',
      },
      { type: 'h2', text: 'Upgrade-Pfad' },
      {
        type: 'p',
        text: 'Lite-Lizenzen können über das Portal auf Pro oder Elite upgraden, ohne Config-Backups zu verlieren. Vergleiche die Stufen auf der Hauptproduktseite vor dem Checkout über unseren sicheren Checkout.',
      },
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    fullFeatures: [
      'Spieler-ESP & Operatoren-Boxen',
      'Gadget- & Fallen-Locator',
      'Drohnenpositions-Warnungen',
      'Operatoren-Namens-Tags',
      'Minimap-Overlay',
      'Streamproof-Overlay-Modus',
      'Entfernungsanzeigen',
      'Team-Farbfilter',
      'Verteidiger/Angreifer-Filter',
      'Gadget-Cooldown-Tracking',
      'Unranked-Preset-Config',
      'Ranked-Preset-Config',
      'Cloud-Config-Backup',
      'Patch-Auto-Updater',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps,
    acquisitionTitle: 'So erhältst du {name}',
  },
  pro: {
    overview: {
      title: 'Auf einen klaren R6S-Aimbot-Workflow ausgelegt',
      paragraphs: [
        'R6S Pro ergänzt jedes Lite-Modul um sanften Aimbot, No Recoil und Triggerbot. Waffenprofile, Glättungs-Tuning und Aktivierungstasten liegen in einem Aim-Tab—abgestimmt auf Ranked-Lobbys, wenn du mit Portal-Presets startest, nicht mit max Sliders.',
        'Pro ist die beliebteste Stufe: genug Feuerkraft für Ranked und Unranked ohne Elite-Platzlimits. FOV-Limits und Glättung halten dich effizient im Gefecht, während Aim-Einstellungen bei Standardwerten menschlich wirken.',
      ],
    },
    about: [
      {
        type: 'p',
        text: 'R6S Pro ist der Sweet Spot für Ranked-Grinder. Aimbot, No Recoil und Triggerbot helfen dir, Schusswechsel zu gewinnen—ohne offensichtliche Bot-Muster, wenn du die Glättung mit unseren Portal-Presets einstellst.',
      },
      { type: 'h2', text: 'Aim + Awareness kombiniert' },
      {
        type: 'p',
        text: 'Pro erbt jedes Lite-Modul und fügt sanften Aimbot, Rückstoßkontrolle, Triggerbot und FOV-Limits hinzu. Du siehst den Fight, bevor er beginnt, und gewinnst ihn mit Aim-Einstellungen, die bei Standardwerten menschlich bleiben.',
      },
    ],
    body: [
      { type: 'h2', text: 'Aim und Automatisierung' },
      {
        type: 'p',
        text: 'Sanfter Aimbot, No Recoil, Triggerbot mit FOV-Limits und Knochenauswahl. Glättung steuert das Aim-Timing, damit Einstellungen im Ranked natürlich wirken. Starte mit Portal-Presets, nicht mit max Sliders.',
      },
      { type: 'h2', text: 'Empfohlene Kombination' },
      {
        type: 'p',
        text: 'Pro ist die beliebteste Stufe auf r6scheats.net—genug Feuerkraft für High-Rank-Lobbys ohne Elite-Platzlimits. Lies unseren Aimbot-Thread in den Foren vor deiner ersten Ranked-Session.',
      },
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    fullFeatures: [
      'Alle Lite-ESP-Module',
      'Sanfter Aimbot',
      'No Recoil Kontrolle',
      'Triggerbot',
      'FOV- & Knochenauswahl',
      'Waffenspezifische Profile',
      'Streuungsreduzierung',
      'Glättungs-Tuning',
      'Aim-Profile pro Operator',
      'Drohnen-Warn-Integration',
      'Ranked-sichere Standard-Presets',
      'Custom-Game-Testprofil',
      'Cloud-Config-Backup',
      'Patch-Auto-Updater',
      'Portal-Setup-Anleitungen',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps,
    acquisitionTitle: 'So erhältst du {name}',
  },
  elite: {
    overview: {
      title: 'Auf einen vollständigen R6S-Operator-Workflow ausgelegt',
      paragraphs: [
        'R6S Elite ist der private Build mit vollem Wallhack, Drohnen-Hack, Unlock All und prioritärer Patch-Lieferung. Jedes Lite- und Pro-Modul ist enthalten—keine Limits, keine Upsells im Loader.',
        'Elite-Plätze sind begrenzt, damit Patch-Zyklen schnell bleiben und Builds wartbar sind. Direkter Dev-Support hilft dir, konservative Profile vor dem Ranked einzustellen. Prüfe das Status-Banner auf r6scheats.net vor dem Kauf.',
      ],
    },
    about: [
      {
        type: 'p',
        text: 'R6S Elite ist der private Build für Spieler, die alles wollen—voller Wallhack, Drohnen-Hack, Unlock All und direkter Dev-Support. Begrenzte Plätze halten den Build wartbar und Patch-Zyklen schnell.',
      },
      { type: 'h2', text: 'Elite verantwortungsvoll nutzen' },
      {
        type: 'p',
        text: 'Elite-Power verlangt disziplinierte Profile. Teste in Custom Games, starte mit konservativen Portal-Presets und steigere über Tage—nicht Minuten. Elite-Setup-Anleitungen helfen dir beim Tuning vor deiner ersten Ranked-Queue.',
      },
    ],
    body: [
      { type: 'h2', text: 'Volle Wallhack- und Intel-Suite' },
      {
        type: 'p',
        text: 'Voller Wallhack, Drohnen-Hack, Unlock All und Speed-Hack-Modul. Teste vor dem Ranked in Custom Games—Elite-Power braucht disziplinierte Profile, keine Rage-Settings.',
      },
      { type: 'h2', text: 'Verfügbarkeit' },
      {
        type: 'p',
        text: 'Elite erscheint als begrenzte Plätze im Status-Banner. Prüfe die Statusseite, wenn der Checkout gesperrt ist—bestätige die Platzverfügbarkeit vor dem Kauf.',
      },
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    fullFeatures: [
      'Alle Lite- + Pro-Module',
      'Volle Wallhack-Suite',
      'Drohnen-Hack',
      'Speed-Hack-Modul',
      'Alle Operatoren freischalten',
      'Prioritäts-Patch-Warteschlange',
      'Direkter Dev-Support',
      'Elite-konservative Presets',
      'Cloud-Config-Backup',
      'Patch-Auto-Updater',
      'Privater Platz-Zugang',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps,
    acquisitionTitle: 'So erhältst du {name}',
  },
  'hwid-spoofer': {
    overview: {
      title: 'Auf einen klaren Hardware-Recovery-Workflow ausgelegt',
      paragraphs: [
        'Der HWID Spoofer hilft Rainbow Six Siege-Spielern, wenn BattlEye PC-Hardware flaggt, das Ubisoft-Konto aber noch sauber ist. Festplatten- und MAC-Profil-Tools liefern eine Restore-Point-Checkliste, Kompatibilitäts-Scan und Verifizierung nach dem Spoof.',
        'Nutze diesen Weg, wenn frische Accounts auf einem Rechner sofort scheitern, woanders aber funktionieren—nicht bei reinen Account-BattlEye-Fällen. Nach der Verifizierung starte Rainbow Six Siege in einer Custom Game mit frischem Ubisoft-Account—vor dem Ranked.',
      ],
    },
    body: [
      { type: 'h2', text: 'Wann du es brauchst' },
      {
        type: 'p',
        text: 'Nutze es, wenn frische Ubisoft-Accounts auf einem PC sofort scheitern, woanders aber funktionieren—klassische HWID-Enforcement. Nicht bei reinen Account-BattlEye-Fällen; siehe stattdessen [UGC](/tools/r6s-cheats/ugc/).',
      },
      { type: 'h2', text: 'Kompletter Workflow' },
      {
        type: 'p',
        text: 'Wiederherstellungspunkt, Driver-Cleanup, Spoof-Anwendung, Cold Reboot, Identifier-Verifizierung, dann Login-Test in Custom Game mit frischem Ubisoft-Account. Die vollständige Checkliste liegt im Portal und in unserem HWID-Forum-Thread.',
      },
    ],
    goodToKnow:
      'Führe den Kompatibilitäts-Scan im Portal vor dem Spoofing aus. Erstelle zuerst einen Windows-Wiederherstellungspunkt. Verifiziere nach einem Cold Reboot, dass sich Identifier geändert haben, bevor du Rainbow Six Siege startest.',
    limitations:
      'Spoofing hilft nicht bei reinen Account-BattlEye-Fällen. Niemals zwei Spoof-Tools gleichzeitig nutzen. Geteilte oder Arbeits-PCs sind möglicherweise ungeeignet. Du trägst das volle Risiko von Driver-Level-Änderungen.',
    fullFeatures: [
      'Festplatten-Serienprofil-Tools',
      'MAC-Adressen-Rotation',
      'Restore-Point-Checkliste',
      'Kompatibilitäts-Scan',
      'Driver-Konflikt-Erkennung',
      'Verifizierung nach Spoof',
      'Identifier-Diff-Report',
      'Cold-Reboot-Anleitung',
      'Schritt-für-Schritt-Workflow im Portal',
      'Portal-Recovery-Support',
    ],
    systemRequirements: [
      { icon: 'windows', text: 'Windows 10 oder 11 64-Bit mit Administratorrechten.' },
      { icon: 'refresh', text: 'Möglichkeit, vor dem Start einen Systemwiederherstellungspunkt zu erstellen.' },
      { icon: 'shield', text: 'Folge der Portal-Setup-Anleitung, bevor du Rainbow Six Siege nach dem Spoofing startest.' },
      { icon: 'wifi', text: 'Stabile Verbindung für Portal-Verifizierungstools.' },
    ],
    acquisitionSteps: hwidSpooferAcquisitionSteps,
    acquisitionTitle: 'So erhältst du {name}',
  },
  ugc: {
    overview: {
      title: 'Auf Account-Recovery- und Einspruchs-Workflows ausgelegt',
      paragraphs: [
        'UGC (Unban & Governance Control) hilft dir, eingeschränkte Gaming-, Social- und Marketplace-Accounts mit strukturierten Einspruchs-Workflows und Automatisierung wiederherzustellen—keine sofortigen Entsperr-Garantien.',
        'Erstelle individuelle Streitwege, verfolge den Fallstatus und baue deine Präsenz mit intelligenten Restriction-Management-Tools wieder auf. Portal-Anleitungen führen dich Schritt für Schritt, wenn du hands-on Hilfe brauchst.',
      ],
    },
    body: [
      { type: 'h2', text: 'Was UGC abdeckt' },
      {
        type: 'p',
        text: 'UGC (Unban & Governance Control) ist ein Einspruchs-Workspace für Ubisoft-Beschränkungen, BattlEye-Banns und Sicherheitsflags. Erstelle individuelle Workflows, automatisiere Streitschritte und verfolge den Fallstatus in einem Dashboard—kein garantierter Unban-Service.',
      },
      { type: 'h2', text: 'Realistische Erwartungen' },
      {
        type: 'p',
        text: 'Manche BattlEye-Banns lassen sich nicht rückgängig machen. UGC organisiert Beweise und Follow-ups für die Ubisoft-Prüfung. Kombiniere mit [HWID Spoofer](/tools/r6s-cheats/hwid-spoofer/), wenn Hardware geflaggt ist, oder einem neuen Account, wenn die Reputation ruiniert ist.',
      },
    ],
    goodToKnow:
      'Sammle Bestell-E-Mail, Plattform-Account-Details und Screenshots der Beschränkung, bevor du ein Ticket eröffnest. UGC strukturiert Einsprüche—es umgeht keine Plattform-Prüfung.',
    limitations:
      'UGC garantiert keine Account-Wiederherstellung. Ergebnisse variieren je nach Falltyp. Permanente BattlEye-Banns erfordern möglicherweise einen neuen Account statt Einspruch.',
    fullFeatures: [
      'Individuelle Einspruchs-Workflows',
      'Streitautomatisierung bei Beschränkungen',
      'Falldokumentations-Vorlagen',
      'Status-Tracking-Dashboard',
      'Identitätsverifizierungs-Anleitung',
      'Beweis-Upload-Struktur',
      'Timeline-Tracker',
      'Follow-up-Antwort-Vorlagen',
      'Multi-Plattform-Support',
    ],
    systemRequirements: [
      { icon: 'mail', text: 'Bestell-E-Mail vom Checkout auf r6scheats.net.' },
      { icon: 'shield', text: 'Account-Details und Bann- oder Beschränkungsbenachrichtigung, falls vorhanden.' },
      { icon: 'wifi', text: 'Internetzugang für Portal-Support und Fall-Dashboard.' },
    ],
    acquisitionSteps: ugcAcquisitionSteps,
    acquisitionTitle: 'So erhältst du {name}',
  },
  'unlock-all': {
    overview: {
      title: 'Auf einen lokalen Kosmetik-Vorschau-Workflow ausgelegt',
      paragraphs: [
        'Unlock All lässt dich Operatoren, Elite-Skins und exklusive Waffen-Charms lokal in Rainbow Six Siege durchstöbern—durchsuchbarer Katalog, Favoriten und Loadout-Export ohne live Ubisoft-Käufe zu ändern.',
        'Kosmetik wird auf deinem Client für Tests und Content-Erstellung angezeigt. Andere Spieler sehen dein echtes Inventar, nicht Vorschau-Skins. Kostenlos in Elite enthalten; standalone für Kosmetik-Vorschau ohne Kampfmodule.',
      ],
    },
    body: [
      { type: 'h2', text: 'Nur lokale Vorschau' },
      {
        type: 'p',
        text: 'Operatoren und Skins werden auf deinem Client für Tests und Content-Erstellung angezeigt. Andere Spieler in deiner Lobby sehen dein echtes Inventar, nicht Vorschau-Skins.',
      },
      { type: 'h2', text: 'In Elite enthalten' },
      {
        type: 'p',
        text: 'Unlock All ist in der Elite-Stufe enthalten. Kaufe standalone hier, wenn du Kosmetik-Vorschau ohne volle Kampfmodule willst.',
      },
    ],
    goodToKnow:
      'Unlock All zeigt Operatoren und Skins lokal auf deinem Client. Andere Spieler in deiner Lobby sehen dein echtes Inventar—keine Vorschau-Skins. In der Elite-Stufe enthalten.',
    limitations:
      'Nur lokale Vorschau—ändert kein Ubisoft-Inventar oder Store-Status. Andere Spieler können vorgeschaute Elite-Skins oder Operatoren nicht sehen.',
    fullFeatures: [
      'Operatoren-Freischalt-Vorschau',
      'Elite-Skin-Vorschau',
      'Waffen- & Charm-Anpassung',
      'Charm- & Attachment-Editor',
      'HUD-Theme-Wechsel',
      'Operatoren-Karten-Ersatz',
      'Favoritenliste',
      'Loadout-Export',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps: unlockAllAcquisitionSteps,
    acquisitionTitle: 'So erhältst du {name}',
  },
};
