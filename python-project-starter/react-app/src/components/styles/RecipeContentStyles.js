import { makeStyles } from '@material-ui/core/styles';


const RecipeContentStyles = makeStyles((theme) => ({
    accordion: {
        backgroundColor: 'white',
        // backgroundColor: '#E8D7CF',
        // color: '#E8D7CF'
        // color: '#BAA6AC',
        color: '#2e2e2e',
        width: '100%',
    },
    bullet: {
        height: 10,
        color: '#BAA6AC'
    },
    container: {
        // overflow: 'scroll',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        padding: '15%'
    },

    details: {
        // display: 'relative',
        // overflow: 'scroll'
    },
    icon: {
        color: '#BAA6AC',
        '&:hover': {
            color: '#EDE8EA'
        },
        paddingRight: 4
    },
    list: {
        display: 'absolute',
        left: 30,
        width: '90%'
    },
    root: {
        width: '80%',
        // overflow: 'scroll'
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
