import React, { useState } from "react";
import { makeStyles, Hidden } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import Drawer from "../Drawer/Drawer";
import DrawerComponent from "../Drawer/Drawer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
const Container = () => {
  const classes = styles();
  const [abrir, setAbrir] = useState(false);
  const actionOpen = () => {
    setAbrir(!abrir);
  };
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <NavBar actionOpen={actionOpen} />
        {/* <Hidden xsDown>
          <DrawerComponent
            variant="permanent"
            open={true}
          />
      </Hidden>
      <Hidden smUp>
          <DrawerComponent
            variant="temporary"
            open={abrir}
            onClose={actionOpen}
          />
      </Hidden>        */}
        <DrawerComponent
          variant="temporary"
          open={abrir}
          onClose={actionOpen}
        />
       
        <div className={classes.content}>
          <div className={classes.toolbar}></div>
          <Switch>
          
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Container;
