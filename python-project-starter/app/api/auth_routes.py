from flask import Blueprint, jsonify, session, request
from app.models import db, Direction, Ingredient, Rating, Recipe, Tool, User
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from sqlalchemy.orm import joinedload

auth_routes = Blueprint('auth', __name__)


def get_user_data(user):

    recipes = Recipe.query.filter(Recipe.user_id == user['id'].options(
        joinedload(Recipe.ingredients).all()
    ))
    recipes_data = [recipe.to_dict() for recipe in recipes]
    recipes_data = {
        "dict": {recipes.id: recipes.to_dict() for recipe in recipes},
        "ids": [recipes.id for recipe in recipes]
    }

    ingredients = []
    for recipe in recipes:
        ingredients.extend(recipe.ingredients)
    ingredients_data = {
        "dict": {ingredient.id: ingredient.to_dict() for ingredient in ingredients},
        "ids": [ingredient.id for ingredient in ingredients],
    }
    return {
        "user": user,
        "ingredients": ingredients_data,
        "recipes": recipes_data
    }

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        print(f'user id: {current_user}')
        data = get_user_data(current_user.to_dict())
        return data

    return {'errors': ['Unauthorized']}, 401


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # print('+++++++++++++++++++', request.get_json(), '+++++++++++++++++++')
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        print('***********************', user.to_dict())
        # login_user(user.to_dict())
        login_user(user)
        data = get_user_data(user.to_dict())
        # print('*************', data)
        return data
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password']
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        data = get_user_data(user.to_dict())
        return data
    return {'errors': validation_errors_to_error_messages(form.errors)}


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
