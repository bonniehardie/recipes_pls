import { addDirectionToRecipe, deleteDirectionFromRecipe } from './recipes';

export const SET_DIRECTIONS = 'directions/SET_DIRECTIONS';
export const CREATE_DIRECTION = 'directions/CREATE_DIRECTION';
export const UPDATE_DIRECTION = 'directions/UPDATE_DIRECTION';
export const DELETE_DIRECTION = 'directions/DELETE_DIRECTION';

export const setDirections = (directions) => ({ type: SET_DIRECTIONS, directions });
export const createDirectionAction = (direction) => ({ type: CREATE_DIRECTION, direction });
export const updateDirectionAction = (direction) => ({ type: UPDATE_DIRECTION, direction });
export const deleteDirectionAction = (directionId) => ({ type: DELETE_DIRECTION, directionId });

export const createDirection = (userId, recipeId, name, step_number) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/recipes/${recipeId}/directions/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, step_number })

    });

    if (response.ok) {
        const direction = await response.json();
        dispatch(createDirectionAction(direction));
        dispatch(addDirectionToRecipe(direction.recipe_id, direction.id));
        return direction;
    }
};

export const updateDirection = (userId, recipeId, directionId, name, step_number) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/recipes/${recipeId}/directions/${directionId}/`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, step_number })
    });

    if (response.ok) {
        const direction = await response.json();
        dispatch(updateDirectionAction(direction));
    }
};

export const deleteDirection = (userId, recipeId, directionId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/recipes/${recipeId}/directions/${directionId}/`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const deletedDirection = await response.json();
        dispatch(deleteDirectionAction(deletedDirection.id));
        dispatch(deleteDirectionFromRecipe(recipeId, directionId));
    }
};
