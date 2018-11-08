import React, { Component } from "react";

import Layout from "../Shared/Layout";
import FeedbackForm from "../Shared/FeedbackForm";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default class Feedback extends Component {
    state = {
        submitted: false
    };

    onSearch = (values, actions) => {
        setTimeout(() => {
            this.setState({ submitted: true });

            actions.setSubmitting(false);
        }, 2000);
    };

    render() {
        const { submitted } = this.state;
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
                        {submitted ? (
                            <Typography align="center" variant="h5">
                                Thankyou for your Feedback{" "}
                                <span role="img" aria-label="emoji">
                                    😊
                                </span>
                            </Typography>
                        ) : (
                            <FeedbackForm onSubmit={this.onSearch} />
                        )}
                    </Grid>
                </Grid>
            </Layout>
        );
    }
}
