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
            newState[action.rating.id] = action.rating;
            return newState;
        case UPDATE_RATING:
            newState[action.rating.id] = action.rating;
            return newState;
        case DELETE_RATING:
            delete newState[action.ratingId];
            return newState;
        default:
            return state;
    }
}
