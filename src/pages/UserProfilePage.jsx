import React, { useState } from 'react';
import { Avatar, Box, Typography, Button, Divider, Tabs, Tab, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Mock data for posts and reels
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
    <Box sx={{ maxWidth: 900, margin: '0 auto', padding: '40px 16px' }}>
      {/* User Info Section */}
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', mb: 5, alignItems: 'center' }}>
        {/* Left: User Image */}
        <Avatar
          src="https://via.placeholder.com/150"
          alt="User Name"
          sx={{ width: isMobile ? 120 : 180, height: isMobile ? 120 : 180, mr: isMobile ? 0 : 5 }}
        />

        {/* Right: User Details */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start', mt: isMobile ? 2 : 0 }}>
          {/* First Line: Username and Buttons */}
          <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', mb: isMobile ? 2 : 3, width: '100%' }}>
            <Typography sx={{ fontWeight: 600, fontSize: isMobile ? '22px' : '26px', mr: 2 }}>username</Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: isMobile ? 2 : 0 }}>
              <Button variant="contained" color="primary" sx={{ px: 5, fontWeight: 500 }}>Follow</Button>
              <Button variant="outlined" color="primary" sx={{ px: 5, fontWeight: 500 }}>Message</Button>
            </Box>
          </Box>

          {/* Profession and Caption */}
          <Box sx={{ textAlign: isMobile ? 'center' : 'left', mb: 2 }}>
            <Typography sx={{ mb: 1, fontWeight: 500, fontSize: isMobile ? '18px' : '20px' }}>Frontend Developer</Typography>
            <Typography variant="body2" sx={{ color: 'gray', fontSize: isMobile ? '14px' : '16px' }}>
              Passionate about building modern web applications and creating stunning user interfaces.
            </Typography>
          </Box>

          {/* Second Line: Post Count, Followers, Following */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', mt: 2 }}>
            <Typography sx={{ mr: 4 }}><strong>20</strong> posts</Typography>
            <Typography sx={{ mr: 4 }}><strong>300</strong> followers</Typography>
            <Typography><strong>180</strong> following</Typography>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ mb: 3 }} />

      {/* Tab Section */}
      <Box sx={{ width: '100%' }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Posts" />
          <Tab label="Reels" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box sx={{ mt: 3 }}>
        {tabValue === 0 && (
          <Grid container spacing={2}>
            {posts.map((post, index) => (
              <Grid item xs={4} key={index}>
                <img src={post} alt={`Post ${index}`} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
              </Grid>
            ))}
          </Grid>
        )}

        {tabValue === 1 && (
          <Grid container spacing={2}>
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
