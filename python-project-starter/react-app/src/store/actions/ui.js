export const SET_CURRENT_RECIPE = 'SET_CURRENT_RECIPE';

export const setCurrentRecipe = recipeid => ({
    type: SET_CURRENT_RECIPE,
    recipeid
});
