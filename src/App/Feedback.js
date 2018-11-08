import React, { Component } from "react";

import Layout from "../Shared/Layout";
import FeedbackForm from "../Shared/FeedbackForm";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default class Feedback extends Component {
    onSearch = (values, actions) => {
        console.log(values);

        setTimeout(() => {
            actions.setSubmitting(false);
        }, 2000);
    };

    render() {
        return (
            <Layout>
                <Typography
                    align="center"
                    variant="h5"
                    color="textSecondary"
                    paragraph
                >
                    Feedback
                </Typography>
                <Grid container justify="center">
                    <Grid item xs={5}>
                        <FeedbackForm onSubmit={this.onSearch} />
                    </Grid>
                </Grid>
            </Layout>
        );
    }
}
