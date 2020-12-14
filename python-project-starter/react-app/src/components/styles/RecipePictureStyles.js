import { makeStyles } from '@material-ui/core/styles';

const RecipePictureStyles = makeStyles((theme) => ({
    root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: 10,
                // width: theme.spacing(16),
                // height: theme.spacing(16),
                width: '300px',
                height: '300px'
            },
        },
        paper: {
            // backgroundImage: `url(https://savorandsavvy.com/wp-content/uploads/2019/07/Baked-Salmon-recipe-1.jpg)`,
        }
}));
export default RecipePictureStyles;
