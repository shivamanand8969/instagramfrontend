import React, { useState } from 'react';
import { Avatar, Box, Typography, Button, Divider, Tabs, Tab, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const posts = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150"
];
const reels = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150"
];

const UserProfilePage = () => {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width:{xs:'100vw',sm:'100vw',md:'70vw'}, maxWidth: '100%', margin: '0 auto', padding: isMobile ? '16px' : '24px' }}>
      {/* User Info Section */}
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', maxWidth:isMobile ? "100%" : "70%",marginInline:"auto", marginTop:isMobile ? "0" : "30px", mb: 2, alignItems: 'center', gap: 2 }}>
        {/* Left: User Image */}
        <Avatar
          src="https://via.placeholder.com/150"
          alt="User Name"
          sx={{ width: isMobile ? 80 : 120, height: isMobile ? 80 : 120, mr: isMobile ? 0 : 3 }}
        />

        {/* Right: User Details */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start' }}>
          {/* First Line: Username and Buttons */}
          <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', mb: 1, width: '100%' }}>
            <Typography sx={{ fontWeight: 600, fontSize: isMobile ? '20px' : '24px', mr: 2 }}>username</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" color="primary" sx={{ px: 3, fontWeight: 500, fontSize: isMobile ? '12px' : '14px' }}>Follow</Button>
              <Button variant="outlined" color="primary" sx={{ px: 3, fontWeight: 500, fontSize: isMobile ? '12px' : '14px' }}>Message</Button>
            </Box>
          </Box>

          {/* Profession and Caption */}
          <Box sx={{ textAlign: isMobile ? 'center' : 'left', mb: 1 }}>
            <Typography sx={{ mb: 1, fontWeight: 500, fontSize: isMobile ? '14px' : '16px' }}>Frontend Developer</Typography>
            <Typography variant="body2" sx={{ color: 'gray', fontSize: isMobile ? '12px' : '14px' }}>
              Passionate about building modern shivam an dweb applications and creating stunning user interfaces.
            </Typography>
          </Box>

          {/* Post Count, Followers, Following */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: 3 }}>
            <Typography sx={{ fontSize: isMobile ? '14px' : '16px' }}><strong>20</strong> posts</Typography>
            <Typography sx={{ fontSize: isMobile ? '14px' : '16px' }}><strong>300</strong> followers</Typography>
            <Typography sx={{ fontSize: isMobile ? '14px' : '16px' }}><strong>180</strong> following</Typography>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ mb: 2 }} />

      {/* Tab Section */}
      <Box sx={{ width: '100%' }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Posts" sx={{ fontSize: isMobile ? '12px' : '14px' }} />
          <Tab label="Reels" sx={{ fontSize: isMobile ? '12px' : '14px' }} />
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box sx={{ mt: 2 }}>
        {tabValue === 0 && (
          <Grid container spacing={1}>
            {posts.map((post, index) => (
              <Grid item xs={4} key={index}>
                <img src={post} alt={`Post ${index}`} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
              </Grid>
            ))}
          </Grid>
        )}

        {tabValue === 1 && (
          <Grid container spacing={1}>
            {reels.map((reel, index) => (
              <Grid item xs={4} key={index}>
                <img src={reel} alt={`Reel ${index}`} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default UserProfilePage;
