import React from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    // fontFamily: 'Roboto Mono',
    typography: {
        fontFamily: 'Roboto Mono',
        fontColor: '#2e2e2e'
    },

    palette: {
        primary: {
            main: '#2e2e2e',
            contrastText: '#f8f8ff',
        },
        // secondary: {
        //     main: '#211522',
        //     // dark: will be calculated from palette.secondary.main,
        //     contrastText: '#D3B1C2',
        // },
        contrastThreshold: 3,
    },
});
const Theme = props => {
    return (
        <ThemeProvider theme={ theme }>
            { props.children }
        </ThemeProvider>
    );
};
export default Theme;
