import { Menu, MenuOption } from '@models/app';

import paths from './paths';

const OpeningInfoOpt: MenuOption = {
  icon: 'fa-solid fa-hospital',
  id: 'appointment',
  path: paths.pathAppointment
};

const AppoInfoOpt: MenuOption = {
  icon: 'fa-solid fa-calendar-day',
  id: 'appointment',
  path: paths.pathAppointment
};

const DoctorsInfoOpt: MenuOption = {
  icon: 'fa-solid fa-user-doctor',
  id: 'doctors',
  path: paths.pathDoctors
};

const PricingInfoOpt: MenuOption = {
  icon: 'fa-solid fa-credit-card',
  id: 'pricing',
  path: paths.pathPricing
};

const InfoMenu: Menu = [AppoInfoOpt, DoctorsInfoOpt, PricingInfoOpt];

export {
  AppoInfoOpt,
  DoctorsInfoOpt,
  InfoMenu,
  OpeningInfoOpt,
  PricingInfoOpt
};
