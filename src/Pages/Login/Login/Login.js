import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink , useLocation,useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {user, loginUser, isLoading, authError} = useAuth();


  const location = useLocation();
  const history = useHistory();


  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 10 }} item xs={12} md={12}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "50%", m: 1 }}
              id="standard-basic"
              name="email"
              onBlur={handleOnChange}
              label="Your E-mail"
              variant="standard"
            />
            <TextField
              sx={{ width: "50%", m: 1 }}
              id="standard-basic"
              label="Your password"
              name="password"
              onBlur={handleOnChange}
              type="password"
              variant="standard"
            />

            <Button
              sx={{ width: "50%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration:"none" }} to="/register">
              <Button sx={{ width: "50%", m: 1 }} variant="text">New User ? Please Register</Button>
            </NavLink>
            {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">
  <AlertTitle>User</AlertTitle>
  Logged in successfully <strong>check it out!</strong>
</Alert>}
{authError && <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  {authError} <strong>check it out!</strong>
</Alert>}
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
