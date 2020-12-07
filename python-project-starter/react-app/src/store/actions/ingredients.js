import { addIngredientToRecipe, deleteIngredientFromRecipe } from './recipes';

export const SET_INGREDIENTS = 'ingredients/SET_INGREDIENTS';
export const CREATE_INGREDIENT = 'ingredients/CREATE_INGREDIENT';
export const UPDATE_INGREDIENT = 'ingredients/UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'ingredients/DELETE_INGREDIENT';

export const setIngredients = (ingredients) => ({ type: SET_INGREDIENTS, ingredients });
export const createIngredientAction = (ingredient) => ({ type: CREATE_INGREDIENT, ingredient });
export const updateIngredientAction = (ingredient) => ({ type: UPDATE_INGREDIENT, ingredient });
export const deleteIngredientAction = (ingredientId) => ({ type: DELETE_INGREDIENT, ingredientId });

export const createIngredient = (userId, recipeId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/recipes/${recipeId}/ingredients/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, quantity, unit })

    });

    if (response.ok) {
        const ingredient = await response.json();
        dispatch(createIngredientAction(ingredient));
        dispatch(addIngredientToRecipe(ingredient.recipe_id, ingredient.id));
        return ingredient;
    }
};

export const updateIngredient = (userId, recipeId, ingredientId, name, quantity, unit) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/recipes/${recipeId}/ingredients/${ingredientId}/`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, quantity, unit })
    });

    if (response.ok) {
        const ingredient = await response.json();
        dispatch(updateIngredientAction(ingredient));
    }
};

export const deleteIngredient = (userId, recipeId, ingredientId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/recipes/${recipeId}/ingredients/${ingredientId}/`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const deletedIngredient = await response.json();
        dispatch(deleteIngredientAction(deletedIngredient.id));
        dispatch(deleteIngredientFromRecipe(recipeId, ingredientId));
    }
};
