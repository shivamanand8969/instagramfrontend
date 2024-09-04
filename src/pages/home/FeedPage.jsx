import React, { useState } from 'react';
import { Avatar, Box, Typography, IconButton, InputBase, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { FavoriteBorder, ChatBubbleOutline, BookmarkBorder } from '@mui/icons-material';

const FeedPage = ({ img }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ border: '1px solid #e0e0e0', marginInline: 'auto', borderRadius: 2, mb: 4, p: 2, maxWidth: 600, maxHeight: '100%' }}>
        {/* First Line: User Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Avatar src="https://th.bing.com/th/id/OIP.5plgKQYocXW2mrMFK9pvKgHaNK?rs=1&pid=ImgDetMain" alt="User Name" />
          <Typography sx={{ ml: 2, fontWeight: 500 }}>username</Typography>
          <Typography sx={{ ml: 'auto', color: 'gray' }}>2h ago</Typography>
        </Box>

        {/* Second Line: Post Image */}
        <Box sx={{ width: '100%', maxHeight: {xs:400, sm:400, md:500}, mb: 1, overflow: 'hidden', borderRadius: 2 }}>
          <img
            src={img}
            alt="Post"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Box>

        {/* Third Line: Like, Comment, Save */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <IconButton>
              <FavoriteBorder />
            </IconButton>
            <IconButton>
              <ChatBubbleOutline />
            </IconButton>
            <IconButton sx={{ ml: 'auto' }}>
              <BookmarkBorder />
            </IconButton>
          </Box>
          <Typography sx={{ width: '100%', mt: 1, ml: 2 }}>123 likes</Typography>
        </Box>

        {/* Fourth Line: Post Description */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2">
            <strong>username</strong> This is the description of the post...
          </Typography>
        </Box>

        {/* Fifth Line: Comments */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2">
            <strong>commenter1</strong> This is a comment...
          </Typography>
          <Typography variant="body2">
            <strong>commenter2</strong> Another comment...
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'gray', cursor: 'pointer', mt: 1 }}
            onClick={handleOpen}
          >
            View more comments
          </Typography>
        </Box>

        {/* Sixth Line: Add Comment */}
        <InputBase
          placeholder="Add a comment..."
          fullWidth
          sx={{
            borderBottom: '1px solid #e0e0e0',
            pb: 1,
            fontSize: '14px',
          }}
        />
      </Box>

      {/* Popup Dialog for More Comments */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Comments</DialogTitle>
        <DialogContent>
          <Typography variant="body2"><strong>commenter1</strong> This is a comment...</Typography>
          <Typography variant="body2"><strong>commenter2</strong> Another comment...</Typography>
          <Typography variant="body2"><strong>commenter3</strong> Yet another comment...</Typography>
          <Typography variant="body2"><strong>commenter4</strong> And another comment...</Typography>
          {/* Add more comments as needed */}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FeedPage;
