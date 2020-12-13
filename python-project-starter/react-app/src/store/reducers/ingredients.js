import {
    SET_INGREDIENTS,
    CREATE_INGREDIENT,
    UPDATE_INGREDIENT,
    DELETE_INGREDIENT,
} from '../actions/ingredients';

let initialState = {

};

export default function reducer(state = initialState, action) {
    let newState = {
        ...state
    };

    switch (action.type) {
        case SET_INGREDIENTS:
            return action.ingredients;
        case CREATE_INGREDIENT:
            newState[action.ingredient.id] = action.ingredient;
            return newState;
        case UPDATE_INGREDIENT:
            newState[action.ingredient.id] = action.ingredient;
            return newState;
        case DELETE_INGREDIENT:
            delete newState[action.ingredientId];
            return newState;
        default:
            return state;
    }
}
