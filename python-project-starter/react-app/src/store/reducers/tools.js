import {
    SET_TOOLS,
    CREATE_TOOL,
    UPDATE_TOOL,
    DELETE_TOOL,
} from '../actions/tools';

let initialState = {

};

export default function reducer(state = initialState, action) {
    let newState = {
        ...state
    };

    switch (action.type) {
        case SET_TOOLS:
            return action.tools;
        case CREATE_TOOL:
            newState[action.tool.id] = action.tool;
            return newState;
        case UPDATE_TOOL:
            newState[action.tool.id] = action.tool;
            return newState;
        case DELETE_TOOL:
            delete newState[action.toolId];
            return newState;
        default:
            return state;
    }
}
