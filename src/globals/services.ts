import { Menu, MenuOption } from '@models/app';

const servOptMedicine: MenuOption = {
  icon: 'fa-solid fa-capsules',
  id: 'medicine'
};
const servOptDental: MenuOption = {
  icon: 'fa-solid fa-tooth',
  id: 'dental'
};
const servOptOrtho: MenuOption = {
  icon: 'fa-solid fa-crutch',
  id: 'ortho'
};
const servOptOphthal: MenuOption = {
  icon: 'fa-solid fa-glasses',
  id: 'ophthal'
};
const servOptDiag: MenuOption = {
  icon: 'fa-solid fa-flask',
  id: 'diag'
};
const servMenu: Menu = [
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
