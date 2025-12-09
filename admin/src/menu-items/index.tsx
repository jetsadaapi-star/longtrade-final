// project-imports
import longtrade from './longtrade';
import widget from './widget';

// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [longtrade, widget]
};

export default menuItems;
