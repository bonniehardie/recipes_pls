import { SET_CURRENT_RECIPE } from '../actions/ui';

let initialState = { current_recipe: null }

export default function reducer(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case SET_CURRENT_RECIPE:
            newState.current_notebook = action.notebookid;
            return newState;
        default:
            return state;
    }
}
