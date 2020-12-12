import {
    SET_DIRECTIONS,
    CREATE_DIRECTION,
    UPDATE_DIRECTION,
    DELETE_DIRECTION,
} from '../actions/directions';

let initialState = {
    dict: {},
    ids: [],
};

export default function reducer(state = initialState, action) {
    let newState = {
        ...state
    };

    switch (action.type) {
        case SET_DIRECTIONS:
            return action.directions;
        case CREATE_DIRECTION:
            newState.dict[action.direction.id] = action.direction;
            newState.ids.unshift(action.direction.id);
            return newState;
        case UPDATE_DIRECTION:
            newState.dict[action.direction.id] = action.direction;
            return newState;
        case DELETE_DIRECTION:
            delete newState.dict[action.directionId];
            newState.ids = newState.ids.filter(id => id !== Number(action.directionId));
            return newState;
        default:
            return state;
    }
}
