import { MenuOption } from '@models/app';

import { pathAppointment, pathDoctors, pathPricing } from './paths';

const OpeningInfoOpt: MenuOption = {
  icon: 'fa-solid fa-hospital',
  id: 'appointment',
  path: pathAppointment
};

const AppoInfoOpt: MenuOption = {
  icon: 'fa-solid fa-calendar-day',
  id: 'appointment',
  path: pathAppointment
};

const DoctorsInfoOpt: MenuOption = {
  icon: 'fa-solid fa-user-doctor',
  id: 'doctors',
  path: pathDoctors
};

const PricingInfoOpt: MenuOption = {
  icon: 'fa-solid fa-credit-card',
  id: 'pricing',
  path: pathPricing
};

const InfoMenu: MenuOption[] = [AppoInfoOpt, DoctorsInfoOpt, PricingInfoOpt];

export {
  AppoInfoOpt,
  DoctorsInfoOpt,
  InfoMenu,
  OpeningInfoOpt,
  PricingInfoOpt
};
