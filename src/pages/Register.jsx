import * as Yup from 'yup';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { alpha, useTheme } from '@mui/material/styles';
import Swal from 'sweetalert2';
import {
  Box,
  Card,
  Stack,
  Button,
  TextField,
  Typography,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
} from '@mui/material';
import { clearError, userRegister } from '../store/authSlice';
import Logo from '../components/Logo';

export default function RegisterPage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, success } = useSelector(state => state.auth);
  const navigate=useNavigate();
  useEffect(() => {
    if (success) {
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'You have successfully registered!',
      });
      navigate('/login')
      dispatch(clearError());
    }
    if(error){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      });
      dispatch(clearError());
    }
  }, [success,error]);


  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },

  
    validationSchema: Yup.object({
      username: Yup.string().required('username is required'),
      email: Yup.string().email('Invalid email address'),
      password: Yup.string().required('Password is required')
    }),

    onSubmit: values => {
      dispatch(clearError());
      dispatch(userRegister(values))   
    },
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;

  return (
    <>
      <Helmet>
        <title> Register | Anand </title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
      
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ width: 1, height: 1 }}
        >
          <Card
            sx={{
              p: 4,
              width: 1,
              maxWidth: 1024,
            }}
          >
            <Box sx={{ textAlign: 'center', margin: 0, padding: 0 }}>
               <Logo/>
            </Box>

            <Typography
              variant="h4"
              textAlign={'center'}
              sx={{ color: theme => theme.palette.primary.main }}
            >
              Sign Up for Login
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                py: 1,
              }}
            >
              <Typography variant="body2" textAlign="center">
                Already have an Account?{' '}
              </Typography>
              <Link to="/login" variant="subtitle2" className="text-red-600">
                Login here.
              </Link>
            </Box>
            <Box component="form" sx={{ py: 2 }} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="medium"
                    InputLabelProps={{ shrink: true }}
                    name="username"
                    label="User Name"
                    autoComplete="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                  />
                </Grid>
      
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="medium"
                    InputLabelProps={{ shrink: true }}
                    name="email"
                    label={'Email'}
                    autoComplete="current-email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
              
          
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="medium"
                    InputLabelProps={{ shrink: true }}
                    name="password"
                    label={'Password'}
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    sx={{
                      input: { color: theme.palette.text.primary },
                      color: theme.palette.text.primary,
                    }}
                    onBlur={handleBlur}
                    autoComplete="current-password"
                    type={showPassword ? 'Text' : 'password'}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >

                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  marginTop:"10px",
                  color: theme.palette.common.white,
                  backgroundColor: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="inherit"
                disabled={loading}
              >
                {loading ? 'loading ...' : 'SignUp Now'}
              </Button>
            </Box>

            {error ? (
              <Typography
                variant="body1"
                color="error"
                sx={{ my: 2 }}
                textAlign="center"
              >
                Error : {error}
              </Typography>
            ) : success ? (
              <Typography
                variant="body1"
                color="primary"
                sx={{ my: 2 }}
                textAlign="center"
              >
                {success}.
              </Typography>
            ) : null}
          </Card>
        </Stack>
      </Box>
    </>
  );
}
