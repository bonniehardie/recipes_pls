import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useSelector } from 'react-redux';
import RecipeContentStyles from './styles/RecipeContentStyles';


export default function DirectionList() {
    const classes = RecipeContentStyles();
    const recipe = useSelector(state => state.recipes[1])
    const directions = useSelector(state => state.directions)

    return (
        <List className={classes.list}>
            { Object.keys(directions).length ? (recipe.direction_ids.map(id => {
                return (
                    <ListItem>
                        <Typography>
                            {`${directions[id].step_number}.) ${directions[id].name}` }
                        </Typography>
                    </ListItem>
            )})) : null }
        </List>
    );
}
