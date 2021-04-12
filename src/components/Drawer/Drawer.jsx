import React from "react";
import { makeStyles, Drawer, Divider } from "@material-ui/core";
import Listas from '../Listas/Listas'
const drawerWidth = 240;
const styles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  toolbar: theme.mixins.toolbar,
  drawerPapper: {
    width: drawerWidth,
  },
}));

const DrawerComponent = (props) => {
  const classes = styles();
  return (
    <Drawer
      className={classes.drawer}     
      classes={{
        paper: classes.drawerPapper,
      }}
      anchor='left'
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
        <div className={classes.toolbar}></div>
        <Divider/>
        <Listas/>
    </Drawer>
  );
};

export default DrawerComponent;
