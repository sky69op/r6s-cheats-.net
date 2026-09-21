import type { ForumPostFull } from '../types';

/** Forum threads mirror the WarDogs cheat-instructions structure — R6S content only. */
export const forumPosts: ForumPostFull[] = [
  {
    tag: 'Guide',
    featured: true,
    title: 'Best R6 Cheats 2026 — Lite vs Pro vs Elite',
    slug: 'best-r6-cheats-2026',
    desc: 'Best R6 cheats 2026 comparison for PC — aimbot, ESP wallhack, HWID spoofer, unlock all and BattlEye patch speed. How r6scheats.net Lite, Pro and Elite compare to typical reseller listings.',
    date: 'Sep 18, 2026',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Searching **best R6 cheats 2026** usually lands on reseller sites that relist the same loaders with markup and slower patch notes. r6scheats.net sells direct — one loader, three tiers, plus standalone **HWID spoofer** and **unlock all** tools when you need hardware recovery or cosmetic preview outside a cheat sub.',
      },
      { type: 'h2', text: 'Quick tier picker' },
      {
        type: 'ul',
        items: [
          '**Lite** — ESP, gadget wallhack, 2D radar; no **aimbot**',
          '**Pro** — Lite plus **aimbot**, soft aim, triggerbot and no recoil',
          '**Elite** — private build with **unlock all**, drone hack and priority BattlEye reloads',
        ],
      },
      { type: 'h2', text: 'Best R6 cheats 2026 comparison' },
      {
        type: 'table',
        headers: ['Feature', 'Lite', 'Pro', 'Elite', 'Typical reseller'],
        rows: [
          ['ESP / wallhack', 'Yes', 'Yes', 'Full', 'Varies by listing'],
          ['Aimbot / soft aim', 'No', 'Yes', 'Yes', 'Often outdated builds'],
          ['Unlock all', 'No', 'No', 'Yes', 'Rarely included'],
          ['HWID spoofer path', 'Portal link', 'Portal link', 'Priority support', 'Usually not mentioned'],
          ['BattlEye patch speed', 'Live status banner', 'Live status banner', 'Priority reload', 'Delayed reseller notes'],
          ['Direct support', 'Standard', 'Standard', 'Elite dev Discord', 'Third-party ticket only'],
        ],
      },
      { type: 'h2', text: 'Aimbot tier choice in 2026' },
      {
        type: 'p',
        text: 'BattlEye in 2026 flags obvious open-FOV **aimbot** behavior quickly. Pro and Elite ship ranked-safe soft aim with visible check on by default — not raw snap modes. First-time setup: [Aimbot Setup](/forums/r6s-aimbot-setup/). Choose **Lite** if you want ESP intel only and refuse **aimbot** modules entirely.',
      },
      { type: 'h2', text: 'HWID and unlock all — what resellers skip' },
      {
        type: 'p',
        text: 'Most **best R6 cheats 2026** reseller pages ignore **HWID** recovery. When fresh Ubisoft accounts fail instantly on one PC, you need an **HWID spoofer** workflow — not another cheat key. Walkthrough: [HWID Spoofer Guide](/forums/r6s-hwid-spoofer-guide/). **Unlock all** for local operator and elite skin preview ships inside Elite; resellers rarely bundle it. Guide: [Unlock All Guide](/forums/r6s-unlock-all-guide/).',
      },
      { type: 'h2', text: 'Before buying from a reseller' },
      {
        type: 'ol',
        items: [
          'Confirm the seller is direct or a markup reseller — patch speed differs',
          'Verify **aimbot**, **HWID spoofer**, and **unlock all** support before checkout',
          'Read the live status banner on r6scheats.net after every Siege or BattlEye patch',
          'Compare official tiers: [Lite](/cheats/lite/), [Pro](/cheats/pro/), [Elite](/cheats/elite/)',
        ],
      },
      { type: 'h2', text: 'Our 2026 picks' },
      {
        type: 'p',
        text: '**Best R6 cheats 2026 for most ranked players:** **Pro** — ESP plus **aimbot** without Elite slot limits. **Best premium bundle:** **Elite** when you want **unlock all**, drone hack and fastest reloads. **Best intel-only:** **Lite** if you will not run **aimbot** at all.',
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'R6S Cheat Antivirus Setup',
    slug: 'r6s-antivirus-setup',
    desc: 'Windows Defender, Norton, Bitdefender and other AV tools often flag R6s Cheats loaders because they attach to a BattlEye-protected process. This r6scheats.net guide walks through folder exclusions on Windows 10 and 11 so your loader installs cleanly and injects before queue.',
    date: 'Sep 14, 2026',
    readTime: '4 min read',
    body: [
      {
        type: 'p',
        text: 'Loaders for R6S cheats are often flagged as suspicious because they inject into a BattlEye-protected game. That does not always mean the file is malicious — but you should still download only from your r6scheats.net delivery email and never from random Discord links.',
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
      { type: 'h2', text: 'Why BattlEye triggers AV scans' },
      {
        type: 'p',
        text: 'BattlEye monitors memory injection in-game — legitimate R6s Cheats loaders use the same low-level techniques that antivirus heuristics flag as suspicious. Official builds from r6scheats.net are scanned before release; verify the hash in your delivery portal if Defender keeps quarantining files after exclusions. Full setup path: [R6S Cheat Setup](/forums/r6s-cheat-setup/).',
      },
      { type: 'h2', text: 'Before you inject' },
      {
        type: 'p',
        text: 'Finish exclusions first, then follow [R6S Cheat Setup](/forums/r6s-cheat-setup/). If the loader still fails, see [Loader Errors](/forums/r6s-loader-errors/).',
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'R6S Cheat Setup',
    slug: 'r6s-cheat-setup',
    desc: 'Step-by-step install — Lite ESP, Pro aimbot, Elite unlock all. From r6scheats.net delivery email through first inject and in-game menu on Windows PC with BattlEye-aware builds.',
    date: 'Sep 14, 2026',
    readTime: '5 min read',
    body: [
      { type: 'h2', text: 'Get your license' },
      {
        type: 'p',
        text: 'After payment clears, your license arrives by email. Keep the order ID for support. **Lite** enables ESP only; **Pro** adds **aimbot** modules; **Elite** includes **unlock all** and every combat feature. Compare tiers on [R6S Cheats](/cheats/) or read [Best R6 Cheats 2026](/forums/best-r6-cheats-2026/).',
      },
      { type: 'h2', text: 'Install the loader' },
      {
        type: 'p',
        text: 'Download the loader from your delivery email. Run it as administrator on Windows PC. Paste your license key when prompted. If Windows blocks the file, complete [Antivirus Setup](/forums/r6s-antivirus-setup/) before retrying.',
      },
      { type: 'h2', text: 'First launch' },
      {
        type: 'p',
        text: 'Click inject or launch in the loader, then start the game through Ubisoft Connect. Open the cheat menu with **INSERT** (or your bound key). Next: [How to Use R6S Cheats](/forums/how-to-use-r6s-cheats/) and the [Hotkeys](/forums/r6s-cheat-hotkeys/) list.',
      },
      { type: 'h2', text: 'Ubisoft Connect launch order' },
      {
        type: 'p',
        text: 'Always inject through the r6scheats.net loader before the game reaches the main menu — launching first and injecting late is the most common BattlEye block on fresh installs. Run the loader as administrator, click inject, then open Ubisoft Connect. If the client was already running, close it fully and restart the sequence.',
      },
      { type: 'h2', text: 'If setup fails' },
      {
        type: 'p',
        text: 'See [Loader Errors](/forums/r6s-loader-errors/). If every fresh Ubisoft account fails on this PC, BattlEye may have flagged your **HWID** — see [HWID Spoofer Guide](/forums/r6s-hwid-spoofer-guide/). Contact support with your order ID and any error text.',
      },
    ],
  },
  {
    tag: 'Instructions',
    title: 'How to Use R6S Cheats',
    slug: 'how-to-use-r6s-cheats',
    desc: 'How to run R6s Cheats — loader inject, aimbot, ESP, unlock all and in-game modules per match. BattlEye-ranked and unranked on Windows PC via r6scheats.net.',
    date: 'Sep 14, 2026',
    readTime: '4 min read',
    body: [
      {
        type: 'p',
        text: 'Use one or two modules at a time until you know how they feel in Siege. Ranked players usually start with ESP only, then add **aimbot** (soft aim on Pro/Elite) or no recoil after unranked tests. **Unlock all** preview belongs in custom games — not your first ranked queue.',
      },
      { type: 'h2', text: 'Typical session flow' },
      {
        type: 'ol',
        items: [
          'Launch the loader as admin and inject before Siege reaches the main menu',
          'Open the menu (**INSERT** by default) and load a saved profile or use defaults',
          'Enable **ESP** for drone phase intel — hold angles, do not prefire every wall',
          'Enable **aimbot** / soft aim or **no recoil** only when you are ready for gunfight automation',
          'Disable heavy features between rounds if you are recording or streaming',
        ],
      },
      { type: 'h2', text: 'Drone phase discipline' },
      {
        type: 'p',
        text: 'Use ESP intel during prep and drone phase to hold angles — not to prefire every soft wall. R6s Cheats gadget markers from r6scheats.net help spot Claymores and Gu mines before you push; pair that with sound and drone calls so your gameplay stays believable in ranked.',
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
    title: 'R6S Patch Rebuild Guide',
    slug: 'r6s-patch-rebuild-guide',
    desc: 'Ubisoft and BattlEye patches can break older R6s Cheats builds overnight. This r6scheats.net thread is the post-update checklist — status banner, fresh loader download, and conservative profiles before ranked.',
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
          'Load conservative profiles — retest **aimbot** FOV, narrow soft aim, reduced ESP range',
          'Run one Quick Match before ranked',
        ],
      },
      { type: 'h2', text: 'Check r6scheats.net status first' },
      {
        type: 'p',
        text: 'Before downloading anything, open r6scheats.net and read the live status banner for your Lite, Pro or Elite tier. Staff post BattlEye compatibility notes there within hours of major Siege updates — injecting an outdated build while status is red is the fastest path to a hardware flag.',
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
    title: 'R6S Cheat Menu Guide',
    slug: 'r6s-cheat-menu-guide',
    desc: 'Tab-by-tab in-game menu — aimbot, ESP, unlock all, radar, misc and saved profiles so first launch from r6scheats.net is not guesswork.',
    date: 'Sep 15, 2026',
    readTime: '5 min read',
    body: [
      { type: 'h2', text: 'Aimbot / Aim tab' },
      {
        type: 'p',
        text: '**Aimbot** modules on Pro and Elite: soft aim, triggerbot, FOV, smoothing, visible check and bone priority. Pair with no recoil for entry operators. First launch: [Aimbot Setup](/forums/r6s-aimbot-setup/). Tuning: [Soft Aim Settings](/forums/r6s-soft-aim-settings/).',
      },
      { type: 'h2', text: 'Unlock All tab (Elite)' },
      {
        type: 'p',
        text: 'The **unlock all** panel previews operators, elite skins and charms locally — other players still see your real inventory. Not on Lite or Pro. Full walkthrough: [Unlock All Guide](/forums/r6s-unlock-all-guide/).',
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
      { type: 'h2', text: 'Stream-proof overlay' },
      {
        type: 'p',
        text: 'Toggle stream-proof in the Misc tab before clipping ranked rounds or streaming — R6s Cheats overlays from r6scheats.net hide from OBS and Discord capture while staying visible on your monitor. Pair with conservative ESP opacity so recordings still look clean.',
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
    title: 'R6S Loader Errors',
    slug: 'r6s-loader-errors',
    desc: 'Fix loader errors — invalid keys, BattlEye blocks, HWID hardware flags, integrity checks and antivirus quarantine — before opening a support ticket at r6scheats.net.',
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
      { type: 'h2', text: 'Run Siege vanilla first' },
      {
        type: 'p',
        text: 'When injection fails after a patch, close the loader and launch Rainbow Six Siege without R6s Cheats — confirm the game opens normally through Ubisoft Connect. If vanilla Siege crashes too, repair the install before retrying the r6scheats.net loader. See also [Patch Rebuild Guide](/forums/r6s-patch-rebuild-guide/).',
      },
      { type: 'h2', text: 'Hardware ban / accounts fail instantly' },
      {
        type: 'p',
        text: 'When every fresh Ubisoft account fails on one PC but works elsewhere, BattlEye likely flagged your **HWID** — not a loader bug. Follow [HWID Spoofer Walkthrough](/forums/r6s-hwid-spoofer-guide/) and the [HWID Spoofer tool](/tools/r6s-cheats/hwid-spoofer/) before buying another cheat key.',
      },
      { type: 'h2', text: 'Still stuck?' },
      {
        type: 'p',
        text: 'Open a support ticket with order ID, Windows version, Siege build number, and a screenshot of the exact error text. Mention if you already ran an **HWID spoofer** workflow.',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'R6S Radar Settings',
    slug: 'r6s-radar-settings',
    desc: 'Tune the 2D radar — range, zoom, icon size and team colors so flank intel stays readable next to the minimap during ranked rounds.',
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
      { type: 'h2', text: 'Pair radar with ESP colors' },
      {
        type: 'p',
        text: 'Match radar team colors to your ESP palette in the R6s Cheats menu — r6scheats.net defaults use defender blue and attacker orange so callouts feel consistent between the 2D radar and wallhack boxes. Mismatched colors slow reaction time when a flank icon appears.',
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
    title: 'R6S Soft Aim Settings',
    slug: 'r6s-soft-aim-settings',
    desc: 'Aimbot and soft aim settings — FOV, smoothing, visible check and per-operator profiles that stay believable under BattlEye in ranked.',
    date: 'Sep 16, 2026',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'Siege gunfights are peek-based — **aimbot** soft aim should assist tracking, not snap through walls. This is the ranked-safe **aimbot** mode on Pro and Elite. Start in unranked before enabling in ranked. New to aim modules? [Aimbot Setup](/forums/r6s-aimbot-setup/) first.',
      },
      { type: 'h2', text: 'Baseline ranked aimbot profile' },
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
      { type: 'h2', text: 'Visible check is non-negotiable' },
      {
        type: 'p',
        text: 'Always enable visible check for ranked soft aim in R6s Cheats — tracking targets through reinforced walls is how BattlEye and replay reviewers flag obvious behavior. r6scheats.net ranked presets ship with visible check on by default; only disable in custom games when testing FOV.',
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
    title: 'R6S ESP Settings',
    slug: 'r6s-esp-settings',
    desc: 'Which ESP toggles to enable in ranked — player boxes, gadget wallhack, bomb info and drone markers without cluttering your screen.',
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
        text: 'Drone ESP for attacker drones and defender Yokai/Maestro feeds. Enable only after Lite ESP feels natural — drone markers plus player boxes can overlap during prep phase. Elite also bundles **unlock all** operator preview — see [Unlock All Guide](/forums/r6s-unlock-all-guide/).',
      },
      { type: 'h2', text: 'Gadget ESP saves rounds' },
      {
        type: 'p',
        text: 'Claymore, Gu mine and Kapkan trap ESP from r6scheats.net pays off on attacker pushes — enable gadget categories before player boxes if you are new to R6s Cheats. Knowing trap placement beats raw wallhack prefire every time on maps like Theme Park and Oregon.',
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
    title: 'R6S Cheat Hotkeys',
    slug: 'r6s-cheat-hotkeys',
    desc: 'Default hotkeys — menu, ESP, soft aim, radar and panic-off bindings. Rebind every key inside the in-game panel from your r6scheats.net loader.',
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
      { type: 'h2', text: 'Panic off (F12) practice' },
      {
        type: 'p',
        text: 'Muscle-memory **F12** (or your panic key) in a custom match before ranked — R6s Cheats panic off disables every module instantly when a clutch is being watched or a stream goes live. r6scheats.net recommends rebinding panic to a mouse side button for faster reaction.',
      },
      { type: 'h2', text: 'Before ranked' },
      {
        type: 'p',
        text: 'Test every bound key in a custom match — misbound panic off mid-round is worse than no cheats. Full menu map: [Cheat Menu Guide](/forums/r6s-cheat-menu-guide/).',
      },
    ],
  },
  {
    tag: 'Instructions',
    title: 'R6S Aimbot Setup',
    slug: 'r6s-aimbot-setup',
    desc: 'First-time aimbot setup for Pro and Elite — enable soft aim safely, set FOV and smoothing, link no recoil, and test in unranked before ranked on r6scheats.net builds.',
    date: 'Sep 17, 2026',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'Aimbot modules ship on Pro and Elite tiers only. Lite users should skip this thread and use [ESP Settings](/forums/r6s-esp-settings/) instead. Complete [Cheat Setup](/forums/r6s-cheat-setup/) and [Antivirus Setup](/forums/r6s-antivirus-setup/) before touching aim settings.',
      },
      { type: 'h2', text: 'Open the Aim tab' },
      {
        type: 'p',
        text: 'Inject through the r6scheats.net loader, launch Siege, press **INSERT** and open the **Aim** tab. Load the **Ranked Safe** profile if you are new — staff ship conservative defaults after each BattlEye patch.',
      },
      { type: 'h2', text: 'First-session checklist' },
      {
        type: 'ol',
        items: [
          'Enable **visible check** before anything else',
          'Set **FOV** to 5–8° for first tests; tighten later in ranked',
          'Raise **smoothing** until flicks look human on your monitor refresh rate',
          'Pick **chest** bone default; head only for long-range holds',
          'Link **no recoil** for entry guns (Ash R4-C, Zofia M762)',
          'Run one unranked match with soft aim only — no triggerbot yet',
        ],
      },
      { type: 'h2', text: 'Soft aim vs full aimbot' },
      {
        type: 'p',
        text: 'Start with **soft aim** — it assists tracking on peeks instead of snapping through cover. Full aimbot modes belong in custom games only. Fine-tune after your first session: [Soft Aim Settings](/forums/r6s-soft-aim-settings/).',
      },
      { type: 'h2', text: 'Before ranked' },
      {
        type: 'p',
        text: 'Check the live status banner on r6scheats.net after Siege patches. If status is yellow, read staff notes before enabling aim modules in ranked. Panic key (**F12** default): [Hotkeys](/forums/r6s-cheat-hotkeys/).',
      },
    ],
  },
  {
    tag: 'Instructions',
    title: 'R6S HWID Spoofer Walkthrough',
    slug: 'r6s-hwid-spoofer-guide',
    desc: 'Step-by-step HWID spoofer walkthrough for BattlEye hardware bans — restore point, portal download, identifier verification and first launch after spoof from r6scheats.net.',
    date: 'Sep 17, 2026',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Use the HWID spoofer when fresh Ubisoft accounts fail instantly on one PC but work on another — that pattern usually means BattlEye flagged hardware, not the account. Account-only bans need [UGC](/tools/r6s-cheats/ugc/) instead. Product page: [HWID Spoofer](/tools/r6s-cheats/hwid-spoofer/).',
      },
      { type: 'h2', text: 'Before you spoof' },
      {
        type: 'ol',
        items: [
          'Create a Windows **restore point** — non-negotiable',
          'Close Rainbow Six Siege, Ubisoft Connect and other anti-cheat games',
          'Download the spoofer only from your r6scheats.net delivery portal',
          'Run the built-in **compatibility scan** from the portal first',
        ],
      },
      { type: 'h2', text: 'Spoof workflow' },
      {
        type: 'p',
        text: 'Follow the portal checklist in order: disk serial profile → MAC rotation → GPU identifier step if listed for your build. Do not stack a second spoof tool on top. When the tool finishes, perform a **cold reboot** (full shutdown, not fast restart).',
      },
      { type: 'h2', text: 'Verify identifiers changed' },
      {
        type: 'p',
        text: 'After reboot, run the portal **identifier diff** report. Disk and MAC values should differ from your pre-spoof snapshot. If nothing changed, do not launch Siege — reopen the portal guide or contact support with your order ID.',
      },
      { type: 'h2', text: 'First Siege launch after spoof' },
      {
        type: 'p',
        text: 'Launch Rainbow Six Siege vanilla through Ubisoft Connect once before injecting any cheat. Confirm you reach the main menu. Then load a **conservative** r6scheats.net profile — ESP only for the first session. Loader issues: [Loader Errors](/forums/r6s-loader-errors/).',
      },
      { type: 'h2', text: 'What spoofing does not fix' },
      {
        type: 'p',
        text: 'HWID spoofing does not remove account reputation strikes or guaranteed BattlEye Global Bans. Shared PCs, work laptops and VMs may fail compatibility scans — support can advise before you run driver-level tools.',
      },
    ],
  },
  {
    tag: 'Instructions',
    title: 'R6S Unlock All Guide',
    slug: 'r6s-unlock-all-guide',
    desc: 'How to use Unlock All — browse operators and elite skins locally, favorites, loadout export and ranked safety notes for Elite tier users on r6scheats.net.',
    date: 'Sep 17, 2026',
    readTime: '4 min read',
    body: [
      {
        type: 'p',
        text: 'Unlock All previews operators, elite skins, weapon charms and attachments **locally on your client**. Other players in your lobby still see your real Ubisoft inventory — this is cosmetic preview, not a store unlock. Included with [Elite tier](/cheats/elite/); standalone page: [Unlock All tool](/tools/r6s-cheats/unlock-all/).',
      },
      { type: 'h2', text: 'Open Unlock All in the menu' },
      {
        type: 'p',
        text: 'Inject Elite (or standalone Unlock All build), launch Siege and open the in-game menu. The **Unlock All** panel lists operators, elite skins and charms in a searchable catalog. Use favorites to pin loadouts you want to test in custom games.',
      },
      { type: 'h2', text: 'Recommended workflow' },
      {
        type: 'ol',
        items: [
          'Browse operators and skins in a **custom match** or training situation first',
          'Save favorites for entry, anchor and flex loadouts',
          'Export loadout JSON from the panel if you switch PCs often',
          'Disable heavy preview overlays before ranked — keep ESP minimal',
          'Never assume teammates see preview skins in drone phase',
        ],
      },
      { type: 'h2', text: 'Ranked safety' },
      {
        type: 'p',
        text: 'Unlock All does not modify Ubisoft servers, but running extra preview modules during ranked adds overlay load. Staff recommend enabling preview only in menu or custom games, then switching to combat modules (ESP, soft aim) for ranked. Menu map: [Cheat Menu Guide](/forums/r6s-cheat-menu-guide/).',
      },
      { type: 'h2', text: 'Elite bundle reminder' },
      {
        type: 'p',
        text: 'If you already own Elite, Unlock All is inside the same loader — no second purchase. Compare tiers on [R6S Cheats](/cheats/) before buying standalone Unlock All access.',
      },
    ],
  },
];
