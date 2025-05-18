type Info = InfoOpt[];

interface InfoOpt extends MenuOption { btn: MenuOption }

type Menu = MenuOption[];

type MenuOption = {
  icon?: string
  id: string
  path?: string
};

interface ServiceOpt extends MenuOption { pic: string }

type Services = ServiceOpt[];

export type {
  Info,
  InfoOpt,
  Menu,
  MenuOption,
  ServiceOpt,
  Services
};
