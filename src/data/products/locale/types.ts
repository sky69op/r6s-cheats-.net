import type { IconName } from '../../../components/icons/types';
import type { ProductPage } from '../../products';

export interface ProductLocaleContent {
  overview: ProductPage['overview'];
  about?: ProductPage['about'];
  body: ProductPage['body'];
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: ProductPage['systemRequirements'];
  acquisitionSteps: ProductPage['acquisition']['steps'];
  acquisitionTitle: string;
  imageCaptions?: Partial<Record<string, { alt?: string; caption?: string; captionDesc?: string }>>;
}

export type ProductLocaleBundle = Record<string, ProductLocaleContent>;

export interface SharedProductCopy {
  goodToKnow: string;
  limitations: string;
  systemRequirements: { icon: IconName; text: string }[];
  acquisitionSteps: ProductPage['acquisition']['steps'];
}
