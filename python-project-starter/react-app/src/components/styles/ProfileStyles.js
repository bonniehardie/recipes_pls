
import { makeStyles } from '@material-ui/core/styles';

const ProfileStyles = makeStyles((theme) => ({

    // profile_container: {
    //     display: 'flex',

    // }
    container: {
        overflow: 'scroll',
        display: 'flex',
        // backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',

    },
    card_box: {
        padding: 5
        // width: '800px',
        // height: '800px',
        // backgroundColor: 'tan',
        // display: 'flex',
        // flexWrap: 'wrap',
        // flexDirection: 'row',
        // overflow: 'scroll'
    },
    recipe_container: {
        // overflow: 'scroll',
        display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: '800px',
        // width: '1000px',
        // backgroundColor: 'red',
        width: '80vw',
        height: '70vh',
        paddingBottom: 0,
        paddingTop: 0,
        position: 'absolute',
        bottom: 0,
        left: '10vw'
    },

}));

export default ProfileStyles;
