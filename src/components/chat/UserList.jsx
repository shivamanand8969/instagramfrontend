import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { useResponsive } from '../../hooks/use-responsive';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const users = [
    { id: 1, name: 'John Doe', avatar: '/path/to/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', avatar: '/path/to/avatar2.jpg' },
    { id: 3, name: 'Michael Brown', avatar: '/path/to/avatar3.jpg' },
    { id: 1, name: 'John Doe', avatar: '/path/to/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', avatar: '/path/to/avatar2.jpg' },
    { id: 3, name: 'Michael Brown', avatar: '/path/to/avatar3.jpg' },
    { id: 1, name: 'John Doe', avatar: '/path/to/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', avatar: '/path/to/avatar2.jpg' },
    { id: 3, name: 'Michael Brown', avatar: '/path/to/avatar3.jpg' },
    { id: 1, name: 'John Doe', avatar: '/path/to/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', avatar: '/path/to/avatar2.jpg' },
    { id: 3, name: 'Michael Brown', avatar: '/path/to/avatar3.jpg' },
    { id: 1, name: 'John Doe', avatar: '/path/to/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', avatar: '/path/to/avatar2.jpg' },
    { id: 3, name: 'Michael Brown', avatar: '/path/to/avatar3.jpg' },
    { id: 1, name: 'John Doe', avatar: '/path/to/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', avatar: '/path/to/avatar2.jpg' },
    { id: 3, name: 'Michael Brown', avatar: '/path/to/avatar3.jpg' },
    { id: 1, name: 'John Doe', avatar: '/path/to/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', avatar: '/path/to/avatar2.jpg' },
    { id: 3, name: 'Michael Brown', avatar: '/path/to/avatar3.jpg' },
    { id: 1, name: 'John Doe', avatar: '/path/to/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', avatar: '/path/to/avatar2.jpg' },
    { id: 3, name: 'Michael Brown', avatar: '/path/to/avatar3.jpg' },
    { id: 1, name: 'John Doe', avatar: '/path/to/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', avatar: '/path/to/avatar2.jpg' },
    { id: 3, name: 'Michael Brown', avatar: '/path/to/avatar3.jpg' },
    { id: 1, name: 'John Doe', avatar: '/path/to/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', avatar: '/path/to/avatar2.jpg' },
    { id: 3, name: 'Michael Brown', avatar: '/path/to/avatar3.jpg' },
    { id: 1, name: 'John Doe', avatar: '/path/to/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', avatar: '/path/to/avatar2.jpg' },
    { id: 3, name: 'Michael Brown', avatar: '/path/to/avatar3.jpg' },
    { id: 1, name: 'John Doe', avatar: '/path/to/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', avatar: '/path/to/avatar2.jpg' },
    { id: 3, name: 'Michael Brown', avatar: '/path/to/avatar3.jpg' },
    // Add more users as needed
];

const UserList = ({ onUserClick }) => {
    const isMobile = useResponsive('down', 'sm');
    const isTablet = useResponsive('between', 'sm', 'md');

    return (
        <List className="w-full bg-white rounded-lg h-[100vh] overflow-y-scroll shadow-md">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {(isMobile || isTablet) && <Link to={'/'}><KeyboardBackspaceIcon/></Link>}
                <ListItem sx={{ fontSize: '30px', fontWeight: 'bold', padding: '15px' }}>
                    Shuivam anand
                </ListItem>
            </Box>
            <Divider sx={{ mt: '10px' }} />
            {users.map((user, index) => (
                <React.Fragment key={user.id}>
                    <ListItem
                        button
                        onClick={() => onUserClick(user.id)}
                        className="hover:bg-gray-100"
                    >
                        <ListItemAvatar>
                            <Avatar alt={user.name} src={user.avatar} />
                        </ListItemAvatar>
                        <ListItemText primary={user.name} />
                    </ListItem>
                    {index < users.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </List>
    );
};

export default UserList;
