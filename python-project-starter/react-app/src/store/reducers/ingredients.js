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
            newState.dict[action.ingredient.id] = action.ingredient;
            newState.ids.unshift(action.ingredient.id);
            return newState;
        case UPDATE_INGREDIENT:
            newState.dict[action.ingredient.id] = action.ingredient;
            return newState;
        case DELETE_INGREDIENT:
            delete newState.dict[action.ingredientId];
            newState.ids = newState.ids.filter(id => id !== Number(action.ingredientId));
            return newState;
        default:
            return state;
    }
}
