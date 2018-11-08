import React from "react";

import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
    return (
        <Toolbar>
            <Grid container justify="space-between">
                <Grid item xs="auto">
                    <Typography>A Division of Hello Co.</Typography>
                </Grid>
                <Grid item xs="auto">
                    <Typography>All right reserved &copy; 2018-19</Typography>
                </Grid>
            </Grid>
        </Toolbar>
    );
};

export default Footer;
