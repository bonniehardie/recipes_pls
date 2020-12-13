import {
    SET_DIRECTIONS,
    CREATE_DIRECTION,
    UPDATE_DIRECTION,
    DELETE_DIRECTION,
} from '../actions/directions';

let initialState = {

};

export default function reducer(state = initialState, action) {
    let newState = {
        ...state
    };

    switch (action.type) {
        case SET_DIRECTIONS:
            return action.directions;
        case CREATE_DIRECTION:
            newState[action.direction.id] = action.direction;
            return newState;
        case UPDATE_DIRECTION:
            newState[action.direction.id] = action.direction;
            return newState;
        case DELETE_DIRECTION:
            delete newState[action.directionId];
            return newState;
        default:
            return state;
    }
}
