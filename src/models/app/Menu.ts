type MenuOption = {
  id: string;
  path?: string;
  icon?: string;
};

interface InfoOpt extends MenuOption { btn: MenuOption }

type Menu = MenuOption[];

type Info = InfoOpt[];

export type {
  Info,
  InfoOpt,
  Menu,
  MenuOption
};
