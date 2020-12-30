
export const SET_CURRENT_RECIPE = 'SET_CURRENT_RECIPE';
export const SET_LOADED = 'SET_LOADED';

export const setCurrentRecipe = recipeid => ({
    type: SET_CURRENT_RECIPE,
    recipeid
});

export const setLoaded = () => ({
    type: SET_LOADED
});
