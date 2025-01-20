export interface Unit {
  id: number;
  title: string;
  description: string;
  location: string;
  bedrooms: number;
  type: string;
  imageUrl: string;
}

export interface UnitsState {
  units: Unit[];
}
