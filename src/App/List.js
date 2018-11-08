import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Layout from "../Shared/Layout";
import MobileCard from "../Shared/MobileCard";
import models from "../data/_models";

const list = () => {
    const _list = models.map(model => (
        <Grid item xs={3} key={model._id}>
            <MobileCard {...model} />
        </Grid>
    ));
    return (
        <Layout>
            <Typography variant="h5" align="center" paragraph>
                List Page
            </Typography>
            <Grid container>{_list}</Grid>
        </Layout>
    );
};

export default list;
