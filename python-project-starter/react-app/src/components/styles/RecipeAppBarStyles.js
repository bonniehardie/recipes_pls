import { makeStyles } from '@material-ui/core/styles';


const RecipeAppBarStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: '#E8D7CF'
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#000300'
    },
    toolbar: {
        position: 'relative',
        top: 5,
        minHeight: 135,
        height: '200px',
        backgroundColor: '#E8D7CF',
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
export default RecipeAppBarStyles;
