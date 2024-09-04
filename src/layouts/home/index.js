import { Outlet, useLocation } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import Header from "./HeaderLink"; // Import useTheme hook to access theme
import Main from "./main";
import BottomLink from "./BottomLink";
import { useResponsive } from "../../hooks/use-responsive";

const HomeLayout = () => {
    const theme = useTheme(); // Accessing the theme
    const location = useLocation(); // Get the current URL path
    const isTablet = useResponsive('between', 'sm', 'md');
    const isMobile = useResponsive('down', 'sm');
    
    // Check if the current URL path includes "message"
    const shouldHideBottomLink = location.pathname.includes("message");
    
    return (
        <Box
            sx={{
                flexGrow: 1,
                overflow: "auto",
                minHeight: "100vh",
                bgcolor: theme.palette.common.default,
                color: theme.palette.text.info, 
                padding:0,
                margin:0
            }}
        >
            <Main>
                <Outlet />
            </Main>
            {((isTablet || isMobile) && !shouldHideBottomLink) && <BottomLink />}
        </Box>
    );
};

export default HomeLayout;
