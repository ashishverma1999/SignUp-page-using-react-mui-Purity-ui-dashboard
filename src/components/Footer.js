import React from "react";
import { Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <Container sx={{ textAlign: "center",marginTop:'160px' }}>
      <Typography
        sx={{
          fontFamily: "sans-serif",
          opacity: "0.7",
          textAlign: "center",
          paddingTop: "30px",
        }}
      >
        @ 2021, Made with ❤️ by{" "}
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "sans-serif",
            color: "#5CE1CA",
           
            cursor:'pointer'
            
          }}
        >
          Creative Tim
        </Link>
        &{" "}
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "sans-serif",
            color: "#5CE1CA",
            cursor:'pointer'
            
          }}
        >
          Simmmple{" "}
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "sans-serif",
            color: "#5CE1CA",
            margin:'20px',
            marginLeft:'40px',
            cursor:'pointer'
          }}
        >
          Creative Tim
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "sans-serif",
            color: "#5CE1CA",
            cursor:'pointer',
            margin:'20px'
          }}
        >
          Simmmple
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "sans-serif",
            color: "#5CE1CA",
            cursor:'pointer',
            margin:'20px'
          }}
        >
          Blog
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "sans-serif",
            color: "#5CE1CA",
            cursor:'pointer',
            margin:'20px'
          }}
        >
          License
        </Link>
      </Typography>
    </Container>
  );
};

export default Footer;
