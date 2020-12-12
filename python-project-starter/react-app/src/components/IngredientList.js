import React, {useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useSelector } from 'react-redux';
import RecipeContentStyles from './styles/RecipeContentStyles';



export default function IngredientList() {
    const classes = RecipeContentStyles();
    const recipe = useSelector(state => state.recipes[1])
    const ingredients = useSelector(state => state.ingredients)
    // if (recipe.ingredient_ids === undefined || ingredients === undefined ) return null;
    console.log('here we are!')
    // console.log(ingredients[1])

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
