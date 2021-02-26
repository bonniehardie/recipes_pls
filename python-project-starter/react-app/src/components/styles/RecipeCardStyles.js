import { makeStyles } from '@material-ui/core/styles';



const RecipeCardStyles = makeStyles({
    root: {
        // maxWidth: 300,
        height: 300,
        width: 300,
        position: 'relative',
        // backgroundColor: 'orange',
    },
    backstory: {
        maxHeight: 60,
        maxWidth: 275,
        overflow: 'hidden',
        // backgroundColor: 'pink'
        position: 'absolute',
        top: 180,
        fontSize: '10pt',
        color: 'mediumgrey'
    },
    title: {
        maxHeight: 25,
        overflow: 'hidden',
        position: 'absolute',
        top: 155

    },
    media: {
        height: 150,
    },
    button: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        backgroundColor: '#A1D8E5',
        // height: '10px',
        fontSize: '16px',
        color: 'black',
        '&:hover': {
            backgroundColor: '#7DA8B2',
            color: 'white'
        },
        textTransform: 'none',
    },
});

export default RecipeCardStyles;
