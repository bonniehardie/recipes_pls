
import { makeStyles } from '@material-ui/core/styles';

const ProfileStyles = makeStyles((theme) => ({
    card_box: {
        margin: 5
    },
    container: {
        overflow: 'scroll',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '520px',
        // backgroundColor: 'red'
        // display: 'relative'
    },
    container2: {
        overflow: 'scroll',
        // display: 'relative',
        // top: '600px',
        // width: '1000px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '320px',
        // backgroundColor: 'red'
        // display: 'relative'
    },

    profile_container: {
        // display: 'relative'
        // display: 'flex',
        // justifyContent: 'center'

    },
    recipe_container: {
        maxWidth: '1245px',
        // maxHeight: '200px',
        // overflow: 'scroll'
        // display: 'absolute',

        // top: '800px',
        // padding: 10

    },
    scroll: {
        display: 'flex',
        width: '100%'
        // justifyContent: 'center',
        // overflow: 'scroll',

    },
    scroll2: {
        position: 'absolute',
        top: '510px',
        width: '100%',
        display: 'flex'
        // justifyContent: 'center',
        // overflow: 'scroll',

    }
}));

export default ProfileStyles;
