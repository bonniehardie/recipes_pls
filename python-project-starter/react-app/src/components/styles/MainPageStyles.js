import { makeStyles } from '@material-ui/core/styles'

const MainPageStyles = makeStyles(theme => ({
  mainpageContainer: {
    display: 'flex',
    width: '100vw',
    boxSizing: 'borderBox',
    overflow: 'scroll'
  },
  main: {
    flexGrow: 1,
        overflow: 'scroll'

    // border: '1px solid black',
  },
  noteviewcontainer: {
    display: 'flex',
  }
}));

export default MainPageStyles;
