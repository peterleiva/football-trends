import { Box, Divider } from '@mui/material';
import { useToggle } from '../../hooks';
import { AppBar } from './AppBar';
import { Drawer } from './Drawer';
import { MainListItems, SecondaryListItems } from './DrawerNav';
import Main from './Main';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { open, toggle } = useToggle();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar open={open} toggle={toggle} title="Admin" />

      <Drawer
        open={open}
        toggle={toggle}
        renderNav={() => (
          <>
            <MainListItems />
            <Divider sx={{ my: 1 }} />
            <SecondaryListItems />
          </>
        )}
      ></Drawer>
      <Main>{children}</Main>
    </Box>
  );
}
