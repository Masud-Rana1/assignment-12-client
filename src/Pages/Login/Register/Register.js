import React, { useState } from "react";
import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import { NavLink,useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser, isLoading, authError} = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if(loginData.password !== loginData.password2){
        alert("password didn,t matched");
        return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
    return (
        <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 10 }} item xs={12} md={12}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "50%", m: 1 }}
              id="standard-basic"
              name="email"
              type="email"
              onBlur={handleOnBlur}
              label="Your E-mail"
              variant="standard"
            />
            <TextField
              sx={{ width: "50%", m: 1 }}
              id="standard-basic"
              label="Your password"
              name="password"
              onBlur={handleOnBlur}
              type="password"
              variant="standard"
            />
            <TextField
              sx={{ width: "50%", m: 1 }}
              id="standard-basic"
              label="Your name"
              name="name"
              onBlur={handleOnBlur}
              type="name"
              variant="standard"
            />



            <TextField
              sx={{ width: "50%", m: 1 }}
              id="standard-basic"
              label="Re-Enter Your password"
              name="password2"
              onBlur={handleOnBlur}
              type="password"
              variant="standard"
            />

            <Button
              sx={{ width: "50%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Register
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button sx={{ width: "50%", m: 1 }} variant="text">Already registered? Please Login</Button>
            </NavLink>
          </form>}
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">
  <AlertTitle>User</AlertTitle>
  Created successfully <strong>check it out!</strong>
</Alert>}
{authError && <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  {authError} <strong>check it out!</strong>
</Alert>}
        </Grid>
      </Grid>
    </Container>
    );
};

export default Register;