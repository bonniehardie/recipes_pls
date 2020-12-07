export const SET_RECIPES = 'recipes/SET_RECIPES';
export const CREATE_RECIPE = 'recipes/CREATE_RECIPES';
export const EDIT_RECIPE = 'recipes/EDIT_RECIPES';
export const DELETE_RECIPE = 'recipes/DELETE_RECIPES';
export const ADD_DIRECTION_TO_RECIPE = 'recipes/ADD_DIRECTION_TO_RECIPE';
export const DELETE_DIRECTION_FROM_RECIPE = 'recipes/DELETE_DIRECTION_FROM_RECIPE';
export const ADD_INGREDIENT_TO_RECIPE = 'recipes/ADD_INGREDIENT_TO_RECIPE';
export const DELETE_INGREDIENT_FROM_RECIPE = 'recipes/DELETE_INGREDIENT_FROM_RECIPE';
export const ADD_TOOL_TO_RECIPE = 'recipes/ADD_TOOL_TO_RECIPE';
export const DELETE_TOOL_FROM_RECIPE = 'recipes/DELETE_TOOL_FROM_RECIPE';
export const ADD_RATING_TO_RECIPE = 'recipes/ADD_RATING_TO_RECIPE';
export const DELETE_RATING_FROM_RECIPE = 'recipes/DELETE_RATING_FROM_RECIPE';


export const setRecipes = (recipes) => ({
    type: SET_RECIPES,
    recipes
});
export const createRecipe = (recipe) => ({
    type: CREATE_RECIPE,
    recipe
});
export const editRecipe = (recipe) => ({
    type: EDIT_RECIPE,
    recipe
});
export const deleteRecipe = (recipeid) => ({
    type: DELETE_RECIPE,
    recipeid
});
export const addDirectionToRecipe = (recipeid, directionid) => ({
    type: ADD_DIRECTION_TO_RECIPE,
    recipeid,
    directionid
});
export const deleteDirectionFromRecipe = (recipeid, directionid) => ({
    type: ADD_DIRECTION_TO_RECIPE,
    recipeid,
    directionid
});
export const addIngredientToRecipe = (recipeid, ingredientid) => ({
    type: ADD_DIRECTION_TO_RECIPE,
    recipeid,
    ingredientid
});
export const deleteIngredientFromRecipe = (recipeid, ingredientid) => ({
    type: ADD_DIRECTION_TO_RECIPE,
    recipeid,
    ingredientid
});
export const addToolToRecipe = (recipeid, toolid) => ({
    type: ADD_DIRECTION_TO_RECIPE,
    recipeid,
    toolid
});
export const deleteToolFromRecipe = (recipeid, toolid) => ({
    type: ADD_DIRECTION_TO_RECIPE,
    recipeid,
    toolid
});
export const addRatingToRecipe = (recipeid, ratingid) => ({
    type: ADD_DIRECTION_TO_RECIPE,
    recipeid,
    ratingid
});
export const deleteRatingFromRecipe = (recipeid, ratingid) => ({
    type: ADD_DIRECTION_TO_RECIPE,
    recipeid,
    ratingid
});


export const createRecipe = (userid, name, picture_url, backstory) => async (dispatch) => {
    let newRecipe = await fetch(`/api/users/${userid}/recipes/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            picture_url,
            backstory
        })
    });
    if (newRecipe.ok) {
        newRecipe = await newRecipe.json();
        dispatch(createRecipe(newRecipe));
    }
};

export const editRecipe = (userid, name, picture_url, backstory) => async (dispatch) => {
    let edited = await fetch(`api/users/${userid}/recipes/${recipeid}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            picture_url,
            backstory
        })
    });
    if (edited.ok) {
        edited = await edited.json();
        dispatch(editRecipe(edited))
    }
};


export const deleteRecipe = (userid, recipeid) => async (dispatch) => {
    let deleted = await fetch(`api/users/${userid}/recipes/${recipeid}`, {
        method: 'DELETE'
    });
    if (deleted.ok) {
        deleted = await deleted.json();
        dispatch(deleteRecipe(deleted.id))
    }
};
