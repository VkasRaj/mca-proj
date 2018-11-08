import React, { Fragment, PureComponent } from "react";
import { Formik, Field } from "formik";

import InputControl from "./InputControl";
import SelectControl from "./SelectControl";
import LoadingButton from "./LoadingButton";
import validate from "./validation";

class Signup extends PureComponent {
    render() {
        const { onSubmit } = this.props;
        return (
            <Formik
                onSubmit={onSubmit}
                validate={validate}
                validateOnBlur={false}
                validateOnChange={false}
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    model: "---",
                    feedback: ""
                }}
                render={({ handleSubmit, dirty, isSubmitting, ...props }) => {
                    return (
                        <Fragment>
                            <form onSubmit={handleSubmit} noValidate>
                                <Field
                                    name="name"
                                    label="Your Name"
                                    placeholder="John Doe"
                                    type="text"
                                    component={InputControl}
                                />
                                <Field
                                    name="model"
                                    label="Your Name"
                                    placeholder="John Doe"
                                    type="select"
                                    helperText="Please select your room"
                                    component={SelectControl}
                                />
                                <Field
                                    name="email"
                                    label="Your Email"
                                    placeholder="johndoe@email.com"
                                    type="email"
                                    component={InputControl}
                                />
                                <Field
                                    name="feedback"
                                    label="Your Feedback"
                                    placeholder="Your review are valuable to us"
                                    type="text"
                                    component={InputControl}
                                />
                                <LoadingButton
                                    loading={isSubmitting}
                                    disabled={!dirty || isSubmitting}
                                >
                                    Submit
                                </LoadingButton>
                            </form>
                        </Fragment>
                    );
                }}
            />
        );
    }
}

export default Signup;
