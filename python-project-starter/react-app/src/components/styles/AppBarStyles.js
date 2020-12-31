import { makeStyles } from '@material-ui/core/styles';


const AppBarStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: '#A1D8E5'
    },
    root: {
        flexGrow: 1,
    },
    home: {
        marginLeft: 10,
        backgroundColor: '#d1e9f1',
        height: '30px',
        fontSize: '12pt',
        color: 'grey',
        '&:hover': {
            backgroundColor: '#7DA8B2',
            color: 'white'
        },
        textTransform: 'none',
    },
    space: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        height: '100px',
        justifyContent: 'space-around'

    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#000300'
    },
    hello: {
        fontSize: '20px',
        paddingTop: 7,
        color: '#2e2e2e'
    },
    toolbar: {
        position: 'relative',
        top: 5,
        minHeight: 135,
        height: '200px',
        backgroundColor: '#A1D8E5',
        alignItems: 'flex-start',
        paddingTop: 5,
        paddingBottom: 15
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
        // fontFamily: 'arial',
        // fontWeight: 200,
        fontSize: 50,
        color: 'white'
    },
    icons: {
        color: 'white',
        '&:hover': {
            color: '#adaa97'
        }

    }
}));
export default AppBarStyles;
