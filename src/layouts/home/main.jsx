import Box from "@mui/material/Box";
import { HEADER } from "../layoutdetails/config-layout";
import Nav from "./Nav";
import { useResponsive } from "../../hooks/use-responsive";

export default function Main({ children }) {
  const isLaptop = useResponsive('between', 'md', 'lg');
  const isDesktop = useResponsive('up', 'lg');

  return (
    <Box
      component="main"
      display="flex"
      sx={{
        minHeight: "100vh",
      }}
    >
      {/* Sidebar Navigation */}
      {
        (isLaptop || isDesktop) && <Box
          sx={{
            // flex: "0 0 15%", // 15% width with no grow/shrink
            // maxWidth: "250px", // Maximum width of 250px
          }}
        >
          <Nav />
        </Box>
      }

      {/* Main Content */}
      <Box
        sx={{
          flex: "1 1 auto", // Take up remaining space
        }}
      >
        {children}
      </Box>

      {/* Following List Section */}
      
    </Box>
  );
}
