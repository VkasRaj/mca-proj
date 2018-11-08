import React from "react";
import Typography from "@material-ui/core/Typography";

import Layout from "../Shared/Layout";
import MobileCard from "../Shared/MobileCard";
import models from "../data/_models";
import Grid from "@material-ui/core/Grid";

export default () => {
    const list = models.map((model, $i) => {
        if ($i > 2) {
            return false;
        }

        return (
            <Grid item xs={3} key={model._id}>
                <MobileCard {...model} />
            </Grid>
        );
    });

    return (
        <Layout>
            <Typography align="center" variant="h5" color="textPrimary">
                Welcome to Mobile World
            </Typography>
            <Typography align="center" color="textSecondary" paragraph>
                Est. 2018
            </Typography>

            <Typography
                variant="subtitle1"
                color="textSecondary"
                align="center"
                paragraph
            >
                Our Best Selling Mobiles
            </Typography>
            <Grid container justify="center">
                {list}
            </Grid>
        </Layout>
    );
};
