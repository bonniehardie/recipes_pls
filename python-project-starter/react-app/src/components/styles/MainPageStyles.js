import { makeStyles } from '@material-ui/core/styles'

const MainPageStyles = makeStyles(theme => ({
  mainpageContainer: {
    // backgroundColor: 'red',
    display: 'flex',
    width: '100vw',
    height: '100vh',
    boxSizing: 'borderBox',
    overflow: 'scroll',
    justifyContent: 'center'
  },
  main: {
    // flexGrow: 1,
    //     overflow: 'scroll'

    // border: '1px solid black',
  },

}));

export default MainPageStyles;
