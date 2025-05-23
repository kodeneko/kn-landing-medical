import { MenuOption } from '@models/app';

import paths from './paths';

const menuOptAbout: MenuOption = {
  id: 'about',
  path: paths.pathAbout
};
const menuOptContact: MenuOption = {
  id: 'contact',
  path: paths.pathContact
};
const menuOptDoctor: MenuOption = {
  id: 'doctors',
  path: paths.pathDoctors
};
const menuOptPricing: MenuOption = {
  id: 'pricing',
  path: paths.pathPricing
};
const menuOptServices: MenuOption = {
  id: 'services',
  path: paths.pathServices
};

const mainMenu = [
  menuOptAbout,
  menuOptContact,
  menuOptDoctor,
  menuOptPricing,
  menuOptServices
];

export {
  mainMenu,
  menuOptAbout,
  menuOptContact,
  menuOptDoctor,
  menuOptPricing,
  menuOptServices
};
