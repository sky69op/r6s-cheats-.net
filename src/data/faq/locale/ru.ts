import type { IconName } from '../../../components/icons/types';
import type { Locale } from '../../../i18n/config';
import { cheatPath, toolPath, ROUTES, localizedPath } from '../../../utils/path';

const faqLocale: Locale = 'ru';

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
const toolsHub = link('инструменты R6S', localizedPath(faqLocale, ROUTES.tools));
const hwid = link('страница HWID Spoofer', toolPath('hwid-spoofer', faqLocale));
const ugc = link('инструмент UGC', toolPath('ugc', faqLocale));
const unlockAll = link('страница Unlock All', toolPath('unlock-all', faqLocale));
const faqPage = link('полный FAQ', localizedPath(faqLocale, '/faq/'));
const forums = link('темы форума', localizedPath(faqLocale, ROUTES.forums));

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'alert',
    q: 'Где проверить, работают ли R6S читы онлайн?',
    a: a('Живой баннер статуса на r6scheats.net. Всегда проверяйте после обновления Rainbow Six Siege или BattlEye.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'package',
    q: 'Что происходит после покупки?',
    a: a('Портал открывает загрузчик, гайд по установке и библиотеку конфигов через наш безопасный checkout. Следуйте гайду перед запуском Rainbow Six Siege.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'shield',
    q: 'Можно ли получить бан за сторонние R6S читы?',
    a: a('Да — любая модификация несёт риск. BattlEye и система репортов развиваются. Читайте актуальный статус и принимайте риск перед использованием.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'windows',
    q: 'Какие платформы поддерживаются?',
    a: a('Rainbow Six Siege через Ubisoft Connect только на Windows 10/11 64-bit. macOS и Linux не поддерживаются.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'refresh',
    q: 'Можно ли перенести лицензию на новый ПК?',
    a: a('Да — используйте сброс HWID в портале. Лимиты зависят от вашего тарифа.'),
  },
  {
    id: 'tools-page',
    topic: 'tools',
    icon: 'package',
    q: 'Где перечислены инструменты и утилиты?',
    a: `${toolsHub} содержит тарифы читов, ${hwid}, ${ugc} и ${unlockAll} со списками функций и checkout через нашего партнёра.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'eye',
    q: 'Что такое R6S ESP / воллхак?',
    a: `ESP и воллхак показывают позиции вражеских операторов, гаджеты, дроны и ловушки сквозь стены. ${lite} покрывает оверлеи осведомлённости. ${pro} и ${elite} добавляют модули аимбота.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-aimbot',
    topic: 'esp',
    icon: 'eye',
    q: 'В чём разница между ESP и аимботом?',
    a: `ESP и воллхак — информационные оверлеи, они не двигают ваш прицел. Аимбот, без отдачи и триггербот — боевые модули на ${pro} и ${elite}. На ${lite} можно использовать только осведомлённость.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'eye',
    q: 'Какой тариф нужен только для ESP?',
    a: `${lite} — только осведомлённость: ESP игроков, локатор гаджетов, оповещения о дронах и оверлей миникарты. ${pro} добавляет аимбот. ${elite} добавляет полный воллхак, взлом дронов и Unlock All.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-aimbot',
    topic: 'scripts',
    icon: 'crosshair',
    q: 'Какой тариф включает аимбот?',
    a: `${pro} включает плавный аимбот, без отдачи и триггербот. ${elite} включает всё из Pro плюс полный воллхак и взлом дронов. ${lite} не имеет автоматизации прицела.`,
    scopes: ['pro'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'package',
    q: 'Как вы ранжируете Lite vs Pro vs Elite?',
    a: `Только разведка → ${lite}. Рейтинговые перестрелки с аимботом → ${pro}. Полный набор воллхака и приоритетные патчи → ${elite}. Сравните на страницах читов или в ${faqPage}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'zap',
    q: 'Почему Elite с ограниченными слотами?',
    a: `Elite — приватная сборка с прямой поддержкой разработчика и приоритетной доставкой патчей. Лимит слотов ускоряет циклы патчей. Проверьте баннер статуса перед checkout.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'stream',
    q: 'Может ли OBS захватить мой оверлей?',
    a: `Режим stream-proof на ${lite}, ${pro} и ${elite} скрывает оверлеи от OBS и Discord share. Протестируйте локальную запись перед стримом.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'shield',
    q: 'Гарантированы ли undetected R6S читы?',
    a: a('Нет. Undetected — текущий статус на странице продукта, а не постоянная гарантия. Остановитесь, если сборка показывает updating, testing или detected.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'shield',
    q: 'ESP безопаснее аимбота?',
    a: a('ESP тише в реплее, чем очевидные паттерны аимбота, но это всё равно чит. BattlEye не игнорирует оверлеи, потому что вы отключили аимбот.'),
  },
  {
    id: 'hwid-when',
    topic: 'tools',
    icon: 'cpu',
    q: 'Когда нужен HWID Spoofer?',
    a: `Используйте ${hwid}, когда новые аккаунты Ubisoft мгновенно блокируются на одном ПК, но работают на другом — аппаратная блокировка. Не для случаев только BattlEye; см. ${ugc}.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'tools',
    icon: 'mail',
    q: 'Что такое UGC?',
    a: `${ugc} (Unban & Governance Control) — рабочее пространство для апелляций по ограничениям Ubisoft и банам BattlEye — индивидуальные процессы и отслеживание кейсов, а не гарантированный анбан.`,
    scopes: ['ugc'],
  },
  {
    id: 'unlock-all',
    topic: 'tools',
    icon: 'tag',
    q: 'Unlock All изменяет мой инвентарь Ubisoft?',
    a: `${unlockAll} предпросматривает операторов и скины локально на вашем клиенте. Другие игроки видят ваш реальный инвентарь. Включено в ${elite}; доступно отдельно только для косметического предпросмотра.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'tools',
    icon: 'cpu',
    q: 'Загрузчик внедряется в папку Ubisoft?',
    a: `R6s Cheats работает внешне с облачной синхронизацией конфигов — без файлов в папке установки игры. Риск BattlEye всё равно применяется. См. ${toolsHub}.`,
  },
  {
    id: 'forums-vs-cheats',
    topic: 'forums',
    icon: 'alert',
    q: 'Форумные чит-коды — это то же, что рейтинговые читы?',
    a: `Нет. Темы форума о настройках custom game применимы только в офлайн или custom играх. Рейтинговые R6S читы — отдельные продукты — см. ${lite}, ${pro} и ${elite}.`,
  },
  {
    id: 'forums-setup',
    topic: 'forums',
    icon: 'settings',
    q: 'Куда ведут форумные темы по установке для покупки?',
    a: `Темы ссылаются на страницы тарифов и ${toolsHub}. Checkout через нашего безопасного партнёра — никогда не вставляйте файлы загрузчика из случайных Discord DM.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'package',
    q: 'Где сравнить тарифы бок о бок?',
    a: `Каждая страница тарифа включает таблицу сравнения. ${faqPage} собирает ответы о продуктах, читах и форуме в одном месте.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'users',
    q: 'Кому подходит Lite?',
    a: `Игрокам, которым нужна только разведка — ESP, гаджеты, дроны — и которые не будут трогать аимбот. Если вы постоянно включаете aim-модули, покупайте ${pro}.`,
    scopes: ['lite'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'crosshair',
    q: 'Кому покупать Pro?',
    a: `Рейтинговым игрокам, которым нужны аимбот, без отдачи и триггербот с включённым ESP. Pro — самый популярный тариф на r6scheats.net.`,
    scopes: ['pro'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'zap',
    q: 'Кому покупать Elite?',
    a: `Операторам, которым нужен полный воллхак, взлом дронов, Unlock All и приоритетная доставка патчей, когда слоты открыты.`,
    scopes: ['elite'],
  },
  {
    id: 'battleye-update',
    topic: 'safety',
    icon: 'refresh',
    q: 'Что делать после обновления BattlEye?',
    a: a('Проверьте статус на r6scheats.net. Не запускайте, пока баннер не покажет online. Загружайте консервативные пресеты после любого патча.'),
  },
  {
    id: 'install-help',
    topic: 'setup',
    icon: 'headphones',
    q: 'Как получить помощь с установкой?',
    a: a('Следуйте гайду по установке в портале после покупки, подготовив email заказа, версию Windows и сборку клиента Rainbow Six Siege.'),
  },
  {
    id: 'unranked-ranked',
    topic: 'plans',
    icon: 'target',
    q: 'Тарифы работают в unranked и ranked?',
    a: `Да — ${lite}, ${pro} и ${elite} включают пресеты для unranked и ranked в портале. Настройте лимиты дистанции и сглаживание прицела перед первой очередью.`,
  },
  {
    id: 'no-recoil',
    topic: 'esp',
    icon: 'eye',
    q: 'Какой тариф включает без отдачи?',
    a: `Контроль отдачи доступен на ${pro} и переносится в ${elite}. Профили под конкретное оружие помогают entry-фраггерам и якорям контролировать спрей.`,
    scopes: ['pro'],
  },
  {
    id: 'drone-hack',
    topic: 'scripts',
    icon: 'zap',
    q: 'Какой тариф включает взлом дронов?',
    a: `Взлом дронов и полный воллхак — только ${elite}. ${pro} покрывает боевые aim-модули без intel-набора Elite.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'shield',
    q: 'Что такое приватные R6S читы?',
    a: a('Приватные — это ключи на пользователя и поддерживаемые сборки, а не публичные zip-паки. Rainbow Six Siege Cheats доставляет через портал тарифы ESP, аимбота и воллхака.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'alert',
    q: 'Где полный FAQ?',
    a: `На сайте есть landing FAQ и секции на каждой странице. См. ${faqPage} для всех ответов о продуктах, читах и форуме — или читайте ${forums} для подробных тем.`,
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
      q: 'Использовать настройки custom game в ranked?',
      a: a('Нет. Настройки custom game работают только в офлайн или custom играх. Ranked требует отдельные R6S читы с тарифов r6scheats.net.'),
    },
    {
      id: 'forums-guide-tier',
      topic: 'forums',
      icon: 'package',
      q: 'Какой тариф соответствует этому гайду?',
      a: `Гайды по осведомлённости → ${lite}. Гайды по аимботу и отдаче → ${pro}. Темы воллхака и дронов → ${elite}.`,
    },
    {
      id: 'forums-guide-status',
      topic: 'forums',
      icon: 'refresh',
      q: 'Актуальна ли эта тема после патча?',
      a: a('Проверьте дату темы и живой баннер статуса. Темы в день патча отмечают изменения модулей — Discord #status содержит последние заметки сборки.'),
    },
  ],
  Setup: [
    {
      id: 'forums-setup-loader',
      topic: 'forums',
      icon: 'settings',
      q: 'Где скачать загрузчик?',
      a: a('Только из вашего операторского портала после checkout — не по сторонним ссылкам в комментариях или DM.'),
    },
    {
      id: 'forums-setup-lobby',
      topic: 'forums',
      icon: 'target',
      q: 'Сначала протестировать в custom game?',
      a: a('Да. Загрузите консервативные пресеты в custom game перед ranked. Настройте сглаживание прицела и лимиты дистанции ESP за несколько сессий.'),
    },
  ],
  Security: [
    {
      id: 'forums-sec-battleye',
      topic: 'forums',
      icon: 'shield',
      q: 'Гарантирует ли эта тема undetected статус?',
      a: a('Ни одна тема не заменяет живой баннер статуса. Undetected — метка на момент времени — остановитесь, если статус показывает updating или detected.'),
    },
  ],
};

const defaultForumFaqs: SiteFaqItem[] = [
  {
    id: 'forums-default-1',
    topic: 'forums',
    icon: 'alert',
    q: 'Являются ли темы форума официальной документацией продукта?',
    a: `Темы объясняют процессы и ссылаются на ${lite}, ${pro}, ${elite} и ${toolsHub}. Списки функций на страницах инструментов авторитетны для checkout.`,
  },
  {
    id: 'forums-default-2',
    topic: 'forums',
    icon: 'headphones',
    q: 'Нужна помощь с применением этой темы?',
    a: a('Используйте email заказа и slug темы при просмотре пресетов портала, упомянутых в постах форума.'),
  },
  {
    id: 'forums-default-3',
    topic: 'forums',
    icon: 'refresh',
    q: 'Будут ли настройки из этой темы работать после следующего патча?',
    a: a('Перепроверяйте статус после каждого обновления Rainbow Six Siege. Пресеты портала обновляются с патч-нотами — перезагружайте конфиги вместо копирования старых слайдеров.'),
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
      q: 'Какой тариф покрывает ESP из этой темы?',
      a: `${lite} включает ESP игроков, локатор гаджетов и оповещения о дронах. ${pro} добавляет аимбот на том же стеке оверлеев.`,
    });
  }
  if (slug.includes('aimbot') || slug.includes('recoil')) {
    slugHints.push({
      id: 'forums-slug-aimbot',
      topic: 'scripts',
      icon: 'crosshair',
      q: 'Какой тариф включает aim-модули из этой темы?',
      a: `${pro} и ${elite} включают аимбот и без отдачи. ${lite} — только ESP.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('battleye')) {
    slugHints.push({
      id: 'forums-slug-hwid',
      topic: 'tools',
      icon: 'cpu',
      q: 'Заменяет ли эта тема инструменты HWID или UGC?',
      a: `Темы восстановления дополняют ${hwid} и ${ugc} — читайте страницы инструментов для области применения и реалистичных результатов.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultForumFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'ESP игроков и боксы операторов', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Локатор гаджетов и ловушек', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Оповещения о позиции дронов', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Оверлей миникарты', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Streamproof оверлей', icon: 'stream' as const, lite: true, pro: true, elite: true },
  { feature: 'Теги имён операторов', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Плавный аимбот', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Контроль отдачи', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Триггербот', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'FOV и выбор кости', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Профили под конкретное оружие', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Снижение разброса', icon: 'eye' as const, lite: false, pro: true, elite: true },
  { feature: 'Полный набор воллхака', icon: 'eye' as const, lite: false, pro: false, elite: true },
  { feature: 'Взлом дронов', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Модуль спидхака', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Unlock All операторов', icon: 'tag' as const, lite: false, pro: false, elite: true },
  { feature: 'Приоритетная очередь патчей', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Прямая поддержка разработчика в Discord', icon: 'headphones' as const, lite: false, pro: false, elite: true },
  { feature: 'Облачный бэкап конфигов', icon: 'package' as const, lite: true, pro: true, elite: true },
];
