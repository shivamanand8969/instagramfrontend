import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import { appRoutes } from '../../routes/config';
import SettingsIcon from '@mui/icons-material/Settings';

const ResponsiveDrawer = (props) => {
  const { window } = props;
  const location = useLocation();
  const drawerWidth = location.pathname !== '/message' ? 240 : 100;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => setIsClosing(false);

  const drawerContent = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="w-full flex justify-center items-center">
        <Logo />
      </div>
      <Divider />
      <List sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', paddingBlock: '20px' }}>
        {appRoutes.map(({ title, path, icon }) => (
          <ListItem key={title}>
            <ListItemButton component={Link} to={path} sx={{ borderRadius: '5px' }}>
              <ListItemIcon>{icon}</ListItemIcon>
              {location.pathname !== '/message' && <ListItemText primary={title} sx={{ fontSize: '1.5rem' }} />}
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <ListItem>
          <ListItemButton component={Link} to="setting">
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            {location.pathname !== '/message' && <ListItemText primary="Setting" sx={{ fontSize: '1.5rem' }} />}
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerClose}
        onTransitionEnd={handleDrawerTransitionEnd}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default ResponsiveDrawer;
