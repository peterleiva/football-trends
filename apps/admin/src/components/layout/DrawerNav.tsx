import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';

export function DrawerButton({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <ListItemButton onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
}

export const MainListItems = () => (
  <>
    <DrawerButton text="Dashboard" icon={<DashboardIcon />} />
    <DrawerButton text="Orders" icon={<ShoppingCartIcon />} />
    <DrawerButton text="Customers" icon={<PeopleIcon />} />
    <DrawerButton text="Reports" icon={<BarChartIcon />} />
    <DrawerButton text="Integrations" icon={<LayersIcon />} />
  </>
);

export const SecondaryListItems = () => (
  <>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>

    <DrawerButton text="Current month" icon={<AssignmentIcon />} />
    <DrawerButton text="Last quarter" icon={<AssignmentIcon />} />
    <DrawerButton text="Year-end sale" icon={<AssignmentIcon />} />
  </>
);
