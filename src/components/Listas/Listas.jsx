import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import DeckIcon from "@material-ui/icons/Deck";
import { NavLink } from "react-router-dom";

const Listas = () => {
  return (
    <div>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CloudQueueIcon />
          </ListItemIcon>
          <NavLink to="/about/">
            <ListItemText primary="About" />
          </NavLink>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <DeckIcon />
          </ListItemIcon>
          <NavLink to="/contact/">
            <ListItemText primary="Contact" />
          </NavLink>
        </ListItem>

        <Divider />
      </List>
    </div>
  );
};

export default Listas;
