import { MenuOption, Sections } from '@models/app';

import {
  pathContact, pathDoctors, pathInfo, pathPricing, pathServices
} from './paths';

const menuOptInfo: MenuOption = {
  id: Sections.INFO,
  path: pathInfo
};
const menuOptContact: MenuOption = {
  id: Sections.CONTACT,
  path: pathContact
};
const menuOptDoctor: MenuOption = {
  id: Sections.DOCTORS,
  path: pathDoctors
};
const menuOptPricing: MenuOption = {
  id: Sections.PRICING,
  path: pathPricing
};
const menuOptServices: MenuOption = {
  id: Sections.SERVICES,
  path: pathServices
};

const mainMenu: MenuOption[] = [
  menuOptInfo,
  menuOptServices,
  menuOptDoctor,
  menuOptPricing,
  menuOptContact

];

export {
  mainMenu,
  menuOptContact,
  menuOptDoctor,
  menuOptInfo,
  menuOptPricing,
  menuOptServices
};
