import type { ForumPostFull } from '../types';

/** Forum threads mirror the WarDogs cheat-instructions structure — R6S content only. */
export const forumPosts: ForumPostFull[] = [
  {
    tag: 'Leitfaden',
    featured: true,
    title: 'Beste R6 Cheats 2026 — Lite vs Pro vs Elite',
    slug: 'best-r6-cheats-2026',
    desc: 'Best R6 cheats 2026 Vergleich für Rainbow Six Siege PC — Aimbot, ESP Wallhack, HWID Spoofer, Unlock All und BattlEye-Patch-Geschwindigkeit. Wie r6scheats.net Lite, Pro und Elite im Vergleich zu typischen Reseller-Listings abschneiden.',
    date: '18. Sep. 2026',
    readTime: '6 Min. Lesezeit',
    body: [
      {
        type: 'p',
        text: 'Die Suche nach **best R6 cheats 2026** landet oft auf Reseller-Seiten, die dieselben Loader mit Aufschlag und langsameren Patch Notes weiterverkaufen. r6scheats.net verkauft direkt — ein Loader, drei Stufen, plus eigenständige **HWID Spoofer**- und **Unlock All**-Tools, wenn du Hardware-Recovery oder kosmetische Vorschau außerhalb eines Cheat-Abos brauchst.',
      },
      { type: 'h2', text: 'Schnelle Stufen-Auswahl' },
      {
        type: 'ul',
        items: [
          '**Lite** — ESP, Gadget-Wallhack, 2D-Radar; kein **Aimbot**',
          '**Pro** — Lite plus **Aimbot**, Soft Aim, Triggerbot und No Recoil',
          '**Elite** — Private Build mit **Unlock All**, Drone Hack und priorisierten BattlEye-Reloads',
        ],
      },
      { type: 'h2', text: 'Best R6 cheats 2026 Vergleich' },
      {
        type: 'table',
        headers: ['Feature', 'Lite', 'Pro', 'Elite', 'Typischer Reseller'],
        rows: [
          ['ESP / Wallhack', 'Ja', 'Ja', 'Voll', 'Variiert je Listing'],
          ['Aimbot / Soft Aim', 'Nein', 'Ja', 'Ja', 'Oft veraltete Builds'],
          ['Unlock All', 'Nein', 'Nein', 'Ja', 'Selten enthalten'],
          ['HWID Spoofer-Pfad', 'Portal-Link', 'Portal-Link', 'Priority Support', 'Meist nicht erwähnt'],
          ['BattlEye-Patch-Geschwindigkeit', 'Live-Status-Banner', 'Live-Status-Banner', 'Priority Reload', 'Verzögerte Reseller-Notes'],
          ['Direkter Support', 'Standard', 'Standard', 'Elite Dev Discord', 'Nur Drittanbieter-Ticket'],
        ],
      },
      { type: 'h2', text: 'Aimbot-Stufenwahl 2026' },
      {
        type: 'p',
        text: 'BattlEye flaggt 2026 offensichtliches Open-FOV-**Aimbot**-Verhalten schnell. Pro und Elite liefern ranked-sicheres Soft Aim mit Visible Check standardmäßig an — keine Raw-Snap-Modi. Ersteinrichtung: [Aimbot Setup](/forums/r6s-aimbot-setup/). Wähle **Lite**, wenn du nur ESP-Intel willst und **Aimbot**-Module komplett ablehnst.',
      },
      { type: 'h2', text: 'HWID und Unlock All — was Reseller auslassen' },
      {
        type: 'p',
        text: 'Die meisten **best R6 cheats 2026** Reseller-Seiten ignorieren **HWID**-Recovery. Wenn frische Ubisoft-Accounts auf einem PC sofort scheitern, brauchst du einen **HWID Spoofer**-Workflow — keinen weiteren Cheat-Key. Anleitung: [HWID Spoofer Guide](/forums/r6s-hwid-spoofer-guide/). **Unlock All** für lokale Operator- und Elite-Skin-Vorschau ist in Elite enthalten; Reseller bündeln es selten. Guide: [Unlock All Guide](/forums/r6s-unlock-all-guide/).',
      },
      { type: 'h2', text: 'Vor dem Kauf bei einem Reseller' },
      {
        type: 'ol',
        items: [
          'Prüfe, ob der Verkäufer direkt oder Reseller mit Aufschlag ist — Patch-Geschwindigkeit unterscheidet sich',
          'Verifiziere **Aimbot**-, **HWID Spoofer**- und **Unlock All**-Support vor dem Checkout',
          'Lies das Live-Status-Banner auf r6scheats.net nach jedem Siege- oder BattlEye-Patch',
          'Vergleiche offizielle Stufen: [Lite](/cheats/lite/), [Pro](/cheats/pro/), [Elite](/cheats/elite/)',
        ],
      },
      { type: 'h2', text: 'Unsere Picks 2026' },
      {
        type: 'p',
        text: '**Best R6 cheats 2026 für die meisten Ranked-Spieler:** **Pro** — ESP plus **Aimbot** ohne Elite-Slot-Limits. **Bestes Premium-Bundle:** **Elite**, wenn du **Unlock All**, Drone Hack und schnellste Reloads willst. **Bestes Intel-only:** **Lite**, wenn du **Aimbot** gar nicht nutzen willst.',
      },
    ],
  },
  {
    tag: 'Einrichtung',
    title: 'R6S Cheat Antivirus-Einrichtung',
    slug: 'r6s-antivirus-setup',
    desc: 'Windows Defender und Drittanbieter-Antivirus markieren R6s Cheats-Loader für Rainbow Six Siege oft, weil sie in einen BattlEye-geschützten Prozess eingreifen. Diese r6scheats.net-Anleitung führt dich durch Ordner-Ausnahmen unter Windows 10 und 11, damit dein Loader sauber installiert und vor der Queue injiziert.',
    date: '14. Sep. 2026',
    readTime: '4 Min. Lesezeit',
    body: [
      {
        type: 'p',
        text: 'Loader für Rainbow Six Siege Cheats werden oft als verdächtig markiert, weil sie in ein BattlEye-geschütztes Spiel injizieren. Das bedeutet nicht immer, dass die Datei schädlich ist — lade aber nur aus deiner r6scheats.net-Liefer-E-Mail und niemals über zufällige Discord-Links.',
      },
      { type: 'h2', text: 'Windows Defender Ausnahmen' },
      {
        type: 'ol',
        items: [
          'Öffne **Windows-Sicherheit → Viren- & Bedrohungsschutz → Einstellungen verwalten**',
          'Scrolle zu **Ausnahmen → Ausnahme hinzufügen → Ordner**',
          'Füge den Ordner hinzu, in den du den Loader entpackt hast (nicht den Siege-Installationsordner)',
          'Wiederhole dies für die Loader-`.exe`, falls Defender sie bereits in Quarantäne verschoben hat — zuerst wiederherstellen, dann ausnehmen',
        ],
      },
      { type: 'h2', text: 'Drittanbieter-Antivirus' },
      {
        type: 'p',
        text: 'Avast, AVG, Bitdefender und Norton blockieren Injectoren oft härter als Defender. Deaktiviere den Echtzeitschutz kurz während der Erstinstallation oder füge dieselbe Ordner-Ausnahme hinzu. Aktiviere den Schutz wieder, nachdem der Loader auf der Whitelist steht.',
      },
      { type: 'h2', text: 'Warum BattlEye AV-Scans auslöst' },
      {
        type: 'p',
        text: 'BattlEye überwacht Speicher-Injection in Rainbow Six Siege — legitime R6s Cheats-Loader nutzen dieselben Low-Level-Techniken, die Antivirus-Heuristiken markieren. Offizielle Builds von r6scheats.net werden vor Release gescannt; prüfe deinen Hash im Lieferportal, wenn Defender nach Ausnahmen weiter in Quarantäne verschiebt. Vollständiger Setup-Pfad: [Cheat-Einrichtung](/forums/r6s-cheat-setup/).',
      },
      { type: 'h2', text: 'Vor dem Injecten' },
      {
        type: 'p',
        text: 'Schließe zuerst die Ausnahmen ab, dann folge [Rainbow Six Siege Cheat-Einrichtung](/forums/r6s-cheat-setup/). Wenn der Loader weiterhin fehlschlägt, siehe [Loader-Fehler](/forums/r6s-loader-errors/).',
      },
    ],
  },
  {
    tag: 'Einrichtung',
    title: 'R6S Cheat-Einrichtung',
    slug: 'r6s-cheat-setup',
    desc: 'Schritt-für-Schritt R6s Cheats-Installation für Rainbow Six Siege — Lite ESP, Pro Aimbot, Elite Unlock All. r6scheats.net-Liefer-E-Mail bis zum ersten Inject und Ingame-Menü auf Windows-PC mit BattlEye-kompatiblen Builds.',
    date: '14. Sep. 2026',
    readTime: '5 Min. Lesezeit',
    body: [
      { type: 'h2', text: 'Lizenz erhalten' },
      {
        type: 'p',
        text: 'Nach Zahlungseingang kommt deine Lizenz per E-Mail. Bewahre die Bestell-ID für den Support auf. **Lite** aktiviert nur ESP; **Pro** fügt **Aimbot**-Module hinzu; **Elite** enthält **Unlock All** und alle Kampf-Features. Vergleiche Stufen auf [Rainbow Six Siege Cheats](/cheats/) oder lies [Beste R6 Cheats 2026](/forums/best-r6-cheats-2026/).',
      },
      { type: 'h2', text: 'Loader installieren' },
      {
        type: 'p',
        text: 'Lade den Loader aus deiner Liefer-E-Mail herunter. Führe ihn als Administrator auf dem Windows-PC aus. Füge deinen Lizenzschlüssel ein, wenn du dazu aufgefordert wirst. Wenn Windows die Datei blockiert, schließe zuerst die [Antivirus-Einrichtung](/forums/r6s-antivirus-setup/) ab, bevor du es erneut versuchst.',
      },
      { type: 'h2', text: 'Erster Start' },
      {
        type: 'p',
        text: 'Klicke im Loader auf Inject oder Start, dann starte Rainbow Six Siege über Ubisoft Connect. Öffne das Cheat-Menü mit **INSERT** (oder deiner gebundenen Taste). Weiter: [Rainbow Six Siege Cheats nutzen](/forums/how-to-use-r6s-cheats/) und die [Hotkeys](/forums/r6s-cheat-hotkeys/)-Liste.',
      },
      { type: 'h2', text: 'Ubisoft-Connect-Startreihenfolge' },
      {
        type: 'p',
        text: 'Injiziere über den r6scheats.net-Loader **bevor** Siege das Hauptmenü erreicht — BattlEye initialisiert sich früh in der Boot-Sequenz. Starte Siege nie zuerst und injiziere nicht spät. Steam-/Ubisoft-Overlay-Konflikte sind selten, schließe aber unnötige Launcher, wenn der Inject hängt. Feature-Tuning: [Rainbow Six Siege Cheats nutzen](/forums/how-to-use-r6s-cheats/).',
      },
      { type: 'h2', text: 'Wenn die Einrichtung fehlschlägt' },
      {
        type: 'p',
        text: 'Siehe [Loader-Fehler](/forums/r6s-loader-errors/). Wenn jeder frische Ubisoft-Account auf diesem PC scheitert, hat BattlEye möglicherweise deine **HWID** geflaggt — siehe [HWID Spoofer Guide](/forums/r6s-hwid-spoofer-guide/). Kontaktiere den Support mit Bestell-ID und Fehlertext.',
      },
    ],
  },
  {
    tag: 'Anleitung',
    title: 'R6S Cheats nutzen',
    slug: 'how-to-use-r6s-cheats',
    desc: 'R6s Cheats in Rainbow Six Siege nutzen — Loader-Inject, Aimbot, ESP, Unlock All und Ingame-Module pro Match. BattlEye-Ranked und Unranked auf Windows-PC via r6scheats.net.',
    date: '14. Sep. 2026',
    readTime: '4 Min. Lesezeit',
    body: [
      {
        type: 'p',
        text: 'Nutze ein oder zwei Module gleichzeitig, bis du weißt, wie sie sich in Siege anfühlen. Ranked-Spieler starten meist nur mit ESP und fügen dann **Aimbot** (Soft Aim auf Pro/Elite) oder No Recoil nach Unranked-Tests hinzu. **Unlock All**-Vorschau gehört in Custom Games — nicht in deine erste Ranked-Queue.',
      },
      { type: 'h2', text: 'Typischer Session-Ablauf' },
      {
        type: 'ol',
        items: [
          'Starte den Loader als Admin und injiziere, bevor Siege das Hauptmenü erreicht',
          'Öffne das Menü (**INSERT** standardmäßig) und lade ein gespeichertes Profil oder nutze die Standardwerte',
          'Aktiviere **ESP** für Drohnen-Phase-Intel — halte Winkel, prefires nicht jede Wand',
          'Aktiviere **Aimbot** / Soft Aim oder **No Recoil** nur, wenn du bereit für Schusskampf-Automatisierung bist',
          'Deaktiviere schwere Features zwischen Runden, wenn du aufnimmst oder streamst',
        ],
      },
      { type: 'h2', text: 'Disziplin in der Drohnen-Phase' },
      {
        type: 'p',
        text: 'Nutze r6scheats.net-ESP in der Prep-Phase, um Roamer zu tracken — prefires nicht jede weiche Wand. BattlEye-Reports steigen, wenn Kill-Feeds unmöglich aussehen. Markiere Rotates mental und deaktiviere schwere Aim-Module bis zur Action-Phase. Menü-Referenz: [Cheat-Menü-Anleitung](/forums/r6s-cheat-menu-guide/).',
      },
      { type: 'h2', text: 'Ranked-Gewohnheiten' },
      {
        type: 'p',
        text: 'Prüfe das Status-Banner der Website, bevor du nach einem Siege- oder BattlEye-Patch in die Queue gehst. Konservatives FOV und Smoothing schlagen Max-Einstellungen am ersten Tag. Menü-Übersicht: [Cheat-Menü-Anleitung](/forums/r6s-cheat-menu-guide/).',
      },
    ],
  },
  {
    tag: 'Fehlerbehebung',
    title: 'R6S Patch-Rebuild-Anleitung',
    slug: 'r6s-patch-rebuild-guide',
    desc: 'Wenn Ubisoft Rainbow Six Siege patcht oder BattlEye aktualisiert, stoppen ältere R6s Cheats-Loader-Builds das Injizieren. Folge dieser r6scheats.net-Checkliste, um den neuesten BattlEye-kompatiblen Build zu holen, bevor du wieder Ranked queueing gehst.',
    date: '15. Sep. 2026',
    readTime: '4 Min. Lesezeit',
    body: [
      {
        type: 'p',
        text: 'Wenn Ubisoft ein Saison-Patch ausliefert oder BattlEye aktualisiert, kann der Loader von gestern aufhören zu injizieren. Geh nicht in Ranked-Queue, bis der Website-Status für deine Stufe grün zeigt.',
      },
      { type: 'h2', text: 'Post-Patch-Checkliste' },
      {
        type: 'ol',
        items: [
          'Aktualisiere Rainbow Six Siege vollständig über Ubisoft Connect',
          'Lies das Status-Banner auf r6scheats.net für Lite, Pro oder Elite',
          'Lade den neuesten Loader-Build aus deinem Portal oder der Discord-Ankündigung herunter',
          'Lade konservative Profile — **Aimbot**-FOV erneut testen, enges Soft Aim, reduzierte ESP-Reichweite',
          'Spiele ein Quick Match vor Ranked',
        ],
      },
      { type: 'h2', text: 'Zuerst r6scheats.net-Status prüfen' },
      {
        type: 'p',
        text: 'Das Banner auf r6scheats.net aktualisiert sich innerhalb weniger Stunden nach einem Siege- oder BattlEye-Patch — grün bedeutet, deine Stufe ist für Quick Match und Ranked freigegeben. Starte nicht den Loader von gestern in der Hoffnung, er funktioniert noch; veraltete Injects sind ein häufiger Post-Patch-Ban-Vektor. Detaillierte Fixes: [Loader-Fehler](/forums/r6s-loader-errors/).',
      },
      { type: 'h2', text: 'Gelber oder roter Status' },
      {
        type: 'p',
        text: '**Gelb** — nutzbar mit Einschränkungen; lies Discord-Hinweise. **Rot** — warte auf Reload-Anweisungen vom Team. Injecten bei rotem Status ist der schnellste Weg, Accounts zu flaggen.',
      },
    ],
  },
  {
    tag: 'Anleitung',
    title: 'R6S Cheat-Menü-Anleitung',
    slug: 'r6s-cheat-menu-guide',
    desc: 'R6s Cheats-Menü für Rainbow Six Siege Tab für Tab — Aimbot, ESP, Unlock All, Radar, Misc und gespeicherte Profile, damit der erste Start von r6scheats.net kein Raten ist.',
    date: '15. Sep. 2026',
    readTime: '5 Min. Lesezeit',
    body: [
      { type: 'h2', text: 'Aimbot / Aim-Tab' },
      {
        type: 'p',
        text: '**Aimbot**-Module auf Pro und Elite: Soft Aim, Triggerbot, FOV, Smoothing, Visible Check und Bone-Priorität. Kombiniere mit No Recoil für Entry-Operatoren. Erster Start: [Aimbot Setup](/forums/r6s-aimbot-setup/). Tuning: [Soft-Aim-Einstellungen](/forums/r6s-soft-aim-settings/).',
      },
      { type: 'h2', text: 'Unlock All-Tab (Elite)' },
      {
        type: 'p',
        text: 'Das **Unlock All**-Panel zeigt Operatoren, Elite-Skins und Charms lokal — andere Spieler sehen weiterhin dein echtes Inventar. Nicht auf Lite oder Pro. Vollständige Anleitung: [Unlock All Guide](/forums/r6s-unlock-all-guide/).',
      },
      { type: 'h2', text: 'Visuals / ESP-Tab' },
      {
        type: 'p',
        text: 'Spieler-Boxen, Gadget-ESP, Bomben-Info, Drohnen-Markierungen, Wallhack-Deckkraft und Teamfarben. Details: [ESP-Einstellungen](/forums/r6s-esp-settings/).',
      },
      { type: 'h2', text: 'Radar-Tab' },
      {
        type: 'p',
        text: '2D-Minimap-Radar für Operatoren außerhalb deines Kamera-Sichtfelds. Reichweite, Zoom und Symbolgröße. Details: [Radar-Einstellungen](/forums/r6s-radar-settings/).',
      },
      { type: 'h2', text: 'Misc-Tab' },
      {
        type: 'ul',
        items: [
          'Stream-sicheres Overlay umschalten',
          'Cloud-Config speichern/laden',
          'No-Recoil-Profile pro Waffe',
          'Hotkey-Neubelegungs-Shortcuts',
        ],
      },
      { type: 'h2', text: 'Stream-sicheres Overlay' },
      {
        type: 'p',
        text: 'Aktiviere Stream-sicher im Misc-Tab beim Clippen von Ranked oder Streamen — r6scheats.net-Overlays sind standardmäßig vor OBS- und Discord-Capture verborgen auf Pro- und Elite-Stufen. ESP und Radar rendern weiterhin nur auf deinem Monitor. Hotkey-Layout: [Cheat-Hotkeys](/forums/r6s-cheat-hotkeys/).',
      },
      { type: 'h2', text: 'Profile' },
      {
        type: 'p',
        text: 'Speichere separate Configs für Ranked, Unranked und Custom Games. Benenne sie nach Rolle — Entry, Anchor, Flex — damit du nicht mitten in der Session neu einstellst.',
      },
    ],
  },
  {
    tag: 'Fehlerbehebung',
    title: 'R6S Loader-Fehler',
    slug: 'r6s-loader-errors',
    desc: 'R6s Cheats-Loader-Fehler für Rainbow Six Siege beheben — ungültige Keys, BattlEye-Blocks, HWID-Hardware-Flags, Integritätsprüfungen und Antivirus-Quarantäne — bevor du ein Support-Ticket bei r6scheats.net öffnest.',
    date: '15. Sep. 2026',
    readTime: '5 Min. Lesezeit',
    body: [
      { type: 'h2', text: 'Lizenz ungültig oder abgelaufen' },
      {
        type: 'p',
        text: 'Kopiere den Schlüssel exakt aus deiner E-Mail — keine Leerzeichen am Ende. Bestätige, dass die Abo-Stufe zum heruntergeladenen Build passt. Lite-Schlüssel schalten keine Pro-Module frei.',
      },
      { type: 'h2', text: 'Injection fehlgeschlagen / BattlEye-Block' },
      {
        type: 'p',
        text: 'Bedeutet meist, dass Siege oder BattlEye aktualisiert wurden. Folge der [Patch-Rebuild-Anleitung](/forums/r6s-patch-rebuild-guide/). Starte Siege einmal vanilla, um zu bestätigen, dass das Spiel öffnet, bevor du erneut injizierst.',
      },
      { type: 'h2', text: 'Spielintegrität kann nicht überprüft werden' },
      {
        type: 'p',
        text: 'Repariere Rainbow Six Siege in Ubisoft Connect, starte den PC neu und teste ohne Loader. Dieser Fehler ist oft eine kaputte Spielinstallation — keine Cheat-Erkennung.',
      },
      { type: 'h2', text: 'Antivirus hat den Loader gelöscht' },
      {
        type: 'p',
        text: 'Stelle aus der Quarantäne wieder her und füge Ausnahmen aus der [Antivirus-Einrichtung](/forums/r6s-antivirus-setup/) hinzu. Lade erneut herunter, falls die Datei beschädigt wurde.',
      },
      { type: 'h2', text: 'Zuerst Siege vanilla starten' },
      {
        type: 'p',
        text: 'Nach jedem BattlEye-Update starte Rainbow Six Siege einmal ohne r6scheats.net-Loader, damit Ubisoft Connect die Dateiprüfung abschließt. Wenn Vanilla-Siege fehlschlägt, repariere das Spiel, bevor du den Cheat-Build beschuldigst — die meisten „Injection fehlgeschlagen"-Tickets sind veraltete Loader oder kaputte Installationen. Patch-Ablauf: [Patch-Rebuild-Anleitung](/forums/r6s-patch-rebuild-guide/).',
      },
      { type: 'h2', text: 'Hardware-Ban / Accounts scheitern sofort' },
      {
        type: 'p',
        text: 'Wenn jeder frische Ubisoft-Account auf einem PC scheitert, woanders aber funktioniert, hat BattlEye wahrscheinlich deine **HWID** geflaggt — kein Loader-Bug. Folge [HWID Spoofer Walkthrough](/forums/r6s-hwid-spoofer-guide/) und dem [HWID Spoofer Tool](/tools/r6s-cheats/hwid-spoofer/), bevor du einen weiteren Cheat-Key kaufst.',
      },
      { type: 'h2', text: 'Immer noch fest?' },
      {
        type: 'p',
        text: 'Öffne ein Support-Ticket mit Bestell-ID, Windows-Version, Siege-Build-Nummer und einem Screenshot des genauen Fehlertexts. Erwähne, ob du bereits einen **HWID Spoofer**-Workflow durchlaufen hast.',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'R6S Radar-Einstellungen',
    slug: 'r6s-radar-settings',
    desc: 'R6s Cheats 2D-Radar für Rainbow Six Siege konfigurieren — Reichweite, Zoom, Symbolgröße und Ranked-HUD-Platzierung. r6scheats.net-Radar ergänzt ESP für Flank-Timing ohne dein BattlEye-sicheres Overlay zu überladen.',
    date: '16. Sep. 2026',
    readTime: '4 Min. Lesezeit',
    body: [
      {
        type: 'p',
        text: 'Radar ergänzt ESP — nutze es für Flank-Timing auf Maps wie Clubhouse und Border, wo vertikaler Sound laut ist. Es ersetzt keine Drohnen-Phase-Disziplin.',
      },
      { type: 'h2', text: 'Start-Preset' },
      {
        type: 'ul',
        items: [
          '**Reichweite** — 25–35 m für Ranked; breiter nur in Custom Games',
          '**Zoom** — mittel, damit das Radar neben der Minimap lesbar bleibt',
          '**Symbolgröße** — klein; große Punkte blockieren Fadenkreuz-Platz bei 1080p',
          '**Teamfarben** — passend zu ESP-Farben, damit Callouts konsistent wirken',
        ],
      },
      { type: 'h2', text: 'Radar mit ESP-Farben abgleichen' },
      {
        type: 'p',
        text: 'Passe r6scheats.net-Radar-Teamfarben an deine ESP-Palette an, damit Flank-Callouts mid-Round konsistent bleiben — Verteidiger blau, Angreifer orange ist die Standard-Siege-Aufteilung. Farb-Mismatch lässt dich bei Site-Executes zögern. ESP-Tuning: [ESP-Einstellungen](/forums/r6s-esp-settings/).',
      },
      { type: 'h2', text: 'Map-Hinweise' },
      {
        type: 'p',
        text: 'Oregon und Clubhouse: vertikale Reichweite leicht erhöhen für Etagenwechsel. Bank und Chalet lange Flure: Reichweite senken, um Unordnung von entfernten roamern zu vermeiden, die du sowieso nicht treffen kannst.',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'R6S Soft-Aim-Einstellungen',
    slug: 'r6s-soft-aim-settings',
    desc: 'Aimbot- und Soft-Aim-Einstellungen für R6s Cheats in Rainbow Six Siege — FOV, Smoothing, Visible Check und Profile pro Operator, die unter BattlEye in Ranked glaubwürdig bleiben.',
    date: '16. Sep. 2026',
    readTime: '5 Min. Lesezeit',
    body: [
      {
        type: 'p',
        text: 'Siege-Schusskämpfe basieren auf Peeks — **Aimbot** Soft Aim soll beim Tracking helfen, nicht durch Wände snappen. Das ist der ranked-sichere **Aimbot**-Modus auf Pro und Elite. Starte in Unranked, bevor du es in Ranked aktivierst. Neu bei Aim-Modulen? Zuerst [Aimbot Setup](/forums/r6s-aimbot-setup/).',
      },
      { type: 'h2', text: 'Basis-Ranked-Aimbot-Profil' },
      {
        type: 'ul',
        items: [
          '**FOV** — 3–8°; für Ranked enger, niemals offenes FOV in High-Rank-Lobbys',
          '**Smoothing** — hoch auf 144Hz+-Monitoren, damit Flicks natürlich wirken',
          '**Visible Check** — an für wandnahe Peeks',
          '**Bone** — Brust standardmäßig; Kopf nur für Glaz/Kali-Holds',
          '**No-Recoil-Link** — aktivieren für Ash R4-C und Zofia M762 Entries',
        ],
      },
      { type: 'h2', text: 'Visible Check ist Pflicht' },
      {
        type: 'p',
        text: 'Halte Visible Check in Ranked immer aktiv auf r6scheats.net Pro- und Elite-Builds — Tracking durch weiche Wände ist der schnellste Weg zu Spieler-Reports, auch wenn BattlEye nicht sofort flaggt. Enges FOV plus hohes Smoothing wirkt natürlich auf Ash- und Zofia-Entry-Pfaden. Volles Aim-Menü: [Cheat-Menü-Anleitung](/forums/r6s-cheat-menu-guide/).',
      },
      { type: 'h2', text: 'Operator-spezifische Saves' },
      {
        type: 'p',
        text: 'Speichere separate Profile für Entry (Ash), Anchor (Smoke MP5) und Roamer (Caveira). Entry will etwas niedrigeres Smoothing; Anchors wollen Triggerbot optional nur an Türen.',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'R6S ESP-Einstellungen',
    slug: 'r6s-esp-settings',
    desc: 'Minimales ESP-Setup für R6s Cheats in Rainbow Six Siege Ranked — Spieler-Boxen, Gadget-Markierungen und Bomben-Info ohne Bildschirm-Clutter. r6scheats.net Lite- und Elite-Stufen erklärt für BattlEye-sicheres Intel in Drohnen-Phase und Execute.',
    date: '16. Sep. 2026',
    readTime: '5 Min. Lesezeit',
    body: [
      {
        type: 'p',
        text: 'ESP gewinnt Runden, indem es Rotates und Gadgets zeigt, bevor du dich committest. Zu viele Toggles überladen den Bildschirm und lassen dich offensichtlich spielen.',
      },
      { type: 'h2', text: 'Lite-Stufen-Startset' },
      {
        type: 'ul',
        items: [
          'Spieler-Boxen + Entfernung unter 25 m',
          'Gadget-ESP: Kameras, Claymores, Gu-Mines, Kapkan-Fallen',
          'Bombenträger / Defuser-Anzeige',
          'Wallhack-Deckkraft ~40 %',
        ],
      },
      { type: 'h2', text: 'Elite-Extras' },
      {
        type: 'p',
        text: 'Drohnen-ESP für Angreifer-Drohnen und Verteidiger-Yokai/Maestro-Feeds. Erst aktivieren, wenn Lite-ESP natürlich wirkt — Drohnen-Markierungen plus Spieler-Boxen können sich in der Prep-Phase überlappen. Elite bündelt auch **Unlock All** Operator-Vorschau — siehe [Unlock All Guide](/forums/r6s-unlock-all-guide/).',
      },
      { type: 'h2', text: 'Gadget-ESP rettet Runden' },
      {
        type: 'p',
        text: 'r6scheats.net Gadget-ESP für Kameras, Claymores, Gu-Mines und Kapkan-Fallen verhindert Gratis-Tode beim Rotate — schalte Gadget-Markierungen vor Spieler-Boxen, wenn der Bildschirm voll wirkt. Defuser- und Bombenträger-Icons zählen am meisten auf Match Point. Radar-Kombo: [Radar-Einstellungen](/forums/r6s-radar-settings/).',
      },
      { type: 'h2', text: 'Smarter spielen, nicht lauter' },
      {
        type: 'p',
        text: 'Nutze Intel, um Winkel zu **halten** und Rotates zu callen. Jede weiche Wand zu prefiren bringt Reports. Aktiviere Stream-sicher, wenn du Runden clippst oder Ranked streamst.',
      },
    ],
  },
  {
    tag: 'Anleitung',
    title: 'R6S Cheat-Hotkeys',
    slug: 'r6s-cheat-hotkeys',
    desc: 'Standard-R6s Cheats-Hotkeys für Rainbow Six Siege — Menü-Toggle, ESP, Soft Aim, No Recoil, Radar und Panic off. Belege im r6scheats.net-Ingame-Panel neu, damit Tasten nie mit Siege-Gadget-Binds kollidieren.',
    date: '16. Sep. 2026',
    readTime: '3 Min. Lesezeit',
    body: [
      { type: 'h2', text: 'Standardbelegungen' },
      {
        type: 'table',
        headers: ['Aktion', 'Standardtaste'],
        rows: [
          ['Menü öffnen / schließen', 'INSERT'],
          ['ESP umschalten', 'F1'],
          ['Soft Aim umschalten', 'F2'],
          ['No Recoil umschalten', 'F3'],
          ['Radar umschalten', 'F4'],
          ['Panic off (alle Features)', 'F12'],
        ],
      },
      { type: 'h2', text: 'Tipps zum Neubelegen' },
      {
        type: 'p',
        text: 'Vermeide Tasten, die Siege für Gadgets, Ping oder Voice nutzt. Maus-Seitentasten eignen sich gut für Panic off. Speichere Profile nach dem Neubelegen, damit Ranked- und Unranked-Layouts getrennt bleiben.',
      },
      { type: 'h2', text: 'Panic off (F12) üben' },
      {
        type: 'p',
        text: 'Binde Panic off an eine Maus-Seitentaste auf r6scheats.net-Profilen für Ranked — F12 deaktiviert jedes Modul sofort, wenn ein Clip, Overlay-Glitch oder Zuschauer-Pause dich mid-Round nervös macht. Teste die Bindung in einem Custom Match, bevor du BattlEye-Ranked queueing gehst. Nutzungsanleitung: [Rainbow Six Siege Cheats nutzen](/forums/how-to-use-r6s-cheats/).',
      },
      { type: 'h2', text: 'Vor Ranked' },
      {
        type: 'p',
        text: 'Teste jede gebundene Taste in einem Custom Match — falsch gebundenes Panic off mitten in der Runde ist schlimmer als keine Cheats. Vollständige Menü-Übersicht: [Cheat-Menü-Anleitung](/forums/r6s-cheat-menu-guide/).',
      },
    ],
  },
  {
    tag: 'Anleitung',
    title: 'R6S Aimbot-Einrichtung',
    slug: 'r6s-aimbot-setup',
    desc: 'Erstmalige Aimbot-Einrichtung für R6s Cheats Pro und Elite in Rainbow Six Siege — Soft Aim sicher aktivieren, FOV und Glättung setzen, No Recoil verknüpfen und in Unranked testen vor Ranked auf r6scheats.net-Builds.',
    date: '17. Sep. 2026',
    readTime: '5 Min. Lesezeit',
    body: [
      {
        type: 'p',
        text: 'Aimbot-Module gibt es nur auf Pro- und Elite-Tarifen. Lite-Nutzer überspringen diesen Thread und nutzen [ESP-Einstellungen](/forums/r6s-esp-settings/). Schließe zuerst [Cheat-Setup](/forums/r6s-cheat-setup/) und [Antivirus-Setup](/forums/r6s-antivirus-setup/) ab.',
      },
      { type: 'h2', text: 'Aim-Tab öffnen' },
      {
        type: 'p',
        text: 'Über den r6scheats.net-Loader injizieren, Siege starten, **INSERT** drücken und den **Aim**-Tab öffnen. Lade **Ranked Safe**, wenn du neu bist — nach jedem BattlEye-Patch liefert das Team konservative Defaults.',
      },
      { type: 'h2', text: 'Checkliste erste Session' },
      {
        type: 'ol',
        items: [
          '**Visible check** vor allem anderen aktivieren',
          '**FOV** auf 5–8° für erste Tests; später in Ranked enger',
          '**Smoothing** erhöhen, bis Flicks auf deiner Monitor-Hz natürlich wirken',
          '**Chest**-Bone standardmäßig; Head nur für Long-Range-Holds',
          '**No recoil** für Entry-Waffen verknüpfen (Ash R4-C, Zofia M762)',
          'Ein Unranked-Match nur mit Soft Aim — noch kein Triggerbot',
        ],
      },
      { type: 'h2', text: 'Soft Aim vs. voller Aimbot' },
      {
        type: 'p',
        text: 'Starte mit **Soft Aim** — es unterstützt Tracking auf Peeks statt durch Wände zu snappen. Volle Aimbot-Modi nur in Custom Games. Feintuning nach der ersten Session: [Soft-Aim-Einstellungen](/forums/r6s-soft-aim-settings/).',
      },
      { type: 'h2', text: 'Vor Ranked' },
      {
        type: 'p',
        text: 'Prüfe das Live-Status-Banner auf r6scheats.net nach Siege-Patches. Bei gelbem Status Staff-Notizen lesen, bevor Aim-Module in Ranked aktiv sind. Panic-Taste (**F12** Standard): [Hotkeys](/forums/r6s-cheat-hotkeys/).',
      },
    ],
  },
  {
    tag: 'Anleitung',
    title: 'R6S HWID Spoofer Anleitung',
    slug: 'r6s-hwid-spoofer-guide',
    desc: 'Schritt-für-Schritt HWID Spoofer für BattlEye-Hardwarebans in Rainbow Six Siege — Wiederherstellungspunkt, Portal-Download, Identifikator-Prüfung und erster Siege-Start nach Spoof von r6scheats.net.',
    date: '17. Sep. 2026',
    readTime: '6 Min. Lesezeit',
    body: [
      {
        type: 'p',
        text: 'Nutze den HWID Spoofer, wenn frische Ubisoft-Accounts auf einem PC sofort scheitern, auf einem anderen aber funktionieren — meist hat BattlEye die Hardware geflaggt, nicht den Account. Nur Account-Bans: [UGC](/tools/r6s-cheats/ugc/). Produktseite: [HWID Spoofer](/tools/r6s-cheats/hwid-spoofer/).',
      },
      { type: 'h2', text: 'Vor dem Spoof' },
      {
        type: 'ol',
        items: [
          'Windows-**Wiederherstellungspunkt** anlegen — Pflicht',
          'Rainbow Six Siege, Ubisoft Connect und andere Anti-Cheat-Spiele schließen',
          'Spoofer nur aus dem r6scheats.net-Lieferportal laden',
          'Zuerst den **Kompatibilitäts-Scan** im Portal ausführen',
        ],
      },
      { type: 'h2', text: 'Spoof-Workflow' },
      {
        type: 'p',
        text: 'Portal-Checkliste der Reihe nach: Disk-Serial-Profil → MAC-Rotation → GPU-Schritt falls für deinen Build gelistet. Kein zweites Spoof-Tool darüber legen. Nach Abschluss **Cold Reboot** (vollständiges Herunterfahren, kein Schnellstart).',
      },
      { type: 'h2', text: 'Identifikatoren prüfen' },
      {
        type: 'p',
        text: 'Nach Reboot den **Identifier-Diff**-Report im Portal ausführen. Disk- und MAC-Werte müssen sich vom Pre-Spoof-Snapshot unterscheiden. Wenn nichts geändert wurde, Siege nicht starten — Portal-Guide öffnen oder Support mit Order-ID kontaktieren.',
      },
      { type: 'h2', text: 'Erster Siege-Start nach Spoof' },
      {
        type: 'p',
        text: 'Rainbow Six Siege einmal vanilla über Ubisoft Connect starten, bevor du cheats injizierst. Hauptmenü erreichen. Dann **konservatives** r6scheats.net-Profil — nur ESP in der ersten Session. Loader-Probleme: [Loader-Fehler](/forums/r6s-loader-errors/).',
      },
      { type: 'h2', text: 'Was Spoofing nicht behebt' },
      {
        type: 'p',
        text: 'HWID Spoofing entfernt keine Account-Reputation-Strikes und garantiert keinen BattlEye Global Ban Lift. Geteilte PCs, Arbeits-Laptops und VMs scheitern oft am Kompatibilitäts-Scan — Support berät vor driver-level Tools.',
      },
    ],
  },
  {
    tag: 'Anleitung',
    title: 'R6S Unlock All Anleitung',
    slug: 'r6s-unlock-all-guide',
    desc: 'Unlock All von R6s Cheats in Rainbow Six Siege nutzen — Operatoren und Elite-Skins lokal durchsuchen, Favoriten, Loadout-Export und Ranked-Sicherheitshinweise für Elite auf r6scheats.net.',
    date: '17. Sep. 2026',
    readTime: '4 Min. Lesezeit',
    body: [
      {
        type: 'p',
        text: 'Unlock All zeigt Operatoren, Elite-Skins, Charms und Attachments **lokal auf deinem Client**. Andere Spieler in der Lobby sehen weiterhin dein echtes Ubisoft-Inventar — kosmetische Vorschau, kein Store-Unlock. In [Elite](/cheats/elite/) enthalten; Standalone: [Unlock All Tool](/tools/r6s-cheats/unlock-all/).',
      },
      { type: 'h2', text: 'Unlock All im Menü öffnen' },
      {
        type: 'p',
        text: 'Elite (oder Standalone Unlock All) injizieren, Siege starten, Ingame-Menü öffnen. Das **Unlock All**-Panel listet Operatoren, Elite-Skins und Charms in einem durchsuchbaren Katalog. Favoriten für Loadouts in Custom Games anheften.',
      },
      { type: 'h2', text: 'Empfohlener Workflow' },
      {
        type: 'ol',
        items: [
          'Operatoren und Skins zuerst in **Custom Match** oder Training durchsuchen',
          'Favoriten für Entry-, Anchor- und Flex-Loadouts speichern',
          'Loadout-JSON aus dem Panel exportieren bei PC-Wechsel',
          'Schwere Preview-Overlays vor Ranked deaktivieren — ESP minimal halten',
          'Niemals annehmen, dass Teamkollegen Preview-Skins in der Drohnenphase sehen',
        ],
      },
      { type: 'h2', text: 'Ranked-Sicherheit' },
      {
        type: 'p',
        text: 'Unlock All ändert keine Ubisoft-Server, aber extra Preview-Module in Ranked belasten Overlays. Staff empfiehlt Preview nur im Menü oder Custom Games, dann Kampfmodule (ESP, Soft Aim) für Ranked. Menü-Karte: [Cheat-Menü-Anleitung](/forums/r6s-cheat-menu-guide/).',
      },
      { type: 'h2', text: 'Elite-Bundle Hinweis' },
      {
        type: 'p',
        text: 'Mit Elite ist Unlock All im gleichen Loader — kein zweiter Kauf. Tarife auf [Rainbow Six Siege Cheats](/cheats/) vergleichen vor Standalone Unlock All.',
      },
    ],
  },
];
