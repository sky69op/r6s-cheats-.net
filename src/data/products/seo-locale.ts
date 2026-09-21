import type { Locale } from '../../i18n/config';

export type CheatSeoSlug = 'lite' | 'pro' | 'elite';
export type ToolSeoSlug = 'hwid-spoofer' | 'ugc' | 'unlock-all';

export interface ProductSeoEntry {
  title: string;
  description: string;
}

export interface LocaleProductSeo {
  cheats: Record<CheatSeoSlug, ProductSeoEntry>;
  tools: Record<ToolSeoSlug, ProductSeoEntry>;
}

const en: LocaleProductSeo = {
  cheats: {
    lite: {
      title: 'R6S Lite — ESP, Skeleton Wallhack, 2D Radar',
      description:
        'R6S Lite cheats: 2D box ESP, skeleton wallhack, gadget ESP, drone alerts, name tags, distance readout, 2D radar and stream-proof overlay for ranked PC on Steam and Ubisoft Connect.',
    },
    pro: {
      title: 'R6S Pro — Aimbot, Soft Aim, Triggerbot',
      description:
        'R6S Pro aimbot with multipoint bones, soft aim, customizable FOV, aim smoothing, triggerbot, no recoil, weapon profiles and save/load configs for ranked PC play.',
    },
    elite: {
      title: 'R6S Elite — Wallhack, Drone Hack, Unlock All',
      description:
        'R6S Elite private cheats: full wallhack, drone hack, gadget ESP, map hack, Unlock All operators, speed hack, triggerbot and priority BattlEye-aware patch delivery at r6scheats.net.',
    },
  },
  tools: {
    'hwid-spoofer': {
      title: 'R6S HWID Spoofer — BattlEye Hardware ID Reset',
      description:
        'Rainbow Six Siege HWID spoofer for BattlEye hardware bans. Spoof disk serials, MAC and GPU IDs on Windows 10/11, verify identifiers and return to ranked on Ubisoft Connect.',
    },
    ugc: {
      title: 'R6S UGC Unban — BattlEye & Ubisoft Appeals',
      description:
        'R6S UGC unban workspace for Ubisoft sanctions and BattlEye Global Ban appeals. Build case workflows, track HWID reset steps and BattlEye unban status for PC.',
    },
    'unlock-all': {
      title: 'R6S Unlock All — Operators & Elite Skins',
      description:
        'Rainbow Six Siege Unlock All cheat: local operator, elite skin, weapon charm and attachment preview on PC without Ubisoft store purchases. Included with Elite tier.',
    },
  },
};

const ru: LocaleProductSeo = {
  cheats: {
    lite: {
      title: 'R6S Lite читы — ESP, скелет воллхак и 2D-радар',
      description:
        'R6S Lite: 2D ESP, скелетный воллхак, ESP гаджетов, оповещения о дронах, никнеймы, дистанция, 2D-радар и stream-proof оверлей для рейтинга на PC в Steam и Ubisoft Connect.',
    },
    pro: {
      title: 'R6S Pro читы — аимбот, soft aim и триггербот',
      description:
        'R6S Pro: аимбот с multipoint, soft aim, настраиваемый FOV, сглаживание, триггербот, no recoil, профили оружия и сохранение конфигов для рейтинговой игры на PC.',
    },
    elite: {
      title: 'R6S Elite читы — воллхак, drone hack и Unlock All',
      description:
        'R6S Elite: полный воллхак, drone hack, ESP гаджетов, map hack, Unlock All операторов, speed hack, триггербот и приоритетные патчи с учётом BattlEye на r6scheats.net.',
    },
  },
  tools: {
    'hwid-spoofer': {
      title: 'R6S HWID Spoofer — сброс BattlEye hardware ID',
      description:
        'HWID spoofer для Rainbow Six Siege при hardware ban BattlEye. Подмена серийников диска, MAC и GPU на Windows 10/11, проверка идентификаторов и возврат в рейтинг Ubisoft Connect.',
    },
    ugc: {
      title: 'R6S UGC Unban — апелляции BattlEye и Ubisoft',
      description:
        'R6S UGC: рабочее пространство для апелляций по санкциям Ubisoft и BattlEye Global Ban. Ведение кейсов, шаги сброса HWID и отслеживание статуса разбана для Siege PC.',
    },
    'unlock-all': {
      title: 'R6S Unlock All — операторы и Elite-скины',
      description:
        'Unlock All для Rainbow Six Siege: локальный просмотр операторов, elite-скинов, charms и attachments на PC без покупок в магазине Ubisoft. Входит в тариф Elite.',
    },
  },
};

