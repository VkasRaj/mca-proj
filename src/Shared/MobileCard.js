import React from "react";
import { NavLink } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    card: {
        margin: "0 .8rem 1rem"
    },
    cardMedia: {
        height: "12rem",
        width: "100%"
    }
});

const MobileCard = ({
    classes,
    deviceName,
    chipset,
    cpu,
    internal,
    brand,
    _id
}) => {
    return (
        <NavLink to={{ pathname: "/specs", search: `?id=${_id}` }}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    title={deviceName}
                    image="https://images-na.ssl-images-amazon.com/images/I/71osq6wnwjL._SX569_.jpg"
                />
                <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                        {deviceName}
                    </Typography>
                    <Typography color="textSecondary">
                        Brand: {brand}
                    </Typography>
                    <Typography color="textSecondary">
                        Proccessor: {chipset || cpu}
                    </Typography>
                    <Typography color="textSecondary">
                        Internals: {internal}
                    </Typography>
                </CardContent>
            </Card>
        </NavLink>
    );
};

export default withStyles(styles)(MobileCard);
