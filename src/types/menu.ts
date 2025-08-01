export interface MenuItem {
  name: string;
  url: string;
  hasChildren: boolean;
  children: MenuItem[];
}

export interface MenuConfig {
  main: MenuItem[];
  footer: {
    name: string;
    menu: {
      name: string;
      url: string;
    }[];
  }[];
}
