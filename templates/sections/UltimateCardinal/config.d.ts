/**
 * Files generated using template generator
 */
export interface UltimateCardinalProps {
  id?: string;
  title: string;
  cards?: CardItem[];
}

interface CardItem {
  author: string;
  authorAvatar: string;
  thumbnail: string;
  title: string;
  slug: string;
}

export interface UltimateCardinalSchema {
  id: string;
  template: 'UltimateCardinal';
  data?: Partial<UltimateCardinalProps>;
  dynamicData?: (context = {}) => Promise<Partial<UltimateCardinalProps>>;
}
