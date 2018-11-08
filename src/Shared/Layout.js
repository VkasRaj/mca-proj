import React from "react";
import Grid from "@material-ui/core/Grid";

import Header from "./Header";
import MyDrawer from "./Drawer";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <Grid container>
            <Grid item xs={2}>
                <MyDrawer />
            </Grid>
            <Grid item xs={10}>
                <Grid container>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                    <Grid item xs={12}>
                        {children}
                    </Grid>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Layout;
