from flask import Blueprint, jsonify, session, request
from app.models import db, Direction, Ingredient, Rating, Recipe, Tool, User
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from sqlalchemy.orm import joinedload

auth_routes = Blueprint('auth', __name__)


def get_user_data(user):
    recipes_query = Recipe.query.all()
    tools = {}
    ingredients = {}
    directions = {}
    ratings = {}
    recipes = {}
    for recipe in recipes_query:
        recipes[recipe.id] = recipe.less_to_dict()
        for tool in recipe.tools:
            tools[tool.id] = tool
        for ingredient in recipe.ingredients:
            ingredients[ingredient.id] = ingredient
        for direction in recipe.directions:
            directions[direction.id] = direction
        for rating in recipe.ratings:
            ratings[rating.id] = rating

    return {
        "user": user,
        "ingredients": ingredients,
        "recipes": recipes,
        "directions": directions,
        "tools": tools,
        "ratings": ratings
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

    return {'errors': ['Unauthorized']}


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
        print('*************', data)
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
