export type Fabric = {
  id: string;
  name: string;
  region: string;
  collection: 'Kashmiri Series' | 'Banaras Series' | 'Eco Series';
  material: string;
  gsm: number;
  threadCount: number;
  dyeType: string;
  pricePerMeter: string;
  artisanName: string;
  description: string;
  macroImage: string;
  artisanImage: string;
  images: string[];
  drapeVideo: string;
  sustainabilityScore: number;
};
