import type { ForumPostFull } from '../types';

/** Los hilos del foro reflejan la estructura de instrucciones de cheats de WarDogs — solo contenido Rainbow Six Siege. */
export const forumPosts: ForumPostFull[] = [
  {
    tag: 'Guía',
    featured: true,
    title: 'Mejores R6 Cheats 2026 — Lite vs Pro vs Elite',
    slug: 'best-r6-cheats-2026',
    desc: 'Comparación best R6 cheats 2026 para Rainbow Six Siege PC — aimbot, ESP wallhack, HWID spoofer, unlock all y velocidad de parches BattlEye. Cómo Lite, Pro y Elite de r6scheats.net se comparan con listados típicos de revendedores.',
    date: 'Sep 18, 2026',
    readTime: '6 min de lectura',
    body: [
      {
        type: 'p',
        text: 'Buscar **best R6 cheats 2026** suele llevar a sitios de revendedores que relistan los mismos loaders con markup y notas de parche más lentas. r6scheats.net vende directo — un loader, tres tiers, más **HWID spoofer** y **unlock all** independientes cuando necesitas recuperación de hardware o preview cosmético fuera de una suscripción de cheat.',
      },
      { type: 'h2', text: 'Selector rápido de tier' },
      {
        type: 'ul',
        items: [
          '**Lite** — ESP, gadget wallhack, radar 2D; sin **aimbot**',
          '**Pro** — Lite más **aimbot**, soft aim, triggerbot y no recoil',
          '**Elite** — build privada con **unlock all**, drone hack y recargas BattlEye prioritarias',
        ],
      },
      { type: 'h2', text: 'Comparación best R6 cheats 2026' },
      {
        type: 'table',
        headers: ['Función', 'Lite', 'Pro', 'Elite', 'Revendedor típico'],
        rows: [
          ['ESP / wallhack', 'Sí', 'Sí', 'Completo', 'Varía según listing'],
          ['Aimbot / soft aim', 'No', 'Sí', 'Sí', 'Builds a menudo obsoletas'],
          ['Unlock all', 'No', 'No', 'Sí', 'Rara vez incluido'],
          ['Ruta HWID spoofer', 'Enlace portal', 'Enlace portal', 'Soporte prioritario', 'Normalmente no mencionado'],
          ['Velocidad parches BattlEye', 'Banner de estado en vivo', 'Banner de estado en vivo', 'Recarga prioritaria', 'Notas de revendedor retrasadas'],
          ['Soporte directo', 'Estándar', 'Estándar', 'Elite dev Discord', 'Solo ticket de terceros'],
        ],
      },
      { type: 'h2', text: 'Elección de tier aimbot en 2026' },
      {
        type: 'p',
        text: 'BattlEye en 2026 marca rápido el comportamiento obvio de **aimbot** con FOV abierto. Pro y Elite incluyen soft aim seguro para ranked con visible check activado por defecto — no modos snap crudos. Primera configuración: [Aimbot Setup](/forums/r6s-aimbot-setup/). Elige **Lite** si quieres solo intel ESP y rechazas módulos **aimbot** por completo.',
      },
      { type: 'h2', text: 'HWID y unlock all — lo que omiten los revendedores' },
      {
        type: 'p',
        text: 'La mayoría de páginas **best R6 cheats 2026** de revendedores ignoran la recuperación **HWID**. Cuando cuentas Ubisoft nuevas fallan al instante en un PC, necesitas un workflow de **HWID spoofer** — no otra clave de cheat. Guía: [HWID Spoofer Guide](/forums/r6s-hwid-spoofer-guide/). **Unlock all** para preview local de operadores y skins elite viene en Elite; los revendedores rara vez lo incluyen. Guía: [Unlock All Guide](/forums/r6s-unlock-all-guide/).',
      },
      { type: 'h2', text: 'Antes de comprar a un revendedor' },
      {
        type: 'ol',
        items: [
          'Confirma si el vendedor es directo o revendedor con markup — la velocidad de parches difiere',
          'Verifica soporte de **aimbot**, **HWID spoofer** y **unlock all** antes del checkout',
          'Lee el banner de estado en vivo en r6scheats.net tras cada parche de Siege o BattlEye',
          'Compara tiers oficiales: [Lite](/cheats/lite/), [Pro](/cheats/pro/), [Elite](/cheats/elite/)',
        ],
      },
      { type: 'h2', text: 'Nuestras picks 2026' },
      {
        type: 'p',
        text: '**Best R6 cheats 2026 para la mayoría en ranked:** **Pro** — ESP más **aimbot** sin límites de slots Elite. **Mejor bundle premium:** **Elite** cuando quieres **unlock all**, drone hack y recargas más rápidas. **Solo intel:** **Lite** si no vas a usar **aimbot** en absoluto.',
      },
    ],
  },
  {
    tag: 'Configuración',
    title: 'Configuración de antivirus para trucos R6S',
    slug: 'r6s-antivirus-setup',
    desc: 'Windows Defender y los antivirus de terceros suelen marcar los loaders de R6s Cheats para Rainbow Six Siege porque se enganchan a un proceso protegido por BattlEye. Esta guía de r6scheats.net te lleva por exclusiones de carpetas en Windows 10 y 11 para que tu loader se instale limpio e inyecte antes de hacer cola.',
    date: 'Sep 14, 2026',
    readTime: '4 min de lectura',
    body: [
      {
        type: 'p',
        text: 'Los loaders de cheats para Rainbow Six Siege suelen marcarse como sospechosos porque se inyectan en un juego protegido por BattlEye. Eso no siempre significa que el archivo sea malicioso, pero debes descargar solo desde el correo de entrega de r6scheats.net y nunca desde enlaces aleatorios de Discord.',
      },
      { type: 'h2', text: 'Exclusiones de Windows Defender' },
      {
        type: 'ol',
        items: [
          'Abre **Seguridad de Windows → Protección contra virus y amenazas → Administrar configuración**',
          'Desplázate hasta **Exclusiones → Agregar una exclusión → Carpeta**',
          'Agrega la carpeta donde extrajiste el loader (no la carpeta de instalación de Siege)',
          'Repite para el `.exe` del loader si Defender ya lo puso en cuarentena — restáuralo primero y luego exclúyelo',
        ],
      },
      { type: 'h2', text: 'Antivirus de terceros' },
      {
        type: 'p',
        text: 'Avast, AVG, Bitdefender y Norton suelen bloquear los inyectores con más fuerza que Defender. Desactiva el escudo en tiempo real brevemente durante la primera instalación, o agrega la misma exclusión de carpeta. Vuelve a activar la protección después de poner el loader en la lista blanca.',
      },
      { type: 'h2', text: 'Por qué BattlEye dispara escaneos de antivirus' },
      {
        type: 'p',
        text: 'BattlEye monitoriza la inyección en memoria en Rainbow Six Siege — los loaders legítimos de R6s Cheats usan las mismas técnicas de bajo nivel que la heurística del antivirus marca como sospechosas. Las builds oficiales de r6scheats.net se escanean antes del lanzamiento; verifica tu hash en el portal de entrega si Defender sigue en cuarentena tras las exclusiones. Ruta completa de configuración: [Configuración de cheats](/forums/r6s-cheat-setup/).',
      },
      { type: 'h2', text: 'Antes de inyectar' },
      {
        type: 'p',
        text: 'Termina las exclusiones primero y luego sigue [Configuración de cheats de Rainbow Six Siege](/forums/r6s-cheat-setup/). Si el loader sigue fallando, consulta [Errores del loader](/forums/r6s-loader-errors/).',
      },
    ],
  },
  {
    tag: 'Configuración',
    title: 'Configuración de trucos R6S',
    slug: 'r6s-cheat-setup',
    desc: 'Instalación paso a paso de R6s Cheats para Rainbow Six Siege — Lite ESP, Pro aimbot, Elite unlock all. Correo de entrega r6scheats.net hasta la primera inyección y menú en juego en PC Windows con builds compatibles con BattlEye.',
    date: 'Sep 14, 2026',
    readTime: '5 min de lectura',
    body: [
      { type: 'h2', text: 'Obtén tu licencia' },
      {
        type: 'p',
        text: 'Cuando se confirme el pago, tu licencia llegará por correo. Guarda el ID del pedido para soporte. **Lite** habilita solo ESP; **Pro** añade módulos **aimbot**; **Elite** incluye **unlock all** y todas las funciones de combate. Compara tiers en [Cheats de Rainbow Six Siege](/cheats/) o lee [Mejores R6 Cheats 2026](/forums/best-r6-cheats-2026/).',
      },
      { type: 'h2', text: 'Instala el loader' },
      {
        type: 'p',
        text: 'Descarga el loader desde tu correo de entrega. Ejecútalo como administrador en PC con Windows. Pega tu clave de licencia cuando se te pida. Si Windows bloquea el archivo, completa la [Configuración de antivirus](/forums/r6s-antivirus-setup/) antes de reintentar.',
      },
      { type: 'h2', text: 'Primer inicio' },
      {
        type: 'p',
        text: 'Haz clic en inyectar o iniciar en el loader, luego abre Rainbow Six Siege a través de Ubisoft Connect. Abre el menú de cheats con **INSERT** (o tu tecla asignada). Siguiente: [Cómo usar cheats de Rainbow Six Siege](/forums/how-to-use-r6s-cheats/) y la lista de [Teclas rápidas](/forums/r6s-cheat-hotkeys/).',
      },
      { type: 'h2', text: 'Orden de lanzamiento en Ubisoft Connect' },
      {
        type: 'p',
        text: 'Inyecta con el loader de r6scheats.net **antes** de que Siege llegue al menú principal — BattlEye se inicializa pronto en la secuencia de arranque. Nunca lances Siege primero ni inyectes tarde. Los conflictos con overlay de Steam/Ubisoft son raros, pero cierra launchers innecesarios si la inyección se queda colgada. Ajuste de funciones: [Cómo usar cheats Rainbow Six Siege](/forums/how-to-use-r6s-cheats/).',
      },
      { type: 'h2', text: 'Si la configuración falla' },
      {
        type: 'p',
        text: 'Consulta [Errores del loader](/forums/r6s-loader-errors/). Si cada cuenta Ubisoft nueva falla en este PC, BattlEye puede haber marcado tu **HWID** — consulta [HWID Spoofer Guide](/forums/r6s-hwid-spoofer-guide/). Contacta soporte con tu ID de pedido y el texto de error.',
      },
    ],
  },
  {
    tag: 'Instrucciones',
    title: 'Cómo usar trucos R6S',
    slug: 'how-to-use-r6s-cheats',
    desc: 'Cómo ejecutar R6s Cheats en Rainbow Six Siege — inyección del loader, aimbot, ESP, unlock all y módulos en juego por partida. Ranked y unranked en PC Windows vía r6scheats.net.',
    date: 'Sep 14, 2026',
    readTime: '4 min de lectura',
    body: [
      {
        type: 'p',
        text: 'Usa uno o dos módulos a la vez hasta que sepas cómo se sienten en Siege. Los jugadores de ranked suelen empezar solo con ESP y luego añadir **aimbot** (soft aim en Pro/Elite) o no recoil tras pruebas unranked. El preview **unlock all** va en custom games — no en tu primera cola ranked.',
      },
      { type: 'h2', text: 'Flujo típico de sesión' },
      {
        type: 'ol',
        items: [
          'Inicia el loader como admin e inyecta antes de que Siege llegue al menú principal',
          'Abre el menú (**INSERT** por defecto) y carga un perfil guardado o usa los valores predeterminados',
          'Activa **ESP** para información en la fase de drones — mantén ángulos, no dispares a ciegas cada pared',
          'Activa **aimbot** / soft aim o **no recoil** solo cuando estés listo para automatizar los tiroteos',
          'Desactiva funciones pesadas entre rondas si estás grabando o haciendo stream',
        ],
      },
      { type: 'h2', text: 'Disciplina en la fase de drones' },
      {
        type: 'p',
        text: 'Usa el ESP de r6scheats.net en la fase de prep para rastrear roamers, no para disparar a ciegas cada pared blanda — los reportes suben cuando el feed de kills parece imposible. Marca rotaciones mentalmente y desactiva módulos de aim pesados hasta la fase de acción. Referencia del menú: [Guía del menú de cheats](/forums/r6s-cheat-menu-guide/).',
      },
      { type: 'h2', text: 'Hábitos en ranked' },
      {
        type: 'p',
        text: 'Revisa el banner de estado del sitio antes de hacer cola tras un parche de Siege o BattlEye. Un FOV y suavizado conservadores superan la configuración máxima el primer día. Desglose del menú: [Guía del menú de cheats](/forums/r6s-cheat-menu-guide/).',
      },
    ],
  },
  {
    tag: 'Solución de problemas',
    title: 'Guía de reconstrucción tras parche R6S',
    slug: 'r6s-patch-rebuild-guide',
    desc: 'Cuando Ubisoft parchea Rainbow Six Siege o BattlEye se actualiza, las builds antiguas del loader de R6s Cheats dejan de inyectar. Sigue esta lista de r6scheats.net para obtener la build más reciente compatible con BattlEye antes de volver a ranked.',
    date: 'Sep 15, 2026',
    readTime: '4 min de lectura',
    body: [
      {
        type: 'p',
        text: 'Cuando Ubisoft lanza un parche de temporada o BattlEye se actualiza, el loader de ayer puede dejar de inyectar. No hagas cola en ranked hasta que el estado del sitio muestre verde para tu nivel.',
      },
      { type: 'h2', text: 'Lista de verificación post-parche' },
      {
        type: 'ol',
        items: [
          'Actualiza Rainbow Six Siege por completo a través de Ubisoft Connect',
          'Lee el banner de estado en r6scheats.net para Lite, Pro o Elite',
          'Descarga la build más reciente del loader desde tu portal o el anuncio de Discord',
          'Carga perfiles conservadores — retesta FOV de **aimbot**, soft aim estrecho, alcance de ESP reducido',
          'Juega una Quick Match antes de ranked',
        ],
      },
      { type: 'h2', text: 'Consulta primero el estado de r6scheats.net' },
      {
        type: 'p',
        text: 'El banner de la página principal de r6scheats.net se actualiza en horas tras un parche de Siege o BattlEye — verde significa que tu nivel está listo para Quick Match y ranked. No ejecutes el loader de ayer esperando que aún funcione; inyectar con build obsoleta es un vector de ban post-parche muy común. Correcciones detalladas: [Errores del loader](/forums/r6s-loader-errors/).',
      },
      { type: 'h2', text: 'Estado amarillo o rojo' },
      {
        type: 'p',
        text: '**Amarillo** — usable con reservas; lee las notas de Discord. **Rojo** — espera las instrucciones del staff para recargar. Inyectar con estado rojo es la forma más rápida de que marquen cuentas.',
      },
    ],
  },
  {
    tag: 'Instrucciones',
    title: 'Guía del menú de trucos R6S',
    slug: 'r6s-cheat-menu-guide',
    desc: 'Menú R6s Cheats para Rainbow Six Siege pestaña por pestaña — aimbot, ESP, unlock all, radar, misc y perfiles guardados para que el primer inicio desde r6scheats.net no sea adivinar.',
    date: 'Sep 15, 2026',
    readTime: '5 min de lectura',
    body: [
      { type: 'h2', text: 'Pestaña Aimbot / Aim' },
      {
        type: 'p',
        text: 'Módulos **aimbot** en Pro y Elite: soft aim, triggerbot, FOV, suavizado, visible check y prioridad de hueso. Combínalo con no recoil para operadores de entrada. Primer inicio: [Aimbot Setup](/forums/r6s-aimbot-setup/). Ajuste: [Ajustes de soft aim](/forums/r6s-soft-aim-settings/).',
      },
      { type: 'h2', text: 'Pestaña Unlock All (Elite)' },
      {
        type: 'p',
        text: 'El panel **unlock all** previsualiza operadores, skins elite y charms localmente — otros jugadores siguen viendo tu inventario real. No en Lite ni Pro. Guía completa: [Unlock All Guide](/forums/r6s-unlock-all-guide/).',
      },
      { type: 'h2', text: 'Pestaña Visuals / ESP' },
      {
        type: 'p',
        text: 'Cajas de jugadores, ESP de gadgets, info de bomba, marcadores de drones, opacidad del wallhack y colores de equipo. Detalles: [Ajustes de ESP](/forums/r6s-esp-settings/).',
      },
      { type: 'h2', text: 'Pestaña Radar' },
      {
        type: 'p',
        text: 'Radar 2D estilo minimapa para operadores fuera del campo de visión de tu cámara. Alcance, zoom y tamaño de iconos. Detalles: [Ajustes de radar](/forums/r6s-radar-settings/).',
      },
      { type: 'h2', text: 'Pestaña Misc' },
      {
        type: 'ul',
        items: [
          'Alternar overlay a prueba de stream',
          'Guardar/cargar config en la nube',
          'Perfiles de no recoil por arma',
          'Atajos para reasignar teclas',
        ],
      },
      { type: 'h2', text: 'Overlay a prueba de stream' },
      {
        type: 'p',
        text: 'Activa stream-proof desde la pestaña Misc al clippear ranked o hacer stream — los overlays de r6scheats.net están ocultos de OBS y Discord por defecto en niveles Pro y Elite. ESP y radar siguen renderizándose solo en tu monitor. Layout de teclas: [Teclas rápidas](/forums/r6s-cheat-hotkeys/).',
      },
      { type: 'h2', text: 'Perfiles' },
      {
        type: 'p',
        text: 'Guarda configs separadas para ranked, sin ranking y partidas personalizadas. Nómbralas por rol — entry, anchor, flex — para no retocar a mitad de sesión.',
      },
    ],
  },
  {
    tag: 'Solución de problemas',
    title: 'Errores del loader R6S',
    slug: 'r6s-loader-errors',
    desc: 'Corrige errores del loader R6s Cheats para Rainbow Six Siege — claves inválidas, bloqueos BattlEye, flags de hardware HWID, comprobaciones de integridad y cuarentena de antivirus — antes de abrir un ticket en r6scheats.net.',
    date: 'Sep 15, 2026',
    readTime: '5 min de lectura',
    body: [
      { type: 'h2', text: 'Licencia inválida o expirada' },
      {
        type: 'p',
        text: 'Copia la clave exactamente desde tu correo — sin espacios al final. Confirma que el nivel de suscripción coincide con la build que descargaste. Las claves Lite no desbloquean módulos Pro.',
      },
      { type: 'h2', text: 'Inyección fallida / bloqueo de BattlEye' },
      {
        type: 'p',
        text: 'Normalmente significa que Siege o BattlEye se actualizaron. Sigue la [Guía de reconstrucción tras parche](/forums/r6s-patch-rebuild-guide/). Inicia Siege vanilla una vez para confirmar que el juego abre antes de reinjectar.',
      },
      { type: 'h2', text: 'No se puede verificar la integridad del juego' },
      {
        type: 'p',
        text: 'Repara Rainbow Six Siege en Ubisoft Connect, reinicia el PC y prueba sin el loader. Este error suele ser una instalación del juego rota — no una detección de cheat.',
      },
      { type: 'h2', text: 'El antivirus eliminó el loader' },
      {
        type: 'p',
        text: 'Restaura desde cuarentena y agrega exclusiones desde [Configuración de antivirus](/forums/r6s-antivirus-setup/). Vuelve a descargar si el archivo estaba corrupto.',
      },
      { type: 'h2', text: 'Ejecuta Siege vanilla primero' },
      {
        type: 'p',
        text: 'Tras cualquier actualización de BattlEye, lanza Rainbow Six Siege sin el loader de r6scheats.net una vez para confirmar que Ubisoft Connect completa la verificación de archivos. Si Siege vanilla falla, repara el juego antes de culpar a la build del cheat — la mayoría de tickets de "inyección fallida" son loaders obsoletos o instalaciones rotas. Flujo post-parche: [Guía de reconstrucción](/forums/r6s-patch-rebuild-guide/).',
      },
      { type: 'h2', text: 'Hardware ban / cuentas fallan al instante' },
      {
        type: 'p',
        text: 'Cuando cada cuenta Ubisoft nueva falla en un PC pero funciona en otro, BattlEye probablemente marcó tu **HWID** — no es un bug del loader. Sigue [HWID Spoofer Walkthrough](/forums/r6s-hwid-spoofer-guide/) y la [herramienta HWID Spoofer](/tools/r6s-cheats/hwid-spoofer/) antes de comprar otra clave de cheat.',
      },
      { type: 'h2', text: '¿Sigues atascado?' },
      {
        type: 'p',
        text: 'Abre un ticket de soporte con el ID del pedido, versión de Windows, número de build de Siege y una captura del texto exacto del error. Menciona si ya ejecutaste un workflow de **HWID spoofer**.',
      },
    ],
  },
  {
    tag: 'Funciones',
    title: 'Ajustes de radar R6S',
    slug: 'r6s-radar-settings',
    desc: 'Configura el radar 2D de R6s Cheats para Rainbow Six Siege — alcance, zoom, tamaño de iconos y colocación del HUD en ranked. El radar de r6scheats.net complementa el ESP para timing de flancos sin saturar tu overlay seguro para BattlEye.',
    date: 'Sep 16, 2026',
    readTime: '4 min de lectura',
    body: [
      {
        type: 'p',
        text: 'El radar complementa el ESP — úsalo para el timing de flanqueos en mapas como Clubhouse y Border donde el sonido vertical es ruidoso. No reemplaza la disciplina en la fase de drones.',
      },
      { type: 'h2', text: 'Preset inicial' },
      {
        type: 'ul',
        items: [
          '**Alcance** — 25–35 m en ranked; más amplio solo en partidas personalizadas',
          '**Zoom** — medio para que el radar siga legible junto al minimapa',
          '**Tamaño de icono** — pequeño; puntos grandes bloquean el espacio de la mira en 1080p',
          '**Colores de equipo** — iguala los colores del ESP para que los callouts se sientan coherentes',
        ],
      },
      { type: 'h2', text: 'Empareja radar con colores ESP' },
      {
        type: 'p',
        text: 'Iguala los colores de equipo del radar r6scheats.net con tu paleta ESP para que los callouts de flanco sean consistentes a mitad de ronda — defensores azul, atacantes naranja es la división estándar de Siege. Colores desalineados te hacen dudar en executes de site. Ajuste ESP: [Ajustes de ESP](/forums/r6s-esp-settings/).',
      },
      { type: 'h2', text: 'Notas por mapa' },
      {
        type: 'p',
        text: 'Oregon y Clubhouse: sube ligeramente el alcance vertical para cambios de piso. Bank y Chalet, pasillos largos: reduce el alcance para evitar ruido de roamers lejanos que igual no puedes disparar.',
      },
    ],
  },
  {
    tag: 'Funciones',
    title: 'Ajustes de soft aim R6S',
    slug: 'r6s-soft-aim-settings',
    desc: 'Ajustes de aimbot y soft aim para R6s Cheats en Rainbow Six Siege — FOV, suavizado, visible check y perfiles por operador que siguen siendo creíbles bajo BattlEye en ranked.',
    date: 'Sep 16, 2026',
    readTime: '5 min de lectura',
    body: [
      {
        type: 'p',
        text: 'Los tiroteos en Siege se basan en peek — el soft aim **aimbot** debe ayudar al seguimiento, no hacer snap a través de paredes. Este es el modo **aimbot** seguro para ranked en Pro y Elite. Empieza en unranked antes de activarlo en ranked. ¿Nuevo en módulos aim? Primero [Aimbot Setup](/forums/r6s-aimbot-setup/).',
      },
      { type: 'h2', text: 'Perfil base aimbot para ranked' },
      {
        type: 'ul',
        items: [
          '**FOV** — 3–8°; ajústalo en ranked, nunca uses FOV abierto en lobbies de alto rango',
          '**Suavizado** — alto en monitores 144Hz+ para que los flicks se vean naturales',
          '**Visible check** — activado para peeks junto a paredes',
          '**Hueso** — pecho por defecto; cabeza solo para holds con Glaz/Kali',
          '**Enlace no recoil** — activa para entradas con Ash R4-C y Zofia M762',
        ],
      },
      { type: 'h2', text: 'Visible check no es negociable' },
      {
        type: 'p',
        text: 'Mantén visible check activado en ranked en builds Pro y Elite de r6scheats.net — trackear a través de paredes blandas es la vía más rápida a reportes aunque BattlEye no flaggee al instante. FOV estrecho más suavizado alto se ve natural en rutas entry de Ash y Zofia. Menú aim completo: [Guía del menú de cheats](/forums/r6s-cheat-menu-guide/).',
      },
      { type: 'h2', text: 'Guardados por operador' },
      {
        type: 'p',
        text: 'Guarda perfiles separados para entry (Ash), anchor (Smoke MP5) y roamer (Caveira). Entry quiere un suavizado ligeramente menor; anchors quieren triggerbot opcional solo en puertas.',
      },
    ],
  },
  {
    tag: 'Funciones',
    title: 'Ajustes de ESP R6S',
    slug: 'r6s-esp-settings',
    desc: 'Setup mínimo de ESP de R6s Cheats para Rainbow Six Siege ranked — cajas de jugadores, marcadores de gadgets e info de bomba sin saturar la pantalla. Niveles Lite y Elite de r6scheats.net explicados para intel seguro para BattlEye en fase de drones y execute.',
    date: 'Sep 16, 2026',
    readTime: '5 min de lectura',
    body: [
      {
        type: 'p',
        text: 'El ESP gana rondas mostrando rotaciones y gadgets antes de comprometerte. Demasiados toggles saturan la pantalla y te hacen jugar obvio.',
      },
      { type: 'h2', text: 'Set inicial tier Lite' },
      {
        type: 'ul',
        items: [
          'Cajas de jugadores + distancia bajo 25 m',
          'ESP de gadgets: cámaras, claymores, Gu mines, trampas de Kapkan',
          'Indicador de portador de bomba / desactivador',
          'Opacidad del wallhack ~40%',
        ],
      },
      { type: 'h2', text: 'Extras Elite' },
      {
        type: 'p',
        text: 'ESP de drones para drones atacantes y feeds de Yokai/Maestro defensores. Actívalo solo cuando el ESP Lite se sienta natural — marcadores de drones más cajas de jugadores pueden superponerse en la fase de prep. Elite también incluye preview de operadores **unlock all** — consulta [Unlock All Guide](/forums/r6s-unlock-all-guide/).',
      },
      { type: 'h2', text: 'ESP de gadgets salva rondas' },
      {
        type: 'p',
        text: 'El ESP de gadgets de r6scheats.net para cámaras, claymores, Gu mines y trampas Kapkan evita muertes gratis al rotar — activa marcadores de gadgets antes que cajas de jugadores si la pantalla se siente cargada. Iconos de desactivador y portador de bomba importan más en match point. Combo radar: [Ajustes de radar](/forums/r6s-radar-settings/).',
      },
      { type: 'h2', text: 'Juega más inteligente, no más ruidoso' },
      {
        type: 'p',
        text: 'Usa la info para **mantener** ángulos y llamar rotaciones. Disparar a ciegas cada pared blanda genera reportes. Activa stream-proof si grabas rondas o haces stream de ranked.',
      },
    ],
  },
  {
    tag: 'Instrucciones',
    title: 'Teclas rápidas de trucos R6S',
    slug: 'r6s-cheat-hotkeys',
    desc: 'Teclas predeterminadas de R6s Cheats para Rainbow Six Siege — menú, ESP, soft aim, no recoil, radar y apagado de pánico. Reasigna en el panel en juego de r6scheats.net para que las teclas nunca choquen con binds de gadgets de Siege.',
    date: 'Sep 16, 2026',
    readTime: '3 min de lectura',
    body: [
      { type: 'h2', text: 'Asignaciones predeterminadas' },
      {
        type: 'table',
        headers: ['Acción', 'Tecla predeterminada'],
        rows: [
          ['Abrir / cerrar menú', 'INSERT'],
          ['Alternar ESP', 'F1'],
          ['Alternar soft aim', 'F2'],
          ['Alternar no recoil', 'F3'],
          ['Alternar radar', 'F4'],
          ['Apagado de pánico (todas las funciones)', 'F12'],
        ],
      },
      { type: 'h2', text: 'Consejos para reasignar' },
      {
        type: 'p',
        text: 'Evita teclas que Siege usa para gadgets, ping o voz. Los botones laterales del ratón funcionan bien para apagado de pánico. Guarda perfiles después de reasignar para que los layouts de ranked y sin ranking sigan separados.',
      },
      { type: 'h2', text: 'Practica apagado de pánico (F12)' },
      {
        type: 'p',
        text: 'Asigna apagado de pánico a un botón lateral del ratón en perfiles r6scheats.net que lleves a ranked — F12 desactiva todos los módulos al instante si un clip, glitch de overlay o pausa de espectador te pone nervioso a mitad de ronda. Prueba el bind en partida personalizada antes de ranked con BattlEye. Guía de uso: [Cómo usar cheats Rainbow Six Siege](/forums/how-to-use-r6s-cheats/).',
      },
      { type: 'h2', text: 'Antes de ranked' },
      {
        type: 'p',
        text: 'Prueba cada tecla asignada en una partida personalizada — un apagado de pánico mal asignado a mitad de ronda es peor que no tener cheats. Mapa completo del menú: [Guía del menú de cheats](/forums/r6s-cheat-menu-guide/).',
      },
    ],
  },
  {
    tag: 'Instrucciones',
    title: 'Configuración del aimbot R6S',
    slug: 'r6s-aimbot-setup',
    desc: 'Primera configuración del aimbot R6s Cheats Pro y Elite en Rainbow Six Siege — activar soft aim con seguridad, FOV, suavizado, vincular no recoil y probar en unranked antes del ranked en builds r6scheats.net.',
    date: 'Sep 17, 2026',
    readTime: '5 min de lectura',
    body: [
      {
        type: 'p',
        text: 'Los módulos de aimbot están en los tiers Pro y Elite solamente. Usuarios Lite: omitan este hilo y usen [Ajustes de ESP](/forums/r6s-esp-settings/). Complete [Configuración de cheats](/forums/r6s-cheat-setup/) y [Antivirus](/forums/r6s-antivirus-setup/) primero.',
      },
      { type: 'h2', text: 'Abrir la pestaña Aim' },
      {
        type: 'p',
        text: 'Inyecte con el loader r6scheats.net, inicie Siege, **INSERT** y pestaña **Aim**. Cargue **Ranked Safe** si es nuevo — el staff envía defaults conservadores tras cada parche BattlEye.',
      },
      { type: 'h2', text: 'Checklist de la primera sesión' },
      {
        type: 'ol',
        items: [
          'Active **visible check** antes que todo',
          '**FOV** 5–8° en las primeras pruebas; ajústelo en ranked',
          'Suba **smoothing** hasta que los flicks parezcan naturales en su monitor',
          'Hueso **chest** por defecto; head solo en holds largos',
          'Vincule **no recoil** para armas entry (Ash R4-C, Zofia M762)',
          'Un partido unranked solo con soft aim — sin triggerbot aún',
        ],
      },
      { type: 'h2', text: 'Soft aim vs aimbot completo' },
      {
        type: 'p',
        text: 'Empiece con **soft aim** — ayuda al tracking en peeks en lugar de snappear a través de cobertura. Modos aimbot completos solo en custom games. Ajuste fino: [Ajustes de soft aim](/forums/r6s-soft-aim-settings/).',
      },
      { type: 'h2', text: 'Antes del ranked' },
      {
        type: 'p',
        text: 'Revise el banner de estado en r6scheats.net tras parches de Siege. Si está amarillo, lea las notas del staff antes de aim en ranked. Tecla panic (**F12** por defecto): [Teclas rápidas](/forums/r6s-cheat-hotkeys/).',
      },
    ],
  },
  {
    tag: 'Instrucciones',
    title: 'Guía paso a paso del HWID Spoofer R6S',
    slug: 'r6s-hwid-spoofer-guide',
    desc: 'Walkthrough del HWID spoofer para hardware bans de BattlEye en Rainbow Six Siege — punto de restauración, descarga del portal, verificación de identificadores y primer lanzamiento de Siege tras el spoof desde r6scheats.net.',
    date: 'Sep 17, 2026',
    readTime: '6 min de lectura',
    body: [
      {
        type: 'p',
        text: 'Use el HWID spoofer cuando cuentas Ubisoft nuevas fallen al instante en un PC pero funcionen en otro — BattlEye suele haber marcado el hardware, no la cuenta. Bans solo de cuenta: [UGC](/tools/r6s-cheats/ugc/). Producto: [HWID Spoofer](/tools/r6s-cheats/hwid-spoofer/).',
      },
      { type: 'h2', text: 'Antes del spoof' },
      {
        type: 'ol',
        items: [
          'Cree un **punto de restauración** de Windows — obligatorio',
          'Cierre Rainbow Six Siege, Ubisoft Connect y otros juegos con anti-cheat',
          'Descargue el spoofer solo desde su portal de entrega r6scheats.net',
          'Ejecute primero el **escaneo de compatibilidad** del portal',
        ],
      },
      { type: 'h2', text: 'Flujo de spoof' },
      {
        type: 'p',
        text: 'Siga la checklist del portal en orden: perfil de serial de disco → rotación MAC → paso GPU si aplica. No apile un segundo spoof tool. Al terminar, **reinicio en frío** (apagado completo, no reinicio rápido).',
      },
      { type: 'h2', text: 'Verificar que cambiaron los identificadores' },
      {
        type: 'p',
        text: 'Tras reiniciar, ejecute el informe **identifier diff** del portal. Disk y MAC deben diferir del snapshot pre-spoof. Si no cambió nada, no inicie Siege — reabra la guía del portal o contacte soporte con su order ID.',
      },
      { type: 'h2', text: 'Primer lanzamiento de Siege tras spoof' },
      {
        type: 'p',
        text: 'Inicie Rainbow Six Siege vanilla por Ubisoft Connect una vez antes de inyectar cheats. Confirme que llega al menú principal. Luego perfil **conservador** r6scheats.net — solo ESP en la primera sesión. Errores del loader: [Errores del loader](/forums/r6s-loader-errors/).',
      },
      { type: 'h2', text: 'Lo que el spoof no arregla' },
      {
        type: 'p',
        text: 'El HWID spoof no elimina strikes de reputación ni garantiza levantar BattlEye Global Ban. PCs compartidos, portátiles de trabajo y VMs pueden fallar el escaneo — soporte puede asesorar antes de tools a nivel driver.',
      },
    ],
  },
  {
    tag: 'Instrucciones',
    title: 'Guía Unlock All R6S',
    slug: 'r6s-unlock-all-guide',
    desc: 'Cómo usar Unlock All de R6s Cheats en Rainbow Six Siege — explorar operadores y skins elite localmente, favoritos, exportar loadouts y notas de seguridad en ranked para usuarios Elite en r6scheats.net.',
    date: 'Sep 17, 2026',
    readTime: '4 min de lectura',
    body: [
      {
        type: 'p',
        text: 'Unlock All previsualiza operadores, skins elite, charms y attachments **localmente en su cliente**. Otros jugadores en el lobby ven su inventario real de Ubisoft — preview cosmético, no desbloqueo de tienda. Incluido en [Elite](/cheats/elite/); página: [Unlock All](/tools/r6s-cheats/unlock-all/).',
      },
      { type: 'h2', text: 'Abrir Unlock All en el menú' },
      {
        type: 'p',
        text: 'Inyecte Elite (o build standalone Unlock All), inicie Siege y abra el menú. El panel **Unlock All** lista operadores, skins elite y charms en un catálogo buscable. Use favoritos para loadouts en custom games.',
      },
      { type: 'h2', text: 'Flujo recomendado' },
      {
        type: 'ol',
        items: [
          'Explore operadores y skins primero en **custom match** o entrenamiento',
          'Guarde favoritos para loadouts entry, anchor y flex',
          'Exporte JSON de loadout desde el panel si cambia de PC',
          'Desactive overlays pesados de preview antes del ranked — ESP mínimo',
          'No asuma que el equipo ve skins preview en fase de drones',
        ],
      },
      { type: 'h2', text: 'Seguridad en ranked' },
      {
        type: 'p',
        text: 'Unlock All no modifica servidores Ubisoft, pero módulos extra de preview en ranked cargan overlays. El staff recomienda preview solo en menú o custom games, luego módulos de combate (ESP, soft aim) para ranked. Mapa del menú: [Guía del menú](/forums/r6s-cheat-menu-guide/).',
      },
      { type: 'h2', text: 'Recordatorio bundle Elite' },
      {
        type: 'p',
        text: 'Si ya tiene Elite, Unlock All está en el mismo loader — sin segunda compra. Compare tiers en [Rainbow Six Siege Cheats](/cheats/) antes de Unlock All standalone.',
      },
    ],
  },
];
