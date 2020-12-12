import { makeStyles } from '@material-ui/core/styles';

const AuthStyles = makeStyles((theme) => ({
    paper: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatar: {
        // backgroundColor: theme.palette.secondary.main,
        width: '150px',
        height: 'auto'

    },
    brand: {
        padding: 10,
        fontSize: '40px',
    },
    button: {
        backgroundColor: '#A1D8E5',
        height: '50px',
        fontSize: '12pt',
        color: 'black',
        '&:hover': {
            backgroundColor: '#7DA8B2',
            color: 'white'
        },
        textTransform: 'none',
    },
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    dont: {
        fontSize: '14px',
    },
    form: {
        width: '90%',
    },
    grid_item: {
        padding: 15,
    },
    link: {
        paddingLeft: 10,
        fontSize: '14px',
        textDecoration: 'none',
        color: 'grey',
            '&:hover': {
                color: '#7DA8B2',
                fontWeight: 'bold',
                textDecoration: 'none'
            },
    },
    button_div: {
        paddingTop: 10,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    tagline: {
        // paddingRight: 10,
        color: 'grey',
        fontSize: '12pt',
        // alignSelf: 'flex-end'
    },

    whisk: {
        width: '150px',
        height: 'auto'
    }


}));

export default AuthStyles;
