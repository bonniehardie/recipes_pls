import { makeStyles } from '@material-ui/core/styles'

const RecipeViewStyles = makeStyles(theme => ({
  app_bar: {
  },
  box: {
  },
  button: {
      // display: 'absolute',
      // top: 60,
      // left: 10,
      // margin: 10,
      
      backgroundColor: '#d1e9f1',
      height: '30px',
      fontSize: '12pt',
      color: 'grey',
      '&:hover': {
        backgroundColor: '#7DA8B2',
        color: 'white'
      },
      textTransform: 'none',
  },
  button_div: {
  },
  h1: {
    color: 'black',
    fontSize: '50px',
    backgroundColor: 'red'
  },
  picture: {
    backgroundColor: 'orange'

  },
  recipe_content: {

  }
}));

export default RecipeViewStyles;
