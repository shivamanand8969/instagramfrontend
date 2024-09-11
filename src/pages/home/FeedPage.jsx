import React, { useState } from 'react';
import { Avatar, Box, Typography, IconButton, InputBase, Dialog, DialogContent, DialogTitle, Button, useMediaQuery } from '@mui/material';
import { FavoriteBorder, ChatBubbleOutline, BookmarkBorder, Close } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const FeedPage = ({ img, profileImage, username, caption, likes, comments }) => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePostComment = () => {
    // Add logic to post the comment
    setComment('');
  };

  return (
    <>
      <Box sx={{ border: '1px solid #e0e0e0', marginInline: 'auto', borderRadius: 2, mb: 4, p: 2, maxWidth: 600, maxHeight: '100%' }}>
        {/* First Line: User Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Avatar src={profileImage || 'https://via.placeholder.com/150'} alt={username} />
          <Typography sx={{ ml: 2, fontWeight: 500 }}>{username}</Typography>
          <Typography sx={{ ml: 'auto', color: 'gray' }}>2h ago</Typography>
        </Box>

        {/* Second Line: Post Image */}
        <Box sx={{ width: '100%', maxHeight: { xs: 400, sm: 400, md: 500 }, mb: 1, overflow: 'hidden', borderRadius: 2 }}>
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
          <Typography sx={{ width: '100%', mt: 1, ml: 2 }}>
            {likes?.length > 0 ? `${likes.length} likes` : "0 likes"}
          </Typography>
        </Box>

        {/* Fourth Line: Post Description */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2">
            <strong>{username}</strong> {caption}
          </Typography>
        </Box>

        {/* Fifth Line: Comments */}
        <Box sx={{ mb: 2 }}>
          {comments.slice(0, 2).map((comment, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                color: 'gray',
                overflow: 'hidden',
                fontSize: isMobile ? '12px' : '14px',
              }}
            >
              <strong>{comment.author.username}</strong> {comment.text}
            </Typography>
          ))}
          <Typography
            variant="body2"
            sx={{ color: 'gray', cursor: 'pointer', mt: 1, fontSize: isMobile ? '12px' : '14px' }}
            onClick={handleOpen}
          >
            View more comments
          </Typography>
        </Box>

        {/* Sixth Line: Add Comment */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <InputBase
            value={comment}
            onChange={handleCommentChange}
            placeholder="Add a comment..."
            fullWidth
            sx={{
              borderBottom: '1px solid #e0e0e0',
              pb: 1,
              fontSize: '14px',
              mr: 1,
            }}
          />
          {comment.trim() && (
            <Button
              variant="contained"
              color="primary"
              onClick={handlePostComment}
            >
              Post
            </Button>
          )}
        </Box>
      </Box>

      {/* Popup Dialog for More Comments */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={isMobile}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            height: isMobile ? '90vh' : 'auto',
          },
        }}
      >
        <DialogTitle>
          Comments
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <Close />
            </IconButton>
          )}
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <Box sx={{ flexGrow: 1 }}>
            {comments.map((comment, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar src={comment.author.profilePicture} alt={comment.author.username} />
                <Typography sx={{ ml: 2, fontWeight: 500, fontSize: isMobile ? '12px' : '14px' }}>
                  <strong>{comment.author.username}</strong> {comment.text}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Input box at the bottom */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <InputBase
              value={comment}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              fullWidth
              sx={{
                borderBottom: '1px solid #e0e0e0',
                pb: 1,
                fontSize: '14px',
                mr: 1,
              }}
            />
            {comment.trim() && (
              <Button
                variant="contained"
                color="primary"
                onClick={handlePostComment}
              >
                Post
              </Button>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FeedPage;
