import { Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { bottomRoute } from '../../routes/config';

const BottomLink = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTop: '1px solid #ddd',
        padding: '10px 0',
        boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
        zIndex: 1000,
      }}
    >
      {
        bottomRoute.map((value) => (
          <>
            <Link to={value.path}>
              <IconButton color="primary">
                {value.icon}
              </IconButton>
            </Link>
            
          </>
        ))
      }
    </Box>
  );
};

export default BottomLink;
