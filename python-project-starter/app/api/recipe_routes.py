from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Recipe, db
from sqlalchemy.sql import func
import json

recipe_routes = Blueprint('recipes', __name__)


@recipe_routes.route('/')
# @login_required
def all_recipes(userid):
    recipes = Recipe.query.filter(Recipe.user_id == userid).all()
    return {"recipes": [recipe.to_dict() for recipe in recipes]}


@recipe_routes.route('/<int:recipeid>')
# @login_required
def recipe(userid, recipeid):
    recipe = Recipe.query.get(recipeid)
    return recipe.to_dict()


@recipe_routes.route('/', methods=['POST'], strict_slashes=False)
# @login_required
def create_recipe(userid):
    req_data = json.loads(request.data)
    name = req_data["name"]
    picture_url = req_data["picture_url"]
    backstory = req_data["backstory"]
    new_recipe = Recipe(
        name=name,
        picture_url=picture_url,
        backstory=backstory,
        user_id=userid,
    )
    db.session.add(new_recipe)
    db.session.commit()
    return new_recipe.to_dict()


@recipe_routes.route('/<int:recipeid>', methods=['PUT'], strict_slashes=False)
# @login_required
def edit_recipe(userid, recipeid):
    req_data = json.loads(request.data)
    name = req_data["name"]
    picture_url = req_data["picture_url"]
    backstory = req_data["backstory"]
    recipe = Recipe.query.filter(Recipe.id == recipeid).first()
    recipe.name=name,
    recipe.picture_url=picture_url,
    recipe.backstory=backstory,
    recipe.user_id=userid,
    recipe.updated_at = func.now()
    db.session.commit()
    return recipe.to_dict()


@recipe_routes.route('/<int:recipeid>', methods=['DELETE'], strict_slashes=False)
# @login_required
def delete_recipe(userid, recipeid):
    recipe = Recipe.query.filter(Recipe.id == recipeid).first()
    db.session.delete(recipe)
    db.session.commit()
    return {
        "id": recipeid,
    }
