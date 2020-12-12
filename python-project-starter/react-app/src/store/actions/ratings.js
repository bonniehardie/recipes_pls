import { addRatingToRecipe, deleteRatingFromRecipe } from './recipes';

export const SET_RATINGS = 'ratings/SET_RATINGS';
export const CREATE_RATING = 'ratings/CREATE_RATING';
export const UPDATE_RATING = 'ratings/UPDATE_RATING';
export const DELETE_RATING = 'ratings/DELETE_RATING';

export const setRatings = (ratings) => ({ type: SET_RATINGS, ratings });
export const createRatingAction = (rating) => ({ type: CREATE_RATING, rating });
export const updateRatingAction = (rating) => ({ type: UPDATE_RATING, rating });
export const deleteRatingAction = (ratingId) => ({ type: DELETE_RATING, ratingId });

export const createRating = (userId, recipeId, tasty, easy) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/recipes/${recipeId}/ratings/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tasty, easy })

    });

    if (response.ok) {
        const rating = await response.json();
        dispatch(createRatingAction(rating));
        dispatch(addRatingToRecipe(rating.recipe_id, rating.id));
        return rating;
    }
};

export const updateRating = (userId, recipeId, ratingId, tasty, easy) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/recipes/${recipeId}/ratings/${ratingId}/`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ tasty, easy })
    });

    if (response.ok) {
        const rating = await response.json();
        dispatch(updateRatingAction(rating));
    }
};

export const deleteRating = (userId, recipeId, ratingId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/recipes/${recipeId}/ratings/${ratingId}/`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const deletedRating = await response.json();
        dispatch(deleteRatingAction(deletedRating.id));
        dispatch(deleteRatingFromRecipe(recipeId, ratingId));
    }
};
