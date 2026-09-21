import type { IconName } from '../components/icons/types';

export const featureIcons: Record<string, IconName> = {
  Aimbot: 'crosshair',
  'ESP / Wallhack': 'eye',
  'Drone & Gadget ESP': 'radar',
  'Radar & UAV': 'radar',
  'No Recoil': 'target',
  'Utility Suite': 'layers',
};

export const whyUsIcons: IconName[] = ['shield', 'users', 'monitor', 'headphones'];

export const setupStepIcons: IconName[] = ['check', 'package', 'zap', 'settings', 'crosshair'];

export const toolkitIcons: Record<string, IconName> = {
  Aimbot: 'crosshair',
  Vision: 'eye',
  Intel: 'radar',
  Operators: 'target',
  Recoil: 'zap',
  Profiles: 'settings',
  Combat: 'crosshair',
  Radar: 'radar',
  Weapons: 'target',
  Movement: 'zap',
};

export const heroStatusPills: { icon: IconName; label: string }[] = [
  { icon: 'eye', label: 'ESP Active' },
  { icon: 'radar', label: 'Radar Online' },
  { icon: 'zap', label: 'Season Build' },
  { icon: 'shield', label: 'Undetected' },
  { icon: 'crosshair', label: 'Soft Aim Ready' },
  { icon: 'target', label: 'No Recoil' },
  { icon: 'stream', label: 'Stream Proof' },
  { icon: 'package', label: 'Loot ESP' },
  { icon: 'eye', label: 'Skeleton ESP' },
  { icon: 'radar', label: 'UAV Radar' },
  { icon: 'package', label: 'Map Hack' },
  { icon: 'headphones', label: '24/7 Support' },
  { icon: 'zap', label: 'Instant Delivery' },
  { icon: 'shield', label: 'Ranked Safe' },
  { icon: 'crosshair', label: 'Trigger Bot' },
  { icon: 'target', label: 'Bone Select' },
  { icon: 'alert', label: 'Live Status' },
  { icon: 'refresh', label: 'Auto Updates' },
];

export const heroStatIcons: IconName[] = ['stream', 'clock', 'users', 'headphones'];

export const cheatTierIcons: Record<string, IconName> = {
  Lite: 'eye',
  Pro: 'crosshair',
  Elite: 'zap',
};

export const productCategoryIcons: Record<string, IconName> = {
  'Core product': 'package',
  'External suite': 'cpu',
  'DMA hardware': 'cpu',
  'System utility': 'cpu',
  'Account recovery': 'mail',
  Cosmetic: 'tag',
};

export const acquisitionStepIcons: IconName[] = ['package', 'settings', 'zap', 'check'];

export const compatibilityIcons: IconName[] = [
  'windows',
  'package',
  'steam',
  'monitor',
  'refresh',
  'wifi',
  'headphones',
  'shield',
];
