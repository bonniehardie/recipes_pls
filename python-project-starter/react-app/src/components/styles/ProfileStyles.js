import { makeStyles } from '@material-ui/core/styles';

const ProfileStyles = makeStyles((theme) => ({
    card_box: {
        margin: 5
    },
    container: {
        overflow: 'scroll',
        display: 'flex',
        justifyContent: 'center',
    },
    // profile_container: {
    //     display: 'relative'
    // },
    recipe_container: {
        padding: 10

    },
    scroll: {
        overflow: 'scroll'
    }
}));

export default ProfileStyles;
