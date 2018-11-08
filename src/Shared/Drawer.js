import React from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Home from "@material-ui/icons/Home";
import ListAltTwoTone from "@material-ui/icons/ListAltTwoTone";
import FeedbackTwoTone from "@material-ui/icons/FeedbackTwoTone";

const MyDrawer = props => {
    const links = [
        {
            name: "Home",
            to: "/",
            icon: <Home />
        },
        {
            name: "List",
            to: "/list",
            icon: <ListAltTwoTone />
        },
        {
            name: "Feedback",
            to: "/feedback",
            icon: <FeedbackTwoTone />
        }
    ];

    const linkItems = links.map((link, $i) => (
        <ListItem button key={$i} component={NavLink} to={link.to}>
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.name} />
        </ListItem>
    ));

    return (
        <Drawer
            {...props}
            PaperProps={{
                style: {
                    border: "none"
                }
            }}
            variant="permanent"
            anchor="left"
        >
            <List>{linkItems}</List>
        </Drawer>
    );
};

export default MyDrawer;
