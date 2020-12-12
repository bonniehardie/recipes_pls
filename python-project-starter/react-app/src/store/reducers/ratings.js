import {
    SET_RATINGS,
    CREATE_RATING,
    UPDATE_RATING,
    DELETE_RATING,
} from '../actions/ratings';

let initialState = {
    
};

export default function reducer(state = initialState, action) {
    let newState = {
        ...state
    };

    switch (action.type) {
        case SET_RATINGS:
            return action.ratings;
        case CREATE_RATING:
            newState.dict[action.rating.id] = action.rating;
            newState.ids.unshift(action.rating.id);
            return newState;
        case UPDATE_RATING:
            newState.dict[action.rating.id] = action.rating;
            return newState;
        case DELETE_RATING:
            delete newState.dict[action.ratingId];
            newState.ids = newState.ids.filter(id => id !== Number(action.ratingId));
            return newState;
        default:
            return state;
    }
}
