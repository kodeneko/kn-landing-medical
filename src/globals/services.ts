import { ServiceOpt, Services } from '@models/app';

const servOptMedicine: ServiceOpt = {
  icon: 'fa-solid fa-capsules',
  id: 'med',
  pic: 'medicines.png'
};
const servOptDental: ServiceOpt = {
  icon: 'fa-solid fa-tooth',
  id: 'dental',
  pic: 'tooth.png'
};
const servOptOrtho: ServiceOpt = {
  icon: 'fa-solid fa-crutch',
  id: 'ortho',
  pic: 'crutch.png'
};
const servOptOphthal: ServiceOpt = {
  icon: 'fa-solid fa-glasses',
  id: 'ophtha',
  pic: 'internal-eye.png'
};
const servOptDiag: ServiceOpt = {
  icon: 'fa-solid fa-flask',
  id: 'diag',
  pic: 'microscope.png'
};
const servMenu: Services = [
  servOptMedicine,
  servOptDental,
  servOptOrtho,
  servOptOphthal,
  servOptDiag
];

export {
  servMenu,
  servOptDental,
  servOptDiag,
  servOptMedicine,
  servOptOphthal,
  servOptOrtho
};
