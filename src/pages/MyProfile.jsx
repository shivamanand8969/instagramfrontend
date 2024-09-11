
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Typography, Button, Divider, Tabs, Tab, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProfile, myDetails, updateUserDetails } from '../store/authSlice';
import { PhotoCamera } from '@mui/icons-material';
import { Link } from 'react-router-dom';

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

const MyProfile = () => {
    const [tabValue, setTabValue] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const dispatch = useDispatch();
    const { myAllDetails, loading } = useSelector(state => state.auth);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [image, setImage] = useState(null);

    const handleProfileClick = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file)
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteProfilePicture = () => {
        setSelectedImage(null);
        dispatch(deleteProfile());
        dispatch(myDetails());
        handleCloseDialog();
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleUpdateProfile = () => {
        let formdata = new FormData();
        formdata.append("profilePicture", image)
        dispatch(updateUserDetails({ formdata }));
        dispatch(myDetails());
        handleCloseDialog();
    };

    useEffect(() => {
        dispatch(myDetails())
    }, [])

    if (loading) {
        return <div><h2>Loading....</h2></div>
    }
    return (
        <Box sx={{ width: { xs: '100vw', sm: '100vw', md: '70vw' }, maxWidth: '100%', margin: '0 auto', padding: isMobile ? '16px' : '24px' }}>
            {/* User Info Section */}
            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', maxWidth: isMobile ? "100%" : "70%", marginInline: "auto", marginTop: isMobile ? "0" : "30px", mb: 2, alignItems: 'center', gap: 2 }}>
                {/* Left: User Image */}

                <Tooltip title="Update Profile Picture">
                    <Avatar
                        src={selectedImage ? selectedImage : myAllDetails?.profilePicture || 'https://via.placeholder.com/150'}
                        alt="User Name"
                        sx={{
                            width: isMobile ? 80 : 120,
                            height: isMobile ? 80 : 120,
                            mr: isMobile ? 0 : 3,
                            cursor: 'pointer',
                            '&:hover': {
                                opacity: 0.8,
                            }
                        }}
                        onClick={handleProfileClick}
                    />
                </Tooltip>


                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start' }}>

                    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', mb: 1, width: '100%' }}>
                        <Typography sx={{ fontWeight: 600, fontSize: isMobile ? '20px' : '24px', mr: 2 }}>{myAllDetails?.username}</Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button component={Link} to='/account/edit' variant="contained" color="primary" sx={{ backgroundColor: 'gray', px: 3, fontWeight: 500, fontSize: isMobile ? '12px' : '14px' }}>Edit</Button>
                        </Box>
                    </Box>

                    {/* Profession and Caption */}
                    <Box sx={{ textAlign: isMobile ? 'center' : 'left', mb: 1 }}>
                        <Typography sx={{ mb: 1, fontWeight: 500, fontSize: isMobile ? '14px' : '16px' }}>{myAllDetails?.proffession}</Typography>
                        <Typography variant="body2" sx={{ color: 'gray', fontSize: isMobile ? '12px' : '14px' }}>
                            {myAllDetails?.bio}
                        </Typography>
                    </Box>

                    {/* Post Count, Followers, Following */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: 3 }}>
                        <Typography sx={{ fontSize: isMobile ? '14px' : '16px' }}><strong>{myAllDetails?.posts?.length > 0 ? myAllDetails.posts.length : "0"}</strong> posts</Typography>
                        <Typography sx={{ fontSize: isMobile ? '14px' : '16px' }}><strong>{myAllDetails?.follower?.length > 0 ? myAllDetails.follower.length : "0"}</strong> followers</Typography>
                        <Typography sx={{ fontSize: isMobile ? '14px' : '16px' }}><strong>{myAllDetails?.following?.length > 0 ? myAllDetails.following.length : "0"}</strong> following</Typography>
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
                    <Tab label="Saved" sx={{ fontSize: isMobile ? '12px' : '14px' }} />
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

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Profile Picture</DialogTitle>
                <DialogContent>
                    {/* Profile Image Preview */}
                    {selectedImage ? (
                        <Avatar
                            src={selectedImage}
                            alt="Selected Profile"
                            sx={{ width: 120, height: 120, margin: '0 auto', mb: 2, borderRadius: '50%' }}
                        />
                    ) : (
                        <Typography>No image selected</Typography>
                    )}
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'space-between', padding: '16px 24px' }}>
                    {/* Left: Upload Button */}
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
                        {
                            selectedImage ? (
                                <Typography variant="caption" sx={{ color: 'gray' }}>
                                    Preview will appear above
                                </Typography>
                            ) : null
                        }
                    </Box>

                    {/* Right: Update/Delete Buttons */}
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
    );
};

export default MyProfile;
