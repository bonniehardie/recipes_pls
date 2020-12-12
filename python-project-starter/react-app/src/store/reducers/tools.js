import {
    SET_TOOLS,
    CREATE_TOOL,
    UPDATE_TOOL,
    DELETE_TOOL,
} from '../actions/tools';

let initialState = {
    dict: {},
    ids: [],
};

export default function reducer(state = initialState, action) {
    let newState = {
        ...state
    };

    switch (action.type) {
        case SET_TOOLS:
            return action.tools;
        case CREATE_TOOL:
            newState.dict[action.tool.id] = action.tool;
            newState.ids.unshift(action.tool.id);
            return newState;
        case UPDATE_TOOL:
            newState.dict[action.tool.id] = action.tool;
            return newState;
        case DELETE_TOOL:
            delete newState.dict[action.toolId];
            newState.ids = newState.ids.filter(id => id !== Number(action.toolId));
            return newState;
        default:
            return state;
    }
}
