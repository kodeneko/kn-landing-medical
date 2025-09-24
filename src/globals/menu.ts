import { MenuOption, Sections } from '@models/app';

import paths from './paths';

const menuOptInfo: MenuOption = {
  id: Sections.INFO,
  path: paths.pathInfo
};
const menuOptContact: MenuOption = {
  id: Sections.CONTACT,
  path: paths.pathContact
};
const menuOptDoctor: MenuOption = {
  id: Sections.DOCTORS,
  path: paths.pathDoctors
};
const menuOptPricing: MenuOption = {
  id: Sections.PRICING,
  path: paths.pathPricing
};
const menuOptServices: MenuOption = {
  id: Sections.SERVICES,
  path: paths.pathServices
};

const mainMenu = [
  menuOptInfo,
  menuOptServices,
  menuOptContact,
  menuOptDoctor,
  menuOptPricing
];

export {
  mainMenu,
  menuOptContact,
  menuOptDoctor,
  menuOptInfo,
  menuOptPricing,
  menuOptServices
};
