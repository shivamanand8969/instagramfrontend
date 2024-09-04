import React from 'react';
import { Box, TextField, InputAdornment, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsPopover from '../common/NotificationPopover';

const Header = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent={'space-between'} padding={1} gap={'10px'}>
      <Box flex="1 1 20%">
        <Typography variant="h6" sx={{ fontStyle: 'italic', fontWeight: 'bold', color: 'primary.main' }}>
          MyLogo
        </Typography>
      </Box>
      {/* <Box flex="1 1 70%">
        <TextField
          id="filled-basic"
          placeholder="Search"
          variant="filled"
          size="small" 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              height: '40px',
              padding:'0',
              display:"flex",
              alignItems:'center'
            },
          }}
          sx={{
            width: '100%',
            '& .MuiFilledInput-root': {
              padding: '0px 0px', 
              height: '40px', 
              display: 'flex',
              alignItems: 'center',
              justifyContent:'center',
              paddingBottom:'5px' 
            },
            '& .MuiInputLabel-root': {
              display: 'none', 
            },
            '& .MuiInputBase-root': {
              padding: '0px', // Remove default padding
            },
          }}
        />
      </Box> */}
      <Box flex="1 1 10%" textAlign="right">
      <NotificationsPopover/>
      </Box>
    </Box>
  );
}

export default Header;
