import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = props => {
    return (
        <AppBar {...props} elevation={0} color="inherit" position="relative">
            <Toolbar>
                <Typography variant="h6">Mobile World</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
