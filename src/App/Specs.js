import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Layout from "../Shared/Layout";

import models from "../data/_models";

const feedback = ({ location }) => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    const found = models.find(model => model._id === id);

    return (
        <Layout>
            <Grid container>
                <Grid item xs={12}>
                    <Typography>
                        Device Name: {found.deviceName || "NA"}
                    </Typography>
                    <Typography>
                        Processor: {found.chipset || found.cpu || "NA"}
                    </Typography>
                    <Typography>GPU: {found.gpu || "NA"}</Typography>
                    <Typography>OS: {found.os || "NA"}</Typography>
                    <Typography>Sim: {found.sim || "NA"}</Typography>
                    <Typography>Weight: {found.weight || "NA"}</Typography>
                    <Typography>Battery: {found.battery_c || "NA"}</Typography>
                    <Typography>
                        Dimension: {found.dimensions || "NA"}
                    </Typography>
                    <Typography>Screen Type: {found.type || "NA"}</Typography>
                    <Typography>Screen Size: {found.size || "NA"}</Typography>
                    <Typography>
                        Screen Protection: {found.protection || "NA"}
                    </Typography>
                    <Typography>
                        Screen Resolution: {found.resolution || "NA"}
                    </Typography>
                    <Typography>
                        Camers: {found.single || found.camera_c || "NA"}
                    </Typography>
                    <Typography>Video: {found.video || "NA"}</Typography>
                    <Typography>Network: {found.technology || "NA"}</Typography>
                    <Typography>
                        Network Speed: {found.speed || "NA"}
                    </Typography>
                    <Typography>Sensors: {found.sensors || "NA"}</Typography>
                    <Typography>Build: {found.build || "NA"}</Typography>
                    <Typography>Price: {found.price || "NA"}</Typography>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default feedback;
