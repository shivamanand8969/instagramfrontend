
import { Home, Chat, People } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TheatersIcon from '@mui/icons-material/Theaters';
import HomeScreen from '../pages/home';
import SearchPage from '../pages/search';
import ChatPage from '../pages/chat/ChatPage';
import RellsPage from '../pages/reels/RellsPage';
import Notification from '../pages/notifications/Notification';
export const appRoutes = [
  {
    title: 'Home',
    path: '/',
    element: <HomeScreen />, 
    icon: <Home />,
  },
  {
    title: 'Search',
    path: 'search',
    element:< SearchPage />,
    icon: <SearchIcon/>,
  },
{
  title: 'Message',
    path: 'message',
      element: <ChatPage/>,
        icon: <MessageIcon />,
  },
{
  title: 'Reels',
    path: 'reels',
      element:<RellsPage/>,
        icon: <TheatersIcon />,
  },
{
  title: 'Notifications',
    path: 'notification',
      element: <Notification/>,
        icon: <CircleNotificationsIcon />,
  },
{
  title: 'Create',
    path: 'create',
      element: <div>this is plans</div>,
        icon: <AddCircleOutlineIcon />,
  },
{
  title: 'Profile',
    path: 'profile',

      element: <div>this is plans</div>,
        icon: <AccountCircleIcon />,
  }
];
