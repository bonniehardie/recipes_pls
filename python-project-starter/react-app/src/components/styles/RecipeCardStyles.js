import { makeStyles } from '@material-ui/core/styles';



const RecipeCardStyles = makeStyles({
    root: {
        // maxWidth: 300,
        height: 300,
        width: 300,
        position: 'relative'
    },
    backstory: {
        maxHeight: '60px',
        overflow: 'hidden'
    },
    media: {
        height: 100,
    },
    button: {
        position: 'absolute',
        bottom: 10,
        backgroundColor: '#A1D8E5',
        // height: '10px',
        fontSize: '12pt',
        color: 'black',
        '&:hover': {
            backgroundColor: '#7DA8B2',
            color: 'white'
        },
        textTransform: 'none',
    },
});

export default RecipeCardStyles;
