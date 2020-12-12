import { makeStyles } from '@material-ui/core/styles';

const ProfileStyles = makeStyles((theme) => ({
    container: {
        overflow: 'scroll'
    },
    recipe_container: {
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'scroll'
    }
}));

export default ProfileStyles;
