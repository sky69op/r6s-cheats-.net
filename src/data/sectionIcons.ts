import type { IconName } from '../components/icons/types';
import type { FeatureId, ProductCategoryKey, ToolkitId } from '../i18n/types';

export const featureIcons: Record<FeatureId, IconName> = {
  aimbot: 'crosshair',
  esp: 'eye',
  drone_esp: 'radar',
  no_recoil: 'target',
  utility_suite: 'layers',
};

export const whyUsIcons: IconName[] = ['shield', 'users', 'monitor', 'headphones'];

export const setupStepIcons: IconName[] = ['check', 'package', 'zap', 'settings', 'crosshair'];

export const toolkitIcons: Record<ToolkitId, IconName> = {
  aimbot: 'crosshair',
  vision: 'eye',
  intel: 'radar',
  operators: 'target',
  recoil: 'zap',
  profiles: 'settings',
};

export const cheatTierIcons: Record<string, IconName> = {
  Lite: 'eye',
  Pro: 'crosshair',
  Elite: 'zap',
};

export const productCategoryIcons: Record<ProductCategoryKey, IconName> = {
  system_utility: 'cpu',
  account_recovery: 'mail',
  cosmetic: 'tag',
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
