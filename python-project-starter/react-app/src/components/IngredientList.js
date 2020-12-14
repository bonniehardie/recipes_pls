import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useSelector } from 'react-redux';
import RecipeContentStyles from './styles/RecipeContentStyles';



export default function IngredientList(props) {
    const recipeId = props.recipeId
    const classes = RecipeContentStyles();
    const recipe = useSelector(state => state.recipes[recipeId])
    const ingredients = useSelector(state => state.ingredients)

    return (
        <List className={classes.list}>
            { Object.keys(ingredients).length ? (recipe.ingredient_ids.map(id => {
                return (
                    <ListItem>
                        <FiberManualRecordIcon className={classes.bullet}/>
                        <Typography>
                            {`${ingredients[id].quantity} ${ingredients[id].unit} ${ingredients[id].name}` }
                        </Typography>
                    </ListItem>
            )})) : null }
        </List>
    );
}
