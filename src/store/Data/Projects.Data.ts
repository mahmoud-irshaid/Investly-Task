import { ProjectStatusEnum, ProjectTypeEnum } from '../../Enums/Enums';
import { Project } from '../Types/Project.Type';

import brand1 from '../../assets/images/brand/brand1.svg';
import brand2 from '../../assets/images/brand/brand2.svg';
import brand3 from '../../assets/images/brand/brand3.svg';
import brand4 from '../../assets/images/brand/brand4.svg';
import user1 from '../../assets/images/user/user1.png';
import user2 from '../../assets/images/user/user2.png';
import user3 from '../../assets/images/user/user3.png';

const projectsData: Project[] = [
  {
    id: 1,
    name: 'Miami development',
    status: ProjectStatusEnum.Cancelled,
    brand: { name: 'Tesla', logo: brand1 },
    contributors: [
      { name: 'C1', avatar: user1 },
      { name: 'C2', avatar: user2 },
      { name: 'C3', avatar: user3 },
    ],
    type: ProjectTypeEnum.NewBuild,
    dueDate: 'Thu',
  },
  {
    id: 2,
    name: 'Prague apartment',
    status: ProjectStatusEnum.InReview,
    brand: { name: 'Nike', logo: brand2 },
    contributors: [
      { name: 'C4', avatar: user1 },
      { name: 'C5', avatar: user3 },
    ],
    type: ProjectTypeEnum.Reconstruction,
    dueDate: 'Fri',
  },
  {
    id: 3,
    name: 'Czech redevelopment',
    status: ProjectStatusEnum.InProgress,
    brand: { name: 'Sony', logo: brand4 },
    contributors: [
      { name: 'C6', avatar: user3 },
      { name: 'C7', avatar: user2 },
    ],
    type: ProjectTypeEnum.Commercial,
    dueDate: 'Sat',
  },
  {
    id: 4,
    name: 'Prague redevelopment',
    status: ProjectStatusEnum.Approved,
    brand: { name: 'Sony', logo: brand3 },
    contributors: [
      { name: 'C6', avatar: user1 },
      { name: 'C7', avatar: user2 },
    ],
    type: ProjectTypeEnum.Commercial,
    dueDate: 'Sat',
  },
];

export default projectsData;
