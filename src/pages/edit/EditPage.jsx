import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import EditNavLinks from './EditLink';
import EditPageContent from './EditDetailsPage';
import { Outlet } from 'react-router-dom';

const EditPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // For mobile view

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full flex shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Left Side: Navigation Links */}
        <div className={`flex-col w-full md:w-1/4 ${isMobile ? 'hidden' : 'flex'}`}>
          <EditNavLinks />
        </div>

        {/* Right Side: Edit Page Content */}
        <div className={`w-full md:w-2/3`}>
          <Outlet/>
        </div>
      </div>
    </section>
  );
};

export default EditPage;
