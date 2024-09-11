import { Box } from "@mui/material";
import { useResponsive } from "../../hooks/use-responsive";
import Header from "../../layouts/home/HeaderLink";
import FeedPage from "./FeedPage";
import UserList from "../../components/UserList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "../../store/userSlice";

export default function Home() {
    const isDesktop = useResponsive('up', 'lg');
    const isMobile = useResponsive('down', 'sm');
    const isTablet = useResponsive('between', 'sm', 'md');
    const dispatch = useDispatch();
    const { userposts, loading } = useSelector(state => state.user);
    console.log("Userpost",userposts);
    
    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    return (
        <>
            {(isTablet || isMobile) && <Header />}
            <Box sx={{ display: 'flex' }}>
                <Box
                    sx={{
                        flex: "1 1 auto",
                        padding: "16px",
                    }}
                >
                    {loading ? (
                        <p>Loading posts...</p>
                    ) : (
                        userposts?.map((post) => (
                            <FeedPage
                                key={post?._id}
                                img={post?.image}
                                profileImage={post?.userId?.profilePicture}
                                username={post?.userId?.username}
                                caption={post?.caption}
                                likes={post?.likes}
                                comments={post?.comment}
                            />
                        ))
                    )}
                </Box>

                {isDesktop && (
                    <Box
                        sx={{
                            flex: "0 0 30%",
                            bgcolor: "white",
                            height: 'auto',
                        }}
                    >
                        <UserList />
                    </Box>
                )}
            </Box>
        </>
    );
}