const de: LocaleProductSeo = {
  cheats: {
    lite: {
      title: 'R6S Lite Cheats — ESP, Skeleton Wallhack & 2D-Radar',
      description:
        'R6S Lite: 2D-ESP, Skeleton-Wallhack, Gadget-ESP, Drohnenwarnungen, Namensschilder, Entfernung, 2D-Radar und stream-proof Overlay für Ranked auf Steam und Ubisoft Connect.',
    },
    pro: {
      title: 'R6S Pro — Aimbot, Soft Aim, Triggerbot',
      description:
        'R6S Pro: Aimbot mit Multipoint, Soft Aim, anpassbarem FOV, Glättung, Triggerbot, No Recoil, Waffenprofile und Config-Speicherung für Ranked auf PC.',
    },
    elite: {
      title: 'R6S Elite — Wallhack, Drone Hack, Unlock All',
      description:
        'R6S Elite: Full Wallhack, Drone Hack, Gadget-ESP, Map Hack, Unlock All Operatoren, Speed Hack, Triggerbot und BattlEye-bewusste Patch-Lieferung auf r6scheats.net.',
    },
  },
  tools: {
    'hwid-spoofer': {
      title: 'R6S HWID Spoofer — BattlEye Hardware-ID Reset',
      description:
        'HWID Spoofer für Rainbow Six Siege bei BattlEye-Hardwarebans. Disk-, MAC- und GPU-IDs unter Windows 10/11 spoofen, Identifikatoren prüfen und Ranked auf Ubisoft Connect wieder spielen.',
    },
    ugc: {
      title: 'R6S UGC Unban — BattlEye- & Ubisoft-Einsprüche',
      description:
        'R6S UGC: Workspace für Ubisoft-Sanktionen und BattlEye Global Ban Einsprüche. Fälle dokumentieren, HWID-Reset-Schritte verfolgen und Unban-Status für Siege PC nachverfolgen.',
    },
    'unlock-all': {
      title: 'R6S Unlock All — Operatoren & Elite-Skins',
      description:
        'Unlock All für Rainbow Six Siege: lokale Vorschau von Operatoren, Elite-Skins, Charms und Attachments auf PC ohne Ubisoft-Store-Käufe. Im Elite-Tarif enthalten.',
    },
  },
};

const es: LocaleProductSeo = {
  cheats: {
    lite: {
      title: 'R6S Lite trucos — ESP, skeleton wallhack y radar 2D',
      description:
        'R6S Lite: ESP 2D, skeleton wallhack, ESP de gadgets, alertas de drones, nombres, distancia, radar 2D y overlay stream-proof para ranked en PC en Steam y Ubisoft Connect.',
    },
    pro: {
      title: 'R6S Pro trucos — aimbot, soft aim y triggerbot',
      description:
        'R6S Pro: aimbot multipoint, soft aim, FOV configurable, suavizado, triggerbot, no recoil, perfiles de armas y configs guardadas para ranked en PC.',
    },
    elite: {
      title: 'R6S Elite trucos — wallhack, drone hack y Unlock All',
      description:
        'R6S Elite: wallhack completo, drone hack, ESP de gadgets, map hack, Unlock All de operadores, speed hack, triggerbot y parches prioritarios con BattlEye en r6scheats.net.',
    },
  },
  tools: {
    'hwid-spoofer': {
      title: 'R6S HWID Spoofer — reset de hardware ID BattlEye',
      description:
        'HWID spoofer para Rainbow Six Siege con hardware ban de BattlEye. Spoof de disco, MAC y GPU en Windows 10/11, verificación de identificadores y vuelta al ranked en Ubisoft Connect.',
    },
    ugc: {
      title: 'R6S UGC Unban — apelaciones BattlEye y Ubisoft',
      description:
        'R6S UGC: espacio de trabajo para sanciones de Ubisoft y apelaciones de BattlEye Global Ban. Documenta casos, sigue pasos de reset HWID y estado de unban para Siege PC.',
    },
    'unlock-all': {
      title: 'R6S Unlock All — operadores y skins Elite',
      description:
        'Unlock All para Rainbow Six Siege: vista previa local de operadores, skins elite, charms y attachments en PC sin compras en la tienda Ubisoft. Incluido en el tier Elite.',
    },
  },
};

