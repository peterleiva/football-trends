import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleIcon from '@mui/icons-material/People';
import SportsSoccer from '@mui/icons-material/SportsSoccer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function DrawerButton({
  text,
  icon,
  onClick,
  selected,
  to = '',
}: {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  to?: string;
}) {
  const router = useRouter();
  return (
    <Link href={to}>
      <ListItemButton
        onClick={onClick}
        selected={
          to === '/'
            ? router.pathname === '/'
            : to && router.pathname.startsWith(to)
        }
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </Link>
  );
}

export const MainListItems = () => (
  <>
    <DrawerButton text="Dashboard" icon={<DashboardIcon />} to="/" />
    <DrawerButton text="Players" icon={<SportsSoccer />} to="/players" />
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
