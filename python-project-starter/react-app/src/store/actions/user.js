import { authenticate, login, logout, signUp } from "../../services/auth";
import { setDirections } from './directions';
import { setIngredients } from './ingredients';
import { setRatings } from './ratings';
import { setRecipes } from './recipes';
import { setTools } from './tools';

export const USER_KEY = "authentication/USER";
export const SET_USER = 'authentication/SET_USER';
export const REMOVE_USER = 'authentication/REMOVE_USER';

export const removeUser = () => ({ type: REMOVE_USER });
export const setUser = (user) => ({ type: SET_USER, user });

export const authenticateThunk = () => async (dispatch) => {
    const data = await authenticate();
    // if (!data) return null;
    if (!data.errors) {
        const { user, directions, ingredients, ratings, recipes, tools } = data;
        dispatch(setUser(user));
        dispatch(setRecipes(recipes));
        dispatch(setDirections(directions));
        dispatch(setIngredients(ingredients));
        dispatch(setRatings(ratings));
        dispatch(setTools(tools));
    } else {
        return
    }
};

export const loginThunk = (email, password) => async (dispatch) => {
    const data = await login(email, password);
    // if (!data) return null;
    if (!data.errors) {
        const { user, directions, ingredients, ratings, recipes, tools } = data;
        dispatch(setUser(user));
        dispatch(setRecipes(recipes));
        dispatch(setDirections(directions));
        dispatch(setIngredients(ingredients));
        dispatch(setRatings(ratings));
        dispatch(setTools(tools));
    }
};

export const logoutThunk = () => async (dispatch) => {
    await logout();
    dispatch(removeUser());
};

export const signupThunk = (username, email, password) => async (dispatch) => {
    const data = await signUp(username, email, password);
    if (!data.errors) {
        const { user, directions, ingredients, ratings, recipes, tools } = data;
        dispatch(setUser(user));
        dispatch(setRecipes(recipes));
        dispatch(setDirections(directions));
        dispatch(setIngredients(ingredients));
        dispatch(setRatings(ratings));
        dispatch(setTools(tools));
    }
}
