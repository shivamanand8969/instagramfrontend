import { Box } from "@mui/material";
import { useResponsive } from "../../hooks/use-responsive";
import Header from "../../layouts/home/HeaderLink";
import FeedPage from "./FeedPage";
import UserList from "../../components/UserList";

export default function Home() {
    const isDesktop = useResponsive('up', 'lg');
    const isMobile = useResponsive('down', 'sm');
    const isTablet = useResponsive('between', 'sm', 'md');

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
                        <FeedPage img={"https://images4.alphacoders.com/115/thumb-1920-115716.jpg"}/>
                        <FeedPage img={"https://th.bing.com/th/id/OIP.Mggh2LiMwsRGTOruc9qsfwHaD4?rs=1&pid=ImgDetMain"}/>
                        <FeedPage img={"https://th.bing.com/th/id/OIP.UYagQDMo7CCbBLXOPB5etAHaHa?rs=1&pid=ImgDetMain"}/>
                        <FeedPage img={"https://cdn.wallpapersafari.com/53/68/XVAbeq.jpg"}/>
                        <FeedPage img={"https://deep-image.ai/blog/content/images/size/w1600/2022/08/magic-g1db898374_1920.jpg"}/>
                                            
                </Box>

                {
                    (isDesktop) &&
                    <Box
                        sx={{
                            flex: "0 0 30%",
                            bgcolor: "white",
                            height:'auto'
                        }}
                    >
                        <UserList/>
                    </Box>
                }
            </Box>
        </>

    )
}