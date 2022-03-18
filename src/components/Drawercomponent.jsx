import { React, useState } from "react"
import { Divider, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { makeStyles, } from "@mui/styles";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const drawerStyles = makeStyles(() => ({
  link: { textDecoration: "none",
          color: "#e63c3c",
          fontSize: "16px",
          "&:hover": { 
            textTransform: "scale{1.1}",},
        },
  icon: { color: "#e63c3c"}
}));

const Drawercomponent = () => {
  const classes = drawerStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Drawer sx={{ background: "whiteSmoke" }} open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to = "/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to = "/Services" className={classes.link}>Services</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to = "/TheDeveloper" className={classes.link}>Meet the Team</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to = "/Connect" className={classes.link}>Connect</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
        <MenuIcon sx={{ color:"#e63c3c" }}/>
      </IconButton>
    </div>
  )
}

export default Drawercomponent