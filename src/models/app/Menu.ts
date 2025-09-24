import { Sections } from '@models/app';

type MenuOption = {
  icon?: string
  id: Sections
  path?: string
};

interface InfoOpt extends MenuOption { btn: MenuOption }
interface ServiceOpt extends MenuOption { pic: string }

export type {
  InfoOpt,
  MenuOption,
  ServiceOpt
};
