import React from 'react'
import '../css/header.css'
import logo from "../images/logo2.gif"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
   <header>
       <AppBar>
       <Toolbar>
           <Typography>
                Header
           </Typography>
       </Toolbar>
       </AppBar>
   </header>
  )
}

export default Header