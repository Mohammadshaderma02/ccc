// assets
import { IconKey,IconHome } from '@tabler/icons-react';

// constant
const icons = {
  IconKey,
  IconHome
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const tabs = {
  id: 'tabs',
  title: 'Menu',
  caption: 'System Option',
  icon: icons.IconHome,
  type: 'group',
  children: [
    {
      id: 'Maincontrol',
      title: ' Main control',
      type: 'collapse',
      icon: icons.IconHome,
      children: [
        {
          id: 'ussdcommand',
          title: 'Ussd command',
          type: 'item',
          url: '/ussdcommand',
        }
      ]
    }
  ]
};

export default tabs;
