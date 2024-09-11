import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import { Edit, Settings, Info, Lock, Help, Notifications } from '@mui/icons-material'; 
import { Link } from 'react-router-dom'; 

const EditNavLinks = () => {
  return (
    <div style={{
      height: '100vh',
      width: '100%',
      backgroundColor: '#fff',
      padding: '16px',
      overflowY: 'auto', // Enable vertical scrolling
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)', // Optional: adds a shadow to the sidebar
      borderRight:'1px solid #f0f0f0'
    }}>
      {/* Heading */}
      <Typography 
        variant="h5" 
        component="div" 
        style={{ 
          marginTop: '30px', 
          fontWeight: 600, 
          color: '#333',
        }}
      >
        Edit Options
      </Typography>

      <List sx={{
        marginTop:'10px'
      }}>
        {/* List Item for Profile Edit */}
        <ListItem 
          button 
          component={Link} 
          to="/edit/profile"
          style={{
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '8px',
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          <ListItemIcon><Edit /></ListItemIcon>
          <ListItemText primary="Edit Profile" />
        </ListItem>
        <Divider />

        {/* List Item for Settings */}
        <ListItem 
          button 
          component={Link} 
          to="/edit/settings"
          style={{
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '8px',
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          <ListItemIcon><Settings /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <Divider />

        {/* List Item for Info */}
        <ListItem 
          button 
          component={Link} 
          to="/edit/info"
          style={{
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '8px',
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          <ListItemIcon><Info /></ListItemIcon>
          <ListItemText primary="Info" />
        </ListItem>
        <Divider />

        {/* Additional Links */}
        {/* List Item for Security */}
        <ListItem 
          button 
          component={Link} 
          to="/edit/security"
          style={{
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '8px',
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          <ListItemIcon><Lock /></ListItemIcon>
          <ListItemText primary="Security" />
        </ListItem>
        <Divider />

        {/* List Item for Help */}
        <ListItem 
          button 
          component={Link} 
          to="/edit/help"
          style={{
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '8px',
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          <ListItemIcon><Help /></ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
        <Divider />

        {/* List Item for Notifications */}
        <ListItem 
          button 
          component={Link} 
          to="/edit/notifications"
          style={{
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '8px',
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          <ListItemIcon><Notifications /></ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
      </List>
    </div>
  );
};

export default EditNavLinks;