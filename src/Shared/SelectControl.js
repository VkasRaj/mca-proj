import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import models from "../data/_models";

const selectField = ({ field, form: { touched, errors }, ...props }) => {
    const options = models.map(model => (
        <MenuItem key={model._id} value={model._id}>
            {model.deviceName}
        </MenuItem>
    ));

    return (
        <TextField select margin="normal" fullWidth {...field} {...props}>
            <MenuItem value="---" disabled>
                --- Select your model ---
            </MenuItem>
            {options}
        </TextField>
    );
};

export default selectField;
