import React from 'react';
import { Box, Typography, Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/system';

const users = [
    { id: 1, name: 'Alice', avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Bob', avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Charlie', avatar: 'https://via.placeholder.com/50' },
    { id: 4, name: 'David', avatar: 'https://via.placeholder.com/50' },
    // Add more users as needed
    { id: 1, name: 'Alice', avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Bob', avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Charlie', avatar: 'https://via.placeholder.com/50' },
    { id: 4, name: 'David', avatar: 'https://via.placeholder.com/50' },
    // Add more users as needed
    { id: 1, name: 'Alice', avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Bob', avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Charlie', avatar: 'https://via.placeholder.com/50' },
    { id: 4, name: 'David', avatar: 'https://via.placeholder.com/50' },
    // Add more users as needed
    { id: 1, name: 'Alice', avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Bob', avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Charlie', avatar: 'https://via.placeholder.com/50' },
    { id: 4, name: 'David', avatar: 'https://via.placeholder.com/50' },
    // Add more users as needed
    { id: 1, name: 'Alice', avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Bob', avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Charlie', avatar: 'https://via.placeholder.com/50' },
    { id: 4, name: 'David', avatar: 'https://via.placeholder.com/50' },
    // Add more users as needed
    { id: 1, name: 'Alice', avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Bob', avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Charlie', avatar: 'https://via.placeholder.com/50' },
    { id: 4, name: 'David', avatar: 'https://via.placeholder.com/50' },
    // Add more users as needed
    { id: 1, name: 'Alice', avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Bob', avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Charlie', avatar: 'https://via.placeholder.com/50' },
    { id: 4, name: 'David', avatar: 'https://via.placeholder.com/50' },
    // Add more users as needed
    { id: 1, name: 'Alice', avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Bob', avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Charlie', avatar: 'https://via.placeholder.com/50' },
    { id: 4, name: 'David', avatar: 'https://via.placeholder.com/50' },
    // Add more users as needed
    { id: 1, name: 'Alice', avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Bob', avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Charlie', avatar: 'https://via.placeholder.com/50' },
    { id: 4, name: 'David', avatar: 'https://via.placeholder.com/50' },
    // Add more users as needed
];

const Container = styled(Box)({
    display: 'flex',
    width: '100%',
    height: '100vh',
    padding: '5px',
    backgroundColor: '#f5f5f5',
});

const Section = styled(Box)({
    flex: 1,
    margin: '0 10px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    overflowY: 'auto',
});

const UserList = ({  onFollow }) => {
    return (
        <Container>
            <Section>
                <Typography variant="h6" gutterBottom>
                    Suggested Users
                </Typography>
                <List>
                    {users.map((user) => (
                        <React.Fragment key={user.id}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar src={user.avatar} />
                                </ListItemAvatar>
                                <ListItemText primary={user.name} />
                                <Button variant="contained" size="small" color="primary" onClick={() => onFollow(user.id)}>
                                    Follow
                                </Button>
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            </Section>
        </Container>
    );
};

export default UserList;