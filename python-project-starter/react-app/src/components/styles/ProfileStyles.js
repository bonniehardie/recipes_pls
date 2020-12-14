
import { makeStyles } from '@material-ui/core/styles';

const ProfileStyles = makeStyles((theme) => ({
    card_box: {
        margin: 5
    },
    container: {
        overflow: 'scroll',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '800px',
        // backgroundColor: 'red'
        // display: 'relative'
    },
    // profile_container: {
    //     display: 'relative'
    // },
    recipe_container: {
        // backgroundColor: 'yellow',

        // display: 'absolute',
        // top: '800px',
        // padding: 10

    },
    scroll: {
        display: 'flex',
        justifyContent: 'center',
        // overflow: 'scroll',

    }
}));

export default ProfileStyles;
