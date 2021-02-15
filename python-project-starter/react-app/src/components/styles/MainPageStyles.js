import { makeStyles } from '@material-ui/core/styles'

const MainPageStyles = makeStyles(theme => ({
  mainpageContainer: {

    display: 'flex',
    width: '100vw',
    height: '100vh',
    boxSizing: 'borderBox',
    // overflow: 'scroll',
    justifyContent: 'center',
  }

}));

export default MainPageStyles;
