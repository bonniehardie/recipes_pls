import { makeStyles } from '@material-ui/core/styles'

const RecipeViewStyles = makeStyles(theme => ({
  app_bar: {
  },
  box: {
  },
  button: {
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
  picture: {
    backgroundColor: 'orange'

  },
  recipe_content: {

  }
}));

export default RecipeViewStyles;
