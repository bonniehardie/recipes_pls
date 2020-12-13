import { makeStyles } from '@material-ui/core/styles';

const RecipePictureStyles = makeStyles((theme) => ({
    root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(1),
                // width: theme.spacing(16),
                // height: theme.spacing(16),
                width: '500px',
                height: '500px'
            },
        },
        paper: {
            // backgroundImage: `url(https://savorandsavvy.com/wp-content/uploads/2019/07/Baked-Salmon-recipe-1.jpg)`,
            maxWidth: '100%'
        }
}));
export default RecipePictureStyles;
