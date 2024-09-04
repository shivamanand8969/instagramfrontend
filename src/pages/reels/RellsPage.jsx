import React, { useState } from 'react';
import { IconButton, Avatar, Typography, Box, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { styled } from '@mui/system';

const reelsData = [
  {
    id: 1,
    user: {
      name: 'John Doe',
      avatar: '/path/to/avatar1.jpg',
    },
    video: '/path/to/reel1.mp4',
    song: 'Song Name 1',
    likes: 120,
    comments: 34,
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      avatar: '/path/to/avatar2.jpg',
    },
    video: '/path/to/reel2.mp4',
    song: 'Song Name 2',
    likes: 98,
    comments: 27,
  },
];

const ReelContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: '20px',
  borderRadius: '10px',
  overflow: 'hidden',
  width: '100%',
  height: '90vh', 

  [theme.breakpoints.up('sm')]: {
    width: '50%', 
    height: '90vh', 
  },

  [theme.breakpoints.up('lg')]: {
    width: '37%', 
    height: '97vh', 
  },
}));

const Video = styled('video')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const Overlay = styled(Box)({
  position: 'absolute',
  bottom: '20px',
  left: '10px',
  right: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white',
  padding: '10px',
  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)',
  borderRadius: '10px',
});

const UserInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '5px',
});

const Actions = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
});

const RellsPage = () => {
  const [reels, setReels] = useState(reelsData);
  const [muted, setMuted] = useState(false);

  const handleLike = (id) => {
    setReels((prevReels) =>
      prevReels.map((reel) =>
        reel.id === id ? { ...reel, likes: reel.likes + 1 } : reel
      )
    );
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  const handleVideoClick = (videoElement) => {
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  return (
    <Box className="flex flex-col items-center p-2 md:p-2 lg:p-4 bg-gray-100 min-h-screen">
      {reels.map((reel) => (
        <ReelContainer key={reel.id}>
          <Video
            src={reel.video}
            muted={muted}
            onDoubleClick={(e) => handleVideoClick(e.target)}
            playsInline
          />
          <IconButton
            sx={{ position: 'absolute', top: '10px', right: '10px', color: 'white' }}
            onClick={toggleMute}
          >
            {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
          <Overlay>
            <UserInfo>
              <Box display="flex" alignItems="center" gap="10px">
                <Avatar src={reel.user.avatar} />
                  <Typography variant="body1">{reel.user.name}</Typography>
                  <Button variant="outlined" size="small" color="primary">
                    Follow
                  </Button>
                <Box >
                </Box>
              </Box>
                  <Typography variant="body2" sx={{marginTop:'5px'}}>{reel.song}</Typography>
            </UserInfo>
            <Actions>
              <IconButton
                sx={{ color: 'white' }}
                onClick={() => handleLike(reel.id)}
              >
                <FavoriteIcon />
              </IconButton>
              <Typography variant="body2">{reel.likes}</Typography>
              <IconButton sx={{ color: 'white' }}>
                <CommentIcon />
              </IconButton>
              <Typography variant="body2">{reel.comments}</Typography>
            </Actions>
          </Overlay>
        </ReelContainer>
      ))}
    </Box>
  );
};

export default RellsPage;
