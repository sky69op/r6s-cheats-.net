import type { IconName } from '../../../components/icons/types';
import type { Locale } from '../../../i18n/config';
import { cheatPath, toolPath, ROUTES, localizedPath } from '../../../utils/path';

const faqLocale: Locale = 'pt';

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
const toolsHub = link('ferramentas R6S', localizedPath(faqLocale, ROUTES.tools));
const hwid = link('página HWID Spoofer', toolPath('hwid-spoofer', faqLocale));
const ugc = link('ferramenta UGC', toolPath('ugc', faqLocale));
const unlockAll = link('página Unlock All', toolPath('unlock-all', faqLocale));
const faqPage = link('FAQ completo', localizedPath(faqLocale, '/faq/'));
const forums = link('tópicos do fórum', localizedPath(faqLocale, ROUTES.forums));

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'alert',
    q: 'Onde verifico se os cheats R6S estão online?',
    a: a('O banner de status ao vivo está em r6scheats.net. Sempre verifique após uma atualização do Rainbow Six Siege ou BattlEye.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'package',
    q: 'O que acontece depois da compra?',
    a: a('Seu portal libera o loader, guia de configuração e biblioteca de configs via nosso checkout seguro. Siga o guia antes de iniciar o Rainbow Six Siege.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'shield',
    q: 'Posso ser banido usando cheats R6S de terceiros?',
    a: a('Sim — qualquer modificação carrega risco. BattlEye e sistemas de report evoluem. Leia o status atual e aceite o risco antes de usar.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'windows',
    q: 'Quais plataformas são suportadas?',
    a: a('Rainbow Six Siege via Ubisoft Connect apenas no Windows 10/11 64 bits. macOS e Linux não são suportados.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'refresh',
    q: 'Posso transferir minha licença para um PC novo?',
    a: a('Sim — use o reset de HWID no seu portal. Os limites dependem do seu tier.'),
  },
  {
    id: 'tools-page',
    topic: 'tools',
    icon: 'package',
    q: 'Onde estão listadas ferramentas e utilitários?',
    a: `${toolsHub} lista tiers de cheats, ${hwid}, ${ugc} e ${unlockAll} com listas de recursos e checkout via nosso parceiro.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'eye',
    q: 'O que é R6S ESP / wallhack?',
    a: `ESP e wallhack mostram posições de operadores inimigos, gadgets, drones e armadilhas através das paredes. ${lite} cobre overlays de awareness. ${pro} e ${elite} adicionam módulos de aimbot.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-aimbot',
    topic: 'esp',
    icon: 'eye',
    q: 'Qual é a diferença entre ESP e aimbot?',
    a: `ESP e wallhack são overlays informativos — não movem sua mira. Aimbot, no recoil e triggerbot são módulos de combate no ${pro} e ${elite}. Você pode usar só awareness no ${lite}.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'eye',
    q: 'Qual tier preciso só para ESP?',
    a: `${lite} é só awareness: ESP de jogadores, localizador de gadgets, alertas de drones e overlay de minimapa. ${pro} adiciona aimbot. ${elite} adiciona wallhack completo, drone hack e Unlock All.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-aimbot',
    topic: 'scripts',
    icon: 'crosshair',
    q: 'Qual tier inclui aimbot?',
    a: `${pro} inclui smooth aimbot, no recoil e triggerbot. ${elite} inclui tudo do Pro mais wallhack completo e drone hack. ${lite} não tem automação de mira.`,
    scopes: ['pro'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'package',
    q: 'Como vocês classificam Lite vs Pro vs Elite?',
    a: `Só intel → ${lite}. Tiroteios ranked com aimbot → ${pro}. Suite completa de wallhack e patches prioritários → ${elite}. Compare em cada página de cheat ou no ${faqPage}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'zap',
    q: 'Por que Elite tem slots limitados?',
    a: `Elite é um build privado com suporte direto do dev e entrega prioritária de patches. Limites de slots mantêm ciclos de patch rápidos. Verifique o banner de status antes do checkout.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'stream',
    q: 'O OBS pode capturar meu overlay?',
    a: `O modo stream-proof no ${lite}, ${pro} e ${elite} oculta overlays do OBS e Discord share. Teste uma gravação local antes de ir ao vivo.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'shield',
    q: 'Cheats R6S undetected são garantidos?',
    a: a('Não. Undetected é o status atual na página do produto — não uma garantia permanente. Pare se o build mostrar updating, testing ou detected.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'shield',
    q: 'ESP é mais seguro que aimbot?',
    a: a('ESP é mais discreto no replay que padrões óbvios de aimbot, mas ainda é um cheat. BattlEye não ignora overlays porque você deixou o aimbot desligado.'),
  },
  {
    id: 'hwid-when',
    topic: 'tools',
    icon: 'cpu',
    q: 'Quando preciso do HWID Spoofer?',
    a: `Use ${hwid} quando contas Ubisoft novas falham instantaneamente em um PC mas funcionam em outro — enforcement de hardware. Não para casos só de BattlEye; veja ${ugc} em vez disso.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'tools',
    icon: 'mail',
    q: 'O que é UGC?',
    a: `${ugc} (Unban & Governance Control) é um workspace de apelação para restrições Ubisoft e bans BattlEye — fluxos personalizados e rastreamento de casos, não um serviço de unban garantido.`,
    scopes: ['ugc'],
  },
  {
    id: 'unlock-all',
    topic: 'tools',
    icon: 'tag',
    q: 'Unlock All modifica meu inventário Ubisoft?',
    a: `${unlockAll} pré-visualiza operadores e skins localmente no seu cliente. Outros jogadores veem seu inventário real. Incluído com ${elite}; disponível avulso só para preview cosmético.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'tools',
    icon: 'cpu',
    q: 'O loader é injetado na pasta Ubisoft?',
    a: `R6s Cheats roda externamente com sync de configs na nuvem — sem arquivos injetados no diretório de instalação do jogo. O risco BattlEye ainda se aplica. Veja ${toolsHub}.`,
  },
  {
    id: 'forums-vs-cheats',
    topic: 'forums',
    icon: 'alert',
    q: 'Códigos de cheat do fórum são iguais aos cheats ranked?',
    a: `Não. Tópicos do fórum sobre configurações de custom game aplicam só offline ou em custom games. Cheats R6S ranked são produtos separados — veja ${lite}, ${pro} e ${elite}.`,
  },
  {
    id: 'forums-setup',
    topic: 'forums',
    icon: 'settings',
    q: 'Para onde apontam os tópicos de setup do fórum para compra?',
    a: `Tópicos linkam para páginas de tiers e ${toolsHub}. Checkout passa pelo nosso parceiro seguro — nunca cole arquivos de loader de DMs aleatórios do Discord.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'package',
    q: 'Onde comparo planos lado a lado?',
    a: `Cada página de tier de cheat inclui uma tabela comparativa. O ${faqPage} reúne respostas de produto, cheat e fórum em um só lugar.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'users',
    q: 'Quem deve ficar no Lite?',
    a: `Jogadores que só querem intel — ESP, gadgets, drones — e não vão usar aimbot. Se você fica ativando módulos de aim, compre ${pro} em vez disso.`,
    scopes: ['lite'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'crosshair',
    q: 'Quem deve comprar Pro?',
    a: `Jogadores ranked que querem aimbot, no recoil e triggerbot com ESP incluído. Pro é o tier mais popular em r6scheats.net.`,
    scopes: ['pro'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'zap',
    q: 'Quem deve comprar Elite?',
    a: `Operadores que querem wallhack completo, drone hack, Unlock All e entrega prioritária de patches quando há slots abertos.`,
    scopes: ['elite'],
  },
  {
    id: 'battleye-update',
    topic: 'safety',
    icon: 'refresh',
    q: 'O que devo fazer após uma atualização do BattlEye?',
    a: a('Verifique o status em r6scheats.net. Não inicie até o banner mostrar online. Carregue presets conservadores após qualquer patch.'),
  },
  {
    id: 'install-help',
    topic: 'setup',
    icon: 'headphones',
    q: 'Como obtenho ajuda com a instalação?',
    a: a('Siga o guia de setup do portal após a compra com seu e-mail do pedido, versão do Windows e build do cliente Rainbow Six Siege prontos.'),
  },
  {
    id: 'unranked-ranked',
    topic: 'plans',
    icon: 'target',
    q: 'Os tiers funcionam em unranked e ranked?',
    a: `Sim — ${lite}, ${pro} e ${elite} incluem presets unranked e ranked no portal. Ajuste limites de distância e suavização de aim antes da sua primeira fila.`,
  },
  {
    id: 'no-recoil',
    topic: 'esp',
    icon: 'eye',
    q: 'Qual tier inclui no recoil?',
    a: `Controle de no recoil vem no ${pro} e continua no ${elite}. Perfis por arma ajudam entry fraggers e anchors a controlar o spray.`,
    scopes: ['pro'],
  },
  {
    id: 'drone-hack',
    topic: 'scripts',
    icon: 'zap',
    q: 'Qual tier inclui drone hack?',
    a: `Drone hack e wallhack completo são só ${elite}. ${pro} cobre módulos de aim de combate sem a suite intel do Elite.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'shield',
    q: 'O que são cheats R6S privados?',
    a: a('Privado significa keys por usuário e builds mantidos — não packs zip públicos. Rainbow Six Siege Cheats entrega tiers ESP, aimbot e wallhack via portal.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'alert',
    q: 'Onde está o FAQ completo?',
    a: `Este site inclui FAQs de landing e seções por página. Veja o ${faqPage} para todas as respostas de produto, cheat e fórum — ou leia ${forums} para tópicos detalhados.`,
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
      q: 'Devo usar configurações de custom game no ranked?',
      a: a('Não. Configurações de custom game só funcionam offline ou em custom games. Ranked requer cheats R6S separados dos tiers de r6scheats.net.'),
    },
    {
      id: 'forums-guide-tier',
      topic: 'forums',
      icon: 'package',
      q: 'Qual tier corresponde a este guia?',
      a: `Guias de awareness → ${lite}. Guias de aimbot e recoil → ${pro}. Tópicos de wallhack e drones → ${elite}.`,
    },
    {
      id: 'forums-guide-status',
      topic: 'forums',
      icon: 'refresh',
      q: 'Este tópico ainda é válido após um patch?',
      a: a('Verifique a data do tópico e o banner de status ao vivo. Tópicos do dia do patch indicam quando módulos mudam — Discord #status tem as últimas notas do build.'),
    },
  ],
  Setup: [
    {
      id: 'forums-setup-loader',
      topic: 'forums',
      icon: 'settings',
      q: 'Onde baixo o loader?',
      a: a('Somente do seu portal de operador após o checkout — não de links de terceiros em comentários ou DMs.'),
    },
    {
      id: 'forums-setup-lobby',
      topic: 'forums',
      icon: 'target',
      q: 'Devo testar primeiro em um custom game?',
      a: a('Sim. Carregue presets conservadores em um custom game antes do ranked. Ajuste suavização de aim e limites de distância ESP ao longo de várias sessões.'),
    },
  ],
  Security: [
    {
      id: 'forums-sec-battleye',
      topic: 'forums',
      icon: 'shield',
      q: 'Este tópico garante status undetected?',
      a: a('Nenhum tópico substitui o banner de status ao vivo. Undetected é um rótulo pontual — pare se o status mostrar updating ou detected.'),
    },
  ],
};

const defaultForumFaqs: SiteFaqItem[] = [
  {
    id: 'forums-default-1',
    topic: 'forums',
    icon: 'alert',
    q: 'Tópicos do fórum são documentação oficial do produto?',
    a: `Tópicos explicam fluxos e linkam para ${lite}, ${pro}, ${elite} e ${toolsHub}. Listas de recursos nas páginas de ferramentas são autoritativas para checkout.`,
  },
  {
    id: 'forums-default-2',
    topic: 'forums',
    icon: 'headphones',
    q: 'Precisa de ajuda para aplicar este tópico?',
    a: a('Use seu e-mail do pedido e o slug do tópico ao revisar os presets do portal mencionados em posts do fórum.'),
  },
  {
    id: 'forums-default-3',
    topic: 'forums',
    icon: 'refresh',
    q: 'Configurações deste tópico funcionarão no próximo patch?',
    a: a('Reverifique o status após cada atualização do Rainbow Six Siege. Presets do portal atualizam com patch notes — recarregue configs em vez de copiar sliders antigos.'),
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
      q: 'Qual tier cobre o ESP deste tópico?',
      a: `${lite} inclui ESP de jogadores, localizador de gadgets e alertas de drones. ${pro} adiciona aimbot na mesma pilha de overlays.`,
    });
  }
  if (slug.includes('aimbot') || slug.includes('recoil')) {
    slugHints.push({
      id: 'forums-slug-aimbot',
      topic: 'scripts',
      icon: 'crosshair',
      q: 'Qual tier inclui os módulos de aim deste tópico?',
      a: `${pro} e ${elite} incluem aimbot e no recoil. ${lite} é só ESP.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('battleye')) {
    slugHints.push({
      id: 'forums-slug-hwid',
      topic: 'tools',
      icon: 'cpu',
      q: 'Este tópico substitui ferramentas HWID ou UGC?',
      a: `Tópicos de recuperação complementam ${hwid} e ${ugc} — leia páginas de ferramentas para escopo do fluxo e resultados realistas.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultForumFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'ESP de jogadores e caixas de operadores', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Localizador de gadgets e armadilhas', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Alertas de posição de drones', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Overlay de minimapa', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Overlay streamproof', icon: 'stream' as const, lite: true, pro: true, elite: true },
  { feature: 'Tags de nome de operadores', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Smooth aimbot', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Controle de no recoil', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Triggerbot', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'FOV e seletor de osso', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Perfis por arma', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Redução de spread', icon: 'eye' as const, lite: false, pro: true, elite: true },
  { feature: 'Suite completa de wallhack', icon: 'eye' as const, lite: false, pro: false, elite: true },
  { feature: 'Drone hack', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Módulo de speed hack', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Unlock All operadores', icon: 'tag' as const, lite: false, pro: false, elite: true },
  { feature: 'Fila prioritária de patches', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Suporte direto do dev no Discord', icon: 'headphones' as const, lite: false, pro: false, elite: true },
  { feature: 'Backup de configs na nuvem', icon: 'package' as const, lite: true, pro: true, elite: true },
];
