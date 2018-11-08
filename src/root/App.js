import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import Routes from "./Routes";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        background: {
            default: "#fff"
        }
    }
});

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes />
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
