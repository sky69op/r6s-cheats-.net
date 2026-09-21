import type { ForumPostFull } from './types';

/** Forum threads mirror the WarDogs cheat-instructions structure — R6S content only. */
export const forumPosts: ForumPostFull[] = [
  {
    tag: 'Setup',
    title: 'Rainbow Six Siege Cheat Antivirus Setup',
    slug: 'r6s-antivirus-setup',
    desc: 'Windows Defender and third-party antivirus often flag game cheat loaders. This thread shows safe exclusions so install and inject work on Windows PC.',
    date: 'Sep 14, 2026',
    readTime: '4 min read',
    body: [
      {
        type: 'p',
        text: 'Loaders for Rainbow Six Siege cheats are often flagged as suspicious because they inject into a BattlEye-protected game. That does not always mean the file is malicious — but you should still download only from your r6scheats.net delivery email and never from random Discord links.',
      },
      { type: 'h2', text: 'Windows Defender exclusions' },
      {
        type: 'ol',
        items: [
          'Open **Windows Security → Virus & threat protection → Manage settings**',
          'Scroll to **Exclusions → Add an exclusion → Folder**',
          'Add the folder where you extracted the loader (not the Siege install folder)',
          'Repeat for the loader `.exe` if Defender quarantined it already — restore first, then exclude',
        ],
      },
      { type: 'h2', text: 'Third-party antivirus' },
      {
        type: 'p',
        text: 'Avast, AVG, Bitdefender, and Norton often block injectors harder than Defender. Disable real-time shield briefly during first install, or add the same folder exclusion. Re-enable protection after the loader is whitelisted.',
      },
      { type: 'h2', text: 'Before you inject' },
      {
        type: 'p',
        text: 'Finish exclusions first, then follow [Rainbow Six Siege Cheat Setup](/forums/r6s-cheat-setup/). If the loader still fails, see [Loader Errors](/forums/r6s-loader-errors/).',
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'Rainbow Six Siege Cheat Setup',
    slug: 'r6s-cheat-setup',
    desc: 'From checkout email to first in-game menu — install, paste your license, and launch on Windows 10 or 11.',
    date: 'Sep 14, 2026',
    readTime: '5 min read',
    body: [
      { type: 'h2', text: 'Get your license' },
      {
        type: 'p',
        text: 'After payment clears, your license arrives by email. Keep the order ID for support. Compare Lite, Pro, and Elite on [Rainbow Six Siege Cheats](/tools/r6s-cheats/) — each tier unlocks the same loader with different modules enabled.',
      },
      { type: 'h2', text: 'Install the loader' },
      {
        type: 'p',
        text: 'Download the loader from your delivery email. Run it as administrator on Windows PC. Paste your license key when prompted. If Windows blocks the file, complete [Antivirus Setup](/forums/r6s-antivirus-setup/) before retrying.',
      },
      { type: 'h2', text: 'First launch' },
      {
        type: 'p',
        text: 'Click inject or launch in the loader, then start Rainbow Six Siege through Ubisoft Connect. Open the cheat menu with **INSERT** (or your bound key). Next: [How to Use Rainbow Six Siege Cheats](/forums/how-to-use-r6s-cheats/) and the [Hotkeys](/forums/r6s-cheat-hotkeys/) list.',
      },
      { type: 'h2', text: 'If setup fails' },
      {
        type: 'p',
        text: 'See [Loader Errors](/forums/r6s-loader-errors/). Contact support through the site contact page with your order ID and any error text.',
      },
    ],
  },
  {
    tag: 'Instructions',
    title: 'How to Use Rainbow Six Siege Cheats',
    slug: 'how-to-use-r6s-cheats',
    desc: 'Launch the loader, open the in-game menu, and turn on only the cheat features you need for each match.',
    date: 'Sep 14, 2026',
    readTime: '4 min read',
    body: [
      {
        type: 'p',
        text: 'Use one or two modules at a time until you know how they feel in Siege. Ranked players usually start with ESP only, then add soft aim or no recoil after a few unranked tests.',
      },
      { type: 'h2', text: 'Typical session flow' },
      {
        type: 'ol',
        items: [
          'Launch the loader as admin and inject before Siege reaches the main menu',
          'Open the menu (**INSERT** by default) and load a saved profile or use defaults',
          'Enable **ESP** for drone phase intel — hold angles, do not prefire every wall',
          'Enable **soft aim** or **no recoil** only when you are ready for gunfight automation',
          'Disable heavy features between rounds if you are recording or streaming',
        ],
      },
      { type: 'h2', text: 'Ranked habits' },
      {
        type: 'p',
        text: 'Check the site status banner before queuing after a Siege or BattlEye patch. Conservative FOV and smoothing beat max settings on day one. Menu breakdown: [Cheat Menu Guide](/forums/r6s-cheat-menu-guide/).',
      },
    ],
  },
  {
    tag: 'Troubleshooting',
    title: 'Rainbow Six Siege Patch Rebuild Guide',
    slug: 'r6s-patch-rebuild-guide',
    desc: 'Siege and BattlEye updates can break old cheat builds. This thread is the post-patch checklist.',
    date: 'Sep 15, 2026',
    readTime: '4 min read',
    body: [
      {
        type: 'p',
        text: 'When Ubisoft ships a seasonal patch or BattlEye updates, yesterday\'s loader may stop injecting. Do not queue ranked until the site status shows green for your tier.',
      },
      { type: 'h2', text: 'Post-patch checklist' },
      {
        type: 'ol',
        items: [
          'Fully update Rainbow Six Siege through Ubisoft Connect',
          'Read the status banner on r6scheats.net for Lite, Pro, or Elite',
          'Download the latest loader build from your portal or Discord announcement',
          'Load conservative profiles — narrow aim FOV, reduced ESP range',
          'Run one Quick Match before ranked',
        ],
      },
      { type: 'h2', text: 'Yellow or red status' },
      {
        type: 'p',
        text: '**Yellow** — usable with caveats; read Discord notes. **Red** — wait for staff reload instructions. Injecting on red status is how accounts get flagged fast.',
      },
    ],
  },
  {
    tag: 'Instructions',
    title: 'Rainbow Six Siege Cheat Menu Guide',
    slug: 'r6s-cheat-menu-guide',
    desc: 'A quick map of every tab in the cheat menu so you are not clicking blind on first launch.',
    date: 'Sep 15, 2026',
    readTime: '5 min read',
    body: [
      { type: 'h2', text: 'Aim tab' },
      {
        type: 'p',
        text: 'Soft aim, triggerbot, FOV, smoothing, visible check, and bone priority. Pair with no recoil for entry operators. Details: [Soft Aim Settings](/forums/r6s-soft-aim-settings/).',
      },
      { type: 'h2', text: 'Visuals / ESP tab' },
      {
        type: 'p',
        text: 'Player boxes, gadget ESP, bomb info, drone markers, wallhack opacity, and team colors. Details: [ESP Settings](/forums/r6s-esp-settings/).',
      },
      { type: 'h2', text: 'Radar tab' },
      {
        type: 'p',
        text: '2D minimap-style radar for operators outside your camera frustum. Range, zoom, and icon size. Details: [Radar Settings](/forums/r6s-radar-settings/).',
      },
      { type: 'h2', text: 'Misc tab' },
      {
        type: 'ul',
        items: [
          'Stream-proof overlay toggle',
          'Cloud config save/load',
          'No recoil per-weapon profiles',
          'Hotkey rebinding shortcuts',
        ],
      },
      { type: 'h2', text: 'Profiles' },
      {
        type: 'p',
        text: 'Save separate configs for ranked, unranked, and custom games. Name them by role — entry, anchor, flex — so you are not retuning mid-session.',
      },
    ],
  },
  {
    tag: 'Troubleshooting',
    title: 'Rainbow Six Siege Loader Errors',
    slug: 'r6s-loader-errors',
    desc: 'Common loader and license errors and how to fix them without opening a ticket first.',
    date: 'Sep 15, 2026',
    readTime: '5 min read',
    body: [
      { type: 'h2', text: 'License invalid or expired' },
      {
        type: 'p',
        text: 'Copy the key exactly from your email — no trailing spaces. Confirm the subscription tier matches the build you downloaded. Lite keys will not unlock Pro modules.',
      },
      { type: 'h2', text: 'Injection failed / BattlEye block' },
      {
        type: 'p',
        text: 'Usually means Siege or BattlEye updated. Follow [Patch Rebuild Guide](/forums/r6s-patch-rebuild-guide/). Launch Siege vanilla once to confirm the game opens before reinjecting.',
      },
      { type: 'h2', text: 'Unable to verify game integrity' },
      {
        type: 'p',
        text: 'Repair Rainbow Six Siege in Ubisoft Connect, restart PC, then test without the loader. This error is often a broken game install — not a cheat detection.',
      },
      { type: 'h2', text: 'Antivirus deleted the loader' },
      {
        type: 'p',
        text: 'Restore from quarantine and add exclusions from [Antivirus Setup](/forums/r6s-antivirus-setup/). Re-download if the file was corrupted.',
      },
      { type: 'h2', text: 'Still stuck?' },
      {
        type: 'p',
        text: 'Open a support ticket with order ID, Windows version, Siege build number, and a screenshot of the exact error text.',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'Rainbow Six Siege Radar Settings',
    slug: 'r6s-radar-settings',
    desc: 'The 2D radar shows operators outside your camera. Range, zoom, and keeping the HUD clean during ranked rounds.',
    date: 'Sep 16, 2026',
    readTime: '4 min read',
    body: [
      {
        type: 'p',
        text: 'Radar complements ESP — use it for flank timing on maps like Clubhouse and Border where vertical sound is noisy. It does not replace drone phase discipline.',
      },
      { type: 'h2', text: 'Starting preset' },
      {
        type: 'ul',
        items: [
          '**Range** — 25–35m for ranked; wider only in custom games',
          '**Zoom** — medium so the radar stays readable next to the minimap',
          '**Icon size** — small; large dots block crosshair space on 1080p',
          '**Team colors** — match ESP colors so callouts feel consistent',
        ],
      },
      { type: 'h2', text: 'Map notes' },
      {
        type: 'p',
        text: 'Oregon and Clubhouse: bump vertical range slightly for floor swaps. Bank and Chalet long halls: lower range to avoid clutter from distant roamers you cannot shoot anyway.',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'Rainbow Six Siege Soft Aim Settings',
    slug: 'r6s-soft-aim-settings',
    desc: 'Soft aim is optional. FOV, smoothness, visible check, and saving profiles per operator loadout.',
    date: 'Sep 16, 2026',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'Siege gunfights are peek-based — soft aim should assist tracking, not snap through walls. Start in unranked before enabling in ranked.',
      },
      { type: 'h2', text: 'Baseline ranked profile' },
      {
        type: 'ul',
        items: [
          '**FOV** — 3–8°; tighten for ranked, never run open FOV in high rank lobbies',
          '**Smoothing** — high on 144Hz+ monitors so flicks look natural',
          '**Visible check** — on for wall-adjacent peeks',
          '**Bone** — chest default; head only for Glaz/Kali holds',
          '**No recoil link** — enable for Ash R4-C and Zofia M762 entries',
        ],
      },
      { type: 'h2', text: 'Operator-specific saves' },
      {
        type: 'p',
        text: 'Save separate profiles for entry (Ash), anchor (Smoke MP5), and roamer (Caveira). Entry wants slightly lower smoothness; anchors want triggerbot optional on doorways only.',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'Rainbow Six Siege ESP Settings',
    slug: 'r6s-esp-settings',
    desc: 'Turn on only the ESP categories you need. Each wallhack toggle explained for ranked Siege.',
    date: 'Sep 16, 2026',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'ESP wins rounds by showing rotates and gadgets before you commit. Too many toggles clutters the screen and makes you play obvious.',
      },
      { type: 'h2', text: 'Lite tier starting set' },
      {
        type: 'ul',
        items: [
          'Player boxes + distance under 25m',
          'Gadget ESP: cameras, claymores, Gu mines, Kapkan traps',
          'Bomb carrier / defuser indicator',
          'Wallhack opacity ~40%',
        ],
      },
      { type: 'h2', text: 'Elite extras' },
      {
        type: 'p',
        text: 'Drone ESP for attacker drones and defender Yokai/Maestro feeds. Enable only after Lite ESP feels natural — drone markers plus player boxes can overlap during prep phase.',
      },
      { type: 'h2', text: 'Play smarter, not louder' },
      {
        type: 'p',
        text: 'Use intel to **hold** angles and call rotates. Prefiring every soft wall gets reports. Enable stream-proof if you clip rounds or stream ranked.',
      },
    ],
  },
  {
    tag: 'Instructions',
    title: 'Rainbow Six Siege Cheat Hotkeys',
    slug: 'r6s-cheat-hotkeys',
    desc: 'Default keys for the cheat menu and quick toggles. Rebind every key inside the in-game panel.',
    date: 'Sep 16, 2026',
    readTime: '3 min read',
    body: [
      { type: 'h2', text: 'Default bindings' },
      {
        type: 'table',
        headers: ['Action', 'Default key'],
        rows: [
          ['Open / close menu', 'INSERT'],
          ['Toggle ESP', 'F1'],
          ['Toggle soft aim', 'F2'],
          ['Toggle no recoil', 'F3'],
          ['Toggle radar', 'F4'],
          ['Panic off (all features)', 'F12'],
        ],
      },
      { type: 'h2', text: 'Rebinding tips' },
      {
        type: 'p',
        text: 'Avoid keys Siege uses for gadgets, ping, or voice. Mouse side buttons work well for panic off. Save profiles after rebinding so ranked and unranked layouts stay separate.',
      },
      { type: 'h2', text: 'Before ranked' },
      {
        type: 'p',
        text: 'Test every bound key in a custom match — misbound panic off mid-round is worse than no cheats. Full menu map: [Cheat Menu Guide](/forums/r6s-cheat-menu-guide/).',
      },
    ],
  },
];
