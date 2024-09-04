import { Box, Card, CardMedia, Grid } from '@mui/material';
import React from 'react';
import { useResponsive } from '../../hooks/use-responsive';
import UserList from '../../components/UserList';
import SearchBox from '../../components/search/Searchbox';

const Search = () => {
    const isTabletOrLarger = useResponsive('between', 'md', 'lg');
    const isDesktopOrLarger = useResponsive('up', 'lg');
    
    const isLapOrTab = isTabletOrLarger || isDesktopOrLarger;
    
    const imageData = [
        'https://my.alfred.edu/zoom/_images/foster-lake.jpg',
        'https://my.alfred.edu/zoom/_images/foster-lake.jpg',
        'https://deep-image.ai/blog/content/images/size/w1600/2022/08/magic-g1db898374_1920.jpg',
        'https://deep-image.ai/blog/content/images/size/w1600/2022/08/magic-g1db898374_1920.jpg',
        'https://my.alfred.edu/zoom/_images/foster-lake.jpg',
        'https://my.alfred.edu/zoom/_images/foster-lake.jpg',
        'https://my.alfred.edu/zoom/_images/foster-lake.jpg',
    ];
    
    return (
        <Box sx={{ display: 'flex' }}>
            <Box
                sx={{
                    flex: "1 1 auto",
                    padding: 2,
                    height:'100vh',
                    overflowY:'scroll'
                }}
            >
                <SearchBox />
                <Box sx={{ padding: '12px' }}>
                    <Grid container spacing={2}>
                        {imageData.map((image, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Card sx={{ maxWidth: '100%' }}>
                                    <CardMedia
                                        component="img"
                                        height="300"  // Increased height
                                        image={image}
                                        alt={`Image ${index + 1}`}
                                        sx={{ objectFit: 'cover' }}  // Ensures images cover the area
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

            {
                isLapOrTab && (
                    <Box
                        sx={{
                            flex: "0 0 40%",
                            padding: 2,
                        }}
                    >
                        <UserList />
                    </Box>
                )
            }
        </Box>
    );
}

export default Search;
