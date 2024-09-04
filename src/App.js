import logo from './logo.svg';
import './App.css';
import { useResponsive } from './hooks/use-responsive';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './layouts/home';
import ProtectedRoute from './routes/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import UnprotectedRoute from './routes/UnprotectedRoute';
import PageNotFound from './pages/PageNotFound';
import { appRoutes } from './routes/config';

function App() {
  const isMobile = useResponsive('down', 'sm');
  const isTablet = useResponsive('between', 'sm', 'md');
  const isLaptop = useResponsive('between', 'md', 'lg');
  const isDesktop = useResponsive('up', 'lg');
  console.log("isMobile", isMobile);
  console.log("isTablet", isTablet);
  console.log("IsLaptop", isLaptop);
  console.log("isDesktop", isDesktop);

  let authInfo = true;

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<UnprotectedRoute><Register /></UnprotectedRoute>} />
        <Route path='/' element={<ProtectedRoute><HomeLayout /></ProtectedRoute>}>
         {
          authInfo && appRoutes.map((value)=>(
            <Route path={value?.path} element={value?.element}/>
          ))
         }
         <Route path="setting" element={<div>Settings..</div>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>} />

      </Routes>
    </>
  );
}

export default App;
