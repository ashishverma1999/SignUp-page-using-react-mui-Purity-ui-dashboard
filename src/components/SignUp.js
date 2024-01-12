import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Container,
  Grid,
  FormControlLabel,
  FormGroup,
  Switch,
  Link,
} from "@mui/material";
import React from "react";
import img from "./images/Imagebg.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";

const SignUp = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        height: "60vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "80px",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ color: "white", marginTop: "12px" }}>
          Purity UI Dashboard
        </Typography>

        <Link
          sx={{
            color: "white",
            marginLeft: "50px",
            marginTop: "15px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <GridViewRoundedIcon sx={{ fontSize: "13px" }} />
          Dashboard
        </Link>
        <Link
          sx={{
            color: "white",
            marginTop: "15px",
            marginLeft: "15px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <PersonIcon sx={{ fontSize: "13px" }} />
          Profile
        </Link>
        <Link
          sx={{
            color: "white",
            marginTop: "15px",
            marginLeft: "15px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <VpnKeyIcon sx={{ fontSize: "13px" }} />
          SignIn
        </Link>
        <Link
          sx={{
            color: "white",
            marginTop: "15px",
            marginLeft: "15px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <SensorOccupiedIcon sx={{ fontSize: "13px" }} />
          SignUp
        </Link>
        <Button
          sx={{
            background: "#FFFFFF",
            marginLeft: "90px",
            marginTop: "10px",
            height: "30px",
            borderRadius: "50px",
            color: "black",
          }}
        >
          Free Download
        </Button>
      </Box>
      <Box
        sx={{
          boxSizing: "border-box",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          marginTop: "-2.5%",
        }}
      >
        <Typography sx={{ color: "white" }}>
          <h1>Welcome!</h1> Use these awesome forms to login or create new
          <br />
          account in your project for free
        </Typography>
      </Box>

      <Container component="main" maxWidth="xs" sx={{ paddingTop: "20px" }}>
        <Card
          sx={{
            borderRadius: "15px",
            height: "62vh",
            width: "22vw",
            marginLeft: "15%",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  marginTop: "-5%",
                }}
              >
                Register with
              </Typography>
              <Grid>
                <Button>
                  <FacebookOutlinedIcon sx={{color:'black'}} />
                </Button>
                <Button>
                  <AppleIcon sx={{color:'black'}} />
                </Button>
                <Button>
                  <GoogleIcon sx={{color:'black'}}/>
                </Button>
              </Grid>
              <Typography sx={{ opacity: "0.7" }}>or</Typography>
              <Box component="form">
                <Typography sx={{ fontFamily: "sans-serif", marginTop: "-5%" }}>
                  Name
                </Typography>
                <TextField
                  required
                  fullWidth
                  placeholder="Name"
                  InputProps={{
                    style: {
                      color: "",
                      borderRadius: "10px",
                      height: "30px",
                    },
                  }}
                />
                <Typography sx={{ fontFamily: "sans-serif" }}>Email</Typography>
                <TextField
                  required
                  fullWidth
                  name="email"
                  placeholder="Email"
                  InputProps={{
                    style: {
                      color: "",
                      borderRadius: "10px",
                      height: "30px",
                    },
                  }}
                />
                <Typography sx={{ fontFamily: "sans-serif" }}>
                  Password
                </Typography>
                <TextField
                  required
                  fullWidth
                  name="password"
                  placeholder="password"
                  InputProps={{
                    style: {
                      color: "",
                      borderRadius: "10px",
                      height: "30px",
                    },
                  }}
                />
                <FormGroup>
                  <FormControlLabel control={<Switch />} label="Remember me" />
                </FormGroup>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#5CE1CA",
                    borderRadius: "10px",
                    height: "30px",
                  }}
                >
                  Sign Up
                </Button>
                <Typography sx={{ opacity: "0.7" }}>
                  Already have an account?
                  <Link
                    sx={{
                      textDecoration: "none",
                      fontFamily: "sans-serif",
                      color: "#5CE1CA",
                      cursor: "pointer",
                    }}
                  >
                    Sign
                  </Link>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default SignUp;
