import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useSelector } from 'react-redux';
import RecipeContentStyles from './styles/RecipeContentStyles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


export default function ToolList(props) {
    const recipeId = props.recipeId
    const classes = RecipeContentStyles();
    const recipe = useSelector(state => state.recipes[recipeId])
    const tools = useSelector(state => state.tools)

    return (
        <List className={classes.list}>
            { Object.keys(tools).length ? (recipe.tool_ids.map(id => {
                return (
                    <ListItem>
                        <FiberManualRecordIcon className={classes.bullet}/>
                        <Typography>
                            {`${tools[id].name}` }
                        </Typography>
                    </ListItem>
            )})) : null }
        </List>
    );
}
