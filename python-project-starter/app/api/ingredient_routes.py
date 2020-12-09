from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Ingredient, db
from sqlalchemy.sql import func
import json

ingredient_routes = Blueprint('ingredients', __name__)


@ingredient_routes.route('/')
@login_required
def all_ingredients(userid, recipeid):
    ingredients = Ingredient.query.filter(Ingredient.recipe_id == recipeid).all()
    return {"ingredients": [ingredient.to_dict() for ingredient in ingredients]}


@ingredient_routes.route('/', methods=['POST'], strict_slashes=False)
@login_required
def create_ingredient(userid, recipeid):
    req_data = json.loads(request.data)
    name = req_data['name']
    quantity = req_data['quantity']
    unit = req_data['unit']
    new_ingredient = Ingredient(
        name=name,
        quantity=quantity,
        unit=unit,
        recipe_id=recipeid
    )
    db.session.add(new_ingredient)
    db.session.commit()
    return new_ingredient.to_dict()


@ingredient_routes.route('/<int:ingredientid>', methods=['PUT'], strict_slashes=False)
@login_required
def edit_ingredient(userid, recipeid, ingredientid):
    req_data = json.loads(request.data)
    name = req_data['name']
    quantity = req_data['quantity']
    unit = req_data['unit']
    ingredient = Ingredient.query.filter(Ingredient.id == ingredientid).first()
    ingredient.name = name
    ingredient.quantity = quantity
    ingredient.unit = unit
    ingredient.updated_at = func.now()
    db.session.commit()
    return ingredient.to_dict()


@ingredient_routes.route('/<int:ingredientid>', methods=['DELETE'], strict_slashes=False)
@login_required
def delete_ingredient(userid, recipeid, ingredientid):
    ingredient = Ingredient.query.filter(Ingredient.id == ingredientid).first()
    db.session.delete(ingredient)
    db.session.commit()
    return { 'id': ingredientid }
