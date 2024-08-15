type MenuOption = {
  id: string;
  path?: string;
  icon?: string;
};

interface InfoOpt extends MenuOption { btn: MenuOption }

interface ServiceOpt extends MenuOption { pic: string }

type Menu = MenuOption[];

type Info = InfoOpt[];

type Services = ServiceOpt[];

export type {
  Info,
  InfoOpt,
  Menu,
  MenuOption,
  ServiceOpt,
  Services
};