const fr: LocaleProductSeo = {
  cheats: {
    lite: {
      title: 'R6S Lite cheats — ESP, skeleton wallhack et radar 2D',
      description:
        'R6S Lite : ESP 2D, skeleton wallhack, ESP gadgets, alertes drones, pseudos, distance, radar 2D et overlay stream-proof pour le ranked sur Steam et Ubisoft Connect.',
    },
    pro: {
      title: 'R6S Pro cheats — aimbot, soft aim et triggerbot',
      description:
        'R6S Pro : aimbot multipoint, soft aim, FOV réglable, lissage, triggerbot, no recoil, profils d\'armes et configs sauvegardées pour le ranked sur PC.',
    },
    elite: {
      title: 'R6S Elite cheats — wallhack, drone hack et Unlock All',
      description:
        'R6S Elite : wallhack complet, drone hack, ESP gadgets, map hack, Unlock All opérateurs, speed hack, triggerbot et patches prioritaires BattlEye sur r6scheats.net.',
    },
  },
  tools: {
    'hwid-spoofer': {
      title: 'R6S HWID Spoofer — reset hardware ID BattlEye',
      description:
        'HWID spoofer pour Rainbow Six Siege en cas de hardware ban BattlEye. Spoof disque, MAC et GPU sous Windows 10/11, vérification des identifiants et retour au ranked Ubisoft Connect.',
    },
    ugc: {
      title: 'R6S UGC Unban — recours BattlEye et Ubisoft',
      description:
        'R6S UGC : espace de travail pour sanctions Ubisoft et recours BattlEye Global Ban. Documenter les dossiers, suivre les étapes reset HWID et le statut de déban pour Siege PC.',
    },
    'unlock-all': {
      title: 'R6S Unlock All — opérateurs et skins Elite',
      description:
        'Unlock All pour Rainbow Six Siege : aperçu local des opérateurs, skins elite, charms et attachments sur PC sans achats Ubisoft Store. Inclus dans le tier Elite.',
    },
  },
};

const pt: LocaleProductSeo = {
  cheats: {
    lite: {
      title: 'R6S Lite cheats — ESP, skeleton wallhack e radar 2D',
      description:
        'R6S Lite: ESP 2D, skeleton wallhack, ESP de gadgets, alertas de drones, nomes, distância, radar 2D e overlay stream-proof para ranked no PC no Steam e Ubisoft Connect.',
    },
    pro: {
      title: 'R6S Pro cheats — aimbot, soft aim e triggerbot',
      description:
        'R6S Pro: aimbot multipoint, soft aim, FOV configurável, suavização, triggerbot, no recoil, perfis de armas e configs salvas para ranked no PC.',
    },
    elite: {
      title: 'R6S Elite cheats — wallhack, drone hack e Unlock All',
      description:
        'R6S Elite: wallhack completo, drone hack, ESP de gadgets, map hack, Unlock All de operadores, speed hack, triggerbot e patches prioritários com BattlEye em r6scheats.net.',
    },
  },
  tools: {
    'hwid-spoofer': {
      title: 'R6S HWID Spoofer — reset de hardware ID BattlEye',
      description:
        'HWID spoofer para Rainbow Six Siege com hardware ban do BattlEye. Spoof de disco, MAC e GPU no Windows 10/11, verificação de identificadores e retorno ao ranked no Ubisoft Connect.',
    },
    ugc: {
      title: 'R6S UGC Unban — recursos BattlEye e Ubisoft',
      description:
        'R6S UGC: workspace para sanções Ubisoft e recursos BattlEye Global Ban. Documente casos, acompanhe passos de reset HWID e status de unban para Siege PC.',
    },
    'unlock-all': {
      title: 'R6S Unlock All — operadores e skins Elite',
      description:
        'Unlock All para Rainbow Six Siege: pré-visualização local de operadores, skins elite, charms e attachments no PC sem compras na loja Ubisoft. Incluído no tier Elite.',
    },
  },
};

export const productSeoByLocale: Record<Locale, LocaleProductSeo> = {
  en,
  ru,
  de,
  es,
  fr,
  pt,
};

export function getLocaleProductSeo(locale: Locale): LocaleProductSeo {
  return productSeoByLocale[locale] ?? en;
}
