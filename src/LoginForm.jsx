import { observer } from "mobx-react";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import UserData from "./UserData";
function SignInSide() {
  // const nameRef = React.useRef();
  // const passwordRef = React.useRef();
  const [name, setName] = useState("admin");
  const [password, setPassword] = useState("123456");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nav = useNavigate();

  function changeToCastomer() {
    UserData.setAdmin(false);
    console.log(UserData.admin);
    window.location.href = "/customer";
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(password);
    let isLogged = await checkLogin({ name: name, password: password });
    setIsLoggedIn(isLogged);
    isLoggedIn && nav("/admin");
  };
  function checkLogin(isAdmin) {
    return new Promise((resolve) => {
      fetch("http://localhost:8787/login", {
        method: "POST",
        body: JSON.stringify({
          name: isAdmin.name,
          password: isAdmin.password,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.status === 200) {

            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch((error) => {
          console.log("error" + error);
          resolve(false);
        });
    });
  }

  return (
    <ThemeProvider theme={createTheme()}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://cdn.cashcow.co.il/images/06c3100a-26b5-4b48-83f5-13000a06146d.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "initial",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Email Address"
                name="name"
                autoComplete="email"
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                לכניסה כמנהל
              </Button>
              <Button
                onClick={changeToCastomer}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                לקביעת פגישה
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;
