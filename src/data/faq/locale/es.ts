import type { IconName } from '../../../components/icons/types';
import type { Locale } from '../../../i18n/config';
import { cheatPath, toolPath, ROUTES, localizedPath } from '../../../utils/path';

const faqLocale: Locale = 'es';

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
const toolsHub = link('herramientas R6S', localizedPath(faqLocale, ROUTES.tools));
const hwid = link('página de HWID Spoofer', toolPath('hwid-spoofer', faqLocale));
const ugc = link('herramienta UGC', toolPath('ugc', faqLocale));
const unlockAll = link('página Unlock All', toolPath('unlock-all', faqLocale));
const faqPage = link('FAQ completo', localizedPath(faqLocale, '/faq/'));
const forums = link('hilos del foro', localizedPath(faqLocale, ROUTES.forums));

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'alert',
    q: '¿Dónde compruebo si los cheats R6S están online?',
    a: a('El banner de estado en vivo está en r6scheats.net. Compruébalo siempre tras una actualización de Rainbow Six Siege o BattlEye.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'package',
    q: '¿Qué ocurre después de comprar?',
    a: a('Tu portal desbloquea el loader, la guía de configuración y la biblioteca de configs mediante nuestro checkout seguro. Sigue la guía antes de lanzar Rainbow Six Siege.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'shield',
    q: '¿Puedo ser baneado usando cheats R6S de terceros?',
    a: a('Sí — cualquier modificación conlleva riesgo. BattlEye y los sistemas de reportes evolucionan. Lee el estado actual y acepta el riesgo antes de usar.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'windows',
    q: '¿Qué plataformas están soportadas?',
    a: a('Rainbow Six Siege vía Ubisoft Connect solo en Windows 10/11 64 bits. macOS y Linux no están soportados.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'refresh',
    q: '¿Puedo mover mi licencia a un PC nuevo?',
    a: a('Sí — usa el reset de HWID en tu portal. Los límites dependen de tu tier.'),
  },
  {
    id: 'tools-page',
    topic: 'tools',
    icon: 'package',
    q: '¿Dónde se listan herramientas y utilidades?',
    a: `${toolsHub} lista tiers de cheats, ${hwid}, ${ugc} y ${unlockAll} con listas de funciones y checkout mediante nuestro partner.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'eye',
    q: '¿Qué es R6S ESP / wallhack?',
    a: `ESP y wallhack muestran posiciones de operadores enemigos, gadgets, drones y trampas a través de paredes. ${lite} cubre overlays de awareness. ${pro} y ${elite} añaden módulos de aimbot.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-aimbot',
    topic: 'esp',
    icon: 'eye',
    q: '¿Cuál es la diferencia entre ESP y aimbot?',
    a: `ESP y wallhack son overlays informativos — no mueven tu mira. Aimbot, no recoil y triggerbot son módulos de combate en ${pro} y ${elite}. Puedes usar solo awareness en ${lite}.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'eye',
    q: '¿Qué tier necesito solo para ESP?',
    a: `${lite} es solo awareness: ESP de jugadores, localizador de gadgets, alertas de drones y overlay de minimapa. ${pro} añade aimbot. ${elite} añade wallhack completo, drone hack y Unlock All.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-aimbot',
    topic: 'scripts',
    icon: 'crosshair',
    q: '¿Qué tier incluye aimbot?',
    a: `${pro} incluye smooth aimbot, no recoil y triggerbot. ${elite} incluye todo lo de Pro más wallhack completo y drone hack. ${lite} no tiene automatización de mira.`,
    scopes: ['pro'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'package',
    q: '¿Cómo clasificáis Lite vs Pro vs Elite?',
    a: `Solo intel → ${lite}. Tiroteos ranked con aimbot → ${pro}. Suite completa de wallhack y parches prioritarios → ${elite}. Compara en cada página de cheat o en el ${faqPage}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'zap',
    q: '¿Por qué Elite tiene slots limitados?',
    a: `Elite es un build privado con soporte directo del dev y entrega prioritaria de parches. Los límites de slots mantienen los ciclos de parches rápidos. Comprueba el banner de estado antes del checkout.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'stream',
    q: '¿Puede OBS capturar mi overlay?',
    a: `El modo stream-proof en ${lite}, ${pro} y ${elite} oculta overlays de OBS y Discord share. Prueba una grabación local antes de ir en directo.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'shield',
    q: '¿Están garantizados los cheats R6S undetected?',
    a: a('No. Undetected es el estado actual en la página del producto — no una garantía permanente. Detente si el build muestra updating, testing o detected.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'shield',
    q: '¿Es ESP más seguro que aimbot?',
    a: a('ESP es más discreto en replay que patrones obvios de aimbot, pero sigue siendo un cheat. BattlEye no ignora overlays porque hayas dejado el aimbot desactivado.'),
  },
  {
    id: 'hwid-when',
    topic: 'tools',
    icon: 'cpu',
    q: '¿Cuándo necesito el HWID Spoofer?',
    a: `Usa ${hwid} cuando cuentas Ubisoft nuevas fallen al instante en un PC pero funcionen en otro — enforcement de hardware. No para casos solo de BattlEye; consulta ${ugc} en su lugar.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'tools',
    icon: 'mail',
    q: '¿Qué es UGC?',
    a: `${ugc} (Unban & Governance Control) es un espacio de apelaciones para restricciones de Ubisoft y bans de BattlEye — flujos personalizados y seguimiento de casos, no un servicio de unban garantizado.`,
    scopes: ['ugc'],
  },
  {
    id: 'unlock-all',
    topic: 'tools',
    icon: 'tag',
    q: '¿Unlock All modifica mi inventario de Ubisoft?',
    a: `${unlockAll} previsualiza operadores y skins localmente en tu cliente. Otros jugadores ven tu inventario real. Incluido con ${elite}; disponible por separado solo para vista previa cosmética.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'tools',
    icon: 'cpu',
    q: '¿Se inyecta el loader en la carpeta de Ubisoft?',
    a: `R6s Cheats funciona de forma externa con sync de configs en la nube — sin archivos inyectados en el directorio de instalación del juego. El riesgo de BattlEye sigue aplicando. Consulta ${toolsHub}.`,
  },
  {
    id: 'forums-vs-cheats',
    topic: 'forums',
    icon: 'alert',
    q: '¿Los códigos de cheat del foro son lo mismo que los cheats ranked?',
    a: `No. Los hilos del foro sobre ajustes de custom game solo aplican offline o en custom games. Los cheats R6S ranked son productos separados — consulta ${lite}, ${pro} y ${elite}.`,
  },
  {
    id: 'forums-setup',
    topic: 'forums',
    icon: 'settings',
    q: '¿A dónde apuntan los hilos de setup del foro para comprar?',
    a: `Los hilos enlazan a páginas de tiers y ${toolsHub}. El checkout pasa por nuestro partner seguro — nunca pegues archivos del loader de DMs aleatorios de Discord.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'package',
    q: '¿Dónde comparo planes lado a lado?',
    a: `Cada página de tier de cheat incluye una tabla comparativa. El ${faqPage} reúne respuestas de producto, cheat y foro en un solo lugar.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'users',
    q: '¿Quién debería quedarse en Lite?',
    a: `Jugadores que solo quieren intel — ESP, gadgets, drones — y no tocarán aimbot. Si sigues activando módulos de aim, compra ${pro} en su lugar.`,
    scopes: ['lite'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'crosshair',
    q: '¿Quién debería comprar Pro?',
    a: `Jugadores ranked que quieren aimbot, no recoil y triggerbot con ESP incluido. Pro es el tier más popular en r6scheats.net.`,
    scopes: ['pro'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'zap',
    q: '¿Quién debería comprar Elite?',
    a: `Operadores que quieren wallhack completo, drone hack, Unlock All y entrega prioritaria de parches cuando hay slots abiertos.`,
    scopes: ['elite'],
  },
  {
    id: 'battleye-update',
    topic: 'safety',
    icon: 'refresh',
    q: '¿Qué debo hacer tras una actualización de BattlEye?',
    a: a('Comprueba el estado en r6scheats.net. No lances hasta que el banner muestre online. Carga presets conservadores tras cualquier parche.'),
  },
  {
    id: 'install-help',
    topic: 'setup',
    icon: 'headphones',
    q: '¿Cómo obtengo ayuda con la instalación?',
    a: a('Sigue la guía de setup del portal tras la compra con tu email de pedido, versión de Windows y build del cliente Rainbow Six Siege listos.'),
  },
  {
    id: 'unranked-ranked',
    topic: 'plans',
    icon: 'target',
    q: '¿Funcionan los tiers en unranked y ranked?',
    a: `Sí — ${lite}, ${pro} y ${elite} incluyen presets unranked y ranked en el portal. Ajusta límites de distancia y suavizado de aim antes de tu primera cola.`,
  },
  {
    id: 'no-recoil',
    topic: 'esp',
    icon: 'eye',
    q: '¿Qué tier incluye no recoil?',
    a: `El control de no recoil viene en ${pro} y continúa en ${elite}. Perfiles por arma ayudan a entry fraggers y anchors a controlar el spray.`,
    scopes: ['pro'],
  },
  {
    id: 'drone-hack',
    topic: 'scripts',
    icon: 'zap',
    q: '¿Qué tier incluye drone hack?',
    a: `Drone hack y wallhack completo son solo ${elite}. ${pro} cubre módulos de aim de combate sin la suite intel de Elite.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'shield',
    q: '¿Qué son los cheats R6S privados?',
    a: a('Privado significa keys por usuario y builds mantenidos — no packs zip públicos. Rainbow Six Siege Cheats entrega tiers ESP, aimbot y wallhack vía portal.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'alert',
    q: '¿Dónde está el FAQ completo?',
    a: `Este sitio incluye FAQs de landing y secciones por página. Consulta el ${faqPage} para todas las respuestas de producto, cheat y foro — o lee ${forums} para hilos detallados.`,
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
      q: '¿Debo usar ajustes de custom game en ranked?',
      a: a('No. Los ajustes de custom game solo funcionan offline o en custom games. Ranked requiere cheats R6S separados de los tiers de r6scheats.net.'),
    },
    {
      id: 'forums-guide-tier',
      topic: 'forums',
      icon: 'package',
      q: '¿Qué tier coincide con esta guía?',
      a: `Guías de awareness → ${lite}. Guías de aimbot y recoil → ${pro}. Temas de wallhack y drones → ${elite}.`,
    },
    {
      id: 'forums-guide-status',
      topic: 'forums',
      icon: 'refresh',
      q: '¿Sigue siendo válido este hilo tras un parche?',
      a: a('Comprueba la fecha del hilo y el banner de estado en vivo. Los hilos del día del parche indican cuándo cambian los módulos — Discord #status tiene las últimas notas del build.'),
    },
  ],
  Setup: [
    {
      id: 'forums-setup-loader',
      topic: 'forums',
      icon: 'settings',
      q: '¿Dónde descargo el loader?',
      a: a('Solo desde tu portal de operador tras el checkout — no desde enlaces de terceros en comentarios o DMs.'),
    },
    {
      id: 'forums-setup-lobby',
      topic: 'forums',
      icon: 'target',
      q: '¿Debo probar primero en un custom game?',
      a: a('Sí. Carga presets conservadores en un custom game antes de ranked. Ajusta suavizado de aim y límites de distancia ESP en varias sesiones.'),
    },
  ],
  Security: [
    {
      id: 'forums-sec-battleye',
      topic: 'forums',
      icon: 'shield',
      q: '¿Este hilo garantiza estado undetected?',
      a: a('Ningún hilo reemplaza el banner de estado en vivo. Undetected es una etiqueta puntual — detente si el estado muestra updating o detected.'),
    },
  ],
};

const defaultForumFaqs: SiteFaqItem[] = [
  {
    id: 'forums-default-1',
    topic: 'forums',
    icon: 'alert',
    q: '¿Los hilos del foro son documentación oficial del producto?',
    a: `Los hilos explican flujos y enlazan a ${lite}, ${pro}, ${elite} y ${toolsHub}. Las listas de funciones en páginas de tools son autoritativas para el checkout.`,
  },
  {
    id: 'forums-default-2',
    topic: 'forums',
    icon: 'headphones',
    q: '¿Necesitas ayuda aplicando este hilo?',
    a: a('Usa tu email de pedido y el slug del hilo al revisar los presets del portal mencionados en posts del foro.'),
  },
  {
    id: 'forums-default-3',
    topic: 'forums',
    icon: 'refresh',
    q: '¿Funcionarán los ajustes de este hilo en el próximo parche?',
    a: a('Revisa el estado tras cada actualización de Rainbow Six Siege. Los presets del portal se actualizan con las notas del parche — recarga configs en lugar de copiar sliders antiguos.'),
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
      q: '¿Qué tier cubre el ESP de este hilo?',
      a: `${lite} incluye ESP de jugadores, localizador de gadgets y alertas de drones. ${pro} añade aimbot sobre la misma pila de overlays.`,
    });
  }
  if (slug.includes('aimbot') || slug.includes('recoil')) {
    slugHints.push({
      id: 'forums-slug-aimbot',
      topic: 'scripts',
      icon: 'crosshair',
      q: '¿Qué tier incluye los módulos de aim de este hilo?',
      a: `${pro} y ${elite} incluyen aimbot y no recoil. ${lite} es solo ESP.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('battleye')) {
    slugHints.push({
      id: 'forums-slug-hwid',
      topic: 'tools',
      icon: 'cpu',
      q: '¿Este hilo reemplaza las tools HWID o UGC?',
      a: `Los hilos de recuperación complementan ${hwid} y ${ugc} — lee las páginas de tools para el alcance del flujo y resultados realistas.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultForumFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'ESP de jugadores y cajas de operadores', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Localizador de gadgets y trampas', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Alertas de posición de drones', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Overlay de minimapa', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Overlay streamproof', icon: 'stream' as const, lite: true, pro: true, elite: true },
  { feature: 'Etiquetas de nombre de operadores', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Smooth aimbot', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Control de no recoil', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Triggerbot', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'FOV y selector de hueso', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Perfiles por arma', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Reducción de spread', icon: 'eye' as const, lite: false, pro: true, elite: true },
  { feature: 'Suite completa de wallhack', icon: 'eye' as const, lite: false, pro: false, elite: true },
  { feature: 'Drone hack', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Módulo de speed hack', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Unlock All operadores', icon: 'tag' as const, lite: false, pro: false, elite: true },
  { feature: 'Cola prioritaria de parches', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Soporte directo del dev en Discord', icon: 'headphones' as const, lite: false, pro: false, elite: true },
  { feature: 'Backup de configs en la nube', icon: 'package' as const, lite: true, pro: true, elite: true },
];
