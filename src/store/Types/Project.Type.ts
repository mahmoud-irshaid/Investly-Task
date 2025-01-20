export type projectStatus =
  | 'Cancelled'
  | 'In review'
  | 'In progress'
  | 'Approved';
export type projectType =
  | 'New Build'
  | 'Reconstruction'
  | 'Residential'
  | 'Commercial';

export interface Contributor {
  name: string;
  avatar?: string;
}

export interface Brand {
  name: string;
  logo?: string;
}

export interface Project {
  id: number;
  name: string;
  status: projectStatus;
  brand: Brand;
  contributors: Contributor[];
  type: projectType;
  dueDate: string;
}
