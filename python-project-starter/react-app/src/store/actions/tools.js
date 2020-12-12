import { addToolToRecipe, deleteToolFromRecipe } from './recipes';

export const SET_TOOLS = 'tools/SET_TOOLS';
export const CREATE_TOOL = 'tools/CREATE_TOOL';
export const UPDATE_TOOL = 'tools/UPDATE_TOOL';
export const DELETE_TOOL = 'tools/DELETE_TOOL';

export const setTools = (tools) => ({ type: SET_TOOLS, tools });
export const createToolAction = (tool) => ({ type: CREATE_TOOL, tool });
export const updateToolAction = (tool) => ({ type: UPDATE_TOOL, tool });
export const deleteToolAction = (toolId) => ({ type: DELETE_TOOL, toolId });

export const createTool = (userId, recipeId, name) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/recipes/${recipeId}/tools/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })

    });

    if (response.ok) {
        const tool = await response.json();
        dispatch(createToolAction(tool));
        dispatch(addToolToRecipe(tool.recipe_id, tool.id));
        return tool;
    }
};

export const updateTool = (userId, recipeId, toolId, name) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/recipes/${recipeId}/tools/${toolId}/`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name })
    });

    if (response.ok) {
        const tool = await response.json();
        dispatch(updateToolAction(tool));
    }
};

export const deleteTool = (userId, recipeId, toolId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/recipes/${recipeId}/tools/${toolId}/`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const deletedTool = await response.json();
        dispatch(deleteToolAction(deletedTool.id));
        dispatch(deleteToolFromRecipe(recipeId, toolId));
    }
};
