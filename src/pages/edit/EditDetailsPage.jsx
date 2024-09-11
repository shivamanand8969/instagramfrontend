import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Avatar,
  IconButton,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { PhotoCamera, ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProfile, myDetails, updateUserDetails } from '../../store/authSlice';

const EditDetailsPage = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [image, setImage] = useState(null);
  const [update, setUpdate] = useState(false);

  const { myAllDetails } = useSelector(state => state.auth);

  const [userData, setUserData] = useState({
    proffession: '',
    bio: '',
    gender: '',
  });

  useEffect(() => {
    dispatch(myDetails());
  }, [update]);

  useEffect(() => {
    setUserData({ bio: myAllDetails?.bio, proffession: myAllDetails?.proffession, gender: myAllDetails?.gender })
  }, [myAllDetails])

  const handleProfileClick = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  console.log("myAllDetails", myAllDetails);

  const handleUpdateProfile = () => {
    const formdata = new FormData();
    formdata.append('profilePicture', image);
    dispatch(updateUserDetails({ formdata }));
    handleCloseDialog();
    setUpdate(!update);
  };

  const handleUpdateDetails = () => {
    console.log("bio", userData.bio, "gender", userData.gender, "profession", userData.proffession)
    const formdata = new FormData();
    formdata.append('bio', userData.bio);
    formdata.append('gender', userData.gender);
    formdata.append('proffession', userData.proffession);
    dispatch(updateUserDetails({ formdata }));
    handleCloseDialog();
    setUpdate(!update);
  };
  const handleDeleteProfilePicture = () => {
    setSelectedImage(null);
    dispatch(deleteProfile());
    handleCloseDialog();
    setUpdate(!update);
  };

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: isMobile ? '0' : '16px',
        backgroundColor: 'white',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: isMobile ? '100%' : '600px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: isMobile ? '12px' : '24px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Header Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isMobile && (
            <Box sx={{ padding: '8px' }}>
              <Link to="/myprofile">
                <IconButton>
                  <ArrowBack />
                </IconButton>
              </Link>
            </Box>
          )}
          <Typography
            variant="h5"
            sx={{
              marginBottom: isMobile ? '0' : '24px',
              fontWeight: 'bold',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            Edit Details
          </Typography>
        </Box>

        {/* Profile Section */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: isMobile ? 'column' : 'row',
            marginBottom: '24px',
            backgroundColor: '#f0f0f0',
            padding: '10px',
            borderRadius: '10px',
          }}
        >
          <Avatar
            alt="User Image"
            src={selectedImage ? selectedImage : myAllDetails?.profilePicture || 'https://via.placeholder.com/150'}
            sx={{
              width: 80,
              height: 80,
              marginBottom: isMobile ? '16px' : 0,
              marginRight: isMobile ? 0 : '16px',
            }}
          />
          <Typography variant="h6" sx={{ textAlign: isMobile ? 'center' : 'left' }}>
            {myAllDetails?.username}
          </Typography>
          <Button
            onClick={handleProfileClick}
            variant="contained"
            component="label"
            startIcon={<PhotoCamera />}
            sx={{ marginTop: isMobile ? '12px' : 0, marginLeft: 'auto' }}
          >
            Update Image
          </Button>
        </Box>

        {/* proffession Input */}
        <TextField
          label="proffession"
          name="proffession"
          value={userData.proffession}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
          sx={{
            marginBottom: '12px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              padding: '12px',
            },
          }}
        />

        {/* Bio Input */}
        <TextField
          label="Bio"
          name="bio"
          value={userData.bio}
          onChange={handleInputChange}
          multiline
          rows={isMobile ? 3 : 2}
          fullWidth
          variant="outlined"
          sx={{
            marginBottom: '16px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              padding: '12px',
            },
          }}
        />

        
        <FormControl fullWidth variant="outlined" sx={{ marginBottom: '16px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            label="Gender"
            name="gender"
            value={userData.gender}
            onChange={handleInputChange}
            sx={{
              borderRadius: '8px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                padding: '12px',
              },
            }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Email"
          name="email"
          value={myAllDetails?.email}
          disabled
          fullWidth
          variant="outlined"
          sx={{
            marginBottom: '12px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              padding: '8px',
            },
          }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleUpdateDetails}
          sx={{ padding: '12px', borderRadius: '8px', marginBottom: isMobile ? '70px' : '0' }}
        >
          Save Changes
        </Button>

        {/* Dialog for Profile Picture */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Profile Picture</DialogTitle>
          <DialogContent>
            {selectedImage ? (
              <Avatar
                src={selectedImage}
                alt="Selected Profile"
                sx={{
                  width: 120,
                  height: 120,
                  margin: '0 auto',
                  mb: 2,
                  borderRadius: '50%',
                }}
              />
            ) : (
              <Typography>No image selected</Typography>
            )}
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'space-between', padding: '16px 24px' }}>
            {/* Upload Button */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="contained"
                component="label"
                startIcon={<PhotoCamera />}
                sx={{ fontWeight: 500 }}
              >
                Upload New Picture
                <input type="file" hidden onChange={handleImageChange} />
              </Button>
              {selectedImage && (
                <Typography variant="caption" sx={{ color: 'gray' }}>
                  Preview will appear above
                </Typography>
              )}
            </Box>

            {/* Update/Delete Buttons */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              {selectedImage ? (
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleUpdateProfile}
                  sx={{ fontWeight: 500, backgroundColor: theme => theme.palette.success.main }}
                >
                  Update
                </Button>
              ) : (
                <Button
                  color="error"
                  variant="outlined"
                  onClick={handleDeleteProfilePicture}
                  sx={{ fontWeight: 500 }}
                >
                  Delete Picture
                </Button>
              )}
            </Box>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
};

export default EditDetailsPage;
