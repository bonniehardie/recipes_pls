import { makeStyles } from '@material-ui/core/styles';


const RecipeContentStyles = makeStyles((theme) => ({
    accordion: {
        // backgroundColor: 'white',
        // backgroundColor: '#E8D7CF',
        // color: '#E8D7CF'
        color: '#BAA6AC',
        fontFamily: 'arial',

    },
    bullet: {
        height: 10
    },
    container: {
        // backgroundColor: '#E8D7CF',
        backgroundColor: 'white',
        
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
        width: '50%',
        // backgroundColor: '#E8D7CF',
        backgroundColor: 'white',
    },
    heading: {
        paddingLeft: 10,
        color: '#BAA6AC',
        '&:hover': {
            color: '#EDE8EA'
        },
    },
}));

export default RecipeContentStyles;
