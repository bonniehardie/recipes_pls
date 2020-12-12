import { makeStyles } from '@material-ui/core/styles';


const RecipeContentStyles = makeStyles((theme) => ({
    accordion: {
        backgroundColor: 'white',
        // backgroundColor: '#E8D7CF',
        // color: '#E8D7CF'
        // color: '#BAA6AC',
        color: '#2e2e2e',
        width: '100%'

    },
    bullet: {
        height: 10,
        color: '#BAA6AC'
    },
    container: {
        backgroundColor: 'grey',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        padding: '20%'
    },

    details: {
        display: 'relative',
    },
    icon: {
        color: '#BAA6AC',
        '&:hover': {
            color: '#EDE8EA'
        },
    },
    list: {
        display: 'absolute',
        left: 50
    },
    root: {
        width: '80%',
    },
    heading: {
        paddingLeft: 10,
        color: '#2e2e2e',
        '&:hover': {
            color: '#BAA6AC'
        },
    },
}));

export default RecipeContentStyles;
