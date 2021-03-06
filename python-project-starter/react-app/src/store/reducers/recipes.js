import {
    SET_RECIPES,
    CREATE_RECIPE,
    EDIT_RECIPE,
    DELETE_RECIPE,
    // ADD_DIRECTION_TO_RECIPE,
    // DELETE_DIRECTION_FROM_RECIPE,
    // ADD_INGREDIENT_TO_RECIPE,
    // DELETE_INGREDIENT_FROM_RECIPE,
    // ADD_TOOL_TO_RECIPE,
    // DELETE_TOOL_FROM_RECIPE,
    // ADD_RATING_TO_RECIPE,
    // DELETE_RATING_FROM_RECIPE
} from '../actions/recipes';

const initialState = {

}

export default function reducer(state = initialState, action) {
    let newState = { ...state };

    switch (action.type) {
        case SET_RECIPES:
            return action.recipes;
        case EDIT_RECIPE:
            newState[action.recipe.id] = action.recipe;
            return newState;
        case CREATE_RECIPE:
            newState[action.recipe.id] = action.recipe;
            return newState;
        case DELETE_RECIPE:
            delete newState[action.recipeid];
            return newState;
        // case ADD_DIRECTION_TO_RECIPE:
        //     newState[action.recipeid].direction_ids.push(action.directionid);
        //     return newState;
        // case DELETE_DIRECTION_FROM_RECIPE:
        //     newState[action.recipeid].direction_ids = newState[action.recipeid].direction_ids.filter(id => id !== Number(action.directionid));
        //     return newState;
        // case ADD_INGREDIENT_TO_RECIPE:
        //     newState[action.recipeid].ingredient_ids.unshift(action.ingredientid);
        //     return newState;
        // case DELETE_INGREDIENT_FROM_RECIPE:
        //     newState[action.recipeid].ingredient_ids = newState[action.recipeid].ingredient_ids.filter(id => id !== Number(action.ingredientid));
        //     return newState;
        // case ADD_TOOL_TO_RECIPE:
        //     newState[action.recipeid].tool_ids.unshift(action.toolid);
        //     return newState;
        // case DELETE_TOOL_FROM_RECIPE:
        //     newState[action.recipeid].tool_ids = newState[action.recipeid].tool_ids.filter(id => id !== Number(action.toolid));
        //     return newState;
        // case ADD_RATING_TO_RECIPE:
        //     newState[action.recipeid].rating_ids.unshift(action.ratingid);
        //     return newState;
        // case DELETE_RATING_FROM_RECIPE:
        //     newState[action.recipeid].rating_ids = newState[action.recipeid].rating_ids.filter(id => id !== Number(action.ratingid));
        //     return newState;
        default:
            return state;
    }
}
