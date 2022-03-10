
import { AppBar, Toolbar, CssBaseline, Typography, useTheme, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Drawercomponent from './Drawercomponent'
import logo from '../images/logo2.gif'
import '../css/styles.css'

const useStyles = makeStyles((theme) => ({
    navLink: {marginLeft: "5px", 
               display: "flex" },
    compLogo: {width: "230px",
               height: "40px", 
               marginTop: "10px"},
    logo: {flexGrow: 1, 
            cursor: "pointer"},
    link: {textDecoration: "none", 
            color: "#e63c3c", 
            fontSize: "16px", 
            marginLeft: "20px", 
            "&:hover": { 
              color: "#e63c3c", 
              borderBottom: "1px solid #e63c3c" },}
}));


const Navbar = () => {
const classes = useStyles();
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position='sticky' sx={{ backgroundColor: "white", boxShadow: "none"}}>
      <CssBaseline />
        <Toolbar>
          <Typography variant='h4' className={classes.logo}>
            <img className={classes.compLogo} src={logo} alt="" />
          </Typography>
          { (isMobile) ? (<Drawercomponent />) : 
            <div>
                <Link to= "/" className="links">HOME</Link>
                <Link to= "/Services" className="links">SERVICES</Link>
                <Link to= "/TheDeveloper" className="links">MEET THE TEAM</Link>
                <Link to= "/Connect" className="links">CONNECT</Link>
            </div>
          }
        </Toolbar>
    </AppBar>
  )
}

export default Navbar