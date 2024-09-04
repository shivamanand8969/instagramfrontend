import React from 'react';
import { Box, Typography, Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Divider, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { useResponsive } from '../../hooks/use-responsive';
import UserList from '../../components/UserList';

const notifications = [
    { id: 1, text: 'liked your post.', user: 'John Doe', avatar: '/path/to/avatar1.jpg' },
    { id: 2, text: 'commented on your photo.', user: 'Jane Smith', avatar: '/path/to/avatar2.jpg' },
    { id: 3, text: 'started following you.', user: 'Michael Johnson', avatar: '/path/to/avatar3.jpg', isFollowRequest: true },
    // More notifications...
];

const suggestedFollowers = [
    { id: 1, name: 'John Doe', avatar: '/path/to/avatar1.jpg' },
    // More suggested followers...
];

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    height: '100vh',
    padding: theme.spacing(1),
    backgroundColor: '#f5f5f5',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
}));

const Section = styled(Box)(({ theme }) => ({
    flex: 1,
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor: 'white',
    borderRadius: theme.shape.borderRadius,
    overflowY: 'auto',
    [theme.breakpoints.down('sm')]: {
        margin: 0,
        padding: theme.spacing(1),
    },
}));

const Notification = () => {
    const isTabletOrLarger = useResponsive('between', 'md', 'lg');
    const isDesktopOrLarger = useResponsive('up', 'lg');
   const theme=useTheme();
    const isLapOrTab = isTabletOrLarger || isDesktopOrLarger;

    return (
        <Container>
            <Section>
                <Typography variant="h6" gutterBottom>
                    Notifications
                </Typography>
                <List>
                    {notifications.map((notification) => (
                        <React.Fragment key={notification.id}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar
                                        src={notification.avatar}
                                        sx={{ width: 40, height: 40, [theme.breakpoints.down('sm')]: { width: 30, height: 30 } }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Box display="flex" flexDirection="column">
                                            <Typography
                                                variant="body1"
                                                fontWeight="bold"
                                                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                                            >
                                                {notification.user}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                                            >
                                                {notification.text}
                                            </Typography>
                                        </Box>
                                    }
                                />
                                {notification.isFollowRequest && (
                                    <Box display="flex" gap="10px">
                                        <Button
                                            variant="contained"
                                            size="small"
                                            color="primary"
                                            sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                                        >
                                            Accept
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                                        >
                                            Delete
                                        </Button>
                                    </Box>
                                )}
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            </Section>
            {isLapOrTab && (
                <Box sx={{ width: '40%', [theme.breakpoints.down('sm')]: { width: '100%' } }}>
                    <UserList />
                </Box>
            )}
        </Container>
    );
};

export default Notification;
