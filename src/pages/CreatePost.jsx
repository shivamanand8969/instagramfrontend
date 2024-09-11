import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, Avatar } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { uploadPost } from '../store/authSlice';

const CreatePost = () => {
  const [open, setOpen] = useState(false); // Control dialog open/close
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [imageFile, setImageFile] = useState(null); // File to upload
  const dispatch = useDispatch();

  // Open the popup
  const handleOpen = () => {
    setOpen(true);
  };

  // Close the popup
  const handleClose = () => {
    setOpen(false);
  };

  // Handle image file selection and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result); // Preview image
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle post upload
  const handleUpload = () => {
    if (!imageFile || !caption) {
      alert("Please select an image and add a caption");
      return;
    }

    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('caption', caption);
    dispatch(uploadPost({formData})); 
    handleClose();
  };

  return (
    <div>
      {/* Button to open the dialog */}
     <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
     <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{
          marginTop: '20px',
        }}
      >
        Create New Post
      </Button>
     </Box>

      {/* Popup Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            padding: 2,
            borderRadius: '16px', // Smooth rounded corners
          },
        }}
      >
        <DialogTitle>Create a Post</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              width: '100%',
            }}
          >
            {/* Image Preview */}
            {selectedImage ? (
              <Avatar
                src={selectedImage}
                alt="Selected"
                sx={{ width: 200, height: 200, mb: 2, borderRadius: '10px' }}
              />
            ) : (
              <Button
                variant="contained"
                component="label"
                startIcon={<PhotoCamera />}
                sx={{ width: 'fit-content' }}
              >
                Select Post
                <input type="file" hidden onChange={handleImageChange} />
              </Button>
            )}

            {/* Caption Input */}
            <TextField
              label="Add a caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              multiline
              rows={2}
              fullWidth
              variant="outlined"
              sx={{
                backgroundColor: '#f0f0f0',
                borderRadius: '8px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  padding: '12px',
                },
              }}
            />
          </Box>
        </DialogContent>

        {/* Dialog Actions */}
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="contained" color="primary">
            Upload Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreatePost;
