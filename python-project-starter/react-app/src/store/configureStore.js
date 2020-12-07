import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from "redux-thunk";
import user from './reducers/user';
import tools from './reducers/tools';
import recipes from './reducers/recipes';
import ratings from './reducers/ratings';
import ingredients from './reducers/ingredients';
import directions from './reducers/directions';
import ui from './reducers/ui';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    directions,
    ingredients,
    ratings,
    recipes,
    tools,
    ui,
    user
});

const configureStore = (initialState) => {
    return createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
