import { makeStyles } from '@material-ui/core/styles';


const AppBarStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: '#A1D8E5'
    },
    space: {
        display: 'flex',
        width: '15vw',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        top: '2vh',
        right: '4vw'
    },
    space2: {
        display: 'flex',
        width: '14vw',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        top: '2vh',
        right: '4vw'
    },
    hello: {
        position: 'absolute',
        top: '2vh',
        left: '4vw',
        fontSize: 20,
        color: '#2e2e2e',
    },
    toolbar: {
        position: 'relative',
        top: 5,
        height: '25vh',
        backgroundColor: '#A1D8E5',
        // paddingTop: 5,
        paddingBottom: 15,
    },
    title: {
        fontSize: 50,
        position: 'absolute',
        left: '12vw',
        bottom: '2vh',
        color: 'white'
    },
    icons: {
        color: 'white',
        '&:hover': {
            color: '#adaa97'
        }

    },
    button: {
        backgroundColor: '#c6e7ef',
        '&:hover': {
            backgroundColor: '#7DA8B2',
            color: 'white'
        },
        textTransform: 'none',
    },
    button_div: {},
}));
export default AppBarStyles;
